import React, { useEffect } from 'react'
import Link from 'next/link'
import ScrollOnMountTop from '@/app/components/Common/ScrollOnMountTop'

type Props = { params: Promise<{ id: string }> }

export default function BlogWIP({ params }: Props) {
  // Unwrap params as per Next.js 15 behavior
  const { id } = React.use(params)
  const title = decodeURIComponent(id)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="mx-auto w-full max-w-4xl md:px-6 px-4 py-[4vw]">
      {/* Ensure we start from top on navigation */}
      <ScrollOnMountTop />

      <h1 className="font-karantina text-black md:text-[4vw] text-[9vw] leading-none mb-[1.5vw]">
        {title}
      </h1>
  {/* Featured image (reused from home teaser) */}
  <div className="w-full aspect-[16/9] bg-cover bg-center rounded-2xl mb-[2vw]" style={{ backgroundImage: `url('/works/blog1.jpg')` }} aria-hidden="true" />

  <h2 className="font-karantina text-black md:text-[2.4vw] text-[7.5vw] mt-[2vw] mb-[1vw]">Introduction</h2>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        Ever wonder how YouTube and other media platforms handle multiple video uploads? Before
        beginning this project, I could not fathom the concept of allowing multiple users to upload
        at a time and have no server errors. Since JavaScript is a single threaded programming
        language, it's hard to understand how it can achieve concurrency-like properties to allow for
        multiple simultaneous uploads.
      </p>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        In this post, we'll talk about the solution with a short YouTube-like architecture design for
        handling multiple uploads.
      </p>

  <h2 className="font-karantina text-black md:text-[2.4vw] text-[7.5vw] mt-[4vw] mb-[1vw]">Problem Statement</h2>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        We know that JavaScript is a single threaded language. A naive approach would be to create a
        single server with an API for the client to upload to, which the server then transcodes and
        saves into a database. But when two uploads come in at the same time, that server will make
        the second user wait until the first one finishes. If 10 users upload at the same time, the
        10th user will have to wait until all pending videos are handled. There is no scaling in this
        architectural design.
      </p>

  <h2 className="font-karantina text-black md:text-[2.4vw] text-[7.5vw] mt-[4vw] mb-[1vw]">The Solution</h2>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        The solution is broken down into two parts:
      </p>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[1.5vw]"><strong>Part 1:</strong> A simple server API that only handles the initial request to upload. It
        provides a signed URL so the upload happens directly from the client side.</p>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[3vw]"><strong>Part 2:</strong> A separate server (or "worker") solely made for pulling the uploaded video from
    the bucket, performing video <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer" className="underline">transcoding</a>, and storing the transcoded file back into a bucket.
      </p>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        This concept all makes sense when we introduce containerized workers (Docker) and a message
        queue (<a href="https://redis.io/docs/latest/rs/streams/" target="_blank" rel="noopener noreferrer" className="underline">Redis Streams</a>).
      </p>

  <h2 className="font-karantina text-black md:text-[2.4vw] text-[7.5vw] mt-[4vw] mb-[1vw]">The Deep Dive: Data Pipeline and Architecture for Concurrency</h2>

  <h3 className="font-karantina text-black md:text-[2.0vw] text-[6.8vw] mt-[3vw] mb-[1vw]">Step 1: The Secure Upload Handshake</h3>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        Firstly, we only allow authenticated users to upload, which includes a frontend configuration
        that I'll be skipping for now. The user makes a request to the API to get a <a href="https://docs.min.io/docs/how-to-generate-presigned-url.html" target="_blank" rel="noopener noreferrer" className="underline">signed URL</a> for a
        direct upload from the client into a bucket (a MinIO bucket in my case). This allows our
        server to stay lightweight, as the intense upload is handled directly between the client and
        the bucket.
      </p>

      {/* Example server route that returns a presigned PUT URL for client uploads */}
  <pre className="bg-black/90 rounded-md p-4 overflow-x-auto font-mono text-sm md:text-[0.95vw] text-[3.8vw] mb-[2vw] text-white/80">
  <code className="whitespace-pre">{`// router function to send signed url into frontend
router.post('/get-signed-url', async (req,res)=>{   
  const fileName = \`video-\${Date.now()}.webm\`;
  try{
      if(!fileName) throw new Error('filename not attached');
      const presigned_url = await minioClient.presignedPutObject(
            'firstbucket',
            fileName,
            600
        );
    return res.status(200).json({signedURL:presigned_url,uploadFileName:fileName});
  }catch(err){
        console.log('error during generating presigned url',err.message);
        res.status(500).json({error:"Server error "+ err.message});
    }
})`}</code></pre>

  <h3 className="font-karantina text-black md:text-[2.0vw] text-[6.8vw] mt-[3vw] mb-[1vw]">Step 2: The Notification</h3>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        Using the same API server that was used to send the <a href="https://docs.min.io/docs/how-to-generate-presigned-url.html" target="_blank" rel="noopener noreferrer" className="underline">signed URL</a>, the client then sends another
        request after a successful upload. This is conditionally sent from the client to the server
        with the name of the file in the request body. The server then pushes a message to a <a href="https://redis.io/docs/latest/rs/streams/" target="_blank" rel="noopener noreferrer" className="underline">Redis stream</a>
        for its consumers to pick up.
      </p>

        <pre className="bg-black/90 rounded-md p-4 overflow-x-auto font-mono text-sm md:text-[0.95vw] text-[3.8vw] mb-[2vw] text-white/80">
  <code className="whitespace-pre">{`     await client.xAdd('upload-stream', '*', {
        fileName,
        bucket:bucketName,
        status: 'pending',
      });`}</code></pre>

  <h3 className="font-karantina text-black md:text-[2.0vw] text-[6.8vw] mt-[3vw] mb-[1vw]">Step 3: The Workers — Heart of the Operation</h3>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        This worker server is containerized and keeps on listening for <a href="https://redis.io/docs/latest/rs/streams/" target="_blank" rel="noopener noreferrer" className="underline">Redis stream</a> messages. When the
        server receives a message, it includes the filename to fetch and some other metadata. The
        worker then loads the file from the bucket with that filename and begins <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer" className="underline">transcoding</a>. After
        <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer" className="underline">transcoding</a>, it stores the new video and a thumbnail into two different buckets.
      </p>

       <pre className="bg-black/90 rounded-md p-4 overflow-x-auto font-mono text-sm md:text-[0.95vw] text-[3.8vw] mb-[2vw] text-white/80">
  <code className="whitespace-pre">{`  
  //to listen for redis message 
  while(running){
        const uploads:any = await client.xReadGroup( 'upload-group',consumerName,{
          key:'upload-stream',id:'>',
        },
        {
          COUNT:4,BLOCK:5000,
        }
      );
      
      `}</code></pre>

  <h2 className="font-karantina text-black md:text-[2.4vw] text-[7.5vw] mt-[4vw] mb-[1vw]">Horizontal Scaling</h2>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        With the combination of Redis stream consumer groups and multiple instances of a worker, I can
        horizontally scale the service. If one user uploads, one worker can handle it. But if 100
        users upload, then I can increase the number of workers to 20 or more.
      </p>

  <p className="font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        Redis Streams helps in passing the stream messages to the different workers one by one. If 5
        users upload at a time and we have 5 workers, then each file message is sent to a different
        worker. If a 6th upload comes in, its message will wait in the stream until one of the
        workers finishes its current task and becomes available to process it.
      </p>

  <h2 className="font-karantina text-black md:text-[2.4vw] text-[7.5vw] mt-[4vw] mb-[1vw]">Conclusion and Key Learnings</h2>

  <p className="font-grotesk text-black/80 md:text-[1.05vw] text-[4.4vw] leading-relaxed mb-[2vw]">
        The full project for this article including the API that returns signed URLs, the worker
        code that consumes Redis Streams is available on GitHub:
        <a href="https://github.com/derikesh/youtube-skeleton-workers" target="_blank" rel="noopener noreferrer" className="underline"> derikesh/youtube-skeleton-workers</a>.
  </p>

  <ol className="list-decimal pl-6 font-grotesk text-black md:text-[1.2vw] text-[4.4vw] leading-relaxed mb-[3vw]">
        <li>How a lot of payload can be eliminated from the main server by using direct client to bucket uploads, saving server time and resources.</li>
        <li>The importance of decoupling a lightweight API from heavy tasks to allow for a smooth user experience.</li>
        <li>Using multiple workers with a message queue like Redis Streams (or any pub/sub service) allows us to handle intensive tasks separately from the main server, ensuring better task handling.</li>
        <li>How a child_process in Node.js can help with transcoding, allowing the main server process to work independently without being affected by a transcoding failure.</li>
      </ol>

  <p className="font-grotesk text-black/70 md:text-[1.05vw] text-[4.4vw] leading-relaxed mt-[2vw] mb-[6vw]">
        Note: The above architecture is best for learning and introducing the concept of multiple
        workers. It demonstrates the ground fundamentals of scaling software but is not a
        production grade design. It also has lots of edge cases that could be further handled, but
        for simply learning how the backend works, this is a good fit project.
      </p>

      <Link href="/" className="inline-flex items-center gap-2 font-grotesk text-black border-2 border-black rounded-full md:text-[1vw] text-[4vw] md:px-[1vw] px-[3vw] md:py-[0.4vw] py-[1.2vw] transition-colors hover:bg-black hover:text-white">
        ← Back to home
      </Link>
    </div>
  )
}
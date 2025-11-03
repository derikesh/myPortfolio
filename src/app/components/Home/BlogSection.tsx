import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="bg-white md:px-6 px-4 py-[8vw]">
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading - left aligned to match request */}
        <h2 className="font-karantina text-black md:text-[3vw] text-[10vw] text-left">
          Latest Blog
        </h2>

        {/* Optional intro text */}
        <p className="font-grotesk text-black/80 md:text-[1.2vw] text-[4.6vw] md:w-[60%] w-[95%] text-left leading-relaxed my-[2vw]">
          Thoughts, lessons and small notes from my builds. Here’s the latest write‑up.
        </p>

        {/* Blog teaser grid: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vw] md:gap-[2vw]">
          {[
            {
              title: "Multi workers concept",
              excerpt:
                "Cloning youtube backend architecture through redis , ffmpeg , firebase ...",
              image: "/works/blog1.jpg",
              href: "/blog/multi-workers-concept",
            },
          ].map((post, idx) => (
            <div
              key={idx}
              className="border-4 border-black rounded-2xl bg-white overflow-hidden h-full flex flex-col"
            >
              {/* Thumbnail stays on home, single page has no image as requested */}
              <div
                className="w-full aspect-[16/9] bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />

              <div className="p-[5vw] md:p-[1.5vw] flex flex-col grow">
                <h3 className="font-grotesk text-black md:text-[1.4vw] text-[6vw] font-semibold mb-[2vw] md:mb-[1vw]">
                  {post.title}
                </h3>
                <p className="font-grotesk text-black/70 md:text-[1.05vw] text-[4.2vw] leading-relaxed mb-[4vw] md:mb-[1.6vw]">
                  {post.excerpt}
                </p>
              
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 w-fit mt-auto font-grotesk text-black border-2 border-black rounded-full md:text-[1vw] text-[4vw] md:px-[1vw] px-[3vw] md:py-[0.4vw] py-[1.2vw] transition-colors hover:bg-black hover:text-white"
                >
                  Read article <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
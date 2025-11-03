import React from 'react'
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
    <div className="mx-auto w-full max-w-4xl md:px-6 px-4 py-[8vw]">
      {/* Ensure we start from top on navigation */}
      <ScrollOnMountTop />

      <h1 className="font-karantina text-black md:text-[3vw] text-[11vw] leading-none mb-[1.5vw]">
        {title}
      </h1>

      <div className="inline-flex items-center gap-2 border-2 border-black rounded-full md:text-[0.9vw] text-[3.8vw] md:px-[0.8vw] px-[3vw] md:py-[0.3vw] py-[1vw] mb-[4vw] text-black">
        <span className="w-2 h-2 rounded-full bg-yellow-400 border border-black" />
        Work in progress
      </div>

      <p className="font-grotesk text-black/80 md:text-[1.1vw] text-[4.4vw] leading-relaxed mb-[3vw]">
        This article is currently being written. Please check back soon for the full write‑up.
      </p>

      <p className="font-grotesk text-black/60 md:text-[1.05vw] text-[4.2vw] leading-relaxed mb-[6vw]">
        I’m polishing the content and visuals to make it a useful, concise read. Thanks for your patience!
      </p>

      <Link href="/" className="inline-flex items-center gap-2 font-grotesk text-black border-2 border-black rounded-full md:text-[1vw] text-[4vw] md:px-[1vw] px-[3vw] md:py-[0.4vw] py-[1.2vw] transition-colors hover:bg-black hover:text-white">
        ← Back to home
      </Link>
    </div>
  )
}
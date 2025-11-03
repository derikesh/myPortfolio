export default function Blog() {
  return (
    <div className="mx-auto w-full max-w-4xl md:px-6 px-4 py-[8vw]">
      {/* Title */}
      <h1 className="font-karantina text-black md:text-[3vw] text-[11vw] leading-none mb-[2.5vw]">
        Building Focused UIs: Small Patterns That Scale
      </h1>

      {/* Intro paragraph */}
      <p className="font-grotesk text-black/80 md:text-[1.2vw] text-[4.6vw] leading-relaxed mb-[5vw]">
        Great interfaces are usually a collection of tiny, consistent choices. In this demo article,
        I’m outlining a few patterns I reuse across projects—how spacing, hierarchy, and motion
        make complex UIs feel simple.
      </p>

      {/* H2 */}
      <h2 className="font-karantina text-black md:text-[2.2vw] text-[8vw] mt-[6vw] mb-[2vw]">
        1. Spacing with intent
      </h2>
      <p className="font-grotesk text-black/80 md:text-[1.1vw] text-[4.4vw] leading-relaxed mb-[3vw]">
        Use spacing to express relationships: tighter spacing within a component, looser spacing
        between groups. This improves scan-ability and reduces cognitive load.
      </p>
      <ul className="list-disc pl-6 font-grotesk text-black/80 md:text-[1.05vw] text-[4.2vw] leading-relaxed mb-[3vw]">
        <li>Group related controls together.</li>
        <li>Use consistent vertical rhythm across sections.</li>
        <li>Prefer fewer sizes that repeat over many unique ones.</li>
      </ul>

      {/* H3 */}
      <h3 className="font-karantina text-black md:text-[1.8vw] text-[7vw] mt-[4vw] mb-[1.5vw]">
        Micro decisions compound
      </h3>
      <p className="font-grotesk text-black/80 md:text-[1.05vw] text-[4.2vw] leading-relaxed mb-[3vw]">
        A consistent 8px-based scale or a few VW-based steps can keep things tidy while adapting
        fluidly to different screens—much like this site.
      </p>

      {/* Blockquote */}
      <blockquote className="border-l-4 border-black/20 pl-4 italic text-black/80 font-grotesk md:text-[1.05vw] text-[4.2vw] mb-[3.5vw]">
        “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs
      </blockquote>

      {/* H2 */}
      <h2 className="font-karantina text-black md:text-[2.2vw] text-[8vw] mt-[6vw] mb-[2vw]">
        2. Progressive disclosure
      </h2>
      <p className="font-grotesk text-black/80 md:text-[1.1vw] text-[4.4vw] leading-relaxed mb-[3vw]">
        Hide non-essential controls by default and reveal them when needed. This keeps the default
        experience approachable while preserving power for advanced use cases.
      </p>

      {/* Code block */}
      <pre className="bg-gray-900 text-white rounded-2xl p-4 overflow-x-auto mb-[3.5vw]"><code className="font-mono text-xs md:text-[0.9vw]">
        {`// Pseudocode for a simple disclosure pattern
const [open, setOpen] = useState(false)
return (
  <div>
    <button onClick={() => setOpen(v => !v)}>More options</button>
    {open && <AdvancedControls />}
  </div>
)`}
</code></pre>

      {/* H2 */}
      <h2 className="font-karantina text-black md:text-[2.2vw] text-[8vw] mt-[6vw] mb-[2vw]">
        3. Motion that supports
      </h2>
      <p className="font-grotesk text-black/80 md:text-[1.1vw] text-[4.4vw] leading-relaxed mb-[6vw]">
        Animation should serve comprehension: easing into new states, guiding focus, and confirming
        actions—not adding noise. Subtle is almost always better.
      </p>

      <hr className="border-black/10 my-[4vw]" />

      <p className="font-grotesk text-black/70 md:text-[1.05vw] text-[4.2vw] leading-relaxed">
        That’s it for this demo article. Swap this copy with your real content anytime. The layout is
        intentionally simple and left-aligned to match the rest of the site.
      </p>
    </div>
  );
}
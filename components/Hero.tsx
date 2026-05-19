import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex items-start pt-24 md:pt-32 px-6 md:px-16">
     <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight">
          Elariz Rajabov
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500">
          Frontend & Fullstack Developer
        </h2>

        <p className="text-white/50 text-base md:text-xl leading-relaxed pt-2">
          Fullstack Developer based in Baku.
          I build high-performance web and desktop applications with a focus on UI design, scalable architecture, and seamless maintenance.
        </p>

        <div className="pt-4 md:pt-6">
          <Link
            href="mailto:elarizreceb@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base transition-colors"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  )
}
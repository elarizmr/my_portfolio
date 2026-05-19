import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-16 max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8 md:mb-12 md:text-left text-center">About Me</h2>

      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">

        {/* Mətn */}
        <p className="text-white/60 text-base leading-relaxed text-center max-w-sm mx-auto md:text-left md:mx-0">
          Hi, I'm Elariz Rajabov, a passionate Frontend and Fullstack Developer based in Baku. I've been building modern web and desktop applications with a focus on clean UI and scalable architecture. I work primarily with Next.js, Node.js and MongoDB on the web side, and Electron.js for desktop applications. I enjoy turning ideas into real, functional products and I'm always looking to grow and take on new challenges.
        </p>

        {/* Şəkil */}
        <div className="rotate-3 flex-shrink-0">
          <div className="bg-white p-3 pb-10 shadow-2xl">
            <div className="relative w-48 h-60 md:w-52 md:h-64">
              <Image
                src="/images/projects/salam.png"
                alt="About"
                fill
                loading="eager"
                sizes="(max-width: 768px) 192px, 208px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
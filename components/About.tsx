export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-16 max-w-3xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8 md:mb-12 text-center">About Me</h2>

      <div className="flex flex-col items-center gap-6">
        <p className="text-white/60 text-base leading-relaxed text-center max-w-2xl">
          Hi, I'm Elariz Rajabov, a passionate Frontend and Fullstack Developer based in Baku. I've been building modern web and desktop applications with a focus on clean UI and scalable architecture. I work primarily with Next.js, Node.js and MongoDB on the web side, and Electron.js for desktop applications. I enjoy turning ideas into real, functional products and I'm always looking to grow and take on new challenges.
        </p>

        <a
          href="/cv.pdf"
          download="Elariz_Rajabov_CV.pdf"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>
    </section>
  )
}
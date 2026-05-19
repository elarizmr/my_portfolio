import Image from 'next/image'

const projects = [
  {
    title: 'Spotify Clone',
    desc: 'A music streaming app that emulates Spotifys core features, built with React and Node.js.',
    image: '/images/projects/spotify.png',
    source: 'https://github.com/elarizmr/spotify',
    preview: 'https://example.com',
  },
  {
    title: 'Game Store',
    desc: 'A full-stack gaming e-commerce platform built with Next.js, Node.js and MongoDB. Features product listings, shopping cart, and blog.',
    image: '/images/projects/photo.png',
    source: 'https://github.com/elarizmr/menim_saytim',
    preview: 'https://menim-saytim-n1cr.vercel.app',
  },
  {
    title: 'E-Commerce',
    desc: 'A full-stack e-commerce platform built with React, TypeScript and Strapi CMS. Features product listings, shopping cart, and order management.',
    image: '/images/projects/photo1.png',
    source: 'https://github.com/elarizmr/final_ecommerce',
    preview: 'https://final-front-5a95.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 px-6 md:px-16 max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8 md:mb-12">Featured Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="sticky top-24 bg-[#161b27] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8"
          >
            {/* Şəkil - mobilə üstdə */}
            <div className="relative w-full h-48 md:hidden rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>

            {/* Mətn */}
            <div className="flex flex-col gap-4 md:max-w-xs">
              <h3 className="text-blue-500 text-xl md:text-2xl font-bold">{project.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{project.desc}</p>
              <div className="flex gap-6 mt-2 md:mt-4">
                <a href={project.source} target="_blank" className="text-white text-sm hover:text-white/60 transition-colors">
                  Source
                </a>
                <a href={project.preview} target="_blank" className="text-white text-sm hover:text-white/60 transition-colors">
                  Preview
                </a>
              </div>
            </div>

            {/* Şəkil - desktopda sağda */}
            <div className="relative hidden md:block w-96 h-56 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="384px"
                className="object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
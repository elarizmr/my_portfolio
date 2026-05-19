const experiences = [
  {
    company: 'Spotify Music Platform',
    role: 'Fullstack & Cross-platform Developer',
    period: 'Personal Project / Portfolio',
    bullets: [
      'Engineered a full-scale music streaming platform using Next.js for the web interface and Electron.js for the desktop application (Windows/macOS).',
      'Developed a unified codebase that synchronizes real-time audio playback and user data across web and desktop environments.',
      'Built a scalable backend architecture with Node.js, Express, and MongoDB to handle music metadata, user authentication, and playlists.',
      'Implemented advanced UI features including a custom audio engine, dynamic search indexing, and responsive design for all screen sizes.',
    ],
  },
  {
    company: 'Game Store & E-commerce',
    role: 'Fullstack Developer',
    period: 'Personal Project',
    bullets: [
      'Developed a full-featured e-commerce platform for digital game distribution using the MERN stack (MongoDB, Express, React, Node.js).',
      'Implemented essential e-commerce functionalities, including a dynamic shopping cart, product filtering, and a secure checkout process.',
      'Designed a management dashboard for administrators to add, update, and track game inventory and user orders.',
      'Optimized database queries for fast product searching and categorization, improving overall site performance.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-32 px-6 md:px-16 max-w-4xl mx-auto scroll-mt-24">
    
      <div className="space-y-12 md:space-y-16">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-2">

            <h3 className="text-white text-lg md:text-2xl font-bold">{exp.company}</h3>
            <p className="text-blue-500 text-base md:text-xl font-semibold">{exp.role}</p>
            <p className="text-white/40 text-sm md:text-base">{exp.period}</p>

            <ul className="space-y-3 md:space-y-4 pt-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 md:gap-4 text-white/70 text-sm md:text-base leading-relaxed">
                  <span className="mt-0.5 text-white/30 text-lg leading-none">⊙</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  )
}
const socials = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/elariz-rajabov-4b47b5296/' },
  { name: 'Github', url: 'https://github.com/elarizmr' },
  { name: 'Facebook', url: 'https://www.facebook.com/elariz.recebov.1' },
  { name: 'Instagram', url: 'https://www.instagram.com/elarajabof/' },
]

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col items-center gap-6 border-t border-white/5 px-6">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {socials.map((social) => (
          <a key={social.name} href={social.url} target="_blank" className="text-white/60 hover:text-white transition-colors text-sm">
            {social.name}
          </a>
        ))}
      </div>
      <p className="text-white/60 text-sm text-center">
        Elariz Rajabov 2026. Designed and Developed by Elariz Rajabov
      </p>
    </footer>
  )
}
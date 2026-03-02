const links = [
  { href: '#about', label: 'About Me' },
  { href: '#connect', label: 'Connect' },
  {
    href: 'https://www.linkedin.com/in/sakshi-utpat/',
    label: 'LinkedIn',
    external: true
  }
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 max-w-full overflow-x-clip border-b border-ink/10 bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-y-2 px-4 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="shrink-0 text-base font-semibold tracking-tight text-ink sm:text-lg">
          Sakshi Utpat
        </a>
        <ul className="flex min-w-0 items-center gap-2 text-xs font-medium text-ink/80 sm:gap-5 sm:text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer noopener' : undefined}
                className="rounded-full px-2 py-1.5 transition hover:bg-ink/5 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:px-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

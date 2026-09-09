import { Logo } from './Icons'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <Logo className="brand-mark" />
        <span className="brand-text">
          <span className="wordmark">Elfanat</span>
          <span className="tagline">Ideas for a brighter everyday</span>
        </span>
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#people">People</a>
        <span aria-hidden="true">·</span>
        <a href="#ideas">Ideas</a>
        <span aria-hidden="true">·</span>
        <a href="#tomorrow">A brighter tomorrow</a>
      </nav>
    </header>
  )
}

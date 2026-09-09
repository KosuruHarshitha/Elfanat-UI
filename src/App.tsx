import guestSetGoPhones from './assets/guestsetgo-phones.png'
import leafShadow from './assets/leaf-shadow.png'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import {
  EnvelopeIcon,
  LeafIcon,
  LightbulbIcon,
  PeopleIcon,
} from './components/Icons'

const pillars = [
  {
    id: 'ideas',
    title: 'Ideas',
    text: 'We explore new possibilities',
    icon: LightbulbIcon,
  },
  {
    id: 'people',
    title: 'People',
    text: 'We build for real needs',
    icon: PeopleIcon,
  },
  {
    id: 'tomorrow',
    title: 'A Brighter Tomorrow',
    text: 'We create lasting value',
    icon: LeafIcon,
  },
]

function App() {
  return (
    <div className="page" id="top">
      <img className="leaf-shadow" src={leafShadow} alt="" />
      <Header />
      <main className="hero-grid">
        <section className="intro">
          <h1>Thoughtful products for everyday life.</h1>
          <p>
            Elfanat is a technology company that builds simple, beautiful and
            purposeful digital products to make everyday moments easier, more
            enjoyable and more meaningful.
          </p>
          <ul className="pillars">
            {pillars.map((pillar) => (
              <li id={pillar.id} key={pillar.id}>
                <pillar.icon />
                <h2>{pillar.title}</h2>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <article className="product-card" id="products">
          <div className="product-copy">
            <p className="product-label">Our Product</p>
            <div className="product-brand">
              <EnvelopeIcon />
              <div>
                <h2>GuestSetGo</h2>
                <p className="product-kicker">Invite · Manage · Celebrate</p>
              </div>
            </div>
            <h3>Event invitations, made effortless.</h3>
            <p>
              Create, send and manage invitations for any occasion — from
              birthdays to weddings, to get-togethers and more.
            </p>
            <a
              className="button"
              href="https://www.guestset-go.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore GuestSetGo
              <span aria-hidden="true"> →</span>
            </a>
          </div>
          <div className="product-visual">
            <img
              src={guestSetGoPhones}
              alt="GuestSetGo on two phones, showing an invitation and an events list"
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default App

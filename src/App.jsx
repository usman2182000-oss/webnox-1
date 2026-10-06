import { useEffect, useState } from "react";
import "./App.css";
import webnoxLogo from "./assets/webnox-logo.png";
import webnoxIcon from "./assets/webnox-icon.png";

const services = [
  ["01", "Web Engineering", "High-performance websites and web applications engineered for real business growth."],
  ["02", "SaaS Products", "From first prototype to production, we turn complex ideas into scalable SaaS products."],
  ["03", "Product Design", "Clear, conversion-focused UX and polished interfaces that make digital products feel effortless."],
  ["04", "AI & Automation", "Practical AI features and business automation that reduce repetitive work and unlock new possibilities."],
];

const projects = [
  { tag: "SaaS / 2026", title: "AquaFlow Systems", text: "A modern operating system for water companies to manage customers, sales, stock and profit.", metric: "42% faster operations" },
  { tag: "Food Tech / 2026", title: "YummGo", text: "A fast, mobile-first ordering experience connecting customers with local food businesses.", metric: "2.4× checkout conversion" },
  { tag: "Commerce / 2026", title: "PizzaMax", text: "A high-converting food ordering platform with real-time cart and checkout flows.", metric: "68% mobile traffic" },
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="WEBNOX home">
            <span className="brand-logo-wrap">
              <img src={webnoxIcon} alt="" className="brand-logo-icon" />
            </span>
            <span>WEBNOX<span className="brand-dot">.</span></span>
          </button>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            {["services", "work", "about", "process", "team"].map(x => (
              <button key={x} onClick={() => scrollTo(x)}>{x[0].toUpperCase() + x.slice(1)}</button>
            ))}
            <button className="nav-contact" onClick={() => scrollTo("contact")}>Start a project <Arrow /></button>
          </nav>

          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-orb orb-a" />
          <div className="hero-orb orb-b" />
          <div className="hero-content">
            <div className="eyebrow reveal"><span className="pulse" /> Independent digital product studio · Lahore / Remote</div>
            <h1 className="reveal delay-1">We build digital<br /><em>products</em> that matter.</h1>
            <p className="hero-copy reveal delay-2">
              Webnox partners with ambitious teams to design, engineer and launch software people actually want to use.
            </p>
            <div className="hero-actions reveal delay-3">
              <button className="btn btn-primary" onClick={() => scrollTo("contact")}>Start a project <Arrow /></button>
              <button className="text-btn" onClick={() => scrollTo("work")}>Explore our work <span>↓</span></button>
            </div>
          </div>
          <div className="hero-bottom reveal delay-3">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
            <span>01 — 07</span>
          </div>
        </section>

        <section className="ticker">
          <div className="ticker-track">
            {["Web Apps", "SaaS", "AI & Automation", "Product Design", "Mobile", "Cloud", "Web Apps", "SaaS"].map((x, i) =>
              <span key={i}>{x} <b>✦</b></span>
            )}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-head reveal">
            <span className="section-kicker">01 / Capabilities</span>
            <h2>Small team.<br /><span>Serious output.</span></h2>
            <p>Strategy, design and engineering under one roof. No handoffs between five different vendors.</p>
          </div>
          <div className="service-list">
            {services.map(([num, title, text]) => (
              <article className="service-card reveal" key={num}>
                <span className="service-num">{num}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-head work-head reveal">
            <span className="section-kicker">02 / Selected work</span>
            <h2>Built for the<br /><span>real world.</span></h2>
            <div className="filters">
              {["All", "SaaS", "Commerce"].map(x => <button className={active === x ? "active" : ""} onClick={() => setActive(x)} key={x}>{x}</button>)}
            </div>
          </div>
          <div className="projects">
            {projects.filter(p => active === "All" || p.tag.startsWith(active)).map((p, i) => (
              <article className={`project project-${i + 1} reveal`} key={p.title}>
                <div className="project-visual">
                  <div className="mock-window">
                    <div className="mock-top"><i/><i/><i/><span>{p.title.toLowerCase().replaceAll(" ", "")}.com</span></div>
                    <div className="mock-content">
                      <div className="mock-sidebar" />
                      <div className="mock-main"><b>{i === 0 ? "Business overview" : i === 1 ? "Good food. Delivered." : "Build your perfect order."}</b><div className="mock-bars"><i/><i/><i/></div></div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.text}</p></div>
                  <div className="project-meta"><span>{p.metric}</span><Arrow /></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="marquee-statement reveal">
          <p>Good software is invisible.</p>
          <strong>Great software <em>feels inevitable.</em></strong>
        </section>

        <section className="section about" id="about">
          <div className="about-number">03</div>
          <div className="about-copy reveal">
            <span className="section-kicker">03 / About Webnox</span>
            <h2>We don't just ship screens.<br /><span>We solve problems.</span></h2>
            <p>We're a focused software studio for founders and growing companies that need a senior team without the agency bloat.</p>
            <p>Our work sits at the intersection of business strategy, thoughtful design and robust engineering. Every decision has a reason.</p>
            <button className="line-btn" onClick={() => scrollTo("contact")}>Tell us what you're building <Arrow /></button>
          </div>
          <div className="stats reveal">
            <div><b>24+</b><span>Products shipped</span></div>
            <div><b>8</b><span>Industries served</span></div>
            <div><b>4.9/5</b><span>Average client rating</span></div>
            <div><b>100%</b><span>Remote-ready team</span></div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-head reveal">
            <span className="section-kicker">04 / How we work</span>
            <h2>From messy idea<br /><span>to clear product.</span></h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Discover", "We understand your users, business model and the problem worth solving."],
              ["02", "Define", "We turn uncertainty into a focused roadmap, architecture and product direction."],
              ["03", "Build", "Design and engineering move together in short, transparent iterations."],
              ["04", "Launch", "We ship, measure and improve — because launch day is only the beginning."]
            ].map(([n,t,d]) => <div className="process-item reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="section team" id="team">
          <div className="section-head reveal">
            <span className="section-kicker">05 / The team</span>
            <h2>People behind<br /><span>the product.</span></h2>
            <p>A focused team combining business thinking, design and engineering to build digital products that last.</p>
          </div>

          <div className="team-grid">
            <article className="team-card reveal">
              <div className="team-avatar"><span>UI</span></div>
              <div className="team-info">
                <div>
                  <small>Full Stack Developer</small>
                  <h3>Usman Irfan</h3>
                </div>
                <a href="https://www.linkedin.com/in/usman-irfan-b72162437/" target="_blank" rel="noreferrer" className="linkedin-btn">
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </article>

            <article className="team-card reveal">
              <div className="team-avatar"><span>AS</span></div>
              <div className="team-info">
                <div>
                  <small>Co-Founder</small>
                  <h3>Asad Sulehri</h3>
                </div>
                <a href="https://www.linkedin.com/in/asad-sulehri-207462202/" target="_blank" rel="noreferrer" className="linkedin-btn">
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </article>

            <article className="team-card reveal">
              <div className="team-avatar"><span>FA</span></div>
              <div className="team-info">
                <div>
                  <small>CTO</small>
                  <h3>Fahad Aziz</h3>
                </div>
                <a href="https://www.linkedin.com/in/fahad-aziz-1212132b5/" target="_blank" rel="noreferrer" className="linkedin-btn">
                  LinkedIn <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="quote-section reveal">
          <div className="quote-mark">“</div>
          <blockquote>They took a complicated business idea and turned it into a product our customers understood immediately.</blockquote>
          <div className="quote-person"><span className="avatar">AR</span><div><b>Ali Raza</b><small>Founder, Flowbase</small></div></div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow" />
          <div className="contact-inner reveal">
            <span className="section-kicker">06 / Start something</span>
            <h2>Have a product<br />in <em>mind?</em></h2>
            <p>Tell us what you're building. We'll get back to you within 1–2 business days.</p>
            <a className="contact-email" href="mailto:support.webnox@gmail.com">support.webnox@gmail.com <Arrow /></a>
            <div className="contact-links">
              <a href="https://www.instagram.com/webnox.in/" target="_blank" rel="noreferrer" aria-label="WEBNOX Instagram">
                Instagram <span>@webnox.in ↗</span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="WEBNOX LinkedIn">
                LinkedIn <span>↗</span>
              </a>
              <span>GitHub</span>
              <span>WhatsApp</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <button className="brand footer-logo-button" onClick={() => scrollTo("home")} aria-label="WEBNOX home">
            <img src={webnoxLogo} alt="WEBNOX" className="footer-logo" />
          </button>
          <p>Digital products for ambitious businesses.</p>
        </div>
        <div className="footer-right">
          <a className="footer-instagram" href="https://www.instagram.com/webnox.in/" target="_blank" rel="noreferrer">
            Instagram @webnox.in ↗
          </a>
          <span>© 2026 Webnox Studio</span>
          <button onClick={() => scrollTo("home")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}

export default App;

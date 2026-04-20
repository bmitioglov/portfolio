// Skills, Certifications, Contact
function Skills() {
  const { skills } = window.PORTFOLIO;
  const cats = Object.entries(skills);
  return (
    <Section id="skills" label="stack" index="05" title="Skills">
      <div className="skills-grid">
        {cats.map(([cat, items]) => (
          <div key={cat} className="skill-cat">
            <div className="skill-cat-head mono xs dim">/ {cat.toLowerCase()}</div>
            <div className="skill-items">
              {items.map(s => <span key={s} className="chip mono sm">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certs() {
  const { certifications, education } = window.PORTFOLIO;
  return (
    <Section id="certs" label="credentials" index="06" title="Credentials">
      <div className="credentials-grid">
        <div>
          <div className="cred-head mono xs dim">/ certifications</div>
          <ul className="cred-list">
            {certifications.map((c, i) => {
              const inner = (
                <>
                  <div className="cred-name">{c.name}{c.url && <span className="cred-verify mono xs accent"> ↗</span>}</div>
                  <div className="cred-issuer mono xs dim">{c.issuer}{c.url && <span className="dim"> · verify</span>}</div>
                </>
              );
              return (
                <li key={i} className="cred-item">
                  {c.url
                    ? <a href={c.url} target="_blank" rel="noreferrer" className="cred-link">{inner}</a>
                    : inner}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="cred-head mono xs dim">/ education</div>
          <ul className="cred-list">
            {education.map((e, i) => (
              <li key={i} className="cred-item">
                <div className="cred-name">{e.degree}</div>
                <div className="cred-issuer mono xs dim">{e.school} · {e.period}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const { email, phone, github, linkedin, location } = window.PORTFOLIO;
  const [copied, setCopied] = React.useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="contact" className="sec contact-sec" data-screen-label="Contact">
      <div className="sec-head">
        <div className="sec-head-l mono xs dim">
          <span className="sec-idx">07</span>
          <span className="sec-slash">/</span>
          <span className="sec-label">contact</span>
        </div>
        <div className="sec-head-rule" />
        <div className="sec-head-aside mono xs accent"><span className="sb-pulse" /> open for staff roles</div>
      </div>

      <h2 className="contact-title">
        Let's build something <em>that stays up</em>.
      </h2>

      <p className="prose muted">
        Currently open to staff-level platform, infrastructure, or applied-AI roles. Remote or San Diego / hybrid. I'm also always happy to talk shop about Kafka exactly-once semantics, LangGraph patterns, or whether founder-mode is a meme.
      </p>

      <div className="contact-grid">
        <button className="contact-card" onClick={copyEmail}>
          <div className="cc-label mono xs dim">/ email</div>
          <div className="cc-value">{email}</div>
          <div className="cc-action mono xs accent">{copied ? "✓ copied" : "click to copy"}</div>
        </button>
        <a className="contact-card" href={`https://${github}`} target="_blank" rel="noreferrer">
          <div className="cc-label mono xs dim">/ github</div>
          <div className="cc-value">{github}</div>
          <div className="cc-action mono xs accent">open ↗</div>
        </a>
        <a className="contact-card" href={`https://${linkedin}`} target="_blank" rel="noreferrer">
          <div className="cc-label mono xs dim">/ linkedin</div>
          <div className="cc-value">{linkedin}</div>
          <div className="cc-action mono xs accent">open ↗</div>
        </a>
        <div className="contact-card static">
          <div className="cc-label mono xs dim">/ location</div>
          <div className="cc-value">{location}</div>
          <div className="cc-action mono xs dim">PT · {phone}</div>
        </div>
      </div>

      <footer className="foot mono xs dim">
        <div>© {new Date().getFullYear()} Boris Mitioglov</div>
        <div>San Diego · Pacific Time</div>
      </footer>
    </section>
  );
}

window.Skills = Skills;
window.Certs = Certs;
window.Contact = Contact;

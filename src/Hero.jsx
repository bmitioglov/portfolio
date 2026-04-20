// Hero section with type-on effect and variant support
function Hero({ variant }) {
  const { name, role, focus, bio, now, yearsExp } = window.PORTFOLIO;
  const [typedCmd, setTypedCmd] = React.useState("");
  const full = "whoami --verbose";

  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedCmd(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  if (variant === "terminal") {
    return (
      <section id="hero" className="hero hero-terminal" data-screen-label="Hero">
        <div className="term-window">
          <div className="term-head mono xs">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="term-title dim">boris@sandiego:~</span>
          </div>
          <div className="term-body mono">
            <div className="term-line"><span className="prompt">$</span> {typedCmd}<span className="caret">▊</span></div>
            <div className="term-out mt-2">
              <div><span className="k">name</span><span className="eq">=</span><span className="v">"{name}"</span></div>
              <div><span className="k">role</span><span className="eq">=</span><span className="v">"{role}"</span></div>
              <div><span className="k">focus</span><span className="eq">=</span><span className="v">"{focus}"</span></div>
              <div><span className="k">exp</span><span className="eq">=</span><span className="v accent">{yearsExp}+ years</span></div>
              <div><span className="k">status</span><span className="eq">=</span><span className="v accent">available</span></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default "editorial" hero
  return (
    <section id="hero" className="hero hero-editorial" data-screen-label="Hero">
      <div className="hero-meta mono xs dim">
        <span className="eyebrow">/ portfolio · 2026</span>
        <span className="hero-meta-right">
          <span className="sb-pulse" /> <span>currently · open to staff-level roles</span>
        </span>
      </div>

      <h1 className="hero-title">
        <span className="line">Building platforms that</span>
        <span className="line"><em>don't drop messages</em>,</span>
        <span className="line">agents that <em>don't hallucinate</em>,</span>
        <span className="line">and products that <em>ship</em>.</span>
      </h1>

      <div className="hero-sub">
        <p className="mono sm muted">
          <span className="accent">&gt;</span> {yearsExp}+ years designing distributed systems · currently leading AI + platform work at Verizon · founder of <a href="https://pumpx.app" target="_blank" rel="noreferrer" className="inline-link">PumpX</a>.
        </p>
      </div>

      <div className="hero-now">
        <div className="mono xs dim uppercase tracked">/ now</div>
        <ul className="now-list mono sm">
          {now.map((n, i) => (
            <li key={i}><span className="now-marker">└─</span> {n}</li>
          ))}
        </ul>
      </div>

      <div className="hero-scroll mono xs dim">
        <span>scroll</span> <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}

function About() {
  const { bio } = window.PORTFOLIO;
  return (
    <Section id="about" label="about" index="01" title="About">
      <div className="prose">
        {bio.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="about-grid mono sm mt-4">
        <div className="about-cell">
          <div className="dim xs mono">based</div>
          <div>San Diego, CA</div>
        </div>
        <div className="about-cell">
          <div className="dim xs mono">origin</div>
          <div>Saint Petersburg</div>
        </div>
        <div className="about-cell">
          <div className="dim xs mono">specialty</div>
          <div>platforms @ scale + AI</div>
        </div>
        <div className="about-cell">
          <div className="dim xs mono">looking for</div>
          <div>staff-level · platform / AI</div>
        </div>
      </div>
    </Section>
  );
}

function Section({ id, label, index, title, aside, children }) {
  return (
    <section id={id} className="sec" data-screen-label={title}>
      <div className="sec-head">
        <div className="sec-head-l mono xs dim">
          <span className="sec-idx">{index}</span>
          <span className="sec-slash">/</span>
          <span className="sec-label">{label}</span>
        </div>
        <div className="sec-head-rule" />
        {aside && <div className="sec-head-aside mono xs dim">{aside}</div>}
      </div>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-body">{children}</div>
    </section>
  );
}

window.Hero = Hero;
window.About = About;
window.Section = Section;

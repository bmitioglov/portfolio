// PumpX case study - the centerpiece
function PumpXCase() {
  const [mau, setMau] = React.useState(0);
  const [subs, setSubs] = React.useState(0);
  const [downloads, setDownloads] = React.useState(0);
  const metricsRef = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateTo(setMau, 220, 1400);
          animateTo(setSubs, 17, 1200);
          animateTo(setDownloads, 12000, 1800);
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    if (metricsRef.current) obs.observe(metricsRef.current);
    return () => obs.disconnect();
  }, []);

  function animateTo(setter, target, dur) {
    const start = performance.now();
    function tick(t) {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setter(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  return (
    <section id="pumpx" className="sec pumpx-case" data-screen-label="PumpX Case Study">
      <div className="sec-head">
        <div className="sec-head-l mono xs dim">
          <span className="sec-idx">04</span>
          <span className="sec-slash">/</span>
          <span className="sec-label">case study · pumpx</span>
        </div>
        <div className="sec-head-rule" />
        <div className="sec-head-aside mono xs dim">2022 — present · founder</div>
      </div>

      <div className="pumpx-hero">
        <div className="pumpx-hero-l">
          <div className="pumpx-eyebrow mono xs accent">/ featured case study</div>
          <h2 className="sec-title pumpx-title">PumpX — an AI coach that actually knows you.</h2>
          <p className="prose muted">
            PumpX is a consumer fitness SaaS I founded and shipped end-to-end — backend, mobile, cloud, the AI layer, and the product direction. The thesis: most fitness apps treat every user like a spreadsheet. An LLM + a good memory can coach you like a human trainer would.
          </p>
          <div className="pumpx-ctas">
            <a href="https://pumpx.app" target="_blank" rel="noreferrer" className="btn-primary mono sm">
              visit pumpx.app ↗
            </a>
            <a href="https://pumpx.app" target="_blank" rel="noreferrer" className="btn-ghost mono sm">
              app store ↗
            </a>
          </div>
        </div>

        <div className="pumpx-hero-r">
          <div className="phone-mock">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen phone-screen-img">
                <img src="assets/pumpx-home.png" alt="PumpX app home screen" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics row */}
      <div className="metrics-row" ref={metricsRef}>
        <div className="metric-card">
          <div className="metric-val">{mau}</div>
          <div className="metric-lbl mono xs dim">monthly active users</div>
          <div className="metric-trend mono xs accent">↑ growing</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">{subs}</div>
          <div className="metric-lbl mono xs dim">paying subscribers</div>
          <div className="metric-trend mono xs accent">pmf validated</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">4+</div>
          <div className="metric-lbl mono xs dim">engineers led</div>
          <div className="metric-trend mono xs dim">tech direction</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">{downloads.toLocaleString()}+</div>
          <div className="metric-lbl mono xs dim">all-time downloads</div>
          <div className="metric-trend mono xs accent">↑ ios + android</div>
        </div>
      </div>

      {/* Architecture */}
      <div className="case-subhead mono xs dim mt-6">/ architecture</div>
      <h3 className="case-subtitle">One engineer, four systems, zero excuses.</h3>
      <div className="arch-diagram">
        <ArchDiagram />
      </div>

      {/* Problem / approach / outcome */}
      <div className="case-grid">
        <div className="case-col">
          <div className="case-col-head mono xs accent">/ problem</div>
          <p className="muted">Fitness apps pretend to personalize but mostly serve static templates. Real coaches adapt — to last session's RPE, to sleep, to whether you're traveling. Users drop off when the app stops listening.</p>
        </div>
        <div className="case-col">
          <div className="case-col-head mono xs accent">/ approach</div>
          <p className="muted">An LLM orchestration layer that owns the coaching loop: user context → workout plan → post-session feedback → plan adaptation. Deterministic services handle billing, data, auth; the model only handles what it's good at.</p>
        </div>
        <div className="case-col">
          <div className="case-col-head mono xs accent">/ outcome</div>
          <p className="muted">220 MAU and 17 paying subscribers with zero paid acquisition. The AI coach became the sticky feature — retention on plan users is measurably better than template users.</p>
        </div>
      </div>

      {/* Stack */}
      <div className="case-subhead mono xs dim mt-6">/ stack</div>
      <div className="stack-row">
        {["Spring Boot", "MySQL", "AWS (EC2, RDS, S3)", "React Native", "TypeScript", "Redux", "LLM orchestration", "Stripe"].map(s => (
          <span key={s} className="chip mono xs">{s}</span>
        ))}
      </div>
    </section>
  );
}

function ArchDiagram() {
  return (
    <div className="arch-wrap">
      <svg className="arch-svg" viewBox="0 0 900 260" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        <g className="arch-lines" fill="none" strokeDasharray="3 4">
          <path d="M130 70 L 330 70" />
          <path d="M130 190 L 330 190" />
          <path d="M470 70 L 670 70" />
          <path d="M470 190 L 670 190" />
          <path d="M400 100 L 400 160" />
          <path d="M770 100 L 770 160" />
        </g>
        {/* Animated packets */}
        <g className="arch-packets">
          <circle r="3" className="packet p1"><animateMotion dur="3.4s" repeatCount="indefinite" path="M130 70 L 330 70 L 400 100 L 400 160 L 330 190 L 130 190" /></circle>
          <circle r="3" className="packet p2"><animateMotion dur="4.1s" repeatCount="indefinite" path="M330 70 L 400 100 L 470 70 L 670 70 L 770 100 L 770 160 L 670 190 L 470 190 L 400 160 L 330 190" /></circle>
        </g>
      </svg>
      {/* Mobile: 2-col x 3-row layout — separate paths so packets travel between mobile node positions */}
      <svg className="arch-svg-mobile" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="arch-lines" fill="none" strokeDasharray="2 3" vectorEffect="non-scaling-stroke">
          <path d="M25 17 L 75 17" />
          <path d="M25 50 L 75 50" />
          <path d="M25 83 L 75 83" />
          <path d="M25 17 L 25 50" />
          <path d="M75 50 L 75 83" />
        </g>
        <g className="arch-packets">
          <circle r="1.6" className="packet p1"><animateMotion dur="3.6s" repeatCount="indefinite" path="M25 17 L 75 17 L 75 50 L 25 50 L 25 83 L 75 83" /></circle>
          <circle r="1.6" className="packet p2"><animateMotion dur="4.4s" repeatCount="indefinite" path="M75 83 L 25 83 L 25 50 L 75 50 L 75 17 L 25 17" /></circle>
        </g>
      </svg>

      <div className="arch-nodes">
        <div className="arch-node n1">
          <div className="an-label mono xs dim">client</div>
          <div className="an-name">React Native</div>
          <div className="an-meta mono xs muted">iOS · Android</div>
        </div>
        <div className="arch-node n2">
          <div className="an-label mono xs dim">api</div>
          <div className="an-name">Spring Boot</div>
          <div className="an-meta mono xs muted">auth · billing · data</div>
        </div>
        <div className="arch-node n3 ai">
          <div className="an-label mono xs accent">ai layer</div>
          <div className="an-name">Coach Orchestrator</div>
          <div className="an-meta mono xs muted">plan · adapt · explain</div>
        </div>
        <div className="arch-node n4">
          <div className="an-label mono xs dim">data</div>
          <div className="an-name">MySQL · S3</div>
          <div className="an-meta mono xs muted">on AWS RDS</div>
        </div>
        <div className="arch-node n5">
          <div className="an-label mono xs dim">infra</div>
          <div className="an-name">AWS EC2</div>
          <div className="an-meta mono xs muted">ci/cd · observability</div>
        </div>
        <div className="arch-node n6">
          <div className="an-label mono xs dim">payments</div>
          <div className="an-name">Stripe</div>
          <div className="an-meta mono xs muted">subscriptions</div>
        </div>
      </div>
    </div>
  );
}

window.PumpXCase = PumpXCase;

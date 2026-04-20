// SEOAuto case study — AI content pipeline for pumpx.app
function SEOAutoCase() {
  const [traffic, setTraffic] = React.useState(0);
  const [pages, setPages] = React.useState(0);
  const [domains, setDomains] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateTo(setTraffic, 11327, 1800);
          animateTo(setPages, 103, 1400);
          animateTo(setDomains, 71, 1200);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
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
    <section id="seoauto" className="sec seoauto-case" data-screen-label="SEOAuto Case Study" ref={ref}>
      <div className="sec-head">
        <div className="sec-head-l mono xs dim">
          <span className="sec-idx">04b</span>
          <span className="sec-slash">/</span>
          <span className="sec-label">case study · seoauto</span>
        </div>
        <div className="sec-head-rule" />
        <div className="sec-head-aside mono xs dim">2024 — present · founder</div>
      </div>

      <div className="seo-hero">
        <div className="seo-hero-l">
          <div className="pumpx-eyebrow mono xs accent">/ featured case study</div>
          <h2 className="sec-title pumpx-title">SEOAuto — an AI content agent, running on cron.</h2>
          <p className="prose muted">
            I didn't want to pay for SEO, so I built one. SEOAuto is an autonomous pipeline that mines trend signals, generates three kinds of articles — product comparisons, trending-athlete profiles, and educational content — and publishes them to <a className="inline-link" href="https://pumpx.app/blog" target="_blank" rel="noreferrer">pumpx.app/blog</a> on a schedule. Zero manual input. It drove PumpX's blog to 11k monthly organic visits and 103 indexed pages.
          </p>
          <div className="pumpx-ctas">
            <a href="https://pumpx.app/blog/best-protein-powders-for-muscle-building-2026-2/" target="_blank" rel="noreferrer" className="btn-primary mono sm">
              sample article ↗
            </a>
            <a href="https://pumpx.app/blog" target="_blank" rel="noreferrer" className="btn-ghost mono sm">
              blog index ↗
            </a>
          </div>
        </div>

        <div className="seo-hero-r">
          <div className="browser-mock">
            <div className="bm-bar">
              <span className="bm-dot r" /><span className="bm-dot y" /><span className="bm-dot g" />
              <div className="bm-url mono xs">pumpx.app/blog/best-protein-powders...</div>
            </div>
            <div className="bm-body">
              <img src="assets/seoauto-article.png" alt="Sample SEOAuto-generated article on PumpX blog" />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics-row">
        <div className="metric-card">
          <div className="metric-val">{traffic.toLocaleString()}</div>
          <div className="metric-lbl mono xs dim">monthly organic traffic</div>
          <div className="metric-trend mono xs accent">↑ from zero</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">{pages}</div>
          <div className="metric-lbl mono xs dim">pages indexed</div>
          <div className="metric-trend mono xs accent">fully automated</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">{domains}</div>
          <div className="metric-lbl mono xs dim">referring domains</div>
          <div className="metric-trend mono xs accent">organic backlinks</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">$0</div>
          <div className="metric-lbl mono xs dim">paid acquisition</div>
          <div className="metric-trend mono xs dim">cost · just ec2 + api</div>
        </div>
      </div>

      {/* Ahrefs chart */}
      <div className="case-subhead mono xs dim mt-6">/ growth · ahrefs</div>
      <h3 className="case-subtitle">Seven months, zero marketing budget.</h3>
      <div className="chart-frame">
        <div className="chart-caption mono xs dim">organic traffic · organic pages · referring domains · feb → aug 2025</div>
        <img src="assets/seoauto-ahrefs.png" alt="Ahrefs performance chart showing organic traffic growth" className="chart-img" />
      </div>

      {/* Pipeline diagram */}
      <div className="case-subhead mono xs dim mt-6">/ pipeline</div>
      <h3 className="case-subtitle">Trend → plan → draft → publish.</h3>
      <div className="pipe-diagram">
        <div className="pipe-step">
          <div className="ps-num mono xs dim">01</div>
          <div className="ps-name">Trend mining</div>
          <div className="ps-desc mono xs muted">scans trend signals across fitness niches on a schedule</div>
        </div>
        <div className="pipe-arrow mono">→</div>
        <div className="pipe-step">
          <div className="ps-num mono xs dim">02</div>
          <div className="ps-name">Archetype router</div>
          <div className="ps-desc mono xs muted">product comparison · athlete profile · educational</div>
        </div>
        <div className="pipe-arrow mono">→</div>
        <div className="pipe-step">
          <div className="ps-num mono xs dim">03</div>
          <div className="ps-name">LLM writer</div>
          <div className="ps-desc mono xs muted">structured drafts with internal linking + toc + faqs</div>
        </div>
        <div className="pipe-arrow mono">→</div>
        <div className="pipe-step accent-step">
          <div className="ps-num mono xs accent">04</div>
          <div className="ps-name">Auto-publish</div>
          <div className="ps-desc mono xs muted">posts to pumpx blog · submits to search · zero manual</div>
        </div>
      </div>

      {/* Problem / approach / outcome */}
      <div className="case-grid">
        <div className="case-col">
          <div className="case-col-head mono xs accent">/ problem</div>
          <p className="muted">PumpX had a product but no traffic. Paid acquisition burns runway fast. Writing 100+ SEO articles manually is a full-time job I didn't have.</p>
        </div>
        <div className="case-col">
          <div className="case-col-head mono xs accent">/ approach</div>
          <p className="muted">Treat SEO as a pipeline, not a content strategy. Identify the few article archetypes that rank, template them hard, and have the LLM specialize inside those rails — not write freestyle.</p>
        </div>
        <div className="case-col">
          <div className="case-col-head mono xs accent">/ outcome</div>
          <p className="muted">11k+ monthly organic visits to pumpx.app, 103 indexed pages, and 71 referring domains — all from a cron job running on a single EC2 instance. Marginal cost per article is cents.</p>
        </div>
      </div>

      {/* Stack */}
      <div className="case-subhead mono xs dim mt-6">/ stack</div>
      <div className="stack-row">
        {["Python", "LangChain", "LLM orchestration", "AWS EC2", "cron", "WordPress REST API", "Ahrefs (for measurement)"].map(s => (
          <span key={s} className="chip mono xs">{s}</span>
        ))}
      </div>
    </section>
  );
}

window.SEOAutoCase = SEOAutoCase;

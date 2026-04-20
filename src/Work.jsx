// Work experience timeline
function Work() {
  const { experience } = window.PORTFOLIO;
  const [expanded, setExpanded] = React.useState(new Set([0, 1])); // first two expanded by default

  function toggle(i) {
    setExpanded(prev => {
      const n = new Set(prev);
      if (n.has(i)) n.delete(i); else n.add(i);
      return n;
    });
  }

  return (
    <Section id="work" label="experience" index="02" title="Work"
      aside={<span>{experience.length} positions · 12+ yrs</span>}>
      <ol className="work-list">
        {experience.map((job, i) => {
          const isOpen = expanded.has(i);
          return (
            <li key={i} className={"work-item " + (isOpen ? "open " : "") + (job.highlight ? "highlight " : "") + (job.current ? "current " : "")}>
              <button className="work-head" onClick={() => toggle(i)} aria-expanded={isOpen}>
                <div className="work-head-l">
                  <div className="work-period mono xs dim">{job.period}</div>
                  <div className="work-title">
                    <span className="work-role">{job.role}</span>
                    <span className="work-sep dim"> @ </span>
                    <span className="work-company">{job.company}</span>
                    {job.via && <span className="work-via mono xs dim"> &nbsp;{job.via}</span>}
                  </div>
                  <div className="work-location mono xs dim">{job.location}</div>
                </div>
                <div className="work-head-r">
                  {job.current && <span className="tag-live mono xs">● live</span>}
                  <span className="work-toggle mono sm" aria-hidden>{isOpen ? "−" : "+"}</span>
                </div>
              </button>
              <div className="work-body" style={{ display: isOpen ? "block" : "none" }}>
                <ul className="work-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="work-stack">
                  {job.stack.map((s, j) => <span key={j} className="chip mono xs">{s}</span>)}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

window.Work = Work;

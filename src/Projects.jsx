// Projects list with hover reveal
function Projects() {
  const { projects } = window.PORTFOLIO;
  const [hover, setHover] = React.useState(null);

  return (
    <Section id="projects" label="selected projects" index="03" title="Projects"
      aside={<span>{projects.length} highlights</span>}>
      <ul className="proj-list">
        {projects.map((p, i) => (
          <li key={p.id}
              className={"proj-row " + (hover === i ? "hover " : "") + (p.featured ? "featured " : "")}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
          >
            <a href={p.id === "pumpx" ? "#pumpx" : (p.link ? `https://${p.link}` : "#work")}
               target={p.link && p.id !== "pumpx" ? "_blank" : undefined}
               rel={p.link && p.id !== "pumpx" ? "noreferrer" : undefined}
               className="proj-link">
              <div className="proj-row-l">
                <div className="proj-idx mono xs dim">{String(i + 1).padStart(2, "0")}</div>
                <div className="proj-main">
                  <div className="proj-name">
                    {p.name}
                    {p.featured && <span className="proj-featured mono xs">case study ↗</span>}
                  </div>
                  <div className="proj-tagline mono sm muted">{p.tagline}</div>
                </div>
              </div>
              <div className="proj-row-r mono xs dim">
                <span className="proj-status">{p.status}</span>
                <span className="proj-year">{p.year}</span>
              </div>
            </a>
            <div className="proj-desc" style={{ maxHeight: hover === i ? "200px" : "0" }}>
              <div className="proj-desc-inner">
                <p className="muted">{p.description}</p>
                <div className="mono xs dim">role · <span className="muted">{p.role}</span></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

window.Projects = Projects;

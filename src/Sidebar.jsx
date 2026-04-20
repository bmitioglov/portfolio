// Fixed sidebar: identity, nav, status
function Sidebar({ activeSection, onNav, accent }) {
  const { name, role, focus, location } = window.PORTFOLIO;
  const [time, setTime] = React.useState(() => formatTime(new Date()));

  React.useEffect(() => {
    const t = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  function formatTime(d) {
    // San Diego = PDT/PST. Approximate via toLocaleTimeString with TZ.
    try {
      return d.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false, timeZone: "America/Los_Angeles"
      });
    } catch { return d.toTimeString().slice(0,8); }
  }

  const nav = [
    { id: "hero",    label: "index" },
    { id: "about",   label: "about" },
    { id: "work",    label: "work" },
    { id: "projects",label: "projects" },
    { id: "pumpx",   label: "case · pumpx" },
    { id: "seoauto", label: "case · seoauto" },
    { id: "skills",  label: "skills" },
    { id: "certs",   label: "credentials" },
    { id: "contact", label: "contact" },
  ];

  return (
    <aside className="sidebar">
      <div className="sb-top">
        <div className="sb-avatar" aria-hidden>
          <div className="avatar-inner">
            <img src="assets/avatar.jpeg" alt="" />
          </div>
          <span className="sb-avatar-ring" />
        </div>
        <div className="sb-name">
          <div className="display">{name}</div>
          <div className="mono sm muted mt-1">{role}</div>
          <div className="mono xs dim mt-1">{focus}</div>
        </div>
      </div>

      <nav className="sb-nav" aria-label="Primary">
        {nav.map((item, i) => (
          <button
            key={item.id}
            className={"sb-nav-item mono sm " + (activeSection === item.id ? "active" : "")}
            onClick={() => onNav(item.id)}
          >
            <span className="sb-nav-idx dim">{String(i).padStart(2, "0")}</span>
            <span className="sb-nav-label">{item.label}</span>
            <span className="sb-nav-dot" aria-hidden />
          </button>
        ))}
      </nav>

      <div className="sb-bottom mono xs">
        <div className="sb-status">
          <span className="sb-pulse" />
          <span className="muted">available · fall 2026</span>
        </div>
        <div className="sb-meta dim">
          <div>{location}</div>
          <div><span className="muted">local</span> {time} PT</div>
        </div>
        <div className="sb-links mt-2">
          <a href="https://github.com/bmitioglov" target="_blank" rel="noreferrer">github</a>
          <span className="dim">·</span>
          <a href="https://linkedin.com/in/bmitioglov" target="_blank" rel="noreferrer">linkedin</a>
          <span className="dim">·</span>
          <a href="mailto:boris.mitioglov@gmail.com">email</a>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;

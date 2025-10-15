import { Link, useParams } from "react-router-dom";
import { roles, categoryInfo } from "../data/roles";

export default function RoleDetail() {
  const { roleId } = useParams();
  const role = roles.find((r) => r.id === roleId);

  if (!role) {
    return (
      <div className="container">
        <p>Role not found.</p>
        <Link to="/">Back to roles</Link>
      </div>
    );
  }

  const related = roles.filter((r) => role.related.includes(r.id));

  const info = categoryInfo[role.category];

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidecard">
          <div className="side-row">
            <span className="side-label">Category</span>
            <span className="badge">{role.category}</span>
          </div>
          <h2 className="side-title">{info.title}</h2>
          <p className="side-desc">{info.description}</p>
          {!!info.tips?.length && (
            <ul className="side-tips">
              {info.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </div>
      </aside>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Roles</Link>
          <span>/</span>
          <span>{role.name}</span>
        </nav>
        <h1>{role.name}</h1>
        <p className="lead">{role.summary}</p>
        <div className="meta-row">
          <span className="badge">{role.category}</span>
        </div>
        <section>
          <h2>Key Responsibilities</h2>
          <ul>
            {role.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Core Skills</h2>
          <ul className="chips">
            {role.skills.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </section>
        {!!role.sources?.length && (
          <section>
            <h2>Sources</h2>
            <ul>
              {role.sources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </section>
        )}
        {!!related.length && (
          <section>
            <h2>Related Roles</h2>
            <ul className="related">
              {related.map((r) => (
                <li key={r.id}><Link to={`/roles/${r.id}`}>{r.name}</Link></li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}



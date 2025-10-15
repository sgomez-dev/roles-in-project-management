import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { roles, categoryInfo } from "../data/roles";

export default function RoleDetail() {
  const { roleId } = useParams();
  const role = roles.find((r) => r.id === roleId);

  if (!role) {
    return (
      <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>Role not found.</p>
        <Link to="/">Back to roles</Link>
      </motion.div>
    );
  }

  const related = roles.filter((r) => role.related.includes(r.id));

  const info = categoryInfo[role.category];

  return (
    <div className="shell">
      <aside className="sidebar">
        <motion.div className="sidecard" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
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
        </motion.div>
      </aside>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Roles</Link>
          <span>/</span>
          <span>{role.name}</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>{role.name}</motion.h1>
        <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .05 }}>{role.summary}</motion.p>
        <div className="meta-row">
          <span className="badge">{role.category}</span>
        </div>
        <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
          <h2>Key Responsibilities</h2>
          <ul>
            {role.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2, delay: .03 }}>
          <h2>Core Skills</h2>
          <ul className="chips">
            {role.skills.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </motion.section>
        {!!role.sources?.length && (
          <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2, delay: .06 }}>
            <h2>Sources</h2>
            <ul>
              {role.sources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </motion.section>
        )}
        {!!related.length && (
          <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2, delay: .09 }}>
            <h2>Related Roles</h2>
            <ul className="related">
              {related.map((r) => (
                <li key={r.id}><Link to={`/roles/${r.id}`}>{r.name}</Link></li>
              ))}
            </ul>
          </motion.section>
        )}
      </div>
    </div>
  );
}



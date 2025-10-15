import { useMemo, useState } from "react";
import RoleCard from "../components/RoleCard";
import { roles, categories, categoryInfo } from "../data/roles";

export default function RolesIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const lc = query.toLowerCase();
    return roles.filter((r) => {
      const matchesQuery = !lc
        ? true
        : r.name.toLowerCase().includes(lc) ||
          r.summary.toLowerCase().includes(lc) ||
          r.responsibilities.some((x) => x.toLowerCase().includes(lc)) ||
          r.skills.some((x) => x.toLowerCase().includes(lc));
      const matchesCategory = category === "All" ? true : r.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const info = categoryInfo[category] ?? categoryInfo["All"];

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidecard">
          <div className="side-row">
            <span className="side-label">Category</span>
            <span className="badge">{category}</span>
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
        <header>
          <h1>Roles in Project Management</h1>
          <p className="lead">
            Explore governance, delivery, agile, support, and external roles across the lifecycle.
          </p>
          <div className="filters">
            <input
              className="input"
              placeholder="Search roles, responsibilities, skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option>All</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </header>
        <section className="grid">
          {filtered.map((r) => (
            <RoleCard key={r.id} role={r} />)
          )}
        </section>
      </div>
    </div>
  );
}



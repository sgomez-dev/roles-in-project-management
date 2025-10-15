import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.div className="sidecard" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
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
        </motion.div>
      </aside>
      <div className="container">
        <header>
          <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
            Roles in Project Management
          </motion.h1>
          <p className="lead">
            Explore governance, delivery, agile, support, and external roles across the lifecycle.
          </p>
          <motion.div className="filters" initial="hidden" animate="show" variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { staggerChildren: .06 } } }}>
            <motion.input
              className="input"
              placeholder="Search roles, responsibilities, skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
            />
            <motion.select className="select" value={category} onChange={(e) => setCategory(e.target.value)} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
              <option>All</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </motion.select>
          </motion.div>
        </header>
        <section className="grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((r) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, y: 10, scale: .98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: .98 }}
                transition={{ duration: .22 }}
              >
                <RoleCard role={r} />
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}



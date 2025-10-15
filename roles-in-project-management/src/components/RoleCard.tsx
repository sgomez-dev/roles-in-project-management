import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Role } from "../types";

type Props = { role: Role };

export default function RoleCard({ role }: Props) {
  return (
    <motion.div className="role-card" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} initial={false}>
      <h3 className="role-title">
        <Link to={`/roles/${role.id}`}>{role.name}</Link>
      </h3>
      <p className="role-summary">{role.summary}</p>
      <div className="role-meta">
        <span className="badge">{role.category}</span>
      </div>
    </motion.div>
  );
}



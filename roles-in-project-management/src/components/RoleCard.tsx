import { Link } from "react-router-dom";
import type { Role } from "../types";

type Props = { role: Role };

export default function RoleCard({ role }: Props) {
  return (
    <div className="role-card">
      <h3 className="role-title">
        <Link to={`/roles/${role.id}`}>{role.name}</Link>
      </h3>
      <p className="role-summary">{role.summary}</p>
      <div className="role-meta">
        <span className="badge">{role.category}</span>
      </div>
    </div>
  );
}



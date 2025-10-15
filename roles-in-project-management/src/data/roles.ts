import type { Role } from "../types";

export const roles: Role[] = [
  {
    id: "project-sponsor",
    name: "Project Sponsor",
    category: "Governance",
    summary:
      "Executive accountable for project value, authorizes funding, champions alignment with strategy.",
    responsibilities: [
      "Authorize project via charter and funding",
      "Define success criteria and strategic alignment",
      "Remove organizational roadblocks and escalate decisions",
      "Provide governance through stage gates and reviews",
    ],
    skills: ["Executive leadership", "Strategic thinking", "Decision-making", "Stakeholder influence"],
    related: ["project-manager", "steering-committee"],
    sources: [
      { label: "PMBOK Guide (Stakeholders)", url: "https://www.pmi.org/pmbok-guide-standards" },
      { label: "Project Executive (Wikipedia)", url: "https://en.wikipedia.org/wiki/Project_executive" },
    ],
  },
  {
    id: "project-manager",
    name: "Project Manager",
    category: "Delivery",
    summary:
      "Leads planning, execution, monitoring and controlling, and closing to deliver scope within constraints.",
    responsibilities: [
      "Develop and maintain the project management plan",
      "Manage scope, schedule, cost, quality baselines",
      "Lead the team and manage communications",
      "Identify and control risks and issues",
      "Manage procurement and vendor coordination",
      "Report status to sponsor and stakeholders",
    ],
    skills: [
      "Leadership",
      "Scheduling & estimation",
      "Risk management",
      "Communication",
      "Negotiation",
    ],
    related: ["project-sponsor", "business-analyst", "pmo"],
    sources: [
      { label: "Project manager (Wikipedia)", url: "https://en.wikipedia.org/wiki/Project_manager" },
    ],
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    category: "Delivery",
    summary:
      "Translates business needs into clear requirements, ensuring solutions deliver intended value.",
    responsibilities: [
      "Elicit, analyze, and document requirements",
      "Facilitate workshops and stakeholder alignment",
      "Maintain traceability from requirements to deliverables",
      "Support UAT and acceptance criteria",
    ],
    skills: ["Requirements analysis", "Facilitation", "Modeling (UML/BPMN)", "Critical thinking"],
    related: ["project-manager", "product-owner"],
  },
  {
    id: "scrum-master",
    name: "Scrum Master",
    category: "Agile",
    summary:
      "Servant leader who coaches the team on Scrum, removes impediments, and fosters continuous improvement.",
    responsibilities: [
      "Facilitate Scrum events",
      "Remove impediments and shield the team",
      "Coach team and stakeholders on agile practices",
      "Support empirical planning and transparency",
    ],
    skills: ["Coaching", "Facilitation", "Conflict resolution", "Agile frameworks"],
    related: ["product-owner", "developers"],
  },
  {
    id: "product-owner",
    name: "Product Owner",
    category: "Agile",
    summary:
      "Owns product value by managing the backlog, defining priorities, and clarifying acceptance criteria.",
    responsibilities: [
      "Define product vision and goals",
      "Prioritize and refine backlog items",
      "Clarify acceptance criteria and validate outcomes",
      "Engage stakeholders and users",
    ],
    skills: ["Value management", "Prioritization", "User empathy", "Stakeholder management"],
    related: ["scrum-master", "developers", "business-analyst"],
  },
  {
    id: "developers",
    name: "Developers / Project Team Members",
    category: "Delivery",
    summary: "Cross-functional professionals who build, test, and deliver increments of value.",
    responsibilities: [
      "Design, build, test deliverables",
      "Estimate and plan work",
      "Maintain quality and technical standards",
      "Collaborate to remove impediments",
    ],
    skills: ["Technical expertise", "Collaboration", "Quality mindset"],
    related: ["scrum-master", "product-owner", "tech-lead"],
  },
  {
    id: "tech-lead",
    name: "Technical Lead",
    category: "Delivery",
    summary:
      "Guides technical decisions, ensures architecture integrity, and mentors engineers.",
    responsibilities: [
      "Define architecture and technical standards",
      "Review designs and code",
      "Coordinate with PM on technical risks",
      "Mentor developers",
    ],
    skills: ["Architecture", "Code quality", "Mentoring", "Systems design"],
    related: ["developers", "project-manager"],
  },
  {
    id: "qa-manager",
    name: "Quality Assurance Manager",
    category: "Support",
    summary: "Ensures deliverables meet quality standards through processes, reviews, and testing.",
    responsibilities: [
      "Define quality assurance plan",
      "Establish testing strategy and metrics",
      "Manage defect lifecycle",
      "Facilitate reviews and audits",
    ],
    skills: ["Quality management", "Testing", "Process improvement"],
    related: ["project-manager", "developers"],
  },
  {
    id: "risk-manager",
    name: "Risk Manager",
    category: "Support",
    summary:
      "Identifies, analyzes, and monitors project risks; drives mitigation and contingency plans.",
    responsibilities: [
      "Maintain risk register and response plans",
      "Facilitate risk workshops",
      "Track risk metrics and early warnings",
    ],
    skills: ["Quantitative analysis", "Facilitation", "Scenario planning"],
    related: ["project-manager", "pmo"],
  },
  {
    id: "procurement-manager",
    name: "Procurement Manager",
    category: "Support",
    summary: "Manages vendor selection, contracts, and purchasing per procurement plan.",
    responsibilities: [
      "Run RFPs/RFQs and evaluate suppliers",
      "Negotiate contracts and SLAs",
      "Manage vendor performance",
    ],
    skills: ["Negotiation", "Contract management", "Vendor management"],
    related: ["project-manager", "legal"],
  },
  {
    id: "communications-manager",
    name: "Communications Manager",
    category: "Support",
    summary:
      "Owns the communications plan, ensuring the right information reaches stakeholders at the right time.",
    responsibilities: [
      "Define and execute comms plan",
      "Craft stakeholder-specific messages",
      "Manage channels and cadence",
    ],
    skills: ["Writing", "Change communication", "Stakeholder analysis"],
    related: ["project-manager", "change-manager"],
  },
  {
    id: "change-manager",
    name: "Change Manager",
    category: "Support",
    summary: "Leads organizational change management to enable adoption and minimize disruption.",
    responsibilities: [
      "Assess change impacts and readiness",
      "Plan training and communications",
      "Monitor adoption and resistance",
    ],
    skills: ["OCM frameworks", "Training", "Stakeholder engagement"],
    related: ["communications-manager", "project-manager"],
  },
  {
    id: "pmo",
    name: "Project Management Office (PMO)",
    category: "Governance",
    summary:
      "Sets standards, provides tooling, and offers governance and portfolio oversight.",
    responsibilities: [
      "Define methodologies and templates",
      "Portfolio reporting and prioritization support",
      "Coach PMs and audit compliance",
    ],
    skills: ["Portfolio mgmt", "Standardization", "Coaching"],
    related: ["project-manager", "risk-manager"],
  },
  {
    id: "steering-committee",
    name: "Steering Committee",
    category: "Governance",
    summary: "Executive body that provides direction and approves major decisions at stage gates.",
    responsibilities: [
      "Review status and risks",
      "Approve scope, budget, schedule changes",
      "Resolve escalations",
    ],
    skills: ["Governance", "Decision-making", "Strategic alignment"],
    related: ["project-sponsor", "project-manager"],
  },
  {
    id: "stakeholder",
    name: "Stakeholder",
    category: "External",
    summary: "Any individual or group affected by or able to influence project outcomes.",
    responsibilities: [
      "Provide requirements and feedback",
      "Participate in reviews and acceptance",
      "Support change adoption",
    ],
    skills: ["Communication", "Collaboration"],
    related: ["project-manager", "product-owner"],
  },
  {
    id: "project-coordinator",
    name: "Project Coordinator",
    category: "Support",
    summary: "Provides administrative and logistical support to the project manager and team.",
    responsibilities: [
      "Maintain schedules, calendars, and meeting minutes",
      "Track tasks and follow-ups",
      "Assist with reporting and documentation",
      "Coordinate logistics and communications",
    ],
    skills: ["Organization", "Communication", "Attention to detail", "Tools proficiency"],
    related: ["project-manager", "communications-manager"],
  },
  {
    id: "resource-manager",
    name: "Resource Manager",
    category: "Governance",
    summary: "Allocates and balances human resources across projects and departments.",
    responsibilities: [
      "Manage staffing plans and allocations",
      "Resolve resource conflicts",
      "Forecast capacity and hiring needs",
      "Support performance and development planning",
    ],
    skills: ["Capacity planning", "Negotiation", "People management"],
    related: ["project-manager", "functional-manager"],
  },
  {
    id: "sme",
    name: "Subject Matter Expert (SME)",
    category: "External",
    summary: "Provides deep domain expertise to guide solution decisions and validate outcomes.",
    responsibilities: [
      "Advise on domain constraints and best practices",
      "Review designs and deliverables for accuracy",
      "Support testing and acceptance",
    ],
    skills: ["Domain expertise", "Reviewing", "Communication"],
    related: ["business-analyst", "developers"],
  },
  {
    id: "project-owner",
    name: "Project Owner",
    category: "Governance",
    summary: "Represents the customer/business for a specific project, accountable for benefits.",
    responsibilities: [
      "Define business outcomes and benefits",
      "Approve scope and major changes",
      "Accept deliverables",
      "Engage stakeholders and secure support",
    ],
    skills: ["Benefit management", "Decision-making", "Stakeholder engagement"],
    related: ["project-sponsor", "project-manager"],
  },
  {
    id: "functional-manager",
    name: "Functional Manager",
    category: "Governance",
    summary: "Manages department staff and may oversee their contribution to the project.",
    responsibilities: [
      "Provide subject-area resources",
      "Clarify standards and practices",
      "Support performance feedback for assigned staff",
    ],
    skills: ["Line management", "Standards", "Coaching"],
    related: ["resource-manager", "project-manager"],
  },
  {
    id: "project-director",
    name: "Project Director",
    category: "Governance",
    summary: "Senior role overseeing multiple projects or large programs; provides direction and oversight.",
    responsibilities: [
      "Align projects with strategic goals",
      "Resolve escalations across initiatives",
      "Oversee budgets and benefits realization",
    ],
    skills: ["Portfolio oversight", "Leadership", "Financial acumen"],
    related: ["project-sponsor", "pmo", "project-manager"],
  },
];

export const categories = Array.from(new Set(roles.map((r) => r.category)));

export const categoryInfo: Record<string, { title: string; description: string; tips?: string[] }> = {
  All: {
    title: "All Categories",
    description:
      "Browse all project roles across governance, delivery, agile, support, and external stakeholders.",
    tips: [
      "Use search to filter by skills or responsibilities",
      "Filter by category to narrow your focus",
    ],
  },
  Governance: {
    title: "Governance",
    description:
      "Roles that provide sponsorship, direction, oversight, and resource alignment across projects.",
    tips: [
      "Clarify decision rights and escalation paths",
      "Set measurable success criteria early",
    ],
  },
  Delivery: {
    title: "Delivery",
    description:
      "Roles that plan, build, and deliver project outcomes within scope, schedule, and quality constraints.",
    tips: [
      "Maintain clear baselines and track variances",
      "Promote collaboration and continuous improvement",
    ],
  },
  Agile: {
    title: "Agile",
    description:
      "Scrum and agile roles focused on iterative delivery, transparency, and rapid feedback.",
    tips: [
      "Keep backlogs transparent and refined",
      "Protect teams to maintain sustainable pace",
    ],
  },
  Support: {
    title: "Support",
    description:
      "Specialist roles that enable quality, risk management, communications, procurement, and change.",
    tips: [
      "Define lightweight, repeatable processes",
      "Measure outcomes (not just activities)",
    ],
  },
  External: {
    title: "External",
    description:
      "Stakeholders and experts who influence requirements, validation, and adoption of change.",
    tips: [
      "Engage early and often with clear expectations",
      "Co-create acceptance criteria",
    ],
  },
};



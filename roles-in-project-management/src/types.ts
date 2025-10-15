export type Role = {
  id: string;
  name: string;
  category: string; // e.g., Governance, Delivery, Support
  summary: string;
  responsibilities: string[];
  skills: string[];
  related: string[]; // other role ids
  sources?: { label: string; url: string }[];
};



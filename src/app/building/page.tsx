import type { Metadata } from "next";
import BuildingNow from "@/components/BuildingNow";

export const metadata: Metadata = {
  title: "Building",
  description:
    "A family of AI-developer products built in the open — ContextOS, Codebase Intelligence, an MCP Server Generator, Agent Monitoring, and more, united by context as the connective layer.",
  alternates: { canonical: "/building" },
};

export default function BuildingPage() {
  return <BuildingNow />;
}

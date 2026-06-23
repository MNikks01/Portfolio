import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, slugs } from "@/content/building";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — Building`;
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `/building/${slug}` },
    openGraph: {
      title,
      description: project.tagline,
      url: `/building/${slug}`,
      type: "article",
    },
    twitter: { title, description: project.tagline },
  };
}

export default async function BuildingProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <ProjectDetail slug={slug} />;
}

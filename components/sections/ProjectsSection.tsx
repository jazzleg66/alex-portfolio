import { projects, ProjectStatus } from "@/lib/projects";
import { PixelButton, PixelCard, PixelBadge, SectionTitle } from "@/components/ui";

const statusVariant: Record<ProjectStatus, "green" | "red" | "black"> = {
  LIVE:        "green",
  "IN PROGRESS": "black",
  ARCHIVED:    "red",
};

export default function ProjectsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle>PROJECTS</SectionTitle>
      <p
        className="text-[var(--black)] mb-10"
        style={{ fontSize: "0.6rem", lineHeight: "2.5" }}
      >
        Things I&apos;ve built — shipped fast, learned even faster.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <PixelCard key={project.id} className="flex flex-col gap-4">

            {/* Header row: name + status */}
            <div className="flex items-start justify-between gap-4">
              <h3
                className="text-[var(--black)] leading-tight"
                style={{ fontSize: "0.75rem" }}
              >
                {project.name}
              </h3>
              <PixelBadge variant={statusVariant[project.status]} className="flex-shrink-0">
                {project.status}
              </PixelBadge>
            </div>

            {/* Description */}
            <p
              className="text-[var(--black)] flex-1"
              style={{ fontSize: "0.55rem", lineHeight: "2.5" }}
            >
              {project.description}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <PixelBadge key={tech} variant="tan">
                  {tech}
                </PixelBadge>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <PixelButton
                href={project.url}
                variant="black"
              >
                VIEW PROJECT
              </PixelButton>
            </div>

          </PixelCard>
        ))}
      </div>
    </section>
  );
}

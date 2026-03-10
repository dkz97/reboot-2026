interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: "完成" | "进行中" | "归档";
}

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  demoUrl,
  status = "完成",
}: ProjectCardProps) {
  const statusColor =
    status === "完成"
      ? "is-success"
      : status === "进行中"
      ? "is-primary"
      : "is-disabled";

  return (
    <div className="nes-container with-title">
      <p className="title">{title}</p>
      <div className="space-y-3">
        <span className={`nes-badge`}>
          <span className={statusColor}>{status}</span>
        </span>
        <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              style={{
                border: "2px solid var(--pixel-green)",
                padding: "2px 8px",
                fontSize: "10px",
                fontFamily: "'Press Start 2P', monospace",
                color: "var(--pixel-green)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-primary"
              style={{ fontSize: "10px", padding: "4px 12px" }}
            >
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-warning"
              style={{ fontSize: "10px", padding: "4px 12px" }}
            >
              DEMO
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "reboot-2026",
    description: "我的个人博客网站，像素风格，记录项目和文章。用 Next.js 构建，部署在 GitHub Pages。",
    tech: ["Next.js", "TypeScript", "NES.css"],
    githubUrl: "https://github.com/dkz97/reboot-2026",
    demoUrl: "https://dkz97.github.io/reboot-2026",
    status: "进行中" as const,
  },
  {
    title: "StandX-MM-Bot",
    description: "StandX 平台的自动做市商机器人，用于自动化链上流动性管理。",
    tech: ["TypeScript"],
    githubUrl: "https://github.com/dkz97/StandX-MM-Bot",
    status: "完成" as const,
  },
  {
    title: "cosmos-util",
    description: "Cosmos 生态的实用工具集，包含常用链上操作的脚本和工具。",
    tech: ["JavaScript"],
    githubUrl: "https://github.com/dkz97/cosmos-util",
    status: "完成" as const,
  },
  {
    title: "exchanges",
    description: "支持多交易所公告自动抓取、监控与实时推送的自动化工具。",
    tech: ["Python"],
    githubUrl: "https://github.com/dkz97/exchanges",
    status: "完成" as const,
  },
  {
    title: "Inscription-util",
    description: "铭文（Inscription）相关的实用工具，支持链上铭文的批量操作。",
    tech: ["JavaScript"],
    githubUrl: "https://github.com/dkz97/Inscription-util",
    status: "完成" as const,
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 style={{ fontSize: "20px", color: "var(--pixel-green)", marginBottom: "8px" }}>
          PROJECTS
        </h2>
        <p style={{ color: "var(--text-muted)" }}>
          // 我做过的一些项目，点击 GitHub 查看源码
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

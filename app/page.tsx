import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6 mt-8">
      {/* PLAYER INFO */}
      <section className="nes-container with-title">
        <p className="title">PLAYER INFO</p>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0">
            <div
              style={{
                width: "80px",
                height: "80px",
                border: "4px solid var(--pixel-green)",
                backgroundColor: "var(--bg-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
              }}
            >
              👾
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 style={{ fontSize: "16px", color: "var(--pixel-green)" }}>dkz97</h1>
              <p style={{ color: "var(--text-muted)", marginTop: "6px" }}>
                Java Backend → Solana Tools → AI Applications
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span style={{ width: "90px", fontSize: "11px", color: "var(--text-muted)", flexShrink: 0 }}>后端开发</span>
                <progress className="nes-progress is-primary" value="80" max="100" style={{ flex: 1, maxWidth: "180px", height: "18px" }}></progress>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ width: "90px", fontSize: "11px", color: "var(--text-muted)", flexShrink: 0 }}>链上工具</span>
                <progress className="nes-progress is-warning" value="70" max="100" style={{ flex: 1, maxWidth: "180px", height: "18px" }}></progress>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ width: "90px", fontSize: "11px", color: "var(--text-muted)", flexShrink: 0 }}>AI 应用</span>
                <progress className="nes-progress is-success" value="60" max="100" style={{ flex: 1, maxWidth: "180px", height: "18px" }}></progress>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="nes-container with-title">
        <p className="title">ABOUT ME</p>
        <div className="space-y-3">
          <p>
            后端开发出身，做过 Java 服务端，后来在 Solana 生态开发自动交易机器人和交易工具，目前专注 AI 应用和自动化。
          </p>
        </div>
      </section>

      {/* EXPLORE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="nes-container with-title">
          <p className="title">PROJECTS</p>
          <p style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
            我做过的开源项目
          </p>
          <Link href="/projects" className="nes-btn is-success" style={{ display: "inline-block" }}>
            查看项目 →
          </Link>
        </section>

        <section className="nes-container with-title">
          <p className="title">BLOG</p>
          <p style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
            我写的文章和思考
          </p>
          <Link href="/blog" className="nes-btn is-warning" style={{ display: "inline-block" }}>
            查看文章 →
          </Link>
        </section>
      </div>

      {/* CONTACT */}
      <section className="nes-container with-title">
        <p className="title">CONTACT</p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="https://github.com/dkz97"
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-primary"
          >
            GitHub
          </a>
          <a
            href="https://x.com/shutwbtc"
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn"
          >
            X / Twitter
          </a>
        </div>
      </section>
    </div>
  );
}

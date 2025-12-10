// src/App.tsx

function App() {
  const name: string = "BEKIR MORINA - My Simple Website";
  const description: string =
    "This is a single page built with React and TypeScript.";

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        margin: 0,
        padding: "2rem",
        background: "#f5f5f5",
      }}
    >
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0 }}>{name}</h1>
        <p>{description}</p>

        <section style={{ marginTop: "2rem" }}>
          <h2>About</h2>
          <p>
            This page is a minimal example of how to set up a single-page website
            using React and TypeScript in VS Code.
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2>Contact</h2>
          <p>
            You can replace this text with your own links, social media, or contact
            information.
          </p>
        </section>

        <footer style={{ marginTop: "3rem", fontSize: "0.85rem", color: "#666" }}>
          © {new Date().getFullYear()} My Simple Website
        </footer>
      </main>
    </div>
  );
}

export default App;

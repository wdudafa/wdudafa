import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "darkslategrey",
          justifyContent: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div>
          <h1 style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
            wdudafa.
          </h1>
          <a
            href="https://old.wdudafa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              style={{
                fontSize: 25,
                color: "white",
                textDecoration: "underline",
              }}
            >
              under construction 🚧
            </p>
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 10,
              width: "55%",
            }}
          >
            <a
              href="https://www.linkedin.com/in/wdudafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={35} color={"white"} />
            </a>
            <a
              href="https://github.com/wdudafa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} color={"white"} />
            </a>
            <a
              href="mailto:wd@wdudafa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={35} color={"white"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

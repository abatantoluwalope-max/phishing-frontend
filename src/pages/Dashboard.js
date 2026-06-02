function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <style>
        {`
          .status-dot {
            width: 12px;
            height: 12px;
            background-color: #22C55E;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.2; }
            100% { opacity: 1; }
          }

          .dashboard-card {
            background-color: #F9FAFB;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .dashboard-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#0F8B6D",
              fontSize: "34px",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            DEVELOPMENT OF MACHINE LEARNING BASED EMAIL PHISHING DETECTION SYSTEM
          </h1>
        </div>

        <img
          src="/logo.jpg"
          alt="FUOYE Logo"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* PROJECT OVERVIEW */}

      <div
        style={{
          backgroundColor: "#F9FAFB",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#0F8B6D" }}>
          Project Overview
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#444",
            fontSize: "16px",
          }}
        >
          This project presents the development of a machine learning
          based email phishing detection system designed to identify
          phishing emails and distinguish them from legitimate emails.
          The system utilizes TF-IDF text vectorization and Random Forest
          classification techniques to analyze email content and classify
          suspicious emails accurately.
        </p>
      </div>

      {/* DASHBOARD CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div className="dashboard-card">
          <h3>Machine Learning Model</h3>

          <h2 style={{ color: "#0F8B6D" }}>
            Random Forest
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>Text Processing</h3>

          <h2 style={{ color: "#0F8B6D" }}>
            TF-IDF
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>Backend Status</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#15803D",
            }}
          >
            <span className="status-dot"></span>
            Online
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Detection Engine</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#15803D",
            }}
          >
            <span className="status-dot"></span>
            Active
          </div>
        </div>
      </div>

      {/* HOW TO USE */}

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "#EFF6FF",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #BFDBFE",
        }}
      >
        <h2>How To Use The System</h2>

        <ol
          style={{
            lineHeight: "2",
            color: "#374151",
          }}
        >
          <li>Navigate to the Email Analyzer page.</li>
          <li>Paste suspicious email content into the text area.</li>
          <li>Click Analyze Email.</li>
          <li>The system processes the email using TF-IDF.</li>
          <li>The Random Forest model evaluates phishing indicators.</li>
          <li>The prediction result and confidence score are displayed.</li>
        </ol>
      </div>
    </div>
  );
}

export default Dashboard;
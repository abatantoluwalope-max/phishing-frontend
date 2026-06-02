function Architecture() {
  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          color: "#0F8B6D",
          marginBottom: "30px",
        }}
      >
        System Architecture
      </h1>

      {/* SYSTEM OVERVIEW */}

      <div className="section-box">
        <h2>System Overview</h2>

        <p>
          The Machine Learning Based Email Phishing Detection System
          utilizes a client-server architecture consisting of a React
          frontend, Flask backend, TF-IDF vectorization engine, and
          Random Forest machine learning model for email classification.
        </p>
      </div>

      {/* WORKFLOW */}

      <div className="section-box">
        <h2>System Workflow</h2>

        <div className="workflow-container">
          <div className="workflow-box">User</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">React Frontend</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Axios API Request</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Flask Backend</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">TF-IDF Vectorizer</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Random Forest Model</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Prediction Result</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Frontend Display</div>
        </div>
      </div>

      {/* TECHNOLOGY STACK */}

      <div className="section-box">
        <h2>Technology Stack</h2>

        <div className="grid-container">
          <div className="tech-card">
            <h3>Frontend</h3>
            <p>React.js</p>
          </div>

          <div className="tech-card">
            <h3>Backend</h3>
            <p>Flask API</p>
          </div>

          <div className="tech-card">
            <h3>Machine Learning</h3>
            <p>Random Forest</p>
          </div>

          <div className="tech-card">
            <h3>Feature Extraction</h3>
            <p>TF-IDF</p>
          </div>

          <div className="tech-card">
            <h3>Frontend Hosting</h3>
            <p>Vercel</p>
          </div>

          <div className="tech-card">
            <h3>Backend Hosting</h3>
            <p>Render</p>
          </div>
        </div>
      </div>

      {/* DEPLOYMENT ARCHITECTURE */}

      <div className="section-box">
        <h2>Deployment Architecture</h2>

        <div className="workflow-container">
          <div className="workflow-box">User Browser</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Vercel Frontend</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Render Backend API</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">TF-IDF Vectorizer</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Random Forest Model</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Prediction Response</div>
        </div>
      </div>

      {/* MACHINE LEARNING PIPELINE */}

      <div className="section-box">
        <h2>Machine Learning Pipeline</h2>

        <div className="workflow-container">
          <div className="workflow-box">Email Input</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Text Cleaning</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">TF-IDF Vectorization</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Feature Matrix</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">Random Forest Classification</div>
          <div className="arrow">↓</div>

          <div className="workflow-box">
            Phishing / Legitimate
          </div>
        </div>
      </div>

      {/* BENEFITS */}

      <div className="section-box">
        <h2>Architecture Benefits</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Scalable cloud deployment architecture.</li>
          <li>Fast phishing email classification.</li>
          <li>Separation of frontend and backend services.</li>
          <li>Efficient feature extraction using TF-IDF.</li>
          <li>High prediction accuracy with Random Forest.</li>
          <li>Easy maintenance and future expansion.</li>
        </ul>
      </div>

      <style>
        {`
          .section-box {
            background: #F9FAFB;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          }

          .workflow-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
          }

          .workflow-box {
            background: #0F8B6D;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            min-width: 250px;
            text-align: center;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .workflow-box:hover {
            transform: scale(1.05);
          }

          .arrow {
            font-size: 24px;
            font-weight: bold;
            color: #0F8B6D;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .tech-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
          }

          .tech-card:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </div>
  );
}

export default Architecture;
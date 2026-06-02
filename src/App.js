import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {
    if (!email.trim()) {
      alert("Please enter an email to analyze");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://phishing-backend-jjhl.onrender.com/predict",
        {
          email: email,
        }
      );

      setResult(response.data.prediction);
      setConfidence(response.data.confidence);
      setRiskLevel(response.data.risk_level);
      setPatterns(response.data.detected_patterns || []);

      setLoading(false);
    } catch (error) {
      console.error(error);

      setResult("Error connecting to backend");
      setConfidence("");
      setRiskLevel("");
      setPatterns([]);

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #F8FAFC, #E2E8F0)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "24px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: "30px",
            marginBottom: "30px",
          }}
        >
          <div>
            <h2
              style={{
                color: "#0F8B6D",
                margin: 0,
              }}
            >
              FEDERAL UNIVERSITY OYE EKITI
            </h2>

            <p>Department of Computer Engineering</p>

            <p>Final Year Project</p>
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

        {/* STUDENT INFO */}

        <div
          style={{
            backgroundColor: "#F9FAFB",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "30px",
          }}
        >
          <p>
            <strong>Name:</strong> ABATAN TOLUWALOPE SAMUEL
          </p>

          <p>
            <strong>Matric Number:</strong> CPE/2020/1001
          </p>
        </div>

        {/* PROJECT TITLE */}

        <h1
          style={{
            color: "#0F8B6D",
            marginBottom: "10px",
          }}
        >
          AI-Powered Phishing Threat Intelligence Platform
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          This system uses Machine Learning, TF-IDF Vectorization,
          and Random Forest Classification to detect phishing emails
          and provide cybersecurity threat intelligence.
        </p>

        {/* HOW TO USE */}

        <div
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            padding: "20px",
            backgroundColor: "#EFF6FF",
            borderRadius: "12px",
          }}
        >
          <h2>How To Use This System</h2>

          <ol>
            <li>Paste suspicious email content below.</li>
            <li>Click Analyze Email.</li>
            <li>The AI model processes the email.</li>
            <li>The system evaluates phishing indicators.</li>
            <li>Results are displayed instantly.</li>
          </ol>
        </div>

        {/* INPUT */}

        <textarea
          rows="12"
          value={email}
          placeholder="Paste suspicious email content here..."
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #D1D5DB",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={analyzeEmail}
          disabled={loading}
          style={{
            marginTop: "20px",
            backgroundColor: "#0F8B6D",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Email"}
        </button>

        {/* RESULTS */}

        {result && (
          <div
            style={{
              marginTop: "40px",
              padding: "30px",
              borderRadius: "15px",
              backgroundColor:
                result === "Phishing Email"
                  ? "#FEF2F2"
                  : "#ECFDF5",
            }}
          >
            <h2
              style={{
                color:
                  result === "Phishing Email"
                    ? "#B91C1C"
                    : "#166534",
              }}
            >
              {result}
            </h2>

            <h3>
              Confidence Score: {confidence}%
            </h3>

            <div
              style={{
                marginTop: "10px",
                padding: "12px",
                borderRadius: "10px",
                backgroundColor:
                  riskLevel === "Critical"
                    ? "#991B1B"
                    : riskLevel === "High"
                    ? "#B45309"
                    : riskLevel === "Medium"
                    ? "#CA8A04"
                    : "#15803D",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Threat Level: {riskLevel}
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <h3>Detected Threat Indicators</h3>

              {patterns.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "8px",
                  }}
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                backgroundColor: "#F9FAFB",
                borderRadius: "12px",
              }}
            >
              <h3>Security Recommendation</h3>

              {result === "Phishing Email" ? (
                <ul>
                  <li>Do not click suspicious links.</li>
                  <li>Do not download unknown attachments.</li>
                  <li>Report the email immediately.</li>
                  <li>Delete the email after reporting.</li>
                </ul>
              ) : (
                <ul>
                  <li>No major phishing indicators detected.</li>
                  <li>Continue exercising normal caution.</li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
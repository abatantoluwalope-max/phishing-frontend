import React, { useState } from "react";
import axios from "axios";

function Analyzer() {
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
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#0F8B6D",
            marginBottom: "15px",
          }}
        >
          Email Phishing Analyzer
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Analyze suspicious emails using machine learning based phishing detection.
        </p>

        {/* HOW TO USE */}

        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            backgroundColor: "#EFF6FF",
            borderRadius: "12px",
            border: "1px solid #BFDBFE",
          }}
        >
          <h2>How To Use The System</h2>

          <ol style={{ lineHeight: "2" }}>
            <li>Paste suspicious email content below.</li>
            <li>Click Analyze Email.</li>
            <li>The email is processed using TF-IDF vectorization.</li>
            <li>The Random Forest model evaluates phishing indicators.</li>
            <li>Prediction results are displayed instantly.</li>
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

export default Analyzer;
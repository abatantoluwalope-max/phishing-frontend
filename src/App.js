import React, { useState } from "react";
import axios from "axios";

function App() {

  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {

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

      setLoading(false);

    } catch (error) {

      console.error(error);

      setResult("Error connecting to backend");

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
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "24px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: "30px",
          }}
        >

          <div>

            <h2
              style={{
                color: "#0F8B6D",
                margin: 0,
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              FEDERAL UNIVERSITY OYE EKITI
            </h2>

            <p
              style={{
                marginTop: "10px",
                color: "#555",
                fontSize: "16px",
              }}
            >
              Department of Computer Engineering
            </p>

            <p
              style={{
                marginTop: "5px",
                color: "#777",
                fontSize: "15px",
              }}
            >
              Final Year Project Implementation
            </p>

          </div>

          <img
            src="/logo.jpg"
            alt="School Logo"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />

        </div>

        <div
          style={{
            marginBottom: "40px",
            backgroundColor: "#F9FAFB",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
          }}
        >

          <p
            style={{
              margin: "5px 0",
              fontSize: "16px",
              color: "#333",
            }}
          >
            <strong>Name:</strong> ABATAN TOLUWALOPE SAMUEL
          </p>

          <p
            style={{
              margin: "5px 0",
              fontSize: "16px",
              color: "#333",
            }}
          >
            <strong>Matric Number:</strong> CPE/2020/1001
          </p>

        </div>

        <div style={{ marginBottom: "40px" }}>

          <h1
            style={{
              color: "#0F8B6D",
              fontSize: "46px",
              marginBottom: "15px",
              fontWeight: "700",
            }}
          >
            AI Phishing Email Detection System
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "20px",
              lineHeight: "1.7",
              maxWidth: "800px",
            }}
          >
            Analyze suspicious emails using machine learning,
            TF-IDF text processing, and Random Forest classification
            for intelligent phishing detection.
          </p>

        </div>

        <textarea
          rows="12"
          placeholder="Paste suspicious email content here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #D1D5DB",
            fontSize: "16px",
            resize: "none",
            outline: "none",
            lineHeight: "1.7",
          }}
        />

        <button
          onClick={analyzeEmail}
          disabled={loading}
          style={{
            marginTop: "24px",
            backgroundColor: "#0F8B6D",
            color: "white",
            border: "none",
            padding: "16px 32px",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            opacity: loading ? 0.7 : 1,
            transition: "0.3s",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Email"}
        </button>

        {result && (

          <div
            style={{
              marginTop: "40px",
              padding: "30px",
              borderRadius: "18px",
              backgroundColor:
                result === "Phishing Email"
                  ? "#FEF2F2"
                  : "#ECFDF5",

              border:
                result === "Phishing Email"
                  ? "1px solid #FCA5A5"
                  : "1px solid #6EE7B7",
            }}
          >

            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color:
                  result === "Phishing Email"
                    ? "#B91C1C"
                    : "#166534",
              }}
            >
              {result}
            </div>

            <div
              style={{
                marginTop: "12px",
                color: "#444",
                fontSize: "17px",
              }}
            >
              Threat Confidence Score: {confidence}%
            </div>

            <div
              style={{
                marginTop: "20px",
                width: "100%",
                height: "14px",
                backgroundColor: "#E5E7EB",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >

              <div
                style={{
                  width: `${confidence}%`,
                  height: "100%",
                  backgroundColor:
                    result === "Phishing Email"
                      ? "#DC2626"
                      : "#059669",
                  transition: "width 0.5s ease",
                }}
              />

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;
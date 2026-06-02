function Metrics() {
  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          color: "#0F8B6D",
          marginBottom: "30px",
        }}
      >
        Model Performance Metrics
      </h1>

      {/* METRIC CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div className="metric-card">
          <h3>Accuracy</h3>
          <h1>98%</h1>
        </div>

        <div className="metric-card">
          <h3>Precision</h3>
          <h1>98%</h1>
        </div>

        <div className="metric-card">
          <h3>Recall</h3>
          <h1>98%</h1>
        </div>

        <div className="metric-card">
          <h3>F1 Score</h3>
          <h1>98%</h1>
        </div>
      </div>

      {/* MODEL DETAILS */}

      <div
        style={{
          marginTop: "40px",
          backgroundColor: "#F9FAFB",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
        }}
      >
        <h2 style={{ color: "#0F8B6D" }}>
          Model Evaluation Details
        </h2>

        <p>
          <strong>Machine Learning Algorithm:</strong>
          {" "}Random Forest Classifier
        </p>

        <p>
          <strong>Feature Extraction Technique:</strong>
          {" "}TF-IDF Vectorization
        </p>

        <p>
          <strong>Training Dataset Ratio:</strong>
          {" "}70%
        </p>

        <p>
          <strong>Testing Dataset Ratio:</strong>
          {" "}30%
        </p>

        <p>
          <strong>Model Accuracy:</strong>
          {" "}98%
        </p>
      </div>

      {/* INTERPRETATION */}

      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#EFF6FF",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #BFDBFE",
        }}
      >
        <h2>Metric Interpretation</h2>

        <p>
          <strong>Accuracy:</strong> Measures the overall
          correctness of the phishing detection model.
        </p>

        <p>
          <strong>Precision:</strong> Measures how many
          emails predicted as phishing were actually phishing.
        </p>

        <p>
          <strong>Recall:</strong> Measures the model's
          ability to identify phishing emails successfully.
        </p>

        <p>
          <strong>F1 Score:</strong> Provides a balance
          between Precision and Recall.
        </p>
      </div>

      {/* MODEL COMPARISON */}

      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#F9FAFB",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
        }}
      >
        <h2 style={{ color: "#0F8B6D" }}>
          Model Comparison Summary
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHeader}>Model</th>
              <th style={tableHeader}>Accuracy</th>
              <th style={tableHeader}>Precision</th>
              <th style={tableHeader}>Recall</th>
              <th style={tableHeader}>F1-Score</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tableCell}>Logistic Regression</td>
              <td style={tableCell}>97%</td>
              <td style={tableCell}>98%</td>
              <td style={tableCell}>97%</td>
              <td style={tableCell}>98%</td>
            </tr>

            <tr
              style={{
                backgroundColor: "#DCFCE7",
                fontWeight: "bold",
              }}
            >
              <td style={tableCell}>Random Forest</td>
              <td style={tableCell}>98%</td>
              <td style={tableCell}>98%</td>
              <td style={tableCell}>98%</td>
              <td style={tableCell}>98%</td>
            </tr>

            <tr>
              <td style={tableCell}>Multinomial NB</td>
              <td style={tableCell}>96%</td>
              <td style={tableCell}>97%</td>
              <td style={tableCell}>95%</td>
              <td style={tableCell}>96%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>
        {`
          .metric-card {
            background: #F9FAFB;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
          }

          .metric-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  );
}

const tableHeader = {
  border: "1px solid #E5E7EB",
  padding: "12px",
  backgroundColor: "#0F8B6D",
  color: "white",
};

const tableCell = {
  border: "1px solid #E5E7EB",
  padding: "12px",
  textAlign: "center",
};

export default Metrics;
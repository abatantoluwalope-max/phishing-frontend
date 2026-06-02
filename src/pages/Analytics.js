import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function Analytics() {
  const datasetData = [
    { name: "Legitimate", value: 41000 },
    { name: "Phishing", value: 39000 },
  ];

  const modelData = [
    {
      model: "Logistic Regression",
      Accuracy: 98,
      Precision: 98,
      Recall: 98,
      F1: 98,
    },
    {
      model: "Random Forest",
      Accuracy: 98,
      Precision: 98,
      Recall: 98,
      F1: 98,
    },
    {
      model: "Multinomial NB",
      Accuracy: 96,
      Precision: 97,
      Recall: 95,
      F1: 96,
    },
  ];

  const keywordData = [
    { keyword: "Urgent", count: 95 },
    { keyword: "Verify", count: 90 },
    { keyword: "Account", count: 88 },
    { keyword: "Password", count: 85 },
    { keyword: "Click Here", count: 80 },
    { keyword: "Update", count: 75 },
    { keyword: "Confirm", count: 70 },
    { keyword: "Security", count: 68 },
  ];

  const COLORS = ["#0F8B6D", "#EF4444"];

  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          color: "#0F8B6D",
          marginBottom: "30px",
        }}
      >
        Dataset Analytics
      </h1>

      {/* DATASET CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div className="analytics-card">
          <h3>Total Emails</h3>
          <h1>82,000</h1>
        </div>

        <div className="analytics-card">
          <h3>Legitimate Emails</h3>
          <h1>41,000</h1>
        </div>

        <div className="analytics-card">
          <h3>Phishing Emails</h3>
          <h1>39,000</h1>
        </div>

        <div className="analytics-card">
          <h3>Train/Test Ratio</h3>
          <h1>70/30</h1>
        </div>
      </div>

      {/* PIE CHART */}

      <div className="section-box">
        <h2>Dataset Distribution</h2>

        <div style={{ height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={datasetData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {datasetData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* MODEL COMPARISON */}

      <div className="section-box">
        <h2>Model Comparison</h2>

        <div style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={modelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="Accuracy" />
              <Bar dataKey="Precision" />
              <Bar dataKey="Recall" />
              <Bar dataKey="F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KEYWORD CHART */}

      <div className="section-box">
        <h2>Common Phishing Keywords</h2>

        <div style={{ height: "350px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={keywordData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="keyword" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DATASET SUMMARY */}

      <div className="section-box">
        <h2>Dataset Summary</h2>

        <p>
          The phishing detection system was trained using a Kaggle dataset
          containing approximately 82,000 emails.
        </p>

        <p>
          The dataset consisted of approximately 41,000 legitimate emails
          and 39,000 phishing emails, providing a balanced distribution
          for machine learning training.
        </p>

        <p>
          A 70/30 train-test split was used for model evaluation.
        </p>
      </div>

      {/* RANDOM FOREST JUSTIFICATION */}

      <div className="section-box">
        <h2>Why Random Forest Was Selected</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Achieved 98% overall accuracy.</li>
          <li>Produced consistent precision and recall scores.</li>
          <li>Handles large datasets effectively.</li>
          <li>Robust against overfitting.</li>
          <li>Suitable for phishing email classification tasks.</li>
        </ul>
      </div>

      <style>
        {`
          .analytics-card {
            background:#F9FAFB;
            padding:25px;
            border-radius:12px;
            text-align:center;
            box-shadow:0 2px 10px rgba(0,0,0,0.08);
            transition:all 0.3s ease;
          }

          .analytics-card:hover {
            transform:translateY(-5px);
          }

          .section-box {
            background:#F9FAFB;
            padding:25px;
            border-radius:12px;
            margin-top:30px;
            box-shadow:0 2px 10px rgba(0,0,0,0.08);
          }
        `}
      </style>
    </div>
  );
}

export default Analytics;
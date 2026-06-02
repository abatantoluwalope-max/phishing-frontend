function About() {
  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          color: "#0F8B6D",
          marginBottom: "30px",
        }}
      >
        About The Project
      </h1>

      {/* PROJECT INFORMATION */}

      <div className="section-box">
        <h2>Project Information</h2>

        <p>
          <strong>Project Title:</strong>
          <br />
          DEVELOPMENT OF MACHINE LEARNING BASED EMAIL PHISHING DETECTION SYSTEM
        </p>

        <p>
          <strong>Institution:</strong>
          <br />
          Federal University Oye Ekiti (FUOYE)
        </p>

        <p>
          <strong>Faculty:</strong>
          <br />
          Faculty of Engineering
        </p>

        <p>
          <strong>Department:</strong>
          <br />
          Department of Computer Engineering
        </p>
      </div>

      {/* STUDENT DETAILS */}

      <div className="section-box">
        <h2>Student Information</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Student Name</h3>
            <p>Abatan Toluwalope Samuel</p>
          </div>

          <div className="info-card">
            <h3>Matric Number</h3>
            <p>CPE/2020/1001</p>
          </div>

          <div className="info-card">
            <h3>Supervisor</h3>
            <p>Professor A.A. Sobowale Esq.</p>
          </div>

          <div className="info-card">
            <h3>Academic Session</h3>
            <p>2025/2026</p>
          </div>
        </div>
      </div>

      {/* PROJECT OBJECTIVES */}

      <div className="section-box">
        <h2>Project Objectives</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>
            Develop an intelligent machine learning system capable of
            detecting phishing emails.
          </li>

          <li>
            Classify emails as phishing or legitimate using machine
            learning techniques.
          </li>

          <li>
            Improve email security awareness among users.
          </li>

          <li>
            Reduce risks associated with phishing attacks and email
            fraud.
          </li>

          <li>
            Provide an automated and efficient phishing detection
            mechanism.
          </li>
        </ul>
      </div>

      {/* PROJECT SCOPE */}

      <div className="section-box">
        <h2>Project Scope</h2>

        <p style={{ lineHeight: "1.8" }}>
          This project focuses on the detection and classification of
          phishing emails using machine learning algorithms. The system
          analyzes email content, extracts textual features using
          TF-IDF vectorization, and applies a Random Forest classifier
          to determine whether an email is legitimate or phishing.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          The system was trained and evaluated using a Kaggle dataset
          containing approximately 82,000 emails consisting of both
          legitimate and phishing messages.
        </p>
      </div>

      {/* TECHNOLOGIES */}

      <div className="section-box">
        <h2>Technologies Used</h2>

        <div className="info-grid">
          <div className="tech-card">React.js</div>
          <div className="tech-card">Flask</div>
          <div className="tech-card">Python</div>
          <div className="tech-card">Random Forest</div>
          <div className="tech-card">TF-IDF</div>
          <div className="tech-card">Scikit-Learn</div>
          <div className="tech-card">Axios</div>
          <div className="tech-card">Render</div>
          <div className="tech-card">Vercel</div>
          <div className="tech-card">GitHub</div>
        </div>
      </div>

      {/* SYSTEM SUMMARY */}

      <div className="section-box">
        <h2>System Summary</h2>

        <p style={{ lineHeight: "1.8" }}>
          The developed phishing detection system integrates machine
          learning techniques with modern web technologies to provide
          accurate phishing email classification. The Random Forest
          model achieved an overall accuracy of 98%, demonstrating
          strong capability in identifying malicious emails and
          supporting cybersecurity awareness.
        </p>
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

          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .info-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
          }

          .info-card:hover {
            transform: translateY(-5px);
          }

          .tech-card {
            background: #0F8B6D;
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .tech-card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default About;
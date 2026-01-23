export default function PredictionResult({ prediction }) {
    const { team1Probability, team2Probability, confidence, factors, winning } = prediction;

    return (
        <div className="prediction-result">
            <header className="result-header">
                <h2>Prediction Result</h2>
                <span className={`confidence-badge confidence-${confidence.toLowerCase()}`}>
                    {confidence} Confidence
                </span>
            </header>

            <div className="result-content">
                <div className="probability-display">
                    <div className="team-prob blue">
                        <span className="team-label">Blue Team</span>
                        <span className="prob-value">{team1Probability}%</span>
                    </div>

                    <div className="prob-bar">
                        <div
                            className="prob-filled blue"
                            style={{ width: `${team1Probability}%` }}
                        />
                        <div
                            className="prob-filled red"
                            style={{ width: `${team2Probability}%` }}
                        />
                    </div>

                    <div className="team-prob red">
                        <span className="team-label">Red Team</span>
                        <span className="prob-value">{team2Probability}%</span>
                    </div>
                </div>

                <div className="winner-announcement">
                    <p>
                        <strong>{winner}</strong> is predicted to win
                    </p>
                </div>

                <div className="factors-section">
                    <h3>Key Factors</h3>
                    <div className ="factors-list">
                        {factors.map((factor, index) => (
                            <div key={index} className={`factor-chip ${factor.favor}`}>
                                <span className="factor-text">{factor.text}</span>
                                <span className="factor-team">{factor.favor === "blue" ? "Blue" : "Red"}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

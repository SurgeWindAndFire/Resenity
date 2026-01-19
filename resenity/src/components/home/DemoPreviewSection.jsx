import { useState } from "react";

function DemoSkeleton() {
  return (
    <div className="skeleton" aria-label="Demo skeleton">
      <div className="sk-line" />
      <div className="sk-bar" />
      <div className="sk-line" />
      <div className="sk-chips">
        <div className="sk-chip" />
        <div className="sk-chip" />
        <div className="sk-chip" />
      </div>
      <div className="sk-chart" />
    </div>
  );
}

function DemoResult({ teamA, teamB, confidence, factors }) {
  return (
    <div className="demo-result">
      <div className="rows" role="group" aria-label="Demo odds">
        <div className="row">
          <span className="team-chip">Team A</span>
          <strong>{teamA}%</strong>
        </div>
        <div className="row">
          <span className="team-chip">Team B</span>
          <strong>{teamB}%</strong>
        </div>
      </div>

      <div className="bar" aria-label="Demo probability bar">
        <div className="bar-track">
          <div className="bar-fill" style={{ width: `${teamA}%` }} />
        </div>
      </div>

      <div className="meta" aria-label="Demo confidence">
        <span className="muted small">Confidence</span>
        <span className="badge">{confidence}</span>
      </div>

      <div className="why" aria-label="Top factors">
        <h4>Top factors</h4>
        <div className="chip-row">
          {factors.map((f) => (
            <span key={f} className="chip">
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="chart" role="img" aria-label="Demo chart placeholder">
        <div className="chart-line" />
      </div>
    </div>
  );
}

export default function DemoPreviewSection() {
  const [ran, setRan] = useState(false);

  return (
    <section id="demo" className="section" aria-label="Demo preview">
      <div className="container">
        <header className="section-header">
          <h2>See a prediction in seconds</h2>
          <p className="muted">Run a demo match—no login required.</p>
        </header>

        <div className="demo-grid">
          <article className="card" aria-label="Demo inputs">
            <header className="card-header">
              <h3>Demo Setup</h3>
            </header>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setRan(true);
              }}
            >
              <div className="field">
                <label htmlFor="game">Game</label>
                <select id="game" name="game" defaultValue="lol" disabled>
                  <option value="lol">League of Legends (v1)</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="preset">Preset match</label>
                <select id="preset" name="preset" defaultValue="balanced">
                  <option value="balanced">Balanced teams</option>
                  <option value="rankgap">Rank gap</option>
                  <option value="hotstreak">Hot streak</option>
                </select>
              </div>

              <button className="btn btn-primary" type="submit">
                Run Demo Prediction
              </button>
            </form>
          </article>

          <article className="card" aria-label="Demo output">
            <header className="card-header">
              <h3>Prediction</h3>
              <span className="chip">{ran ? "Updated" : "Waiting"}</span>
            </header>

            {!ran ? (
              <DemoSkeleton />
            ) : (
              <DemoResult
                teamA={62}
                teamB={38}
                confidence="Medium"
                factors={["Higher avg rank", "Stronger recent form", "Better role balance"]}
              />
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

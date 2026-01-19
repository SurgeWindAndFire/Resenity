function Step({ number, title, description }) {
  return (
    <li className="step">
      <div className="step-num" aria-hidden="true">
        {number}
      </div>
      <div className="step-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
      </div>
    </li>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how" className="section" aria-label="How it works">
      <div className="container how-grid">
        <div>
          <header className="section-header">
            <h2>How it works</h2>
            <p className="muted">Three steps from match setup to clarity.</p>
          </header>

          <ol className="steps" aria-label="Steps">
            <Step number="1" title="Create a match" description="Add players or choose a preset." />
            <Step number="2" title="Get the odds" description="Instant prediction + confidence." />
            <Step number="3" title="Understand the why" description="Top factors visualized clearly." />
          </ol>
        </div>

        <div className="card">
          <header className="card-header">
            <h3>Preview</h3>
          </header>
          <div className="flow" role="img" aria-label="Flow diagram placeholder" />
        </div>
      </div>
    </section>
  );
}

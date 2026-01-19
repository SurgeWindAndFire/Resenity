function FeatureCard({ title, description }) {
  return (
    <article className="card" role="listitem">
      <header className="card-header">
        <h3>{title}</h3>
      </header>
      <p className="muted">{description}</p>
    </article>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section" aria-label="Features">
      <div className="container">
        <header className="section-header">
          <h2>What you get</h2>
          <p className="muted">Everything you need to read a match quickly.</p>
        </header>

        <div className="grid-3" role="list">
          <FeatureCard title="Win Probability" description="Fast predictions you can trust." />
          <FeatureCard title="Why It Predicts This" description="Know what mattered most at a glance." />
          <FeatureCard title="History & Progress" description="Save predictions and learn over time." />
        </div>
      </div>
    </section>
  );
}

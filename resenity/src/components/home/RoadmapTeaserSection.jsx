function RoadmapItem({ title }) {
  return (
    <article className="card" role="listitem">
      <header className="card-header">
        <h3>{title}</h3>
      </header>
      <p className="muted">Planned</p>
    </article>
  );
}

export default function RoadmapTeaserSection() {
  return (
    <section className="section" aria-label="Coming next">
      <div className="container">
        <header className="section-header">
          <h2>Coming next</h2>
          <p className="muted">Designed to expand beyond LoL when we’re ready.</p>
        </header>

        <div className="grid-3" role="list">
          <RoadmapItem title="Champion draft synergy" />
          <RoadmapItem title="Team dashboards" />
          <RoadmapItem title="More games support" />
        </div>
      </div>
    </section>
  );
}

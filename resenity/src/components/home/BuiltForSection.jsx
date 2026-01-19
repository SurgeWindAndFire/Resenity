function AudienceCard({ title, description }) {
  return (
    <article className="card" role="listitem">
      <header className="card-header">
        <h3>{title}</h3>
      </header>
      <p className="muted">{description}</p>
    </article>
  );
}

export default function BuiltForSection() {
  return (
    <section className="section" aria-label="Built for">
      <div className="container">
        <header className="section-header">
          <h2>Built for</h2>
        </header>

        <div className="grid-4" role="list">
          <AudienceCard title="Ranked climbers" description="Fast reads before queueing." />
          <AudienceCard title="Competitive duos" description="Compare strengths and trends." />
          <AudienceCard title="Amateur teams" description="Review matchups and improve." />
          <AudienceCard title="Coaches & analysts" description="Simple insights, clear visuals." />
        </div>
      </div>
    </section>
  );
}

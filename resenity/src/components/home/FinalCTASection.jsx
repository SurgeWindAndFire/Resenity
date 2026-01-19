export default function FinalCTASection() {
  return (
    <section className="section" aria-label="Final call to action">
      <div className="container">
        <div className="card cta">
          <div>
            <h2>Ready to see the game clearly?</h2>
            <p className="muted">Try a demo now, then save predictions when you’re ready.</p>
          </div>

          <div className="cta-actions">
            <a className="btn btn-primary" href="#demo">
              Try Demo
            </a>
            <a className="btn btn-ghost" href="/login">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

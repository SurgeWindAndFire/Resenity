import HeroPredictionMock from "./HeroPredictionMock.jsx";

export default function HeroSection() {
  return (
    <section id="top" className="section hero" aria-label="Hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill" role="note">
            LoL-first • Multi-game ready
          </div>

          <h1>Calm insight for competitive gaming.</h1>

          <p className="lead">
            Resenity turns match data into clear win predictions and simple “why”
            explanations—starting with League of Legends.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#demo">
              Try Demo
            </a>
            <a className="btn btn-ghost" href="/login">
              Sign in
            </a>
          </div>

          <p className="muted small">No account needed for demo.</p>

          <ul className="hero-highlights" aria-label="Key highlights">
            <li>Win odds</li>
            <li>Simple explanations</li>
            <li>Saved history</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Prediction preview">
          <HeroPredictionMock />
        </div>
      </div>
    </section>
  );
}

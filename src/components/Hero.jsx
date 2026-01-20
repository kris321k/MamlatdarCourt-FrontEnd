const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h2>e-Filing Portal for Mamlatdar Court</h2>
          <p>
            Submit applications, notices, tenancy matters and other forms
            securely and efficiently online.
          </p>

          <div className="hero-ctas">
            <a href="/register" className="btn primary">
              Get Started
            </a>
            <a href="#about" className="btn ghost">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-decor" aria-hidden="true">
          <svg viewBox="0 0 600 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#g1)" />
            <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
              <path d="M0,300 C150,200 450,400 600,300 L600,400 L0,400 Z" />
              <path d="M0,220 C120,140 480,260 600,180" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

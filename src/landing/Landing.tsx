import "./landing.css";

const pad = (n: number) => String(n).padStart(2, "0");
const viri = (n: number) => `/viri/gen/viri-${pad(n)}.png`;
const picto = (n: number) => `/viri/pictos/picto-${pad(n)}.png`;
const emo = (n: number) => `/viri/emotions/emo-${pad(n)}.png`;

const BrandMark = ({ size = 22, color = "#fff", bg = "var(--vira-lila)", radius = 7, pad = 0.22 }: { size?: number; color?: string; bg?: string; radius?: number; pad?: number }) => (
  <span className="brand-mark" aria-hidden style={{ width: size, height: size, background: bg, borderRadius: radius, display: "inline-grid", placeItems: "center", color }}>
    <svg viewBox="0 0 300 300" width={Math.round(size * (1 - pad * 2))} height={Math.round(size * (1 - pad * 2))} aria-hidden>
      <path fill="currentColor" d="M230.36,91.58h37.68c5.46,0,9.89,4.43,9.89,9.89h0c0,22.02-28.89,40.14-54.1,46.26-2.26.55-2.26,3.75,0,4.3,25.21,6.02,54.1,24.36,54.1,46.38h0c0,5.46-4.43,9.89-9.89,9.89h-37.68s-22,0-22,0v22.14s0,37.68,0,37.68c0,5.46-4.43,9.89-9.89,9.89h0c-22.02,0-40.14-28.89-46.26-54.1-.55-2.26-3.75-2.26-4.3,0-6.02,25.21-24.36,54.1-46.38,54.1h0c-5.46,0-9.89-4.43-9.89-9.89v-37.68s0-22,0-22H31.96c-5.46,0-9.89-4.43-9.89-9.89h0c0-22.02,28.89-40.14,54.1-46.26,2.26-.55,2.26-3.75,0-4.3-25.21-6.02-54.1-24.36-54.1-46.38h0c0-5.46,4.43-9.89,9.89-9.89h59.69V31.89c0-5.46,4.43-9.89,9.89-9.89h0c22.02,0,40.14,28.89,46.26,54.1.55,2.26,3.75,2.26,4.3,0,6.02-25.21,24.36-54.1,46.38-54.1h0c5.46,0,9.89,4.43,9.89,9.89v59.69h22ZM230.36,69.58V31.89c0-17.58-14.31-31.89-31.89-31.89s-34.95,10.05-48.47,28.49C136.49,10.05,119.5,0,101.54,0s-31.89,14.31-31.89,31.89v37.82H31.96C14.38,69.71.07,84.02.07,101.61s10.05,34.95,28.49,48.47C10.12,163.58.07,180.57.07,198.54s14.31,31.89,31.89,31.89h37.68,0s0,37.68,0,37.68c0,17.58,14.31,31.89,31.89,31.89,17.96,0,34.95-10.05,48.47-28.49,13.51,18.44,30.5,28.49,48.47,28.49,17.58,0,31.89-14.31,31.89-31.89v-37.82s37.68,0,37.68,0c17.58,0,31.89-14.31,31.89-31.89,0-17.96-10.05-34.95-28.49-48.47,18.44-13.51,28.49-30.5,28.49-48.47,0-17.58-14.31-31.89-31.89-31.89h-37.68" />
    </svg>
  </span>
);

// SCENES (kept w/ bg) — gallery rows
const MARQUEE_A = [40, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 57, 59, 61, 62, 63, 64, 65, 66];
const MARQUEE_B = [33, 35, 38, 41, 68, 69, 71, 72, 75, 77, 78, 79, 80, 82, 83, 84, 87, 88, 89, 91, 92, 50];

// PLAIN mascot portraits (rembg-cut) — clean emotional faces
const EMOTIONS = [
  { n: 3, label: "Happy" },
  { n: 6, label: "Stoked" },
  { n: 8, label: "Shy" },
  { n: 4, label: "Sad" },
  { n: 5, label: "Anxious" },
  { n: 9, label: "Confused" },
  { n: 1, label: "Angry" },
  { n: 2, label: "Scared" },
];

// SCENES (kept w/ bg) — costume + environment shots
const SKINS = [
  { n: 38, label: "Gladiator", tag: "Quest reward" },
  { n: 35, label: "Pixel", tag: "Retro drop" },
  { n: 33, label: "Gingerbread", tag: "Holiday drop" },
  { n: 57, label: "Firefighter", tag: "Hero drop" },
  { n: 46, label: "Racer", tag: "Streak 7" },
  { n: 44, label: "Surfer", tag: "Summer drop" },
  { n: 43, label: "Zen", tag: "Mindfulness mode" },
  { n: 54, label: "Explorer", tag: "Adventure drop" },
];

// PLAIN avatars — small cropped circles in testimonials
const QUOTE_AVATARS = { teen: 67, parent: 73, clinician: 76 };

/* --------------------------------- NAV --------------------------------- */
function Nav() {
  return (
    <nav className="lp-nav" aria-label="Primary">
      <a className="brand" href="/">
        <BrandMark />
        vira
      </a>
      <div className="links">
        <a href="#problem">Problem</a>
        <a href="#solution">Product</a>
        <a href="#how">How</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </div>
      <a className="cta" href="#waitlist">Join waitlist</a>
    </nav>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section id="top" className="lp-hero">
      <div className="lp-hero-stage">
        <div>
          <span className="lp-eyebrow">
            <span className="dot" /> Now boarding · YC&nbsp;S26 batch
          </span>
          <h1>
            Your brain isn't broken.
            <br />
            <span className="grad">It's just running its own OS.</span>
          </h1>
          <p className="lead">
            The ADHD app teens actually open the next day. Plan loose, feel
            less alone, finish more — without the lecture.
          </p>

          <div className="lp-actions">
            <a className="lp-cta" href="#waitlist">
              Join 1,247 teens on the waitlist <span aria-hidden>→</span>
            </a>
            <a className="lp-cta-ghost" href="#how">See it in 60 seconds</a>
          </div>

          <div className="lp-xp" aria-label="Waitlist progress">
            <div className="lp-xp-head">
              <span>Waitlist · Level 2</span>
              <span><b>1,247</b> / 2,000 teens</span>
            </div>
            <div className="lp-xp-bar" />
          </div>
        </div>

        <div className="lp-viri-stage lp-viri-stage--mock">
          <img className="lp-mockup" src="/mockup-home.png" alt="Vira app — home screen" />
          <img className="lp-orb o1" src={picto(4)} alt="" />
          <img className="lp-orb o2" src={picto(15)} alt="" />
          <img className="lp-orb o4" src={picto(30)} alt="" />
          <img className="lp-orb o6" src={picto(18)} alt="" />
        </div>
      </div>

    </section>
  );
}

/* --------------------------------- STRIP --------------------------------- */
function Strip() {
  return (
    <div className="lp-strip">
      <div className="lp-strip-inner">
        <span className="lp-strip-label">Built with</span>
        <div className="lp-logos">
          <span>14&nbsp;ADHD&nbsp;clinicians</span>
          <span>3&nbsp;child&nbsp;psychiatrists</span>
          <span>200+&nbsp;US&nbsp;teens&nbsp;in&nbsp;testing</span>
          <span>CHADD-aligned</span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- PROBLEM --------------------------------- */
function Problem() {
  return (
    <section id="problem" className="lp-section lp-problem">
      <div className="lp-container">
        <span className="lp-eyebrow"><span className="dot" /> The problem</span>
        <h2>
          5% of teens have ADHD.
          <br />
          <em>0 apps</em> are actually built for them.
        </h2>
        <p className="lead">
          The shelf is full of productivity apps for adults, calendars that
          punish, mood sliders that confuse, gamification that condescends.
          Teens with ADHD download them, try once, and quit.
        </p>

        <div className="grid">
          <div className="card">
            <div className="num">82%</div>
            <h3>Can't plan a week</h3>
            <p>Of ADHD teens we surveyed (n=56) struggle to organize their own time without external scaffolding.</p>
          </div>
          <div className="card">
            <div className="num">35%</div>
            <h3>Use any tool</h3>
            <p>The rest gave up. Most apps assume a neurotypical workflow, quiet rooms, linear days, willpower on tap.</p>
          </div>
          <div className="card">
            <div className="num">60%</div>
            <h3>Want this to exist</h3>
            <p>Said a properly designed app would change their day-to-day, if it was simple, gamified and didn't judge.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- SOLUTION --------------------------------- */
function Solution() {
  return (
    <section id="solution" className="lp-section lp-solution">
      <div className="lp-container">
        <span className="lp-eyebrow"><span className="dot" /> Product</span>
        <h2>
          One app. <em>Four pillars.</em>
          <br />
          Zero shame.
        </h2>
        <p className="lead">
          Vira is built around how ADHD brains actually move through a day:
          plan loosely, feel intensely, focus in bursts, reward quickly.
        </p>

        <div className="lp-pillars">
          <div className="lp-pillar p1">
            <span className="tag">01 · Organize</span>
            <img className="picto" src="/viri/pictos/picto-08.png" alt="" />
            <div>
              <h3>Time.</h3>
              <p>Visual calendar. Soft reminders. Med tracker. Habits that bend with the week.</p>
            </div>
          </div>
          <div className="lp-pillar p2">
            <span className="tag">02 · Focus</span>
            <img className="picto" src="/viri/pictos/picto-12.png" alt="" />
            <div>
              <h3>Attention.</h3>
              <p>Pomodoro modes for study, walks, sleep. SOS button when overwhelm hits.</p>
            </div>
          </div>
          <div className="lp-pillar p3">
            <span className="tag">03 · Feel</span>
            <img className="picto" src="/viri/pictos/picto-20.png" alt="" />
            <div>
              <h3>Emotion.</h3>
              <p>16 Viri faces, mindfulness, journaling. Identify what you feel before it owns you.</p>
            </div>
          </div>
          <div className="lp-pillar p4">
            <span className="tag">04 · Earn</span>
            <img className="picto" src="/viri/pictos/picto-28.png" alt="" />
            <div>
              <h3>Reward.</h3>
              <p>ViriCoins, daily quests, unlockable skins. Tiny wins. Real momentum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- HOW --------------------------------- */
function How() {
  return (
    <section id="how" className="lp-section lp-how">
      <div className="lp-container">
        <span className="lp-eyebrow"><span className="dot" /> How it works</span>
        <h2>
          Three taps in,
          <br />
          <span className="grad">you're on the rails.</span>
        </h2>
        <p className="lead">
          No 12-step onboarding. No questionnaire fatigue. Just enough to
          make day one feel different from yesterday.
        </p>

        <div className="lp-steps">
          {[
            { n: 42, h: "Meet Viri", p: "Your co-pilot picks a face, a name, a vibe. Viri adapts to how you use the app, happier when you show up, grumpy when you ghost.", alt: "Viri waving hi" },
            { n: 53, h: "Set one thing", p: "Pick one habit. One reminder. One mood check. We don't ask for your life plan on day one, that's not how ADHD works.", alt: "Viri organizing" },
            { n: 63, h: "Stack the wins", p: "Streaks, XP, skins. Friends and family can plug in too, only if you let them. You own the dashboard.", alt: "Viri celebrating" },
          ].map((s) => (
            <div className="lp-step" key={s.n}>
              <div className="step-frame" style={{ ["--bg-img" as string]: `url(${viri(s.n)})` }}>
                <img src={viri(s.n)} alt={s.alt} />
              </div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- GALLERY --------------------------------- */
function Gallery() {
  return (
    <section className="lp-gallery">
      <div className="lp-gallery-head">
        <span className="lp-eyebrow"><span className="dot" /> Meet Viri · 200+ faces</span>
        <h2>Same shape. <em>Infinite moods.</em></h2>
        <p className="lead">
          One mascot. Hand-tuned 3D generations for every feeling, every
          quest, every skin. Built so no teen ever opens the app and
          thinks "this isn't for me."
        </p>
      </div>

      <div className="lp-gallery-row r1" aria-hidden>
        {[...MARQUEE_A, ...MARQUEE_A].map((n, i) => (
          <div className="cell" key={`g1-${i}`} style={{ ["--bg-img" as string]: `url(${viri(n)})` }}>
            <img src={viri(n)} alt="" />
          </div>
        ))}
      </div>
      <div className="lp-gallery-row r2" aria-hidden>
        {[...MARQUEE_B, ...MARQUEE_B].map((n, i) => (
          <div className="cell" key={`g2-${i}`} style={{ ["--bg-img" as string]: `url(${viri(n)})` }}>
            <img src={viri(n)} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- PROOF --------------------------------- */
function Proof() {
  return (
    <section className="lp-section lp-proof">
      <div className="lp-container">
        <span className="lp-eyebrow"><span className="dot" /> Early voices</span>
        <h2>
          Loud users.
          <br />
          <em>Quiet flex.</em>
        </h2>
        <p className="lead">Teens, parents, clinicians who've trialled the beta:</p>

        <div className="lp-quotes">
          <article className="lp-quote">
            <span className="stars">★★★★★</span>
            <p>"Other apps tell me I'm lazy in a polite voice. Viri sends me a meme when I miss a habit. Guess which one I actually open."</p>
            <div className="who">
              <span className="ava ava-viri"><img src={viri(QUOTE_AVATARS.teen)} alt="" /></span>
              <div className="meta"><b>Maya, 15</b><span>Beta user · ADHD-C · Brooklyn, NY</span></div>
            </div>
          </article>
          <article className="lp-quote">
            <span className="stars">★★★★★</span>
            <p>"My daughter installed it on a Tuesday. By Friday she was telling me what 'mode' she was in. That alone changed our week."</p>
            <div className="who">
              <span className="ava ava-viri"><img src={viri(QUOTE_AVATARS.parent)} alt="" /></span>
              <div className="meta"><b>Megan, parent</b><span>Daughter, 15 · Austin, TX</span></div>
            </div>
          </article>
          <article className="lp-quote">
            <span className="stars">★★★★★</span>
            <p>"First app I've seen that respects the executive-function gap without treating teens like patients. It's the missing layer."</p>
            <div className="who">
              <span className="ava ava-viri"><img src={viri(QUOTE_AVATARS.clinician)} alt="" /></span>
              <div className="meta"><b>Dr. Alex Greene, PsyD</b><span>Child neuropsychologist · clinical advisor</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- PRICING --------------------------------- */
function Pricing() {
  return (
    <section id="pricing" className="lp-section lp-pricing">
      <div className="lp-container">
        <span className="lp-eyebrow"><span className="dot" /> Pricing</span>
        <h2>
          Less than therapy.
          <br />
          <em>More than freemium hell.</em>
        </h2>
        <p className="lead">
          Free forever for the basics. Premium unlocks skins, advanced
          modes, shared dashboards. Education partners get school-wide
          deployment.
        </p>

        <div className="lp-plans">
          <div className="lp-plan">
            <h3>Free</h3>
            <div className="price"><b>0€</b><span>/ forever</span></div>
            <ul>
              <li>Calendar, habits, med tracker</li>
              <li>Mood log with 16 Viri faces</li>
              <li>1 Pomodoro mode</li>
              <li>Daily XP + 3 base skins</li>
            </ul>
            <a className="pick" href="#waitlist">Get it free</a>
          </div>
          <div className="lp-plan featured">
            <span className="ribbon">Most teens pick this</span>
            <h3>Pro</h3>
            <div className="price"><b>4€</b><span>/ month</span></div>
            <ul>
              <li>Everything in Free</li>
              <li>All Pomodoro modes + SOS</li>
              <li>Full skin shop + weekly drops</li>
              <li>Shared dashboard (parents, tutors)</li>
              <li>Mindfulness library + journal</li>
            </ul>
            <a className="pick" href="#waitlist">Start 14-day trial</a>
          </div>
          <div className="lp-plan">
            <h3>Schools</h3>
            <div className="price"><b>Custom</b><span>· per seat</span></div>
            <ul>
              <li>Bulk seats + admin console</li>
              <li>Aggregated cohort insights (privacy-first)</li>
              <li>Educator integrations</li>
              <li>On-site training for school counselors</li>
            </ul>
            <a className="pick" href="#waitlist">Talk to us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ --------------------------------- */
function FAQ() {
  const items: [string, string][] = [
    ["Is Vira a medical device?", "No. Vira is a wellness companion built with input from US-licensed ADHD clinicians and child psychiatrists. It complements therapy, it doesn't replace it. If you're in crisis, call or text 988."],
    ["Who is Vira for?", "Teens diagnosed with ADHD between 12–21. Parents, tutors and clinicians can plug into the shared dashboard if (and only if) the teen opts in."],
    ["Why is the mascot purple?", "Because lila is the official ADHD-awareness colour. Also because Viri tested through the roof with teens and through the floor with brand consultants. Teens won."],
    ["What about my data?", "Your data is yours. Local-first storage, end-to-end encrypted sync, and you decide what's shared with the dashboard. We never sell, never train on you."],
    ["When does it launch?", "Open beta starts Q3 2026. Waitlist gets first access in cohorts of 200. Pilot school partners launch alongside in New York, Los Angeles, and Austin."],
    ["I'm a clinician, can I trial it?", "Yes. Email hi@vira.app from a clinic or practice address and we'll set you up with a supervised cohort plus aggregated insights."],
  ];
  return (
    <section id="faq" className="lp-section lp-faq">
      <div className="lp-container">
        <span className="lp-eyebrow"><span className="dot" /> Questions</span>
        <h2>
          Honest answers,
          <br />
          <em>no marketing fog.</em>
        </h2>

        <div className="grid">
          {items.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CTA --------------------------------- */
function CTAblock() {
  return (
    <section id="waitlist" className="lp-cta-block">
      <div className="glow" aria-hidden />
      <div className="inner">
        <img className="viri-cta" src={viri(45)} alt="Viri inviting you in" />
        <span className="lp-eyebrow"><span className="dot" /> 753 spots left in cohort #001</span>
        <h2>
          Stop scrolling.
          <br />
          <span className="grad">Start virring.</span>
        </h2>
        <p>Drop your email. We'll send one welcome note, your cohort number, and nothing else. Promise.</p>

        <form className="lp-cta-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks, you're on the list."); }}>
          <input type="email" placeholder="you@school.email" required aria-label="Your email" />
          <button type="submit">Reserve →</button>
        </form>
        <p className="micro">No spam. No tracking pixels. Unsubscribe with one tap.</p>
      </div>
    </section>
  );
}

/* --------------------------------- FOOTER --------------------------------- */
function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-inner">
        <div className="brandcol">
          <a className="brand" href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 900, fontSize: 18 }}>
            <BrandMark size={26} radius={8} />
            vira
          </a>
          <p>The first operating system for ADHD teens. Built with US-licensed clinicians and the teens they treat. We answer to teens first, parents second, investors third.</p>
        </div>

        <div>
          <h5>Product</h5>
          <ul>
            <li><a href="#solution">Features</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Press kit</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Manifesto</a></li>
          </ul>
        </div>
        <div>
          <h5>Care</h5>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Data &amp; safety</a></li>
            <li><a href="#">Crisis resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="lp-footer-bot">
        <span>© 2026 Vira Labs Inc. · Made for American teens, by people who lived it</span>
        <span>hi@vira.app · @vira.app</span>
      </div>
    </footer>
  );
}

/* --------------------------------- EMOTIONS --------------------------------- */
function Emotions() {
  return (
    <section className="lp-section lp-emo">
      <div className="lp-container lp-emo-head">
        <span className="lp-eyebrow"><span className="dot" /> One tap. Sixteen faces.</span>
        <h2>
          Naming the feeling
          <br />
          <em>is half the fight.</em>
        </h2>
        <p className="lead">
          Sliders ask teens to rate something they can't measure. Viri shows
          them a face and asks "this one?". Half the kids find the right
          one in three seconds, every time.
        </p>
      </div>

      <div className="lp-emo-strip" aria-label="Emotional faces">
        {EMOTIONS.map((e) => (
          <figure key={e.n} className="lp-emo-card">
            <div className="emo-bubble"><img src={emo(e.n)} alt={`Viri feeling ${e.label.toLowerCase()}`} /></div>
            <figcaption>{e.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- SKINS --------------------------------- */
function Skins() {
  return (
    <section className="lp-section lp-skins">
      <div className="lp-container">
        <div className="lp-skins-head">
          <div>
            <span className="lp-eyebrow"><span className="dot" /> Skins · weekly drops</span>
            <h2>
              The mascot
              <br />
              <span className="grad">teens want to dress.</span>
            </h2>
            <p className="lead">
              Unlock skins with streaks, quests and ViriCoins. Yes, the king
              is real. So is the samurai. Don't ask about the zombie.
            </p>
          </div>
          <div className="lp-coin">
            <img src={picto(28)} alt="" />
            <div>
              <b>1,250</b>
              <span>ViriCoins earned this week</span>
            </div>
          </div>
        </div>

        <div className="lp-skin-grid">
          {SKINS.map((s) => (
            <article key={s.n} className="lp-skin">
              <div className="skin-img" style={{ ["--bg-img" as string]: `url(${viri(s.n)})` }}>
                <img src={viri(s.n)} alt={s.label} />
              </div>
              <div className="skin-foot">
                <b>{s.label}</b>
                <span>{s.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- FLOATING CTA --------------------------------- */
function FloatingCTA() {
  return (
    <a className="lp-floating-cta" href="#waitlist">
      <span className="dot" />
      <span>Join waitlist</span>
      <span aria-hidden>→</span>
    </a>
  );
}

/* --------------------------------- LANDING --------------------------------- */
export function Landing() {
  return (
    <div className="lp">
      <Nav />
      <main>
        <Hero />
        <Strip />
        <Problem />
        <Solution />
        <Emotions />
        <How />
        <Gallery />
        <Skins />
        <Proof />
        <Pricing />
        <FAQ />
        <CTAblock />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

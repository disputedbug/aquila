import Link from "next/link";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const stats = [
  { label: "Engagement rate", value: "6.4%", delta: "+0.8% vs last week" },
  { label: "Reach", value: "1.28M", delta: "+12.2% this month" },
  { label: "Clicks", value: "84.3K", delta: "+3.1% this week" },
  { label: "Saves", value: "9.7K", delta: "+1.4% this week" },
];

const platforms = [
  { name: "Instagram", followers: "128K", trend: "+4.8%" },
  { name: "TikTok", followers: "92K", trend: "+6.2%" },
  { name: "LinkedIn", followers: "41K", trend: "+2.3%" },
  { name: "YouTube", followers: "58K", trend: "+3.9%" },
];

const schedule = [
  {
    time: "09:00",
    title: "Product drop teaser",
    channel: "Instagram Reel",
    status: "Ready",
  },
  {
    time: "11:30",
    title: "Founder AMA snippet",
    channel: "LinkedIn Post",
    status: "Draft",
  },
  {
    time: "14:00",
    title: "Customer story",
    channel: "YouTube Short",
    status: "Scheduled",
  },
  {
    time: "16:45",
    title: "Weekend giveaway",
    channel: "TikTok",
    status: "Ready",
  },
];

const campaigns = [
  {
    title: "Spring Launch",
    posts: "24 posts",
    due: "Due Feb 18",
    progress: 72,
  },
  {
    title: "Community Stories",
    posts: "12 posts",
    due: "Due Feb 22",
    progress: 48,
  },
  {
    title: "Creator Collab",
    posts: "18 posts",
    due: "Due Feb 28",
    progress: 34,
  },
];

export default function Home() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img
            className={styles.brandLogo}
            src="/eagle.jpg"
            alt="Aquila logo"
          />
          <div>
            <p className={styles.brandName}>Aquila</p>
            <p className={styles.brandTag}>Social Media control room</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/">
            Dashboard
          </Link>
          <Link className={styles.navItem} href="/analytics">
            Analytics
          </Link>
          <div className={styles.navDivider} />
          <Link className={styles.navItem} href="/content">
            Content
          </Link>
          <Link className={styles.navItem} href="/scheduling">
            Scheduling
          </Link>
          <Link className={styles.navItem} href="/review">
            Review
          </Link>
          <div className={styles.navDivider} />
          <Link className={styles.navItem} href="/inbox">
            Inbox
          </Link>
          <div className={styles.navDivider} />
          <Link className={styles.navItem} href="/settings">
            Settings
          </Link>
          <Link className={styles.navItem} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Next up</p>
          <p className={styles.cardValue}>Launch countdown</p>
          <p className={styles.cardMeta}>3 days · 6 assets to approve</p>
          <button className={styles.sidebarButton}>Review assets</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Team: Studio North</p>
          <span className={styles.statusDot}>Live</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Weekly pulse</p>
            <h1 className={styles.title}>Social media dashboard</h1>
          </div>
          <div className={styles.topbarActions}>
            <div className={styles.search}>
              <span className={styles.searchIcon}>⌕</span>
              <input
                type="text"
                placeholder="Search posts, campaigns, metrics"
                aria-label="Search dashboard"
              />
            </div>
            <button className={styles.primaryButton}>Schedule post</button>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h2>
              Momentum is climbing.
              <span> Keep the feed warm this weekend.</span>
            </h2>
            <p>
              Your community responded best to behind-the-scenes clips and quick
              how-to reels. Keep the cadence tight with two short-form posts per
              day.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.secondaryButton}>View insights</button>
              <button className={styles.ghostButton}>Open planner</button>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroMetric}>
              <p>Best time to post</p>
              <h3>11:30 AM</h3>
              <span>+18% engagement</span>
            </div>
            <div className={styles.heroChart}>
              <svg viewBox="0 0 280 140" aria-hidden="true">
                <path
                  d="M10 110 C50 80, 70 50, 110 60 C140 68, 150 25, 190 30 C230 36, 240 80, 270 70"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.heroLegend}>
                <span>Audience online</span>
                <span className={styles.legendValue}>Peak</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statGrid}>
          {stats.map((stat) => (
            <article key={stat.label} className={styles.statCard}>
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
              <span>{stat.delta}</span>
            </article>
          ))}
        </section>

        <section className={styles.analyticsGrid}>
          <article className={styles.analyticsCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Engagement by format</p>
                <p className={styles.cardMeta}>Last 14 days</p>
              </div>
              <button className={styles.ghostButton}>View report</button>
            </div>
            <div className={styles.barChart}>
              {["Reels", "Stories", "Posts", "Lives"].map((label, index) => (
                <div key={label} className={styles.barItem}>
                  <div
                    className={styles.bar}
                    style={{ height: `${80 - index * 12}%` }}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.analyticsCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Audience mix</p>
                <p className={styles.cardMeta}>By platform</p>
              </div>
              <button className={styles.ghostButton}>Export</button>
            </div>
            <div className={styles.donutWrap}>
              <div className={styles.donut} aria-hidden="true" />
              <div className={styles.donutLegend}>
                {platforms.map((platform) => (
                  <div key={platform.name} className={styles.legendRow}>
                    <span>{platform.name}</span>
                    <strong>{platform.followers}</strong>
                    <em>{platform.trend}</em>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className={styles.scheduleGrid}>
          <article className={styles.scheduleCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Today’s schedule</p>
                <p className={styles.cardMeta}>4 posts queued</p>
              </div>
              <button className={styles.primaryButtonSmall}>Add post</button>
            </div>
            <div className={styles.scheduleList}>
              {schedule.map((item) => (
                <div key={item.title} className={styles.scheduleRow}>
                  <span className={styles.scheduleTime}>{item.time}</span>
                  <div>
                    <p>{item.title}</p>
                    <span>{item.channel}</span>
                  </div>
                  <span className={styles.scheduleStatus}>{item.status}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.scheduleCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Campaign pipeline</p>
                <p className={styles.cardMeta}>Q1 content calendar</p>
              </div>
              <button className={styles.ghostButton}>View board</button>
            </div>
            <div className={styles.campaigns}>
              {campaigns.map((campaign) => (
                <div key={campaign.title} className={styles.campaignRow}>
                  <div className={styles.campaignMeta}>
                    <h4>{campaign.title}</h4>
                    <p>
                      {campaign.posts} · {campaign.due}
                    </p>
                  </div>
                  <div className={styles.campaignProgress}>
                    <span style={{ width: `${campaign.progress}%` }} />
                  </div>
                  <strong>{campaign.progress}%</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <Footer />
      </main>
    </div>
  );
}

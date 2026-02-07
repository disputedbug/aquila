import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const scheduled = [
  {
    id: "CNT-1032",
    title: "Weekend giveaway",
    time: "Sat · 10:00 AM",
    channel: "Instagram Reel",
    status: "Scheduled",
    preview:
      "Win a studio tour + merch pack. Comment with your favorite release this week.",
  },
  {
    id: "CNT-1031",
    title: "Founder AMA teaser",
    time: "Fri · 05:30 PM",
    channel: "LinkedIn Post",
    status: "Needs review",
    preview:
      "Our founders are going live tomorrow. Drop your questions and we will answer them.",
  },
  {
    id: "CNT-1029",
    title: "Customer story",
    time: "Mon · 09:15 AM",
    channel: "YouTube Short",
    status: "Scheduled",
    preview:
      "How Mila scaled her team using our workflow templates. Full story in 30 seconds.",
  },
  {
    id: "CNT-1028",
    title: "Launch day carousel",
    time: "Tue · 01:00 PM",
    channel: "Facebook Page",
    status: "Scheduled",
    preview:
      "Swipe through the top 5 features from the launch, plus a behind-the-scenes look.",
  },
];

export default function ReviewPage() {
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
          <Link className={styles.navItem} href="/">
            Dashboard
          </Link>
          <Link className={styles.navItem} href="/analytics">
            Analytics
          </Link>
          <Link className={styles.navItem} href="/content">
            Content
          </Link>
          <Link className={styles.navItem} href="/scheduling">
            Scheduling
          </Link>
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/review">
            Review
          </Link>
          <Link className={styles.navItem} href="/settings">
            Settings
          </Link>
          <Link className={styles.navItem} href="/inbox">
            Inbox
          </Link>
          <Link className={styles.navItem} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Upcoming posts</p>
          <p className={styles.cardValue}>8 scheduled</p>
          <p className={styles.cardMeta}>Next publish in 2h 15m</p>
          <button className={styles.sidebarButton}>Open calendar</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Review queue</p>
          <span className={styles.statusDot}>Active</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Review</p>
            <h1 className={styles.title}>Planned content</h1>
          </div>
          <div className={styles.topbarActions}>
            <button className={styles.ghostButton}>Filter</button>
            <button className={styles.primaryButton}>Bulk reschedule</button>
          </div>
        </header>

        <section className={styles.grid}>
          {scheduled.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.channel} · {item.time}
                  </p>
                </div>
                <span className={styles.status}>{item.status}</span>
              </div>
              <div className={styles.preview}>
                <div className={styles.previewImage}>
                  <span>{item.id}</span>
                </div>
                <p>{item.preview}</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.secondaryButton}>Reschedule</button>
                <button className={styles.ghostButton}>Edit</button>
                <button className={styles.dangerButton}>Delete</button>
              </div>
            </article>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}

import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const upcoming = [
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

const queue = [
  { title: "Behind-the-scenes clip", channel: "Instagram", due: "Fri" },
  { title: "Case study pull-quote", channel: "LinkedIn", due: "Mon" },
  { title: "Tips carousel", channel: "Instagram", due: "Tue" },
  { title: "Creator duet", channel: "TikTok", due: "Wed" },
];

const drafts = [
  { title: "Launch day checklist", owner: "Maya", updated: "2h ago" },
  { title: "Customer spotlight", owner: "Ravi", updated: "5h ago" },
  { title: "Brand moodboard", owner: "Ava", updated: "Yesterday" },
];

const days = [
  { day: "Mon", date: 12 },
  { day: "Tue", date: 13 },
  { day: "Wed", date: 14 },
  { day: "Thu", date: 15 },
  { day: "Fri", date: 16 },
  { day: "Sat", date: 17 },
  { day: "Sun", date: 18 },
];

export default function SchedulingPage() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img
            className={styles.brandLogo}
            src="/eagle.webp"
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
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/scheduling">
            Scheduling
          </Link>
          <Link className={styles.navItem} href="/review">
            Review
          </Link>
          <Link className={styles.navItem} href="/settings">
            Settings
          </Link>
          <button className={styles.navItem}>Inbox</button>
          <Link className={styles.navItem} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Queue health</p>
          <p className={styles.cardValue}>18 posts ready</p>
          <p className={styles.cardMeta}>Keep 3-day buffer</p>
          <button className={styles.sidebarButton}>Add draft</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Timezone: PST</p>
          <span className={styles.statusDot}>Synced</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Scheduling</p>
            <h1 className={styles.title}>Plan the week</h1>
          </div>
          <div className={styles.topbarActions}>
            <button className={styles.ghostButton}>Sync calendars</button>
            <button className={styles.primaryButton}>New scheduled post</button>
          </div>
        </header>

        <section className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <div>
              <p className={styles.cardTitle}>February Week 3</p>
              <p className={styles.cardMeta}>12 posts scheduled</p>
            </div>
            <div className={styles.calendarActions}>
              <button className={styles.ghostButton}>Today</button>
              <button className={styles.secondaryButton}>Auto-schedule</button>
            </div>
          </div>
          <div className={styles.calendarGrid}>
            {days.map((item) => (
              <div key={item.day} className={styles.dayCard}>
                <div className={styles.dayHeader}>
                  <span>{item.day}</span>
                  <strong>{item.date}</strong>
                </div>
                <div className={styles.daySlot}>
                  <p>2 posts</p>
                  <span>Reel · Story</span>
                </div>
                <div className={styles.daySlotMuted}>
                  <p>1 draft</p>
                  <span>LinkedIn</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Today’s queue</p>
                <p className={styles.cardMeta}>4 posts queued</p>
              </div>
              <button className={styles.primaryButtonSmall}>Add slot</button>
            </div>
            <div className={styles.scheduleList}>
              {upcoming.map((item) => (
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

          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Queue backlog</p>
                <p className={styles.cardMeta}>Ready to schedule</p>
              </div>
              <button className={styles.ghostButton}>Sort by priority</button>
            </div>
            <div className={styles.queueList}>
              {queue.map((item) => (
                <div key={item.title} className={styles.queueRow}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.channel}</p>
                  </div>
                  <span className={styles.queueDue}>{item.due}</span>
                </div>
              ))}
            </div>
            <div className={styles.queueFooter}>
              <span>Next batch auto-schedules in 3 hours</span>
              <button className={styles.secondaryButton}>Run now</button>
            </div>
          </article>
        </section>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Drafts needing review</p>
                <p className={styles.cardMeta}>3 drafts</p>
              </div>
              <button className={styles.ghostButton}>Open drafts</button>
            </div>
            <div className={styles.draftsList}>
              {drafts.map((draft) => (
                <div key={draft.title} className={styles.draftRow}>
                  <div>
                    <h4>{draft.title}</h4>
                    <p>
                      {draft.owner} · {draft.updated}
                    </p>
                  </div>
                  <button className={styles.primaryButtonSmall}>Review</button>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Optimization tips</p>
                <p className={styles.cardMeta}>Based on last 30 days</p>
              </div>
            </div>
            <ul className={styles.tips}>
              <li>Keep Reels between 18–25 seconds to lift completion.</li>
              <li>Schedule LinkedIn updates before 11:00 AM.</li>
              <li>Use 2 CTA variations to avoid creative fatigue.</li>
            </ul>
            <button className={styles.secondaryButton}>Apply suggestions</button>
          </article>
        </section>

        <Footer />
      </main>
    </div>
  );
}

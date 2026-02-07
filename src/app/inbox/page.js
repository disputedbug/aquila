import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const inboxItems = [
  {
    id: "REQ-112",
    title: "Approve weekend giveaway caption",
    source: "Content queue",
    time: "2 hours ago",
    status: "Pending",
  },
  {
    id: "REQ-111",
    title: "Reply needed: customer question on IG",
    source: "Instagram",
    time: "4 hours ago",
    status: "Urgent",
  },
  {
    id: "REQ-109",
    title: "New comment spike on LinkedIn post",
    source: "Analytics",
    time: "Yesterday",
    status: "Info",
  },
  {
    id: "REQ-104",
    title: "Draft ready for review: Launch day carousel",
    source: "Review queue",
    time: "2 days ago",
    status: "Pending",
  },
];

export default function InboxPage() {
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
          <Link className={styles.navItem} href="/review">
            Review
          </Link>
          <Link className={styles.navItem} href="/settings">
            Settings
          </Link>
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/inbox">
            Inbox
          </Link>
          <Link className={styles.navItem} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Inbox focus</p>
          <p className={styles.cardValue}>4 items</p>
          <p className={styles.cardMeta}>2 need action today</p>
          <button className={styles.sidebarButton}>Open filters</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Inbox</p>
          <span className={styles.statusDot}>Live</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Inbox</p>
            <h1 className={styles.title}>Team requests</h1>
          </div>
          <div className={styles.topbarActions}>
            <button className={styles.ghostButton}>Mark all read</button>
            <button className={styles.primaryButton}>New note</button>
          </div>
        </header>

        <section className={styles.panel}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardTitle}>Pending items</p>
              <p className={styles.cardMeta}>Latest team requests</p>
            </div>
            <button className={styles.ghostButton}>Sort</button>
          </div>
          <div className={styles.table}>
            {inboxItems.map((item) => (
              <div key={item.id} className={styles.tableRow}>
                <div>
                  <h4>{item.title}</h4>
                  <p>
                    {item.source} · {item.time}
                  </p>
                </div>
                <span className={styles.tableId}>{item.id}</span>
                <span className={styles.statusPill}>{item.status}</span>
                <div className={styles.actions}>
                  <button className={styles.secondaryButton}>Open</button>
                  <button className={styles.ghostButton}>Assign</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const timezones = [
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata",
  "Asia/Singapore",
];

const fbPages = [
  { name: "Aquila Studio", type: "Page", status: "Connected" },
  { name: "Aquila Creators", type: "Group", status: "Connected" },
  { name: "Aquila Updates", type: "Page", status: "Not connected" },
  { name: "Aquila Community", type: "Group", status: "Not connected" },
];

export default function SettingsPage() {
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
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/settings">
            Settings
          </Link>
          <Link className={styles.navItem} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Workspace</p>
          <p className={styles.cardValue}>Aquila HQ</p>
          <p className={styles.cardMeta}>Admin access</p>
          <button className={styles.sidebarButton}>Manage users</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Settings</p>
          <span className={styles.statusDot}>Secure</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Settings</p>
            <h1 className={styles.title}>Workspace preferences</h1>
          </div>
          <button className={styles.primaryButton}>Save changes</button>
        </header>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Timezone</p>
                <p className={styles.cardMeta}>
                  Used for scheduling and reporting.
                </p>
              </div>
            </div>
            <div className={styles.field}>
              <label>
                Default timezone
                <select defaultValue="Asia/Kolkata">
                  {timezones.map((zone) => (
                    <option key={zone}>{zone}</option>
                  ))}
                </select>
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" defaultChecked />
                Auto-adjust when traveling
              </label>
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Notifications</p>
                <p className={styles.cardMeta}>
                  Stay updated on approvals and issues.
                </p>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.checkbox}>
                <input type="checkbox" defaultChecked />
                Email me daily summaries
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                Slack alerts for failed posts
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" defaultChecked />
                Approval reminders
              </label>
            </div>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardTitle}>Facebook pages & groups</p>
              <p className={styles.cardMeta}>
                Link pages where Aquila can publish content.
              </p>
            </div>
            <button className={styles.ghostButton}>Add new page</button>
          </div>
          <div className={styles.table}>
            {fbPages.map((page) => (
              <div key={page.name} className={styles.tableRow}>
                <div>
                  <h4>{page.name}</h4>
                  <p>{page.type}</p>
                </div>
                <span className={styles.statusPill}>{page.status}</span>
                <div className={styles.actions}>
                  <button className={styles.secondaryButton}>Link</button>
                  <button className={styles.ghostButton}>Manage</button>
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

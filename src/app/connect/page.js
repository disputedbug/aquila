import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const accounts = [
  {
    name: "Facebook",
    description: "Pages, reels, and comment moderation.",
    status: "Not connected",
  },
  {
    name: "X (Twitter)",
    description: "Threads, mentions, and sentiment tracking.",
    status: "Not connected",
  },
  {
    name: "LinkedIn",
    description: "Company pages and employee advocacy.",
    status: "Not connected",
  },
];

export default function ConnectPage() {
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
          <Link className={styles.navItem} href="/scheduling">
            Scheduling
          </Link>
          <Link className={styles.navItem} href="/review">
            Review
          </Link>
          <Link className={styles.navItem} href="/settings">
            Settings
          </Link>
          <button className={styles.navItem}>Inbox</button>
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Access status</p>
          <p className={styles.cardValue}>0 / 3 connected</p>
          <p className={styles.cardMeta}>Authorize to unlock analytics</p>
          <button className={styles.sidebarButton}>Manage roles</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Workspace: Studio North</p>
          <span className={styles.statusDot}>Secure</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Account access</p>
            <h1 className={styles.title}>Connect social profiles</h1>
          </div>
          <button className={styles.primaryButton}>Add new workspace</button>
        </header>

        <section className={styles.hero}>
          <div>
            <h2>Give Aquila permission to publish and report.</h2>
            <p>
              OAuth is required per platform. Connect at least one profile to
              unlock scheduling and analytics.
            </p>
          </div>
          <div className={styles.heroCard}>
            <p className={styles.cardTitle}>Security checklist</p>
            <ul>
              <li>Read-only scopes by default</li>
              <li>Two-factor ready</li>
              <li>Audit log enabled</li>
            </ul>
          </div>
        </section>

        <section className={styles.grid}>
          {accounts.map((account) => (
            <article key={account.name} className={styles.accountCard}>
              <div>
                <h3>{account.name}</h3>
                <p>{account.description}</p>
              </div>
              <div className={styles.accountFooter}>
                <span className={styles.statusPill}>{account.status}</span>
                <button className={styles.secondaryButton}>
                  Continue with {account.name}
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.notice}>
          <div>
            <h4>Need enterprise SSO?</h4>
            <p>We support Okta and Azure AD for team-wide access.</p>
          </div>
          <button className={styles.ghostButton}>Contact sales</button>
        </section>

        <Footer />
      </main>
    </div>
  );
}

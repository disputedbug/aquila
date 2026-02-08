import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const kpis = [
  { label: "Total likes", value: "184.2K", delta: "+6.1% vs last week" },
  { label: "Comments", value: "18.4K", delta: "+3.4% vs last week" },
  { label: "Shares", value: "27.1K", delta: "+4.8% vs last week" },
  { label: "Dislikes", value: "1.2K", delta: "-0.4% vs last week" },
];

const performance = [
  {
    id: "CNT-1026",
    title: "Founder quote",
    platform: "LinkedIn",
    likes: "12.4K",
    comments: "1.1K",
    shares: "2.8K",
    dislikes: "42",
  },
  {
    id: "CNT-1024",
    title: "Behind-the-scenes clip",
    platform: "Instagram",
    likes: "38.1K",
    comments: "3.2K",
    shares: "5.6K",
    dislikes: "188",
  },
  {
    id: "CNT-1025",
    title: "Product launch carousel",
    platform: "Facebook",
    likes: "22.7K",
    comments: "2.1K",
    shares: "4.3K",
    dislikes: "96",
  },
  {
    id: "CNT-1027",
    title: "Customer story",
    platform: "YouTube",
    likes: "14.2K",
    comments: "1.6K",
    shares: "3.1K",
    dislikes: "240",
  },
];

const channels = [
  { name: "Facebook", reach: "428K", growth: "+4.1%" },
  { name: "Instagram", reach: "512K", growth: "+6.8%" },
  { name: "X (Twitter)", reach: "221K", growth: "+2.2%" },
  { name: "LinkedIn", reach: "189K", growth: "+3.6%" },
];

export default function AnalyticsPage() {
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
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/analytics">
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
          <p className={styles.cardTitle}>Reporting window</p>
          <p className={styles.cardValue}>Last 30 days</p>
          <p className={styles.cardMeta}>Updated 12 min ago</p>
          <button className={styles.sidebarButton}>Download PDF</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Attribution: Multi-touch</p>
          <span className={styles.statusDot}>Clean</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Analytics</p>
            <h1 className={styles.title}>Post performance</h1>
          </div>
          <div className={styles.topbarActions}>
            <button className={styles.ghostButton}>Compare periods</button>
            <button className={styles.primaryButton}>Share report</button>
          </div>
        </header>

        <section className={styles.kpiGrid}>
          {kpis.map((kpi) => (
            <article key={kpi.label} className={styles.kpiCard}>
              <p>{kpi.label}</p>
              <h3>{kpi.value}</h3>
              <span>{kpi.delta}</span>
            </article>
          ))}
        </section>

        <section className={styles.grid}>
          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Content leaderboard</p>
                <p className={styles.cardMeta}>Likes, comments, shares</p>
              </div>
              <button className={styles.ghostButton}>Filter</button>
            </div>
            <div className={styles.table}>
              {performance.map((item) => (
                <div key={item.id} className={styles.tableRow}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.platform}</p>
                  </div>
                  <span className={styles.tableId}>{item.id}</span>
                  <div className={styles.metrics}>
                    <span>👍 {item.likes}</span>
                    <span>💬 {item.comments}</span>
                    <span>↗ {item.shares}</span>
                    <span>👎 {item.dislikes}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardTitle}>Channel reach</p>
                <p className={styles.cardMeta}>Aggregated totals</p>
              </div>
              <button className={styles.ghostButton}>View detail</button>
            </div>
            <div className={styles.channelList}>
              {channels.map((channel) => (
                <div key={channel.name} className={styles.channelRow}>
                  <div>
                    <h4>{channel.name}</h4>
                    <p>{channel.reach}</p>
                  </div>
                  <span className={styles.channelGrowth}>{channel.growth}</span>
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

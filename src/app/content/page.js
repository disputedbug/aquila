"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Sanscript from "sanscript";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

const seedLibrary = [
  {
    id: "CNT-1024",
    title: "Behind-the-scenes clip",
    type: "Video",
    status: "Ready",
    targets: ["fb-page", "ig", "x"],
  },
  {
    id: "CNT-1025",
    title: "Product launch carousel",
    type: "Photo",
    status: "Draft",
    targets: ["fb-group", "linkedin"],
  },
  {
    id: "CNT-1026",
    title: "Founder quote",
    type: "Text",
    status: "Approved",
    targets: ["linkedin", "x"],
  },
];

const initialForm = {
  title: "",
  text: "",
  tags: "",
  scheduledFor: "",
};

const channelOptions = [
  { id: "fb-page", label: "FB Page", badge: "FP", color: "#1877f2" },
  { id: "fb-group", label: "FB Group", badge: "FG", color: "#0f4c81" },
  { id: "fb-home", label: "FB Home", badge: "FH", color: "#60a5fa" },
  { id: "ig", label: "Instagram", badge: "IG", color: "#e1306c" },
  { id: "x", label: "X", badge: "X", color: "#0f172a" },
  { id: "linkedin", label: "LinkedIn", badge: "in", color: "#0a66c2" },
];

function DraftForm({
  form,
  files,
  language,
  onLanguageChange,
  onEnglishChange,
  romanText,
  onHindiChange,
  onFiles,
  onSubmit,
  submitLabel,
  secondaryLabel,
  onSecondary,
}) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.languageToggle}>
        <button
          type="button"
          className={`${styles.langButton} ${
            language === "en" ? styles.langActive : ""
          }`}
          onClick={() => onLanguageChange("en")}
        >
          English
        </button>
        <button
          type="button"
          className={`${styles.langButton} ${
            language === "hi" ? styles.langActive : ""
          }`}
          onClick={() => onLanguageChange("hi")}
        >
          Hindi
        </button>
      </div>
      <label className={styles.label}>
        Title
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={onEnglishChange}
          placeholder="Short internal title"
        />
      </label>
      <label className={styles.label}>
        Content text
        {language === "en" ? (
          <textarea
            name="text"
            value={form.text}
            onChange={onEnglishChange}
            placeholder="Write your caption, hooks, or thread here..."
            rows={6}
          />
        ) : (
          <>
            <textarea
              name="romanText"
              value={romanText}
              onChange={onHindiChange}
              placeholder="Type in English to generate Hindi..."
              rows={6}
            />
            <div className={styles.hindiPreview}>
              <span>Hindi output</span>
              <p>{form.text || "हिंदी पाठ यहाँ दिखाई देगा।"}</p>
            </div>
          </>
        )}
      </label>
      <div className={styles.formRow}>
        <label className={styles.label}>
          Tags
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={onEnglishChange}
            placeholder="launch, q1, teaser"
          />
        </label>
        <label className={styles.label}>
          Publish date & time
          <input
            type="datetime-local"
            name="scheduledFor"
            value={form.scheduledFor}
            onChange={onEnglishChange}
            min={new Date().toISOString().slice(0, 16)}
          />
        </label>
      </div>
      <label className={styles.uploader}>
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={onFiles}
        />
        <div>
          <h4>Upload media</h4>
          <p>Drag & drop or select photos and videos.</p>
        </div>
        <span className={styles.uploadMeta}>
          {files.length ? `${files.length} files selected` : "Max 500MB"}
        </span>
      </label>
      <div className={styles.formActions}>
        <button type="button" className={styles.ghostButton} onClick={onSecondary}>
          {secondaryLabel}
        </button>
        <button type="submit" className={styles.secondaryButton}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default function ContentPage() {
  const [library, setLibrary] = useState(seedLibrary);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [language, setLanguage] = useState("en");
  const [romanText, setRomanText] = useState("");
  const [modalForm, setModalForm] = useState(initialForm);
  const [modalFiles, setModalFiles] = useState([]);
  const [modalLanguage, setModalLanguage] = useState("en");
  const [modalRomanText, setModalRomanText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastCreated, setLastCreated] = useState(null);
  const [selectedTargets, setSelectedTargets] = useState(() => {
    const initial = {};
    seedLibrary.forEach((item) => {
      initial[item.id] = new Set(item.targets || []);
    });
    return initial;
  });

  const nextId = useMemo(() => {
    const base = 1027 + library.length;
    return `CNT-${base}`;
  }, [library.length]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    if (nextLanguage === "en") {
      setRomanText("");
    }
  };

  const handleFiles = (event) => {
    setFiles(Array.from(event.target.files || []));
  };

  const handleModalChange = (event) => {
    const { name, value } = event.target;
    setModalForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalLanguageChange = (nextLanguage) => {
    setModalLanguage(nextLanguage);
    if (nextLanguage === "en") {
      setModalRomanText("");
    }
  };

  const handleModalFiles = (event) => {
    setModalFiles(Array.from(event.target.files || []));
  };

  const createDraft = ({ draftForm, draftFiles, draftLanguage, onReset }) => {
    if (!draftForm.title.trim() && !draftForm.text.trim()) {
      return null;
    }
    const newItem = {
      id: nextId,
      title: draftForm.title || "Untitled draft",
      type: draftFiles.length
        ? "Media"
        : draftLanguage === "hi"
          ? "Text (Hindi)"
          : "Text",
      status: "Draft",
      targets: [],
    };
    setLibrary((prev) => [newItem, ...prev]);
    setLastCreated(newItem);
    setSelectedTargets((prev) => ({
      ...prev,
      [newItem.id]: new Set(),
    }));
    onReset();
    return newItem;
  };

  const toggleTarget = (contentId, targetId) => {
    setSelectedTargets((prev) => {
      const next = new Set(prev[contentId] || []);
      if (next.has(targetId)) {
        next.delete(targetId);
      } else {
        next.add(targetId);
      }
      return { ...prev, [contentId]: next };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const created = createDraft({
      draftForm: form,
      draftFiles: files,
      draftLanguage: language,
      onReset: () => {
        setForm(initialForm);
        setFiles([]);
        setLanguage("en");
        setRomanText("");
      },
    });
    if (created) {
      setModalForm(initialForm);
      setModalFiles([]);
      setModalLanguage("en");
      setModalRomanText("");
      setIsModalOpen(true);
    }
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    createDraft({
      draftForm: modalForm,
      draftFiles: modalFiles,
      draftLanguage: modalLanguage,
      onReset: () => {
        setModalForm(initialForm);
        setModalFiles([]);
        setModalLanguage("en");
        setModalRomanText("");
      },
    });
    setIsModalOpen(true);
  };

  const handleHindiChange = (event) => {
    const value = event.target.value;
    setRomanText(value);
    setForm((prev) => ({
      ...prev,
      text: Sanscript.t(value, "itrans", "devanagari"),
    }));
  };

  const handleModalHindiChange = (event) => {
    const value = event.target.value;
    setModalRomanText(value);
    setModalForm((prev) => ({
      ...prev,
      text: Sanscript.t(value, "itrans", "devanagari"),
    }));
  };

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
          <Link className={`${styles.navItem} ${styles.navActive}`} href="/content">
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
          <Link className={styles.navItem} href="/inbox">
            Inbox
          </Link>
          <Link className={styles.navItem} href="/connect">
            Connect
          </Link>
        </nav>
        <div className={styles.sidebarCard}>
          <p className={styles.cardTitle}>Library size</p>
          <p className={styles.cardValue}>{library.length} items</p>
          <p className={styles.cardMeta}>4 drafts need review</p>
          <button className={styles.sidebarButton}>Open review</button>
        </div>
        <div className={styles.sidebarFooter}>
          <p>Storage: 4.2 GB</p>
          <span className={styles.statusDot}>Synced</span>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Content studio</p>
            <h1 className={styles.title}>Create content drafts</h1>
          </div>
          <div className={styles.topbarActions}>
            <span className={styles.nextId}>Next ID: {nextId}</span>
            <button className={styles.primaryButton}>Import assets</button>
          </div>
        </header>

        <section className={styles.editor}>
          <div className={styles.editorHeader}>
            <div>
              <p className={styles.cardTitle}>Draft editor</p>
              <p className={styles.cardMeta}>
                Add copy, upload assets, then schedule from the ID.
              </p>
            </div>
            <span className={styles.idPill}>ID {nextId}</span>
          </div>
          <DraftForm
            form={form}
            files={files}
            language={language}
            onLanguageChange={handleLanguageChange}
            onEnglishChange={handleChange}
            romanText={romanText}
            onHindiChange={handleHindiChange}
            onFiles={handleFiles}
            onSubmit={handleSubmit}
            submitLabel="Create draft"
            secondaryLabel="Save draft"
            onSecondary={() => setIsModalOpen(true)}
          />
          {lastCreated ? (
            <div className={styles.lastCreated}>
              <div>
                <p className={styles.cardTitle}>Last created</p>
                <h4>{lastCreated.title}</h4>
                <p>{lastCreated.type} · {lastCreated.id}</p>
              </div>
              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                Create another
              </button>
            </div>
          ) : null}
        </section>

        <section className={styles.library}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.cardTitle}>Content library</p>
              <p className={styles.cardMeta}>
                Use the ID when scheduling posts.
              </p>
            </div>
            <button className={styles.ghostButton}>Filter</button>
          </div>
          <div className={styles.table}>
            {library.map((item) => (
              <div key={item.id} className={styles.tableRow}>
                <div className={styles.tableMain}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.type}</p>
                  </div>
                  <div className={styles.channelPicker}>
                    <span className={styles.channelLabel}>Post to</span>
                    <div className={styles.channelList}>
                      {channelOptions.map((channel) => {
                        const active = selectedTargets[item.id]?.has(channel.id);
                        return (
                          <button
                            key={channel.id}
                            type="button"
                            className={`${styles.channelIcon} ${active ? styles.channelActive : ""}`}
                            style={{ background: channel.color }}
                            onClick={() => toggleTarget(item.id, channel.id)}
                            aria-pressed={active}
                            title={channel.label}
                          >
                            {channel.badge}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <span className={styles.tableId}>{item.id}</span>
                <span className={styles.tableStatus}>{item.status}</span>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      {isModalOpen ? (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.cardTitle}>Next draft</p>
                <h3>Draft ID {nextId}</h3>
              </div>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
            <DraftForm
              form={modalForm}
              files={modalFiles}
              language={modalLanguage}
              onLanguageChange={handleModalLanguageChange}
              onEnglishChange={handleModalChange}
              romanText={modalRomanText}
              onHindiChange={handleModalHindiChange}
              onFiles={handleModalFiles}
              onSubmit={handleModalSubmit}
              submitLabel="Create next draft"
              secondaryLabel="Close panel"
              onSecondary={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  Globe2,
  Heart,
  Instagram,
  Mail,
  MessageCircle,
  Music2,
  Send,
  Sparkles,
  UsersRound,
} from "lucide-react";

type Language = "en" | "ar";

type LinkItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: typeof UsersRound;
  tone: "plum" | "lilac" | "butter";
};

const links: Record<Language, LinkItem[]> = {
  ar: [
    {
      title: "موقعنا الإلكتروني",
      subtitle: "اعرف المزيد عنا",
      href: "https://travellers-english-club.travellers-club.workers.dev/",
      icon: Globe2,
      tone: "plum",
    },
    {
      title: "تابعنا على تيك توك",
      subtitle: "مقاطع · لحظات · تحديثات",
      href: "https://www.tiktok.com/@travellers_english?_r=1&_t=ZS-99ep9xTMuJR",
      icon: Music2,
      tone: "butter",
    },
    {
      title: "إنستغرام",
      subtitle: "صور · ريلز · مجتمعنا",
      href: "https://www.instagram.com/infotravellers.english.club/",
      icon: Instagram,
      tone: "lilac",
    },
    {
      title: "انضم إلى مجتمعنا",
      subtitle: "نموذج التسجيل",
      href: "/join",
      icon: UsersRound,
      tone: "plum",
    },
    {
      title: "تواصل معنا",
      subtitle: "infotravellers.english.club@gmail.com",
      href: "mailto:infotravellers.english.club@gmail.com",
      icon: Mail,
      tone: "butter",
    },
  ],

  en: [
    {
      title: "Our Website",
      subtitle: "More About Us",
      href: "https://travellers-english-club.travellers-club.workers.dev/",
      icon: Globe2,
      tone: "plum",
    },
    
    {
      title: "Join Our Community",
      subtitle: "Sign Up Form",
      href: "/join",
      icon: UsersRound,
      tone: "plum",
    },
    {
      title: "Follow Us on TikTok",
      subtitle: "Shorts · Moments · Updates",
      href: "https://www.tiktok.com/@travellers_english?_r=1&_t=ZS-99ep9xTMuJR",
      icon: Music2,
      tone: "butter",
    },
    {
      title: "Instagram",
      subtitle: "Photos · Reels · Community",
      href: "https://www.instagram.com/infotravellers.english.club/",
      icon: Instagram,
      tone: "lilac",
    },
    {
      title: "Contact Us",
      subtitle: "infotravellers.english.club@gmail.com",
      href: "mailto:infotravellers.english.club@gmail.com",
      icon: Mail,
      tone: "butter",
    },
  ],
};

function LinkCard({
  item,
  index,
  language,
}: {
  item: LinkItem;
  index: number;
  language: Language;
}) {
  const Icon = item.icon;
  const external = item.href.startsWith("http");

  const cardClass = "link-card link-card-" + item.tone;

  return (
    <a
      className={cardClass}
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      dir={language === "ar" ? "rtl" : "ltr"}
      style={
        {
          "--delay": `${index * 55}ms`,
        } as CSSProperties
      }
    >
      <span className="link-icon">
        <Icon strokeWidth={2.15} />
      </span>

      <span className="link-copy">
        <strong>{item.title}</strong>
        <small>{item.subtitle}</small>
      </span>

      <span className="link-arrow">
        <ArrowUpRight strokeWidth={2.25} />
      </span>
    </a>
  );
}

export default function Home() {
  // English is the DEFAULT language
  const [language, setLanguage] = useState<Language>("en");
  const isArabic = language === "ar";

  return (
    <main
      className="page-shell"
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      {/* Background texture */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Decorative routes */}
      <div className="route route-top" aria-hidden="true">
        <span />
      </div>

      <div className="route route-bottom" aria-hidden="true">
        <span />
      </div>

      {/* Decorative leaves */}
      <div className="leaf-cluster leaf-left" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="leaf-cluster leaf-right" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Decorative books */}
      <div className="book-stack" aria-hidden="true">
        <b>
          Better
          <br />
          English
        </b>

        <b>
          Bigger
          <br />
          Dreams
        </b>

        <b>
          Together <Heart size={12} fill="currentColor" />
        </b>
      </div>

      <section
        className="content-column"
        aria-labelledby="club-title"
      >
        {/* LANGUAGE SWITCHER */}
        <div className="language-switcher" aria-label="Language">
          <button
            type="button"
            className={language === "ar" ? "active" : ""}
            onClick={() => setLanguage("ar")}
            aria-pressed={language === "ar"}
          >
            العربية
          </button>

          <span>|</span>

          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            English
          </button>
        </div>

        {/* HERO */}
        <header className="hero-header">
          {/* Flight path decoration */}
          <div className="flight-path" aria-hidden="true">
            <span className="flight-dot" />
            <span className="flight-line" />

            <span className="flight-arrow">
              <Send size={25} fill="currentColor" />
            </span>
          </div>

          {/* REAL LOGO */}
          <img
            src="/logo.png"
            alt="Travellers English Club logo"
            className="club-logo"
          />

          {/* Eyebrow */}
          <div className="eyebrow">
            <Sparkles size={14} fill="currentColor" />

            <span>
              {isArabic
                ? "الإنجليزية من خلال التواصل"
                : "ENGLISH THROUGH CONNECTION"}
            </span>

            <Sparkles size={14} fill="currentColor" />
          </div>

          {/* Main title */}
          <h1 id="club-title">
            Travellers <em>English</em> Club
          </h1>

          {/* Welcome */}
          <p className="welcome-line">
            {isArabic ? (
              <>
                نحن سعداء جدًا بوجودك{" "}
                <span>هنا</span>{" "}
                <Heart size={21} fill="none" />
              </>
            ) : (
              <>
                We&apos;re so happy to have{" "}
                <span>u</span> here{" "}
                <Heart size={21} fill="none" />
              </>
            )}
          </p>
        </header>

        {/* LINKS */}
        <section
          className="links-stack"
          aria-label={isArabic ? "روابط النادي" : "Club links"}
        >
          {links[language].map((item, index) => (
            <LinkCard
              key={item.title}
              item={item}
              index={index}
              language={language}
            />
          ))}
        </section>

        {/* CLUB PROMISE */}
        <section
          className="mini-note"
          aria-label={isArabic ? "رسالة النادي" : "Club promise"}
        >
          <div className="note-rule" />

          <p>
            {isArabic
              ? "تعال كما أنت. وغادر بثقة أكبر قليلًا."
              : "Come as you are. Leave a little more confident."}
          </p>

          <div className="note-rule" />
        </section>

        {/* SOCIAL LINKS */}
        <nav
          className="social-row"
          aria-label={
            isArabic
              ? "روابط التواصل الاجتماعي"
              : "Social links"
          }
        >
          <a
            href="https://www.tiktok.com/@travellers_english?_r=1&_t=ZS-99ep9xTMuJR"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <Music2 />
          </a>

          <a
            href="https://www.instagram.com/infotravellers.english.club/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle />
          </a>

          <a
            href="https://travellers-english-club.travellers-club.workers.dev/"
            target="_blank"
            rel="noreferrer"
            aria-label={
              isArabic
                ? "الموقع الإلكتروني"
                : "Website"
            }
          >
            <Globe2 />
          </a>
        </nav>

        {/* FOOTER */}
        <footer className="footer-lockup">
          <div className="footer-plane" aria-hidden="true">
            <span />

            <Send size={20} fill="currentColor" />

            <span />
          </div>

          <p>
            {isArabic ? (
              <>
                مارس الإنجليزية <i>•</i>{" "}
                تعرّف على أشخاص جدد{" "}
                <i>•</i>{" "}
                ابنِ ثقتك بنفسك
              </>
            ) : (
              <>
                Practice English <i>•</i>{" "}
                Meet New People <i>•</i>{" "}
                Build Confidence
              </>
            )}
          </p>

          <small>
            Travellers English Club · Est. 2026
          </small>
        </footer>
      </section>
    </main>
  );
}
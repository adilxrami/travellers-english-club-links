import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  UsersRound,
} from "lucide-react";

const CLUB_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScE8IAR-GdS1KYcF4lIbCAn-d1a9-bZMQ-v_YIjBZejBJnCaA/viewform";

const COURSE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScuCx1ImMjK2vAaSmh1YvCy9FhYrNGISWRqsUW7-KFNH4QOnQ/viewform";

type Language = "en" | "ar";

export default function Join() {
  // English is the DEFAULT language
  const [language, setLanguage] = useState<Language>("en");
  const isArabic = language === "ar";

  useEffect(() => {
    document.title = isArabic
      ? "انضم إلينا | Travellers English Club"
      : "Join Us | Travellers English Club";

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    return () => {
      document.title = "Travellers English Club";
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    };
  }, [language, isArabic]);

  return (
    <main
      className="join-page"
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      <div className="join-background" aria-hidden="true" />

      <section className="join-container">
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

        {/* BACK */}
        <a href="/" className="back-link">
          {isArabic ? (
            <>
              <ArrowUpRight size={18} />
              <span>العودة إلى Travellers English Club</span>
            </>
          ) : (
            <>
              <ArrowLeft size={18} />
              <span>Back to Travellers English Club</span>
            </>
          )}
        </a>

        {/* LOGO */}
        <div className="join-logo-wrapper">
          <img
            src="/logo.png"
            alt="Travellers English Club"
            className="join-logo"
          />
        </div>

        {/* EYEBROW */}
        <div className="join-eyebrow">
          <UsersRound size={15} />

          <span>
            {isArabic ? "أهلًا بك معنا" : "YOU'RE WELCOME HERE"}
          </span>
        </div>

        {/* TITLE */}
        <h1>
          {isArabic ? (
            <>
              كيف تود
              <em>الانضمام إلينا؟</em>
            </>
          ) : (
            <>
              How would you like
              <em>to join us?</em>
            </>
          )}
        </h1>

        {/* INTRO */}
        <p className="join-intro">
          {isArabic
            ? "سواء كنت ترغب في التعرف على أشخاص جدد، ممارسة الإنجليزية، أو تطوير مستواك في اللغة، ستجد مكانًا مناسبًا لك في Travellers English Club."
            : "Whether you want to meet new people, practice English, or take your English to the next level, there’s a place for you at Travellers English Club."}
        </p>

        {/* OPTIONS */}
        <div className="join-options">
          {/* CLUB */}
          <a
            href={CLUB_FORM}
            target="_blank"
            rel="noreferrer"
            className="join-option join-option-club"
          >
            <div className="join-option-icon">
              <UsersRound size={30} />
            </div>

            <div className="join-option-content">
              <span className="join-option-label">
                {isArabic ? "الخيار 01" : "OPTION 01"}
              </span>

              <h2>
                {isArabic ? "انضم إلى النادي" : "Join the Club"}
              </h2>

              <p>
                {isArabic
                  ? "تعرّف على أشخاص جدد، مارس الإنجليزية، شارك في أنشطتنا وفعالياتنا، وكن جزءًا من مجتمعنا."
                  : "Meet people, practice English, join our activities, and become part of our community."}
              </p>

              <span className="join-option-action">
                {isArabic
                  ? "سجّل في النادي"
                  : "Register for the Club"}

                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>

          {/* COURSE */}
          <a
            href={COURSE_FORM}
            target="_blank"
            rel="noreferrer"
            className="join-option join-option-course"
          >
            <div className="join-option-icon">
              <BookOpen size={30} />
            </div>

            <div className="join-option-content">
              <span className="join-option-label">
                {isArabic ? "الخيار 02" : "OPTION 02"}
              </span>

              <h2>
                {isArabic
                  ? "دورة اللغة الإنجليزية"
                  : "English Course"}
              </h2>

              <p>
                {isArabic
                  ? "طوّر لغتك الإنجليزية في بيئة ودية من خلال دروس منظمة، ممارسة مستمرة، وتواصل حقيقي."
                  : "Learn English in a friendly environment with structured lessons, practice, and real connection."}
              </p>

              <span className="join-option-action">
                {isArabic
                  ? "سجّل في الدورة"
                  : "Register for the Course"}

                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>
        </div>

        {/* FOOTER */}
        <footer className="join-footer">
          <p>
            {isArabic ? (
              <>
                مارس الإنجليزية <span>•</span>{" "}
                تعرّف على أشخاص جدد <span>•</span>{" "}
                ابنِ ثقتك بنفسك
              </>
            ) : (
              <>
                Practice English <span>•</span>{" "}
                Meet New People <span>•</span>{" "}
                Build Confidence
              </>
            )}
          </p>

          <small>Travellers English Club · Est. 2026</small>
        </footer>
      </section>
    </main>
  );
}
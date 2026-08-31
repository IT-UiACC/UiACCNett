/**
 * UiA Case Club — Apple Aesthetic Interactive Scripts & i18n
 * University of Agder, Kristiansand
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initAudienceEdgeSlideToggle();
  initMobileNavigation();
  initFaqAccordion();
  initMorphingContactWidget();
  initWhatIsCaseModal();
  initEmailCopyUtility();
  initSlowLoadScroll();
  initDynamicYear();
});

/* ==========================================================================
   1. Bilingual Language Switcher (EN / NO) with Glider
   ========================================================================== */
const I18N = {
  en: {
    nav_about: "About",
    nav_pathways: "Pathways",
    nav_schedule: "Schedule",
    nav_social: "Social",
    nav_faq: "FAQ",
    btn_join_nav: "Join Us",
    btn_join_mobile: "Join UiA Case Club",
    hero_title_1: "Real Strategy.",
    hero_title_2: "Real Impact.",
    hero_desc: "The student-driven case solving organization at the University of Agder. We bridge academic theory and executive business strategy through workshops, company case nights, and national competitions.",
    btn_join_hero: "Join UiA Case Club",
    btn_partner_hero: "Partner With Us",
    hero_meta_1: "Open to All UiA Students",
    hero_meta_2: "All Disciplines & Study Years",
    hero_meta_3: "Kristiansand Campus",
    label_01: "01 / What We Do",
    heading_01: "The Case Method",
    subheading_01: "Solving cases means analyzing real business dilemmas, structuring solutions with clear data, and pitching directly to industry leaders.",
    c1_title: "Structured Workshops",
    c1_text: "Master core frameworks like MECE, Issue Trees, and financial sanity checks to break complex challenges into clear, actionable sub-problems.",
    c2_title: "Company Case Nights",
    c2_text: "Work alongside leading companies in Norway. Tackle real strategic bottlenecks and present your team’s findings directly to executive juries.",
    c3_title: "National Competitions",
    c3_text: "Represent the University of Agder at prestigious case championships across Norway and the Nordics against top university teams.",
    btn_more_about_case_club: "More about Case Club",
    modal_case_tag: "Deep Dive",
    modal_case_title: "What is a Case Club?",
    modal_case_lead: "An international university tradition bridging academic theory and executive strategic leadership.",
    modal_case_sec1_title: "The Case Concept",
    modal_case_sec1_desc: "A Case Club is a student-driven organization focused on solving real-world business challenges using the case method pioneered by top global institutions. Students step into the shoes of CEOs, board members, or strategy consultants to diagnose complex organizational bottlenecks, develop data-backed solutions, and pitch their recommendations directly to industry leaders.",
    modal_case_sec2_title: "What We Do in Practice",
    modal_case_sec2_desc: "We run hands-on workshops, mock competitions, and company case nights. Members work in teams under timed conditions to analyze messy data, structure arguments using frameworks like MECE and Issue Trees, build clean executive slide decks, and deliver compelling presentations followed by rigorous Q&A sessions.",
    modal_case_sec3_title: "Dual Benefits: Learning & Social",
    modal_case_learn_title: "Learning & Career Growth",
    modal_case_learn_desc: "Develop practical strategic thinking, quantitative modeling, slide craft, and high-pressure communication. Case solving is one of the single most recognized student activities by top consulting firms, investment banks, and multinational companies.",
    modal_case_social_title: "Community & Network",
    modal_case_social_desc: "Connect with ambitious peers across IT, Business, Engineering, Law, and Social Sciences. Enjoy collaborative pizza sessions, social gatherings, and the thrill of representing UiA at national competitions.",
    modal_case_sec4_title: "UiA Case Club In-Depth",
    modal_case_sec4_desc: "UiA Case Club is the student-driven case solving hub at the University of Agder. We are 100% open to all students across every study discipline and study year, with no prior experience required. Our mission is to empower UiA students with world-class problem-solving capabilities while representing Agder on the national stage.",
    modal_case_btn_join: "Join Case Club",
    modal_case_btn_close: "Close",
    label_02: "02 / Pathways",
    heading_02: "Explore Your Opportunity",
    subheading_02: "Choose your perspective to see how UiA Case Club creates value for students and corporate partners alike.",
    tab_students: "For Students",
    tab_companies: "For Companies & Partners",
    st_pill_1: "Skills & Growth",
    st_title_1: "Accelerate Your Career",
    st_text_1: "Case solving is one of the most respected extracurricular activities by top consulting firms, finance houses, and tech employers.",
    st_check_1: "Executive slide storytelling & deck design",
    st_check_2: "Confident stage presentation and Q&A handling",
    st_check_3: "Quantitative and qualitative problem deconstruction",
    st_pill_2: "Community",
    st_title_2: "Interdisciplinary Teams",
    st_text_2: "Combine strengths across Economics, IT, Engineering, Law, and Social Sciences. Great solutions come from diverse minds.",
    st_check_4: "Open registration for all active UiA students",
    st_check_5: "Social events, workshops, and pizza nights",
    st_check_6: "Close-knit network of ambitious peers in Kristiansand",
    st_callout_title: "Ready to join the club?",
    st_callout_text: "All UiA students are accepted. Fill in the quick registration form to get started.",
    btn_join_form: "Join UiA Case Club",
    co_title_1: "Host a Case Night",
    co_text_1: "Bring a live strategic dilemma from your business. Receive multiple data-driven student presentations and host a networking dinner.",
    co_title_2: "Talent Recruitment",
    co_text_2: "Observe candidates’ teamwork, communication, and quantitative problem solving in real time before formal interview processes.",
    co_title_3: "Club Sponsorship",
    co_text_3: "Support student development and gain prominent year-round employer visibility on campus and across our competition gear.",
    co_callout_title: "Let’s discuss a partnership",
    co_callout_text: "Reach out directly to schedule a brief introductory chat or plan a case evening.",
    btn_email_co: "Email: uiacaseclub@gmail.com",
    btn_copy_email: "Copy Email",
    label_03: "03 / Schedule",
    heading_03: "Upcoming Sessions",
    subheading_03: "All regular sessions take place at the University of Agder campus in Kristiansand.",
    sch_b1: "Session 01",
    sch_t1: "Welcome & Case Foundations",
    sch_d1: "Introduction to structured problem solving and interactive mini-challenge.",
    sch_b2: "Session 02",
    sch_t2: "Frameworks & Financial Sanity",
    sch_d2: "MECE principles, issue tree structuring, and rapid quantitative analysis.",
    sch_b3: "Case Night",
    sch_t3: "Corporate Case Night",
    sch_d3: "Live corporate challenge, jury pitch, followed by food, drinks, and networking.",
    sch_b4: "Session 04",
    sch_t4: "UiA Case Championship",
    sch_d4: "Annual internal tournament and qualifiers for national case competitions.",
    label_04: "04 / Social Media",
    heading_04: "Follow Our Journey",
    subheading_04: "Stay up to date with session announcements, behind-the-scenes moments, and competition highlights.",
    ig_desc: "Stories, workshop photos, event reminders, and live coverage from case tournaments across the Nordics.",
    btn_follow_ig: "Follow on Instagram",
    in_desc: "Professional updates, case competition results, partnership announcements, and member spotlights.",
    btn_connect_in: "Connect on LinkedIn",
    label_05: "05 / FAQ",
    heading_05: "Frequently Asked Questions",
    subheading_05: "Quick answers to common questions about joining or collaborating.",
    faq_q1: "Do I need prior experience to join?",
    faq_a1: "No. We teach all problem solving and slide structuring fundamentals from scratch during our introductory workshops.",
    faq_q2: "Which fields of study can join?",
    faq_a2: "All faculties! Students from Business, Economics, IT, Engineering, Law, and Social Sciences are warmly welcomed.",
    faq_q3: "Who can join UiA Case Club?",
    faq_a3: "All registered students at the University of Agder are welcome. Simply fill out the join form to be added to our member channels and updates.",
    faq_q4: "How do companies get in touch for Case Nights?",
    faq_a4: "Email us at uiacaseclub@gmail.com or use the Contact button in the lower right corner. We will coordinate dates, case topic, and campus logistics.",
    footer_join: "Join Club",
    footer_contact: "Contact",
    footer_rights: "All rights reserved. Student-driven non-profit organization.",
    footer_ai_note: "This website was generated with the use of Vibe coding (AI generated).",
    contact_btn_label: "Contact Us",
    contact_modal_title: "Contact UiA Case Club",
    contact_modal_lead: "Have questions or want to partner with us? Fill in the details below to send an email directly to our team.",
    contact_email_label: "Direct Email:",
    btn_copy_short: "Copy",
    label_name: "Your Name",
    label_topic: "Topic",
    opt_1: "Company Case Night / Collaboration",
    opt_2: "Student Question",
    opt_3: "Company Sponsorship",
    opt_4: "General Inquiry",
    label_msg: "Message",
    btn_send_email: "Send Email"
  },
  no: {
    nav_about: "Om oss",
    nav_pathways: "Muligheter",
    nav_schedule: "Program",
    nav_social: "Sosiale medier",
    nav_faq: "FAQ",
    btn_join_nav: "Bli med",
    btn_join_mobile: "Bli med i UiA Case Club",
    hero_title_1: "Ekte Strategi.",
    hero_title_2: "Ekte Påvirkning.",
    hero_desc: "Den studentdrevne caseløsningsorganisasjonen ved Universitetet i Agder. Vi bygger bro mellom akademisk teori og forretningsstrategi gjennom workshops, bedriftskvelder og nasjonale konkurranser.",
    btn_join_hero: "Bli med i UiA Case Club",
    btn_partner_hero: "Samarbeid med oss",
    hero_meta_1: "Åpent for alle UiA-studenter",
    hero_meta_2: "Alle studieretninger & trinn",
    hero_meta_3: "Campus Kristiansand",
    label_01: "01 / Hva vi gjør",
    heading_01: "Casemetoden",
    subheading_01: "Caseløsning handler om å analysere reelle forretningsutfordringer, strukturere løsninger med tydelige data og presentere direkte for næringslivsledere.",
    c1_title: "Strukturerte Workshops",
    c1_text: "Lær anerkjente rammeverk som MECE, Issue Trees og finansiell rimelighet for å bryte komplekse problemer ned til løsbare delmål.",
    c2_title: "Bedriftskvelder",
    c2_text: "Jobb sammen med ledende selskaper i Norge. Løs reelle strategiske utfordringer og presenter teamets funn for en lederjury.",
    c3_title: "Nasjonale Konkurranser",
    c3_text: "Representer Universitetet i Agder i prestisjefylte casemesterskap i Norge og Norden mot andre toppuniversiteter.",
    btn_more_about_case_club: "Mer om Case Club",
    modal_case_tag: "Dypdykk",
    modal_case_title: "Hva er en Case Club?",
    modal_case_lead: "En internasjonal universitetstradisjon som bygger bro mellom akademisk teori og strategisk næringslivsledelse.",
    modal_case_sec1_title: "Casemetoden & Konseptet",
    modal_case_sec1_desc: "En Case Club er en studentdrevet organisasjon som fokuserer på å løse reelle forretningsutfordringer ved hjelp av casemetoden. Som caseløser trer du inn i rollen som toppleder eller strategikonsulent for å diagnostisere komplekse problemer, utvikle databaserte løsninger og presentere anbefalingene direkte for en lederjury.",
    modal_case_sec2_title: "Hva vi gjør i praksis",
    modal_case_sec2_desc: "Vi arrangerer praktiske workshops, treningscaser og bedriftskvelder. Medlemmer jobber i team under tidspress for å analysere komplekse problemstillinger, strukturere argumenter med anerkjente rammeverk (MECE, problemtrær), designe profesjonelle presentasjoner og levere overbevisende pitcher med påfølgende spørsmålsrunde.",
    modal_case_sec3_title: "Doble fordeler: Læring & Fellesskap",
    modal_case_learn_title: "Ferdigheter & Karrierevekst",
    modal_case_learn_desc: "Utvikle strategisk tankesett, kvantitativ analyse, presentasjonsdesign og trygg formidling under press. Caseløsning er en av de mest ettertraktede studentaktivitetene blant ledende konsulentselskaper, banker og teknologiselskaper.",
    modal_case_social_title: "Sosialt & Tverrfaglig Nettverk",
    modal_case_social_desc: "Bli kjent med engasjerte medstudenter på tvers av økonomi, IT, ingeniørfag, juss og samfunnsfag. Nyt uformelle pizzasamliger, sosiale kvelder og lagfølelsen ved å representere UiA i nasjonale konkurranser.",
    modal_case_sec4_title: "UiA Case Club i dybden",
    modal_case_sec4_desc: "UiA Case Club er den studentdrevne caseorganisasjonen ved Universitetet i Agder. Vi er 100 % åpne for alle studenter på tvers av alle studieretninger og trinn, helt uten krav til forkunnskaper. Målet vårt er å gi alle UiA-studenter verktøy for problemløsning på toppnivå og sette UiA på det nasjonale casekartet.",
    modal_case_btn_join: "Bli med i Case Club",
    modal_case_btn_close: "Lukk",
    label_02: "02 / Muligheter",
    heading_02: "Utforsk dine muligheter",
    subheading_02: "Velg ditt perspektiv for å se hvordan UiA Case Club skaper verdi for både studenter og bedriftspartnere.",
    tab_students: "For Studenter",
    tab_companies: "For Bedrifter & Partnere",
    st_pill_1: "Ferdigheter & Vekst",
    st_title_1: "Akselerer karrieren din",
    st_text_1: "Caseløsning er en av de mest anerkjente studentaktivitetene blant konsulentselskaper, finanshus og teknologiselskaper.",
    st_check_1: "Visuell historiefortelling & profesjonelle presentasjoner",
    st_check_2: "Trygg scenepresentasjon og håndtering av spørsmål",
    st_check_3: "Kvantitativ og kvalitativ problemløsning",
    st_pill_2: "Fellesskap",
    st_title_2: "Tverrfaglige Team",
    st_text_2: "Kombiner styrker fra økonomi, IT, ingeniørfag, juss og samfunnsfag. De beste løsningene oppstår når ulike fagfelt møtes.",
    st_check_4: "Åpen registrering for alle aktive UiA-studenter",
    st_check_5: "Sosiale arrangementer, samlinger og pizzakvelder",
    st_check_6: "Tett nettverk av engasjerte studenter i Kristiansand",
    st_callout_title: "Klar for å bli med i klubben?",
    st_callout_text: "Alle UiA-studenter ønskes velkommen. Fyll ut det enkle skjemaet for å bli med.",
    btn_join_form: "Bli med i UiA Case Club",
    co_title_1: "Arranger en Bedriftskveld",
    co_text_1: "Ta med en reell strategisk utfordring fra selskapet. Få datadrevne løsninger fra flere team og delta på en uformell nettverksmiddag.",
    co_title_2: "Rekruttering av Talenter",
    co_text_2: "Observer kandidatenes samarbeidsevner, kommunikasjon og analytiske styrke i praksis før formelle intervjuer.",
    co_title_3: "Klubbsponsorat",
    co_text_3: "Støtt studentutvikling og få fremtredende profilering på campus og på våre konkurransegensere gjennom hele året.",
    co_callout_title: "La oss diskutere et samarbeid",
    co_callout_text: "Ta kontakt direkte for en uforpliktende prat eller for å planlegge en bedriftskveld på UiA.",
    btn_email_co: "E-post: uiacaseclub@gmail.com",
    btn_copy_email: "Kopier e-post",
    label_03: "03 / Program",
    heading_03: "Kommende Samlinger",
    subheading_03: "Alle faste samlinger finner sted på Universitetet i Agder, campus Kristiansand.",
    sch_b1: "Samling 01",
    sch_t1: "Velkomstmøte & Grunnleggende Case",
    sch_d1: "Introduksjon til strukturert problemløsning og interaktiv mini-case.",
    sch_b2: "Samling 02",
    sch_t2: "Rammeverk & Finansiell Analyse",
    sch_d2: "MECE-prinsipper, problemtrær og hurtig kvantitativ analyse.",
    sch_b3: "Bedriftskveld",
    sch_t3: "Bedriftscase med Næringslivet",
    sch_d3: "Reell bedriftsutfordring, jurypresentasjon, etterfulgt av mat og nettverksbygging.",
    sch_b4: "Samling 04",
    sch_t4: "UiA Case Mesterskap",
    sch_d4: "Årlig internt mesterskap og kvalifisering til nasjonale konkurranser.",
    label_04: "04 / Sosiale Medier",
    heading_04: "Følg reisen vår",
    subheading_04: "Hold deg oppdatert på samlinger, bak-kulissene-øyeblikk og konkurranseresultater.",
    ig_desc: "Stories, bilder fra workshops, påminnelser og live-oppdateringer fra mesterskap i Norden.",
    btn_follow_ig: "Følg på Instagram",
    in_desc: "Faglige oppdateringer, konkurranseresultater, partnerskap og medlemsfokus.",
    btn_connect_in: "Koble til på LinkedIn",
    label_05: "05 / FAQ",
    heading_05: "Ofte stilte spørsmål",
    subheading_05: "Raske svar på vanlige spørsmål om deltakelse og samarbeid.",
    faq_q1: "Trenger jeg forkunnskaper for å bli med?",
    faq_a1: "Nei. Vi lærer bort all metodikk, analyse og presentasjonsteknikk fra bunnen av på våre introduksjonssamlinger.",
    faq_q2: "Hvilke studieretninger kan delta?",
    faq_a2: "Alle fakulteter! Studenter fra økonomi, IT, ingeniørfag, juss, samfunnsfag og humaniora er hjertelig velkomne.",
    faq_q3: "Hvem kan bli medlem i UiA Case Club?",
    faq_a3: "Alle registrerte studenter ved Universitetet i Agder kan bli med. Fyll ut skjemaet for å motta informasjon og invitasjoner.",
    faq_q4: "Hvordan kan bedrifter arrangere en casekveld?",
    faq_a4: "Send en e-post til uiacaseclub@gmail.com eller bruk Kontakt-knappen nede til høyre. Vi avtaler dato, tema og praktiske detaljer.",
    footer_join: "Bli med",
    footer_contact: "Kontakt",
    footer_rights: "Alle rettigheter reservert. Studentdrevet ideell organisasjon.",
    footer_ai_note: "Dette nettstedet ble generert ved bruk av Vibe coding (AI-generert).",
    contact_btn_label: "Kontakt oss",
    contact_modal_title: "Kontakt UiA Case Club",
    contact_modal_lead: "Har du spørsmål eller ønsker et samarbeid? Fyll ut feltene for å sende en e-post til oss.",
    contact_email_label: "Direkte e-post:",
    btn_copy_short: "Kopier",
    label_name: "Ditt navn",
    label_topic: "Tema",
    opt_1: "Bedriftskveld / Samarbeid",
    opt_2: "Spørsmål fra student",
    opt_3: "Sponsorat fra bedrift",
    opt_4: "Generell henvendelse",
    label_msg: "Melding",
    btn_send_email: "Send e-post"
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const btnEn = document.getElementById('lang-btn-en');
  const btnNo = document.getElementById('lang-btn-no');
  const toggleBar = document.querySelector('.lang-toggle-bar');

  if (!btnEn || !btnNo) return;

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    if (lang === 'en') {
      btnEn.classList.add('active');
      btnEn.setAttribute('aria-pressed', 'true');
      btnNo.classList.remove('active');
      btnNo.setAttribute('aria-pressed', 'false');
      if (toggleBar) toggleBar.classList.remove('is-no');
    } else {
      btnNo.classList.add('active');
      btnNo.setAttribute('aria-pressed', 'true');
      btnEn.classList.remove('active');
      btnEn.setAttribute('aria-pressed', 'false');
      if (toggleBar) toggleBar.classList.add('is-no');
    }

    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Re-adjust pathway glider size if text length changes
    setTimeout(updateAudienceGlider, 50);
  }

  btnEn.addEventListener('click', () => setLanguage('en'));
  btnNo.addEventListener('click', () => setLanguage('no'));
}

/* ==========================================================================
   2. Full Page Edge-to-Edge Directional Pathway Toggle with Moving Glider
   ========================================================================== */
function initAudienceEdgeSlideToggle() {
  const btnStudents = document.getElementById('btn-toggle-students');
  const btnCompanies = document.getElementById('btn-toggle-companies');
  const viewStudents = document.getElementById('view-students');
  const viewCompanies = document.getElementById('view-companies');
  const heroPartnerBtn = document.getElementById('hero-partner-btn');

  if (!btnStudents || !btnCompanies || !viewStudents || !viewCompanies) return;

  // Initialize Glider
  updateAudienceGlider();
  window.addEventListener('resize', updateAudienceGlider);

  function switchToStudents() {
    if (btnStudents.classList.contains('active')) return;

    btnStudents.classList.add('active');
    btnStudents.setAttribute('aria-selected', 'true');
    btnCompanies.classList.remove('active');
    btnCompanies.setAttribute('aria-selected', 'false');
    updateAudienceGlider();

    // Student comes in from LEFT, Company exits to RIGHT
    viewCompanies.classList.remove('is-active', 'is-off-left');
    viewCompanies.classList.add('is-off-right');

    viewStudents.classList.remove('is-off-left', 'is-off-right');
    viewStudents.classList.add('is-active');
  }

  function switchToCompanies() {
    if (btnCompanies.classList.contains('active')) return;

    btnCompanies.classList.add('active');
    btnCompanies.setAttribute('aria-selected', 'true');
    btnStudents.classList.remove('active');
    btnStudents.setAttribute('aria-selected', 'false');
    updateAudienceGlider();

    // Student exits to LEFT, Company comes in from RIGHT
    viewStudents.classList.remove('is-active', 'is-off-right');
    viewStudents.classList.add('is-off-left');

    viewCompanies.classList.remove('is-off-left', 'is-off-right');
    viewCompanies.classList.add('is-active');
  }

  btnStudents.addEventListener('click', switchToStudents);
  btnCompanies.addEventListener('click', switchToCompanies);

  if (heroPartnerBtn) {
    heroPartnerBtn.addEventListener('click', () => {
      switchToCompanies();
    });
  }
}

function updateAudienceGlider() {
  const activeBtn = document.querySelector('.toggle-pill-btn.active');
  const glider = document.getElementById('audience-glider');
  const track = document.querySelector('.toggle-pill-track');

  if (!activeBtn || !glider || !track) return;

  const btnRect = activeBtn.getBoundingClientRect();
  const trackRect = track.getBoundingClientRect();

  const leftOffset = btnRect.left - trackRect.left;
  const width = btnRect.width;

  glider.style.width = `${width}px`;
  glider.style.transform = `translateX(${leftOffset - 4}px)`;
}

/* ==========================================================================
   3. Bottom Morphing Liquid Glass Mobile Navbar
   ========================================================================== */
function initMobileNavigation() {
  const wrapper = document.getElementById('main-nav-wrapper');
  const toggleBtn = document.getElementById('mobile-nav-btn');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const expandedPane = document.getElementById('mobile-expanded-pane');
  const mobileItems = document.querySelectorAll('.mobile-expanded-pane .mobile-item, .mobile-expanded-pane .btn-mobile-cta');

  if (!toggleBtn || !wrapper) return;

  const expand = () => {
    wrapper.classList.add('is-expanded');
    if (backdrop) {
      backdrop.classList.add('is-open');
      backdrop.setAttribute('aria-hidden', 'false');
    }
    if (expandedPane) expandedPane.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const collapse = () => {
    wrapper.classList.remove('is-expanded');
    if (backdrop) {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
    }
    if (expandedPane) expandedPane.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (wrapper.classList.contains('is-expanded')) {
      collapse();
    } else {
      expand();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', collapse);
  }

  mobileItems.forEach(item => {
    item.addEventListener('click', () => {
      collapse();
    });
  });

  document.addEventListener('click', (e) => {
    if (wrapper.classList.contains('is-expanded') && !wrapper.contains(e.target)) {
      collapse();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper.classList.contains('is-expanded')) {
      collapse();
    }
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    const body = card.querySelector('.faq-body');

    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Close other FAQ cards
      faqCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
          const otherTrigger = otherCard.querySelector('.faq-trigger');
          const otherBody = otherCard.querySelector('.faq-body');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle clicked card
      if (isActive) {
        card.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        card.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   5. Morphing Contact Us Widget (Button Transforms into Form Card)
   ========================================================================== */
function initMorphingContactWidget() {
  const widget = document.getElementById('contact-widget');
  const triggerBtn = document.getElementById('contact-trigger-btn');
  const closeBtn = document.getElementById('contact-close-btn');
  const form = document.getElementById('contact-quick-form');
  const modalCopyBtn = document.getElementById('modal-copy-email-btn');

  if (!widget || !triggerBtn) return;

  const expand = () => {
    widget.classList.add('is-expanded');
    triggerBtn.setAttribute('aria-expanded', 'true');
    const formCard = document.getElementById('contact-form-card');
    if (formCard) formCard.setAttribute('aria-hidden', 'false');
  };

  const collapse = () => {
    widget.classList.remove('is-expanded');
    triggerBtn.setAttribute('aria-expanded', 'false');
    const formCard = document.getElementById('contact-form-card');
    if (formCard) formCard.setAttribute('aria-hidden', 'true');
  };

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    expand();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      collapse();
    });
  }

  // Click outside to collapse
  document.addEventListener('click', (e) => {
    if (widget.classList.contains('is-expanded') && !widget.contains(e.target)) {
      collapse();
    }
  });

  // Handle Quick Form Submission -> Pre-fill Mailto
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const topic = document.getElementById('contact-topic').value;
      const message = document.getElementById('contact-msg').value.trim();

      const subject = encodeURIComponent(`UiA Case Club — [${topic}] from ${name}`);
      const body = encodeURIComponent(`Hi UiA Case Club team,\n\n${message}\n\nBest regards,\n${name}`);

      window.location.href = `mailto:uiacaseclub@gmail.com?subject=${subject}&body=${body}`;

      showToast(currentLang === 'no' ? 'Åpner e-postprogram...' : 'Opening your email client...');
      collapse();
    });
  }

  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyToClipboard('uiacaseclub@gmail.com');
    });
  }
}

/* ==========================================================================
   6. What is a Case Club Deep Dive Modal
   ========================================================================== */
function initWhatIsCaseModal() {
  const openBtn = document.getElementById('btn-open-case-modal');
  const modal = document.getElementById('case-modal');
  const backdrop = document.getElementById('case-modal-backdrop');
  const closeBtn = document.getElementById('case-modal-close-btn');
  const bottomCloseBtn = document.getElementById('case-modal-bottom-close-btn');

  if (!openBtn || !modal || !backdrop) return;

  const openModal = () => {
    backdrop.classList.add('is-open');
    modal.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    backdrop.classList.remove('is-open');
    modal.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (bottomCloseBtn) bottomCloseBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. Copy Email Utility & Toast
   ========================================================================== */
function initEmailCopyUtility() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard('uiacaseclub@gmail.com');
    });
  }
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement('textarea');
      temp.value = text;
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.focus();
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
    showToast(currentLang === 'no' ? '✓ Kopiert: ' + text : '✓ Copied: ' + text);
  } catch (e) {
    showToast('Email: ' + text);
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   8. Snappy Slowload Scroll Appear Animations (Intersection Observer)
   ========================================================================== */
function initSlowLoadScroll() {
  const elements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   9. Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

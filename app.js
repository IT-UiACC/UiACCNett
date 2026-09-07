/**
 * UiA Case Club — Apple Aesthetic Interactive Scripts & i18n
 * University of Agder, Kristiansand
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initActiveNavLink();
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
   1. Bilingual Language Switcher (EN / NO) with Glider & Persistence
   ========================================================================== */
const I18N = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_board: "Board",
    btn_join_nav: "Join Us",
    btn_join_mobile: "Join UiA Case Club",
    
    // Frontpage Hero
    hero_title_1: "Real Strategy.",
    hero_title_2: "Real Impact.",
    hero_desc: "The student-driven case solving organization at the University of Agder. We bridge academic theory and executive business strategy through workshops, company case nights, and national competitions.",
    btn_join_hero: "Join UiA Case Club",
    btn_partner_hero: "Partner With Us",
    hero_meta_1: "Open to All UiA Students",
    hero_meta_2: "All Disciplines & Study Years",
    hero_meta_3: "Kristiansand Campus",

    // Section 01
    label_01: "01 / What We Do",
    heading_01: "The Case Method",
    subheading_01: "Analyze real dilemmas, structure clear data, and pitch directly to executives.",
    c1_title: "Structured Workshops",
    c1_text: "Master MECE, issue trees, and financial sanity models.",
    c2_title: "Company Case Nights",
    c2_text: "Solve live strategic dilemmas alongside corporate executives.",
    c3_title: "National Competitions",
    c3_text: "Represent UiA in championships across Norway and the Nordics.",
    btn_more_about_case_club: "More about Case Club",

    // Section 01 Deep Dive Modal
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

    // Section 02 Pathways (Streamlined)
    label_02: "02 / Pathways",
    heading_02: "Explore Your Opportunity",
    subheading_02: "Connecting ambitious students with top corporate leaders.",
    tab_students: "For Students",
    tab_companies: "For Companies & Partners",
    st_pill_1: "Community & Access",
    st_title_1: "Interdisciplinary Community",
    st_text_1: "Open to all active UiA students across Business, IT, Engineering, Law, and Social Sciences. 100% free.",
    st_pill_2: "Skills & Career",
    st_title_2: "Accelerate Your Career",
    st_text_2: "Master executive slide design, quantitative problem deconstruction, and high-pressure boardroom pitching.",
    btn_join_form: "Join UiA Case Club",
    co_pill_1: "Case Nights",
    co_title_1: "Host a Case Night",
    co_text_1: "Present a live strategic bottleneck from your organization and receive fresh, data-driven student solutions.",
    co_pill_2: "Talent",
    co_title_2: "Spot Top Talent Early",
    co_text_2: "Observe analytical rigor, teamwork, and communication in real time before formal interview cycles.",
    btn_email_co: "Partner With Us",

    // Section 03 Schedule (Streamlined)
    label_03: "03 / Schedule",
    heading_03: "Upcoming Sessions",
    subheading_03: "Regular sessions held at Campus Kristiansand.",
    sch_b1: "Session 01",
    sch_t1: "Welcome & Case Foundations",
    sch_d1: "Structured problem solving and interactive mini-challenge.",
    sch_b2: "Session 02",
    sch_t2: "Frameworks & Financial Sanity",
    sch_d2: "MECE structuring and rapid quantitative analysis.",
    sch_b3: "Case Night",
    sch_t3: "Corporate Case Night",
    sch_d3: "Live corporate challenge, pitch, and networking dinner.",
    sch_b4: "Session 04",
    sch_t4: "UiA Case Championship",
    sch_d4: "Annual internal championship and national qualifiers.",

    // Section 04 Social
    label_04: "04 / Social Media",
    heading_04: "Follow Our Journey",
    subheading_04: "Session announcements, event recaps, and live competition updates.",
    ig_desc: "Stories, workshop photos, and live coverage from case championships.",
    btn_follow_ig: "Follow on Instagram",
    in_desc: "Professional updates, competition results, and partnership announcements.",
    btn_connect_in: "Connect on LinkedIn",

    // Section 05 Corporate Collaborations (NEW)
    label_05_collab: "05 / Collaborations",
    heading_05_collab: "Industry Partnerships",
    subheading_05_collab: "We collaborate with industry leaders to bring live strategic challenges to our campus.",
    collab_s1_tag: "Advisory",
    collab_s1_title: "Management Consulting",
    collab_s1_desc: "Top global and Nordic consultancies hosting interactive framework workshops and market-entry cases.",
    collab_s2_tag: "Capital Markets",
    collab_s2_title: "Investment Banking & Finance",
    collab_s2_desc: "Financial institutions presenting valuation, capital allocation, and M&A dilemma scenarios.",
    collab_s3_tag: "Industrial Leaders",
    collab_s3_title: "Energy & Nordic Industry",
    collab_s3_desc: "Leading Norwegian energy powerhouses and industrial corporations presenting transition cases.",
    collab_s4_tag: "Tech & Innovation",
    collab_s4_title: "Technology & Digital Advisory",
    collab_s4_desc: "Software and digital enterprises challenging student teams to structure scalable tech solutions.",
    collab_notice_title: "Corporate Partner Directory",
    collab_notice_text: "Official corporate partner logos and case retrospective spotlights are currently undergoing formal consent and will be featured here shortly.",
    btn_partner_collab: "Partner With Us",

    // Section 06 FAQ
    label_06: "06 / FAQ",
    heading_06: "Frequently Asked Questions",
    subheading_06: "Quick answers to common questions about joining or collaborating.",
    faq_q1: "Do I need prior experience to join?",
    faq_a1: "No. We teach all problem solving and slide structuring fundamentals from scratch during our introductory workshops.",
    faq_q2: "Which fields of study can join?",
    faq_a2: "All faculties! Students from Business, Economics, IT, Engineering, Law, and Social Sciences are warmly welcomed.",
    faq_q3: "Who can join UiA Case Club?",
    faq_a3: "All registered students at the University of Agder are welcome. Simply fill out the join form to be added to our member channels and updates.",
    faq_q4: "How do companies get in touch for Case Nights?",
    faq_a4: "Email us at uiacaseclub@gmail.com or use the Contact button in the lower right corner. We will coordinate dates, case topic, and campus logistics.",

    // Footer
    footer_join: "Join Club",
    footer_contact: "Contact",
    footer_privacy: "Privacy & Compliance",
    footer_compliance_link: "Legal & Privacy Notice",
    footer_rights: "All rights reserved. Student-driven non-profit organization.",
    footer_ai_note: "This website was generated with the use of Vibe coding (AI generated).",

    // Contact Widget
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
    btn_send_email: "Send Email",

    // About Page
    about_hero_tag: "About The Club",
    about_hero_title: "Empowering Future Problem Solvers",
    about_hero_desc: "UiA Case Club is the premier student-driven case organization at the University of Agder. We bridge academic curricula with real-world executive strategy through workshops, company case nights, and national championships.",
    about_stat1_num: "100%",
    about_stat1_lbl: "Open to all UiA students",
    about_stat2_num: "0,-",
    about_stat2_lbl: "Free membership",
    about_stat3_num: "Nordic",
    about_stat3_lbl: "Championship qualifiers",
    about_sec1_title: "Our Story & Purpose",
    about_sec1_text1: "Founded by ambitious students at Campus Kristiansand, UiA Case Club was established to bring the international case solving tradition to the University of Agder. While university courses teach theory, real-world business requires synthesizing messy data under pressure, building convincing arguments, and presenting with boardroom presence.",
    about_sec1_text2: "We operate as an open, non-profit academic student society. We prepare our members for prestigious case competitions across Norway and the Nordics, connect top talent with industry leaders, and build a lasting culture of excellence in Kristiansand.",
    about_sec2_title: "The 4-Stage Solving Framework",
    about_step1_title: "1. Diagnose Bottlenecks",
    about_step1_desc: "Deconstruct ambiguous corporate dilemmas using MECE and Issue Trees to identify root causes instead of superficial symptoms.",
    about_step2_title: "2. Quantify & Model",
    about_step2_desc: "Run rapid sanity estimations, unit economics, and financial feasibility models to ground every strategy in sound data.",
    about_step3_title: "3. Executive Storytelling",
    about_step3_desc: "Craft clean, concise slide decks following pyramid logic to make complex strategic roadmaps instantly understandable.",
    about_step4_title: "4. The Jury Pitch",
    about_step4_desc: "Pitch recommendations live to C-level executives and corporate juries, followed by rigorous questioning and debate.",
    about_sec3_title: "Who Can Join?",
    about_sec3_text: "All registered students at the University of Agder are warmly welcomed. Whether you are studying Business, Economics, IT, Software Engineering, Law, Political Science, or Humanities, your unique background brings vital perspectives to a case team. No prior experience is required.",
    about_cta_title: "Become a Member Today",
    about_cta_desc: "Registration is open to all students at UiA. Fill out the quick form to receive session invites and workshop materials.",

    // Board Page
    board_hero_tag: "Leadership & Governance",
    board_hero_title: "The Executive Board",
    board_hero_desc: "Meet the student team leading UiA Case Club. The board coordinates weekly workshops, corporate partnerships, internal tournaments, and national competition delegations.",
    board_r1_title: "President",
    board_r1_desc: "Oversees overall club strategy, external institutional relations with UiA faculty, and general operations.",
    board_r2_title: "Vice President",
    board_r2_desc: "Supports organizational leadership, internal communications, member channels, and cross-functional committee coordination.",
    board_r3_title: "Head of Case Competitions",
    board_r3_desc: "Designs workshop curriculum, selects case challenges, mentors competitive teams, and coordinates national championship delegations.",
    board_r4_title: "Head of Corporate Relations",
    board_r4_desc: "Liaises with consulting firms, banks, and technology enterprises to organize live corporate case evenings and sponsorships.",
    board_r5_title: "Head of Marketing & Communications",
    board_r5_desc: "Directs brand identity, social media presence (Instagram & LinkedIn), campus promotion, and photography/media.",
    board_r6_title: "Head of Finance & Operations",
    board_r6_desc: "Manages organizational budget, event logistics, room bookings at Campus Kristiansand, and social gatherings.",
    board_tba: "Position Announced Shortly",
    board_note_title: "Interested in a Board or Committee Role?",
    board_note_desc: "Elections for the Executive Board take place annually. We also continuously recruit motivated students for event, case, and marketing committees. Get in touch with us to get involved!",
    board_btn_contact: "Contact the Board",

    // Privacy & Compliance Page
    priv_hero_tag: "Legal Notice & Transparency",
    priv_hero_title: "Privacy Policy & Compliance",
    priv_hero_desc: "UiA Case Club is committed to user privacy, data protection, and transparency pursuant to EU Regulations (GDPR, EU AI Act, ePrivacy) and Norwegian legislation (Personopplysningsloven, Ekomloven, Åndsverkloven).",
    priv_s1_title: "1. Data Controller Identification",
    priv_s1_text: "UiA Case Club operates as an independent student-driven non-profit association affiliated with the University of Agder (Universitetet i Agder). The controller responsible for data processing on this website is UiA Case Club, Campus Kristiansand, Universitetsveien 25, 4630 Kristiansand, Norway. For inquiries, email uiacaseclub@gmail.com.",
    priv_s2_title: "2. Personal Data Processing (GDPR & Personopplysningsloven)",
    priv_s2_text: "We collect only minimal personal data strictly necessary to communicate with you and manage club membership. When you submit a contact inquiry, we receive your name, email, and message. When registering via our Google Forms membership form, data collected includes your name, student email, study program, and study year.",
    priv_s2_legal_title: "Legal Basis (Rettslig Grunnlag):",
    priv_s2_legal_desc: "Data processing is based on explicit consent (GDPR Art. 6(1)(a)) provided upon submitting contact or registration forms, and our legitimate interest (GDPR Art. 6(1)(f)) in organizing university club activities.",
    priv_s2_rights_title: "Your Rights as a Data Subject:",
    priv_s2_rights_desc: "You have the right to request access to, rectification of, or erasure of your personal data at any time. You may withdraw your consent by emailing uiacaseclub@gmail.com. You also have the right to lodge a complaint with Datatilsynet (the Norwegian Data Protection Authority at datatilsynet.no).",
    priv_s3_title: "3. Cookie & Tracking Policy (Ekomloven § 3-15 Exemption)",
    priv_s3_text: "This website operates with strict privacy-by-design. We do NOT use tracking cookies, commercial marketing beacons, or third-party behavioral analytics. We only store technical browser preferences (specifically, your chosen language in localStorage), which is strictly necessary for service delivery and fully exempt from cookie consent walls pursuant to Norwegian Ekomloven § 3-15 and the ePrivacy Directive.",
    priv_s4_title: "4. AI Transparency & Vibe Coding Disclosure (EU AI Act Art. 50)",
    priv_s4_text: "Pursuant to Article 50 of the European Union Artificial Intelligence Act (Regulation (EU) 2024/1689), we openly disclose that this website's technical source code, structural layout, and initial digital assets were crafted using artificial intelligence assistance ('Vibe coding'). All content, organizational statements, and student resources are curated, edited, and published under human editorial responsibility by the board of UiA Case Club.",
    priv_s5_title: "5. Intellectual Property & External Links (Åndsverkloven)",
    priv_s5_text: "All original content, texts, and graphics on this website are protected under the Norwegian Copyright Act (Åndsverkloven). The University of Agder name and logo remain the property of Universitetet i Agder. This site contains links to external services (Google Forms, Instagram, LinkedIn); UiA Case Club assumes no responsibility for third-party privacy practices or external content."
  },

  no: {
    // Navigation
    nav_home: "Hjem",
    nav_about: "Om oss",
    nav_board: "Styre",
    btn_join_nav: "Bli med",
    btn_join_mobile: "Bli med i UiA Case Club",

    // Frontpage Hero
    hero_title_1: "Ekte Strategi.",
    hero_title_2: "Ekte Påvirkning.",
    hero_desc: "Den studentdrevne caseløsningsorganisasjonen ved Universitetet i Agder. Vi bygger bro mellom akademisk teori og forretningsstrategi gjennom workshops, bedriftskvelder og nasjonale konkurranser.",
    btn_join_hero: "Bli med i UiA Case Club",
    btn_partner_hero: "Samarbeid med oss",
    hero_meta_1: "Åpent for alle UiA-studenter",
    hero_meta_2: "Alle studieretninger & trinn",
    hero_meta_3: "Campus Kristiansand",

    // Section 01
    label_01: "01 / Hva vi gjør",
    heading_01: "Casemetoden",
    subheading_01: "Analyser reelle problemer, strukturer data og presenter direkte for toppledere.",
    c1_title: "Strukturerte Workshops",
    c1_text: "Lær MECE, problemtrær og finansielle rimelighetsmodeller.",
    c2_title: "Bedriftskvelder",
    c2_text: "Løs reelle bedriftsutfordringer sammen med toppledere.",
    c3_title: "Nasjonale Konkurranser",
    c3_text: "Representer UiA i mesterskap i Norge og Norden.",
    btn_more_about_case_club: "Mer om Case Club",

    // Section 01 Deep Dive Modal
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

    // Section 02 Pathways (Streamlined)
    label_02: "02 / Muligheter",
    heading_02: "Utforsk dine muligheter",
    subheading_02: "Kobler ambisiøse studenter med ledende næringslivsmiljøer.",
    tab_students: "For Studenter",
    tab_companies: "For Bedrifter & Partnere",
    st_pill_1: "Fellesskap & Tilgang",
    st_title_1: "Tverrfaglig Fellesskap",
    st_text_1: "Åpent for alle aktive studenter på tvers av økonomi, IT, ingeniørfag, juss og samfunnsfag. 100 % gratis.",
    st_pill_2: "Ferdigheter & Karriere",
    st_title_2: "Akselerer karrieren din",
    st_text_2: "Mestre profesjonelt presentasjonsdesign, kvantitativ problemløsning og trygg formidling under press.",
    btn_join_form: "Bli med i UiA Case Club",
    co_pill_1: "Casekvelder",
    co_title_1: "Arranger en Bedriftskveld",
    co_text_1: "Presenter en reell strategisk utfordring fra selskapet og motta datadrevne løsninger fra studentene.",
    co_pill_2: "Talenter",
    co_title_2: "Møt Topptalenter Tidlig",
    co_text_2: "Observer kandidatenes analyse, samarbeid og kommunikasjonsevner i praksis før formelle intervjuer.",
    btn_email_co: "Samarbeid med oss",

    // Section 03 Schedule (Streamlined)
    label_03: "03 / Program",
    heading_03: "Kommende Samlinger",
    subheading_03: "Faste samlinger finner sted på Campus Kristiansand.",
    sch_b1: "Samling 01",
    sch_t1: "Velkomstmøte & Grunnleggende Case",
    sch_d1: "Strukturert problemløsning og interaktiv mini-case.",
    sch_b2: "Samling 02",
    sch_t2: "Rammeverk & Finansiell Analyse",
    sch_d2: "MECE-prinsipper og hurtig kvantitativ analyse.",
    sch_b3: "Bedriftskveld",
    sch_t3: "Bedriftskveld med Næringslivet",
    sch_d3: "Reell bedriftsutfordring, jurypresentasjon og middag.",
    sch_b4: "Samling 04",
    sch_t4: "UiA Case Mesterskap",
    sch_d4: "Årlig internt mesterskap og nasjonale kvalifiseringer.",

    // Section 04 Social
    label_04: "04 / Sosiale Medier",
    heading_04: "Følg reisen vår",
    subheading_04: "Samlingspåminnelser, glimt fra workshops og live-oppdateringer fra mesterskap.",
    ig_desc: "Stories, workshopbilder og live-dekning fra mesterskap.",
    btn_follow_ig: "Følg på Instagram",
    in_desc: "Faglige oppdateringer, resultater og partnerskapsnyheter.",
    btn_connect_in: "Koble til på LinkedIn",

    // Section 05 Corporate Collaborations (NEW)
    label_05_collab: "05 / Samarbeid",
    heading_05_collab: "Samarbeid med Næringslivet",
    subheading_05_collab: "Vi samarbeider med næringslivsledere for å bringe reelle strategiske utfordringer til campus.",
    collab_s1_tag: "Rådgivning",
    collab_s1_title: "Strategisk Rådgivning",
    collab_s1_desc: "Ledende globale og nordiske konsulentselskaper som holder metodeworkshops og reelle strategicaser.",
    collab_s2_tag: "Kapitalmarkeder",
    collab_s2_title: "Finans & Investering",
    collab_s2_desc: "Finansinstitusjoner som presenterer selskapsvurdering, kapitalallokering og M&A-dilemmaer.",
    collab_s3_tag: "Industriledere",
    collab_s3_title: "Energi & Norsk Industri",
    collab_s3_desc: "Regionale energiselskaper og industrielle lokomotiver som presenterer omstillings- og strategicaser.",
    collab_s4_tag: "Teknologi",
    collab_s4_title: "Teknologi & Digital Rådgivning",
    collab_s4_desc: "Programvare- og teknologiselskaper som utfordrer studentene til å strukturere skalerbare digitale løsninger.",
    collab_notice_title: "Bedriftspartneroversikt",
    collab_notice_text: "Offisielle bedriftslogoer og referanser innhentes for tiden etter formell avtale og vil publiseres her fortløpende.",
    btn_partner_collab: "Samarbeid med oss",

    // Section 06 FAQ
    label_06: "06 / FAQ",
    heading_06: "Ofte stilte spørsmål",
    subheading_06: "Raske svar på vanlige spørsmål om deltakelse og samarbeid.",
    faq_q1: "Trenger jeg forkunnskaper for å bli med?",
    faq_a1: "Nei. Vi lærer bort all metodikk, analyse og presentasjonsteknikk fra bunnen av på våre introduksjonssamlinger.",
    faq_q2: "Hvilke studieretninger kan delta?",
    faq_a2: "Alle fakulteter! Studenter fra økonomi, IT, ingeniørfag, juss, samfunnsfag og humaniora er hjertelig velkomne.",
    faq_q3: "Hvem kan bli medlem i UiA Case Club?",
    faq_a3: "Alle registrerte studenter ved Universitetet i Agder kan bli med. Fyll ut skjemaet for å motta informasjon og invitasjoner.",
    faq_q4: "Hvordan kan bedrifter arrangere en casekveld?",
    faq_a4: "Send en e-post til uiacaseclub@gmail.com eller bruk Kontakt-knappen nede til høyre. Vi avtaler dato, tema og praktiske detaljer.",

    // Footer
    footer_join: "Bli med",
    footer_contact: "Kontakt",
    footer_privacy: "Personvern & Vilkår",
    footer_compliance_link: "Juridisk & Personvernerklæring",
    footer_rights: "Alle rettigheter reservert. Studentdrevet ideell organisasjon.",
    footer_ai_note: "Dette nettstedet ble generert ved bruk av Vibe coding (AI-generert).",

    // Contact Widget
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
    btn_send_email: "Send e-post",

    // About Page
    about_hero_tag: "Om Foreningen",
    about_hero_title: "Forme Fremtidens Problemløsere",
    about_hero_desc: "UiA Case Club er den ledende studentdrevne caseforeningen ved Universitetet i Agder. Vi bygger bro mellom akademia og reell strategisk ledelse gjennom workshops, bedriftskvelder og nasjonale mesterskap.",
    about_stat1_num: "100%",
    about_stat1_lbl: "Åpent for alle UiA-studenter",
    about_stat2_num: "0,-",
    about_stat2_lbl: "Gratis medlemskap",
    about_stat3_num: "Nordisk",
    about_stat3_lbl: "Kvalifisering til mesterskap",
    about_sec1_title: "Vår Historie & Formål",
    about_sec1_text1: "UiA Case Club ble startet av engasjerte studenter på Campus Kristiansand for å etablere den internasjonale casetradisjonen ved Universitetet i Agder. Mens forelesninger lærer teori, krever næringslivet evnen til å strukturere komplekse problemer under tidspress, bygge overbevisende argumenter og presentere med trygghet i styrerommet.",
    about_sec1_text2: "Vi drives som en åpen, ideell studentorganisasjon. Vi trener våre medlemmer for prestisjefylte casemesterskap i Norge og Norden, kobler topptalenter med næringslivet, og bygger en varig kultur for problemløsning i Kristiansand.",
    about_sec2_title: "Casemetoden i 4 Steg",
    about_step1_title: "1. Diagnose & Analyse",
    about_step1_desc: "Bryt ned komplekse selskapsutfordringer med MECE og problemtrær for å avdekke rotårsaker fremfor overfladiske symptomer.",
    about_step2_title: "2. Kvantifisering & Modellering",
    about_step2_desc: "Gjør raske rimelighetsestimater, enhetsøkonomi og finansielle modeller for å forankre enhver strategi i solide tall.",
    about_step3_title: "3. Visuell Formidling",
    about_step3_desc: "Bygg overbevisende presentasjonsdekk etter pyramideprinsippet som gjør strategiske anbefalinger umiddelbart forståelige.",
    about_step4_title: "4. Jurypresentasjon",
    about_step4_desc: "Presenter strategien direkte for næringslivsledere og forsvar analysen under en krevende spørsmålsrunde.",
    about_sec3_title: "Hvem Kan Bli Med?",
    about_sec3_text: "Alle registrerte studenter ved Universitetet i Agder ønskes hjertelig velkommen. Enten du studerer økonomi, IT, ingeniørfag, juss, statsvitenskap eller samfunnsfag, er din unike bakgrunn verdifull i et caseteam. Det stilles ingen krav til forkunnskaper.",
    about_cta_title: "Bli Medlem i Dag",
    about_cta_desc: "Registreringen er åpen for alle studenter ved UiA. Fyll ut det enkle skjemaet for å motta invitasjoner og fagressurser.",

    // Board Page
    board_hero_tag: "Ledelse & Organisasjon",
    board_hero_title: "Hovedstyret",
    board_hero_desc: "Møt studentene som leder UiA Case Club. Styret koordinerer ukentlige workshops, bedriftssamarbeid, interne mesterskap og delegasjoner til nasjonale konkurranser.",
    board_r1_title: "Leder",
    board_r1_desc: "Overordnet ansvar for foreningens strategi, eksterne relasjoner med UiA-ledelsen og daglig drift.",
    board_r2_title: "Nestleder",
    board_r2_desc: "Støtter foreningens ledelse, internkommunikasjon, medlemskanaler og oppfølging av utvalg.",
    board_r3_title: "Konkurranseansvarlig",
    board_r3_desc: "Utformer workshop-fagplanen, velger ut caseoppgaver, veileder lag og koordinerer deltakelse i nasjonale mesterskap.",
    board_r4_title: "Næringslivsansvarlig",
    board_r4_desc: "Hovedkontakt mot konsulentselskaper, banker og teknologiselskaper for bedriftskvelder og sponsorater.",
    board_r5_title: "Markeds- og kommunikasjonsansvarlig",
    board_r5_desc: "Leder merkevarebygging, sosiale medier (Instagram & LinkedIn), campuspromotering og foto/film.",
    board_r6_title: "Økonomi- og arrangementsansvarlig",
    board_r6_desc: "Forvalter foreningens budsjett, arrangementslogistikk, rombooking på Campus Kristiansand og sosiale samlinger.",
    board_tba: "Vervet annonseres snart",
    board_note_title: "Ønsker du et styre- eller komitéverv?",
    board_note_desc: "Valg til Hovedstyret avholdes årlig. Vi rekrutterer også fortløpende motiverte studenter til arrangement-, case- og markedsutvalg. Ta kontakt for å bli med!",
    board_btn_contact: "Kontakt styret",

    // Privacy & Compliance Page
    priv_hero_tag: "Juridisk Informasjon & Åpenhet",
    priv_hero_title: "Personvern, Etterlevelse & Vilkår",
    priv_hero_desc: "UiA Case Club er forpliktet til å beskytte brukernes personvern og etterleve alle gjeldende EU-forordninger (GDPR, EU AI Act, ePrivacy) og norsk lovverk (Personopplysningsloven, Ekomloven, Åndsverkloven).",
    priv_s1_title: "1. Behandlingsansvarlig",
    priv_s1_text: "UiA Case Club er en uavhengig studentdrevet ideell forening tilknyttet Universitetet i Agder. Behandlingsansvarlig for personopplysninger behandlet via denne nettsiden er UiA Case Club, Campus Kristiansand, Universitetsveien 25, 4630 Kristiansand. Henvendelser kan rettes til uiacaseclub@gmail.com.",
    priv_s2_title: "2. Behandling av Personopplysninger (GDPR & Personopplysningsloven)",
    priv_s2_text: "Vi samler kun inn minimale personopplysninger som er strengt nødvendige for å besvare henvendelser og administrere medlemskap. Ved kontakthenvendelser mottar vi ditt navn, e-post og melding. Ved medlemsregistrering via Google Forms samles navn, student-e-post, studieretning og kull inn.",
    priv_s2_legal_title: "Rettslig Grunnlag:",
    priv_s2_legal_desc: "Behandlingen er basert på eksplisitt samtykke (GDPR art. 6 nr. 1 bokstav a) avgitt ved innsending, samt berettiget interesse (GDPR art. 6 nr. 1 bokstav f) for å administrere foreningens studentaktiviteter.",
    priv_s2_rights_title: "Dine Rettigheter:",
    priv_s2_rights_desc: "Du har rett til innsyn, retting eller sletting av dine personopplysninger når som helst. Samtykke kan trekkes tilbake ved å kontakte uiacaseclub@gmail.com. Du har også rett til å klage til Datatilsynet (datatilsynet.no).",
    priv_s3_title: "3. Informasjonskapsler & Sporing (Ekomloven § 3-15)",
    priv_s3_text: "Dette nettstedet er bygget etter prinsippet om innebygd personvern. Vi benytter INGEN sporings-cookies, ingen tredjeparts annonsesporere og ingen atferdsanalyse. Vi lagrer kun tekniske brukerinnstillinger (spesifikt foretrukket språk i localStorage), som er strengt nødvendig for å levere tjenesten og fullt unntatt fra krav om samtykkebanner i henhold til Ekomloven § 3-15 og ePrivacy-direktivet.",
    priv_s4_title: "4. AI-Åpenhet & Vibe Coding-Erklæring (EU AI Act art. 50)",
    priv_s4_text: "I henhold til artikkel 50 i EUs forordning om kunstig intelligens (EU AI Act - Forordning (EU) 2024/1689), opplyser vi åpent om at nettstedets tekniske kildekode, strukturelle oppbygning og grafiske designelementer er generert med bistand av kunstig intelligens ('Vibe coding'). Alt innhold, organisatorisk informasjon og ressurser er kvalitetssikret og publisert under menneskelig redaksjonelt ansvar av styret i UiA Case Club.",
    priv_s5_title: "5. Opphavsrett & Eksterne Lenker (Åndsverkloven)",
    priv_s5_text: "Alt originalt innhold, tekster og grafikk er beskyttet i henhold til åndsverkloven. Navnet og logoen til Universitetet i Agder tilhører Universitetet i Agder. Nettstedet inneholder lenker til eksterne tjenester (Google Forms, Instagram, LinkedIn); UiA Case Club har ikke ansvar for tredjeparters personvernpraksis eller eksternt innhold."
  }
};

let currentLang = localStorage.getItem('uiacc_lang') || 'en';

function initLanguageSwitcher() {
  const btnEn = document.getElementById('lang-btn-en');
  const btnNo = document.getElementById('lang-btn-no');
  const toggleBar = document.querySelector('.lang-toggle-bar');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('uiacc_lang', lang);
    document.documentElement.lang = lang;

    if (btnEn && btnNo) {
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
    }

    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    setTimeout(updateAudienceGlider, 50);
  }

  // Set initial language from storage
  setLanguage(currentLang);

  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnNo) btnNo.addEventListener('click', () => setLanguage('no'));
}

/* ==========================================================================
   2. Active Nav Link Detection
   ========================================================================== */
function initActiveNavLink() {
  const path = window.location.pathname.toLowerCase();
  let currentKey = 'home';

  if (path.includes('about.html') || path.endsWith('/about')) {
    currentKey = 'about';
  } else if (path.includes('board.html') || path.endsWith('/board')) {
    currentKey = 'board';
  } else if (path.includes('privacy.html') || path.endsWith('/privacy')) {
    currentKey = 'privacy';
  }

  document.querySelectorAll('.nav-item, .mobile-item').forEach(link => {
    const linkHref = (link.getAttribute('href') || '').toLowerCase();
    link.classList.remove('active');

    if (currentKey === 'home' && (linkHref === 'index.html' || linkHref === '/' || linkHref === '#')) {
      link.classList.add('active');
    } else if (currentKey === 'about' && linkHref.includes('about.html')) {
      link.classList.add('active');
    } else if (currentKey === 'board' && linkHref.includes('board.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   3. Pathways Glider & Edge Slide Switcher
   ========================================================================== */
function initAudienceEdgeSlideToggle() {
  const btnStudents = document.getElementById('btn-toggle-students');
  const btnCompanies = document.getElementById('btn-toggle-companies');
  const viewStudents = document.getElementById('view-students');
  const viewCompanies = document.getElementById('view-companies');
  const heroPartnerBtn = document.getElementById('hero-partner-btn');

  if (!btnStudents || !btnCompanies || !viewStudents || !viewCompanies) return;

  updateAudienceGlider();
  window.addEventListener('resize', updateAudienceGlider);

  function switchToStudents() {
    if (btnStudents.classList.contains('active')) return;

    btnStudents.classList.add('active');
    btnStudents.setAttribute('aria-selected', 'true');
    btnCompanies.classList.remove('active');
    btnCompanies.setAttribute('aria-selected', 'false');
    updateAudienceGlider();

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
   4. Bottom Morphing Liquid Glass Mobile Navbar
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
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    const body = card.querySelector('.faq-body');

    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      faqCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
          const otherTrigger = otherCard.querySelector('.faq-trigger');
          const otherBody = otherCard.querySelector('.faq-body');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

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
   6. Morphing Contact Us Widget
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

  document.addEventListener('click', (e) => {
    if (widget.classList.contains('is-expanded') && !widget.contains(e.target)) {
      collapse();
    }
  });

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
   7. What is a Case Club Deep Dive Modal
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
   8. Copy Email Utility & Toast
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
   9. Snappy Slowload Scroll Appear Animations
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
   10. Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

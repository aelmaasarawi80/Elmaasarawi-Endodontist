/**
 * ============================================================================
 * DR. AHMED ELMAASARAWI — ENDODONTIST PORTFOLIO CONFIGURATION
 * ============================================================================
 * Edit this single file to update profile details, research metrics,
 * clinical experience, competencies, contact links, or clinical cases.
 *
 * Radiographs (`assets/radiographs/`):
 *   - case-01-broken-file-1.jpg    (3-stage broken file retrieval sequence)
 *   - case-02-severe-curvature.jpg (Severely curved molar canals post-op)
 *   - case-03-broken-file-2.jpg    (4-stage broken file retrieval sequence)
 *   - case-04-broken-file-3.jpg    (Tooth #47 MB middle-third retrieval)
 * ============================================================================
 */

window.PORTFOLIO_CONFIG = {
  doctor: {
    name: "Dr. Ahmed Elmaasarawi",
    credentials: "BDS (Hons) · PhD Candidate (Kiel, Germany)",
    role: "Senior Endodontist · Clinical Educator · Professional Dental Photographer",
    monogram: "AE",
    availabilityBadge:
      "Open to Consultant Endodontist Roles (Class A Clinics) & Complex Referrals",
    heroEyebrow:
      "SENIOR ENDODONTIST · PHD CANDIDATE (KIEL) · DENTAL PHOTOGRAPHER",
    heroHeadline: "20+ Years Preserving Teeth Others Deem",
    heroHeadlineAccent: "Unrestorable.",
    heroSubtitle:
      "Senior Endodontist with 20+ years of clinical practice and a PhD in Endodontics from Kiel University, Germany (thesis submitted, defense pending). Specializing in complex retreatments, severe curvatures, separated instruments, calcified canals, ledge negotiation, and perforation repair backed by 25-year survival research and postgraduate clinical photography.",
    metrics: [
      { value: "20+ Yrs", label: "Clinical Endodontic Practice" },
      { value: "14,233", label: "Teeth Studied Over 25 Years" },
      { value: "30–40%", label: "Fewer Interventions (Reciprocation)" },
      { value: "Kiel, DE", label: "PhD Endodontics (Thesis Submitted)" },
    ],
    aboutHeading: "Clinical Mastery Backed by",
    aboutHeadingAccent: "25-Year Survival Evidence",
    aboutBio: [
      "Senior Endodontist with over 20 years of dedicated clinical practice managing high-difficulty cases including complex retreatments, obliterated calcified canals, separated instrument retrieval and bypassing, ledge negotiation, and perforation repair—guided by an evidence-based philosophy published in the International Endodontic Journal and featured in Dental Tribune International.",
      "Alongside specialist practice, I serve as Clinical Supervisor & Teaching Assistant at MSA University, where I mentor undergraduate and postgraduate clinicians and teach clinical dental photography to Master's-level postgraduate students. Seeking a Consultant Endodontist position in a premium (Class A) clinic.",
    ],
    languages: ["Arabic (Native)", "English (Fluent)", "German (Intermediate)"],
    education: [
      {
        title: "PhD Candidate in Endodontics",
        org: "Christian-Albrechts-Universität zu Kiel · Kiel, Germany",
        year: "Sep 2022 – Present",
        detail:
          "Status: Thesis submitted; awaiting defense appointment. Focus: Evidence-based endodontic treatment protocols using multistate analysis and group balancing.",
      },
      {
        title: "Bachelor of Dental Surgery (BDS)",
        org: "Ain Shams University · Cairo, Egypt",
        year: "May 2003",
        detail:
          "Graduated with Excellent Grade with Honors; ranked 14th in the graduating class.",
      },
    ],
    experience: [
      {
        role: "Senior Endodontist",
        org: "Dental Art Dental Center",
        location: "Giza, Egypt",
        period: "Jun 2007 – Feb 2026",
        bullets: [
          "Performed complex primary root canal treatments and retreatments using advanced rotary and reciprocating systems, with optimal chemomechanical preparation.",
          "Achieved precise working length and canal negotiation using electronic apex locators and refined tactile technique.",
          "Managed severe iatrogenic complications (separated instruments, ledges, perforations), maximizing tooth retention.",
          "Educated patients on treatment, oral health maintenance and post-operative care, supporting strong patient retention and outcomes.",
        ],
      },
      {
        role: "Clinical Supervisor & Teaching Assistant",
        org: "MSA University",
        location: "Giza, Egypt",
        period: "Feb 2006 – Present",
        bullets: [
          "Supervise clinical and laboratory sessions, ensuring ethical, high-quality patient care under strict safety standards and modern endodontic protocols.",
          "Evaluate preclinical and clinical performance, giving constructive feedback that builds students' hand and rotary instrumentation skills.",
          "Teach dental photography to Master's-degree postgraduate students, covering clinical documentation, image standardization and presentation of cases.",
          "Produce professional-quality clinical photographs for case documentation, treatment planning, patient communication and academic presentations.",
          "Serve as Student Affairs Officer, working with the Examination Unit to process and evaluate academic datasets for educational improvement.",
        ],
      },
      {
        role: "Guest Scientist & PhD Researcher",
        org: "Akademie für Zahnärztliche Fortbildung Karlsruhe",
        location: "Karlsruhe, Germany",
        period: "Oct 2022 – Sep 2023",
        bullets: [
          "Led a PhD retrospective cohort study of 14,233 teeth over 25 years, comparing hand, rotary and reciprocating root canal protocols.",
          "Showed that reciprocating instrumentation cut further interventions by 30–40%, with about 68% tooth survival at ten years; non-surgical retreatment fell by 66% and surgical retreatment by 57% versus hand files.",
          "Applied R to complex clinical data analysis, validating the effectiveness of specific endodontic interventions.",
          "Used OpenLCA to calculate the carbon footprint of dental treatment options, pioneering work on clinical effectiveness and environmental sustainability.",
        ],
      },
    ],
  },

  research: {
    quote: "The longer the tooth survives, the better it is for the patient.",
    quoteSource: "Dental Tribune International · Interview · 21 Sep 2026",
    studyTitle:
      "Influence of different endodontic treatment protocols on tooth survival: a retrospective cohort study with multistate analysis and group balancing",
    citation:
      "Elmaasarawi A, Mekhemar M, Bartols A. Int Endod J. 2025;58(10):1529–1550.",
    doi: "10.1111/iej.14271",
    doiUrl: "https://doi.org/10.1111/iej.14271",
    pmid: "40509940",
    pmidUrl: "https://pubmed.ncbi.nlm.nih.gov/40509940/",
    stats: [
      { value: "14,233", label: "Teeth analyzed across a 25-year cohort" },
      {
        value: "30–40%",
        label: "Fewer further interventions with reciprocation",
      },
      {
        value: "−66%",
        label: "Lower non-surgical retreatment vs. hand files",
      },
      {
        value: "−57%",
        label: "Lower surgical retreatment · ~68% 10-yr survival",
      },
    ],
    sustainabilityNote:
      "Combined advanced multistate statistical modeling in R with OpenLCA life-cycle carbon footprint assessment, bridging clinical endodontic effectiveness and environmental sustainability.",
    serviceAndMedia: [
      {
        kind: "PEER-REVIEWED PUBLICATION",
        title:
          "Elmaasarawi A, Mekhemar M, Bartols A. Influence of different endodontic treatment protocols on tooth survival: a retrospective cohort study with multistate analysis and group balancing.",
        meta: "Int Endod J. 2025;58(10):1529–1550 · doi:10.1111/iej.14271 · PMID: 40509940",
        url: "https://doi.org/10.1111/iej.14271",
        urlLabel: "View DOI",
      },
      {
        kind: "FEATURED INTERVIEW",
        title:
          '"The longer the tooth survives, the better it is for the patient."',
        meta: "Dental Tribune International · 21 Sep 2026",
        url: "",
        urlLabel: "",
      },
      {
        kind: "PEER REVIEW SERVICE",
        title: "Invited Peer Reviewer",
        meta: "European Endodontic Journal · Digital Health Journal (2025)",
        url: "",
        urlLabel: "",
      },
    ],
  },

  competencies: [
    {
      step: "01 · CLINICAL",
      title: "Advanced Clinical Endodontics",
      desc: "High-precision primary root canal therapy and complex retreatments combining rotary and reciprocating systems, electronic apex locators, calcified canal negotiation, and 3D obturation.",
      skills: [
        "Rotary & Reciprocating Systems",
        "Electronic Apex Locators",
        "Calcified Canal Negotiation",
        "3D Obturation",
      ],
      icon: "endodontics",
    },
    {
      step: "02 · SALVAGE",
      title: "Complication Management",
      desc: "Targeted tooth preservation for iatrogenic challenges—retrieval and bypassing of separated instruments, tactile ledge negotiation, and bioceramic perforation repair.",
      skills: [
        "Broken File Retrieval & Bypass",
        "Ledge Negotiation",
        "Perforation Repair",
      ],
      icon: "complications",
    },
    {
      step: "03 · DOCUMENTATION",
      title: "Professional Dental Photography",
      desc: "Standardized clinical and portfolio dental photography supporting accurate treatment planning, high-clarity patient communication, and Master's-level postgraduate instruction.",
      skills: [
        "Portfolio Documentation",
        "Image Standardization",
        "MSc Postgraduate Teaching",
      ],
      icon: "photography",
    },
    {
      step: "04 · EDUCATION",
      title: "Teaching & Clinical Mentorship",
      desc: "Nearly two decades supervising preclinical and clinical endodontic sessions, delivering structured feedback on hand and rotary instrumentation, and supporting academic data evaluation.",
      skills: [
        "Postgraduate & UG Supervision",
        "Performance Evaluation",
        "Academic Data Analysis",
      ],
      icon: "teaching",
    },
    {
      step: "05 · EVIDENCE",
      title: "Research & Outcome Analytics",
      desc: "Evidence-based endodontic research utilizing R statistical modeling, multistate survival analysis, OpenLCA carbon footprint evaluation, and international journal peer review.",
      skills: [
        "Multistate Survival in R",
        "OpenLCA Sustainability",
        "Peer Review",
      ],
      icon: "research",
    },
  ],

  contact: {
    location: "Cairo, Egypt",
    availability:
      "Seeking Consultant Endodontist position (Class A Clinic) · Available for complex referrals & MSc dental photography training",
    phone: "(+20) 155 61 333 17",
    phoneHref: "tel:+201556133317",
    email: "dramohie@gmail.com",
    referralEmail: "dramohie@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmed-elmaasarawi-1a4358219/",
    linkedinLabel: "linkedin.com/in/ahmed-elmaasarawi-1a4358219",
    referralChecklist: [
      "Pre-operative periapical radiograph (RVG) or CBCT views if available",
      "FDI / Universal tooth number, pulp vitality, and percussion/palpation status",
      "Prior procedural notes (separated instrument level, ledge depth, or perforation site)",
      "Proposed definitive coronal restoration plan or Class A clinic scheduling inquiry",
    ],
  },

  cases: [
    {
      id: "case-01",
      caseNumber: "CASE 01",
      title: "Separated Instrument Retrieval in Curved Mandibular Molar",
      category: "Broken File Retrieval",
      image: "assets/radiographs/case-01-broken-file-1.jpg",
      stageBadge: "3-STAGE SEQUENCE",
      keyMetric: "3-Stage Retrieval",
      toothLabel: "Mandibular Molar · Apical Curve",
      difficulty: "Complication Management",
      diagnosis:
        "Previously Initiated Therapy · Retained Separated Instrument in Apical Curve",
      summary:
        "Three-stage radiographic progression documenting a broken rotary fragment deep inside a curved mandibular root canal, intra-operative rubber dam verification of complete retrieval, and final 3D obturation.",
      challenge:
        "Safely dislodging a fractured instrument lodged beyond the mid-root curvature while preserving pericervical and radicular dentin thickness without strip perforation.",
      protocolSteps: [
        "Pre-operative radiographic assessment identifying fragment depth, curvature angle, and canal taper.",
        "Rubber dam isolation and conservative coronal staging to establish straight-line access to the coronal aspect of the separated file.",
        "Ultrasonic activation and intra-operative confirmation radiograph verifying complete fragment removal.",
        "Full working-length chemomechanical disinfection, electronic apex locator verification, and dense 3D obturation of both mesial and distal canal systems.",
      ],
      armamentarium: [
        "Ultrasonic Retrieval Protocol",
        "Rubber Dam Isolation",
        "Electronic Apex Locator",
        "3D Root Canal Obturation",
      ],
      outcome:
        "Complete removal of the separated fragment confirmed mid-procedure, followed by homogeneous 3D obturation extending cleanly to all radiographic apices.",
    },
    {
      id: "case-02",
      caseNumber: "CASE 02",
      title: "Endodontic Treatment of Severely Curved Molar Canals",
      category: "Severe Curvature",
      image: "assets/radiographs/case-02-severe-curvature.jpg",
      stageBadge: "POST-OP RADIOGRAPH",
      keyMetric: "Severe Curvatures",
      toothLabel: "Mandibular Molar · Mesial & Distal Curves",
      difficulty: "High-Difficulty Anatomy",
      diagnosis: "Severe Multi-Root Apical Curvatures · Preserved Original Path",
      summary:
        "Post-operative periapical radiograph demonstrating three densely obturated canals faithfully tracing severe opposing apical curvatures in both mesial and distal roots without ledging or transportation.",
      challenge:
        "Shaping pronounced J-shaped apical deflections across both roots without zipping the apical foramen, creating ledges, or subjecting NiTi instruments to cyclic fatigue separation.",
      protocolSteps: [
        "Manual tactile exploration and pre-curved small hand-file glide path respecting the sharp apical curvature in both roots.",
        "Working-length determination via electronic apex locator prior to rotary shaping.",
        "Conservative flexible rotary and reciprocating instrumentation avoiding coronal over-enlargement or apical straightening.",
        "Three-dimensional obturation tracing the complete curved anatomy cleanly to each radiographic apex with coronal core seal.",
      ],
      armamentarium: [
        "Tactile Hand Glide Path",
        "Flexible Rotary / Reciprocating NiTi",
        "Electronic Apex Locator",
        "3D Obturation",
      ],
      outcome:
        "All curved mesial and distal canals shaped and obturated cleanly along their natural trajectories with intact radicular dentin and sealed coronal build-up.",
    },
    {
      id: "case-03",
      caseNumber: "CASE 03",
      title: "Apical-Third Broken File Retrieval (4-Stage Progression)",
      category: "Broken File Retrieval",
      image: "assets/radiographs/case-03-broken-file-2.jpg",
      stageBadge: "4-STAGE SEQUENCE",
      keyMetric: "4-Stage Retrieval",
      toothLabel: "Mandibular Molar · Apical Third",
      difficulty: "Complication Management",
      diagnosis:
        "Previously Initiated Therapy · Fractured Instrument in Curved Apical Third",
      summary:
        "Four-stage radiographic sequence tracking an apical-third separated file inside a curved mandibular molar from pre-operative diagnosis through retrieval/working-length file verification, master cone fit, and final 3D obturation.",
      challenge:
        "Accessing and retrieving a deeply seated fragment inside the curved apical third under rubber dam isolation while maintaining full working-length patency.",
      protocolSteps: [
        "Pre-operative radiograph locating the fractured segment in the curved apical third beneath a temporary restoration.",
        "Rubber dam placement, retrieval of the separated segment, and working-length verification radiograph confirming full apical patency.",
        "Master gutta-percha cone radiograph verifying accurate tug-back and length adaptation across both roots.",
        "Final 3D obturation and dense coronal restoration sealing the root canal system cleanly.",
      ],
      armamentarium: [
        "Apical-Third Retrieval Protocol",
        "Electronic Apex Locator",
        "Master Cone Radiographic Verification",
        "3D Obturation",
      ],
      outcome:
        "Fragment successfully cleared from the apical curvature, confirmed at full working length with master cone verification and sealed via dense 3D obturation.",
    },
    {
      id: "case-04",
      caseNumber: "CASE 04",
      title: "Middle-Third Broken File Retrieval in Mesiobuccal Canal",
      category: "Broken File Retrieval",
      image: "assets/radiographs/case-04-broken-file-3.jpg",
      stageBadge: "PRE-OP & POST-OP",
      keyMetric: "Tooth #47 · MB Canal",
      toothLabel: "Mandibular Right Second Molar (FDI #47)",
      difficulty: "Complication Management",
      diagnosis:
        "Deep Coronal Caries · Separated Instrument in MB Canal (Middle Third)",
      summary:
        "Pre-operative and post-operative comparison of Tooth #47 presenting with deep coronal caries and a broken file in the middle third of the mesiobuccal canal, resolved with complete retrieval and dense 3D obturation.",
      challenge:
        "Excavating extensive caries and retrieving an intracanal broken file from the middle third of a posterior second molar (#47) where visibility and interocclusal clearance are restricted.",
      protocolSteps: [
        "Deep caries removal and conservative access cavity refinement to gain direct access to the separated fragment in the MB canal middle third.",
        "Controlled ultrasonic dislodgement and intact retrieval of the broken file segment.",
        "Electronic apex locator working-length confirmation and full chemomechanical cleaning across mesial and distal canals.",
        "Tapered 3D obturation extending smoothly to the apices and definitive coronal seal restoration.",
      ],
      armamentarium: [
        "Caries Excavation & Core Build-Up",
        "Ultrasonic Retrieval Tips",
        "Electronic Apex Locator",
        "3D Tapered Obturation",
      ],
      outcome:
        "Complete retrieval of the MB middle-third broken file with intact radicular walls, tapered full-length obturation, and sealed coronal restoration on Tooth #47.",
    },
  ],

  disclaimer:
    "Dr. Ahmed Elmaasarawi — Senior Endodontist Portfolio. Clinical radiographs, career credentials, and peer-reviewed research metrics are presented for professional clinical, academic, and Class A clinic referral review.",
};

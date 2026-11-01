/* EDIT YOUR WEBSITE HERE.
Replace text inside quotes; keep quotes, commas, and brackets in place.
Leave a URL as "" until you have a real link. See README.md for examples.
All [square-bracketed text] is a placeholder, not a claim about you. */
window.siteContent = {
  // Change false to true when you are ready to display these sections.
  visibleSections: {
    publications: false,
    workingPapers: false,
  },
  name: "Luca Emanuele Marcianò",
  position: "PhD Candidate",
  university: "Collegio Carlo Alberto and the University of Turin",
  department: "",
  email: "luca.marciano@carloalberto.org",
  location: "",
  biography: [
    "Hi all!\nI am a PhD Candidate at [Collegio Carlo Alberto](https://www.carloalberto.org/) and the [University of Turin](https://www.esomas.unito.it/do/home.pl).",
    "My research interests are family economics, child development, intergenerational mobility and social media."
  ],
  cv: "assets/pdfs/Marcianò_CV.pdf", // Add your file, then enter "assets/pdfs/my-cv.pdf"
  linkedin: "https://www.linkedin.com/in/luca-emanuele-marcian%C3%B2-a35277206/", // Your full LinkedIn profile URL
  github: "https://github.com/LucaMarcian", // Your full GitHub profile URL

  // To add a paper, copy an entire { ... } block, including its trailing comma.
  // For a single-author paper, use coauthors: "".
  // publications: [
  //  {
  //    title: "[Title of your published paper]",
  //    coauthors: "[Coauthor names]",
  //    status: "[Journal name, volume, pages, year]",
  //    pdf: "",
  //    abstract: "[Add the abstract of your published paper here: the research question, methods, and main findings.]"
  //  },
  // ],
  // workingPapers: [
  //  {
  //    title: "[Title of your working paper]",
  //    coauthors: "[Coauthor names]",
  //    status: "[Working paper / under review / last updated: month year]",
  //    pdf: "",
  //    abstract: "[Add the abstract of your working paper here.]"
  //  },
  //],
  workInProgress: [
    {
      title: "Motherhood Delay and Child Outcomes",
      coauthors: "",
      status: "",
      pdf: "",
      abstract: ""
    },
    {
      title: "Taking the Pill and breaking the links:\nThe effect of oral contraceptives on intergenerational mobility",
      coauthors: [
        { name: "Kelly S. Ragan", url: "https://sites.google.com/site/kellysragan/" }
      ],
      status: "",
      pdf: "",
      abstract: ""
    },
    {
      title: "Social Media, Mental Health, and Offline Social Engagement:\nEvidence Across Ages and Within Families",
      coauthors: [
        { name: "Enrico Rubolino", url: "https://enricorubolino.github.io/" },
        { name: "Giuseppe Sorrenti", url: "https://sites.google.com/site/giuseppesorrenti85/" },
        { name: "Elena Viganò", url: "https://www.linkedin.com/in/elena-vigan%C3%B2-6033a8361" }
      ],
      status: "",
      pdf: "",
      abstract: ""
    },
    {
      title: "Social Media and Labor Market outcomes:\nAn analysis of Facebook effect on college graduates earnings",
      coauthors: [
        { name: "Kacper Krasowski", url: "https://kacperkrasowski.github.io/" }
      ],
      status: "",
      pdf: "",
    //  slides: "", // Add a file path or URL when your slides are ready.
      abstract: ""
    },
  ],
  policy: [
    {
      title: "Toward a Universal Right to Higher Education:\nA Reform Proposal for Italy’s Student Support System",
      coauthors:[
              { name: "Elena Bortolato", url: "https://elenabortolato.github.io/" }

    ],
      pdf: "assets/pdfs/Italy - Universal Right to Higher Education.pdf",
      abstract: "Italy lags behind most of the European Union in tertiary attainment: only 31.6% of 25 34 year-olds hold a university degree, against an EU average of 44.1%, while the country simultaneously experiences one of Europe’s highest youth NEET rates, a persistent brain drain of its most educated graduates, and one of the lowest shares of international students among EU member states. At the same time, the demographic pool of prospective students is set to shrink by roughly 30% by 2040, since the relevant cohorts are already born and counted in official statistics.\nWe argue that a central, underexplored driver of these out comes is the design of Italy’s means-tested student support system, which relies on ISEE (Equivalent Economic Situation Indicator), an instrument that is backward-looking, illiquid asset-sensitive, threshold-driven, and administratively regressive. We propose a reform of the student support system “Diritto allo Studio Universitario (DSU)” built on six pillars:\n(i) tuition-free access beyond ISEE, conditional on minimum academic progress;\n(ii) universal income-contingent loans to cover living costs;\n(iii) merit-based grants awarded ex-post rather than through ex-ante selection;\n(iv) support grants for working and economically fragile students;\n(v) rationalization of scattered one-off subsidies;\n(vi) an expansion of price-capped student housing.\nWe estimate a gross annual cost of approximately €3.3–3.5 billion (about 0.15–0.18% of Italian GDP), of which roughly €1 billion is already allocated to existing right-to-study spending, implying a net additional annual cost of approximately €2.2–2.5 billion, partially self-financed through a progression-based contribution on missing academic credits.\nWe discuss the design trade-offs involved: non-regressiveness versus universality, risk aversion to debt, merit measurement under unequal starting conditions, and the verification of informal student employment; and illustrate the reform’s incidence through seven stylized student profiles."
    },
  ],
};

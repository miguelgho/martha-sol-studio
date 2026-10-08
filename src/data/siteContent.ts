export const SITE_CONTENT = {
  brand: {
    name: "Martha Sol",
    subtitle: "Studio · Photography & Film",
    location: "Miami · South Florida",
    instagram: "https://www.instagram.com/marthasolstudio/",
    instagramHandle: "@marthasolstudio",
  },

  navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Book", href: "#contact" },
  ],

  hero: {
    eyebrow: "Miami · South Florida",
    titleBefore: "Stories in ",
    titleHighlight: "light,",
    titleAfter: "made to feel.",
    description:
      "Warm, cinematic photography and film for people, brands and the moments worth remembering.",
    primaryButton: "Book your session",
    secondaryButton: "View selected work",
    note: "Martha Sol Studio · Est. 2024",
    image: "/images/hero/portrait-hero.jpeg",
    imageAlt: "Editorial portrait photographed by Martha Sol Studio",
  },

  intro: {
    eyebrow: "The studio",
    title: ["Natural feeling.", "Intentional frame."],
    lead:
      "Photography should look beautiful, but it should also bring you back to something real.",
    description:
      "Every session is guided with care—from the first idea to the final gallery—so you can feel comfortable, seen and completely yourself.",
  },

  serviceStrip: [
    "Portraits",
    "Headshots",
    "Personal Branding",
    "Events",
    "Weddings",
    "Photo + Film",
  ],

  portfolio: {
    eyebrow: "Selected work",
    title: ["People, details", "& little worlds."],
    description:
      "A glimpse into professional portraits, celebrations, quiet gestures and cinematic details that shape every story.",

    images: [
      {
        src: "/images/portfolio/portfolio-lifestyle-flowers.jpeg",
        alt: "Lifestyle portrait with flowers",
      },
      {
        src: "/images/portfolio/portfolio-editorial-seated-V2.jpeg",
        alt: "Editorial portrait in a sunlit interior",
      },
      {
        src: "/images/portfolio/portfolio-editorial-closeup.jpeg",
        alt: "Creative editorial close-up portrait",
      },
      {
        src: "/images/portfolio/portfolio-child-portrait-one.jpeg",
        alt: "Natural outdoor child portrait",
      },
      {
        src: "/images/portfolio/portfolio-child-portrait-two-V2.jpeg",
        alt: "Lifestyle portrait of a young child outdoors",
      },
      {
        src: "/images/portfolio/portfolio-headshot-bw-V4.jpeg",
        alt: "Black and white male headshot",
      },
      {
        src: "/images/portfolio/portfolio-headshot-color.jpeg",
        alt: "Natural-light male headshot",
      },
      {
        src: "/images/portfolio/portfolio-couple-beach.jpeg",
        alt: "Couple portrait on Miami Beach",
      },
    ],
  },

  services: {
    eyebrow: "Services & pricing",
    title: "Choose your story.",
    description:
      "Clear packages with room for your personality. A 30% non-refundable retainer and signed agreement reserve your date. Custom productions are quoted after a short creative consultation.",

    categories: [
      {
        name: "Portraits",
        description:
          "For creative portraits, birthdays, couples, maternity and families. Outdoor or lifestyle locations throughout Miami.",

        packages: [
          {
            name: "The Mini",
            price: "$225",
            features: [
              "30-minute session",
              "One location + one look",
              "8 fully edited images",
              "Private online gallery",
              "7–10 business day delivery",
            ],
            button: "Choose The Mini",
          },

          {
            name: "The Story",
            price: "$350",
            badge: "Most popular",
            features: [
              "60-minute session",
              "One location + two looks",
              "20 fully edited images",
              "Private online gallery",
              "7–10 business day delivery",
            ],
            button: "Choose The Story",
          },

          {
            name: "The Editorial",
            price: "$525",
            features: [
              "Up to 90 minutes",
              "Two nearby locations",
              "Up to three looks",
              "35 fully edited images",
              "Creative planning + styling guidance",
            ],
            button: "Choose Editorial",
          },
        ],
      },

      {
        name: "Headshots",
        description:
          "Polished, approachable portraits for professionals, entrepreneurs, teams and talent.",

        packages: [
          {
            name: "Essential",
            price: "$195",
            features: [
              "20-minute session",
              "One look + one backdrop",
              "3 high-end retouched images",
              "Commercial web + social use",
              "5–7 business day delivery",
            ],
            button: "Book Essential",
          },

          {
            name: "Professional",
            price: "$325",
            badge: "Best value",
            features: [
              "45-minute session",
              "Up to two looks",
              "8 high-end retouched images",
              "Indoor or outdoor location",
              "Expression + posing guidance",
            ],
            button: "Book Professional",
          },

          {
            name: "Team Day",
            price: "$450",
            priceNote: "up to 5 people",
            features: [
              "Consistent team setup",
              "One retouched image per person",
              "Individual gallery selections",
              "$65 each additional person",
              "On-location in Miami",
            ],
            button: "Plan Team Day",
          },
        ],
      },

      {
        name: "Personal Branding",
        description:
          "Intentional imagery for entrepreneurs and small businesses who need a consistent visual presence.",

        packages: [
          {
            name: "Content Refresh",
            price: "$375",
            features: [
              "60-minute session",
              "Two looks + one location",
              "18 edited photographs",
              "Portrait, detail + lifestyle mix",
              "Organic social media usage",
            ],
            button: "Book Refresh",
          },

          {
            name: "Brand Story",
            price: "$625",
            badge: "Photo + motion",
            features: [
              "90-minute session",
              "Up to three looks",
              "30 edited photographs",
              "5 vertical iPhone video clips",
              "Simple creative direction",
            ],
            button: "Book Brand Story",
          },

          {
            name: "Content Day",
            price: "$950",
            features: [
              "Up to three hours",
              "Multiple looks + scenes",
              "50 edited photographs",
              "10 vertical video clips",
              "One edited 20–30 sec reel",
            ],
            button: "Plan Content Day",
          },
        ],
      },

      {
        name: "Events",
        description:
          "Birthdays, showers, intimate celebrations, launches and community events captured with a documentary eye.",

        packages: [
          {
            name: "Two Hours",
            price: "$500",
            features: [
              "One photographer",
              "100+ edited images",
              "Details + candid coverage",
              "Private online gallery",
              "10–14 business day delivery",
            ],
            button: "Book Two Hours",
          },

          {
            name: "Four Hours",
            price: "$900",
            badge: "Most popular",
            features: [
              "One photographer",
              "200+ edited images",
              "Key moments + portraits",
              "Private online gallery",
              "10 preview images in 72 hours",
            ],
            button: "Book Four Hours",
          },

          {
            name: "Six Hours",
            price: "$1,300",
            features: [
              "Extended event coverage",
              "300+ edited images",
              "Timeline planning",
              "Private online gallery",
              "10 preview images in 72 hours",
            ],
            button: "Book Six Hours",
          },
        ],
      },

      {
        name: "Weddings",
        description:
          "For courthouse vows, intimate weddings and full celebrations. Every package includes planning support and a carefully edited online gallery.",

        packages: [
          {
            name: "City Vows",
            price: "$650",
            features: [
              "90 minutes of coverage",
              "60+ edited images",
              "Ceremony + portraits",
              "10 previews in 72 hours",
              "Miami courthouse area",
            ],
            button: "Choose City Vows",
          },

          {
            name: "The Gathering",
            price: "$1,250",
            badge: "Intimate weddings",
            features: [
              "Three hours of coverage",
              "150+ edited images",
              "Ceremony, portraits + details",
              "Timeline guidance",
              "Private online gallery",
            ],
            button: "Choose Gathering",
          },

          {
            name: "The Celebration",
            price: "$2,400",
            features: [
              "Six hours of coverage",
              "350+ edited images",
              "Second photographer for 3 hours",
              "Timeline consultation",
              "25 previews in 72 hours",
            ],
            button: "Choose Celebration",
          },
        ],

        finePrint:
          "Wedding dates are accepted selectively while the studio expands this collection. Eight-hour coverage, albums and full photo + film proposals are available by custom quote.",
      },
    ],
  },

  motion: {
    eyebrow: "Motion by Martha Sol Studio",
    title: ["Your story", "can move, too."],
    description:
      "Short-form content is captured with intention, not unnecessary complexity. Depending on the story, we use the tool that serves it best—from natural iPhone footage for social media to expanded team coverage for events and weddings.",
    options: [
      {
        name: "Vertical Reel Add-On",
        price: "$275",
      },
      {
        name: "Event Highlight Film",
        price: "from $850",
      },
      {
        name: "Wedding Photo + Film",
        price: "custom proposal",
      },
    ],
    button: "Tell us your idea",
    image: "/images/studio/studio-space-bw-V2.jpeg",
    imageAlt: "Black and white Martha Sol Studio lighting setup",
  },

  about: {
    eyebrow: "Behind the camera",
    title: "Hi, I’m Martha.",
    paragraphs: [
      "I’ve been drawn to cameras for as long as I can remember. When I was little, I was always taking pictures and recording videos. I dreamed of growing up to be an actress and produce movies.",
      "That love of stories never left me. Today, I’m a Cuban-born photographer in Miami, creating portraits and photographs that help people feel present, comfortable and truly themselves.",
      "My sessions are relaxed and guided, with room for real moments to unfold. Whether we’re making a headshot, celebrating a milestone or documenting a gathering, I want your photos to feel like you—and bring you back to how it felt.",
    ],
    signature: "With light, Martha",
    image: "/images/about/martha-about-sitting.jpeg",
    imageAlt: "Martha sitting on a stool with her camera in the studio",
  },

  process: {
    eyebrow: "What to expect",
    title: "Simple from start to finish.",

    steps: [
      {
        number: "01",
        title: "Tell me your idea",
        description:
          "Share your date, vision and what you need the photographs or film to do for you.",
      },
      {
        number: "02",
        title: "Plan the details",
        description:
          "We choose the right package, location, timing and visual direction together.",
      },
      {
        number: "03",
        title: "Make something real",
        description:
          "You receive a guided experience and an edited gallery made to feel like you.",
      },
    ],
  },

  faq: {
    eyebrow: "Good to know",
    title: ["Questions,", "answered."],

    items: [
      {
        question: "How do I reserve a date?",
        answer:
          "Your date is reserved after the agreement is signed and the 30% non-refundable retainer is paid. The remaining balance is due before the session or event.",
      },
      {
        question: "Do you deliver RAW files?",
        answer:
          "No. Your final gallery includes carefully selected and professionally edited high-resolution photographs that reflect the studio’s finished style.",
      },
      {
        question: "What if it rains?",
        answer:
          "For outdoor portrait sessions, we monitor the weather and reschedule when conditions would affect safety or the quality of the experience.",
      },
      {
        question: "Are studio, travel and permit fees included?",
        answer:
          "Studio rentals, paid locations, permits, parking and travel beyond the included Miami service area are quoted separately before booking.",
      },
      {
        question: "Can I combine photography and video?",
        answer:
          "Yes. Short vertical content can be added to branding and select sessions, while events and weddings can receive a custom Photo + Film proposal from the studio.",
      },
    ],
  },

  contact: {
    eyebrow: "Start your story",
    title: ["Let’s make", "something yours."],
    description:
      "Share a few details and the studio will respond with availability and the best next step for your session.",

    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      service: "Service",
      preferredDate: "Preferred date",
      budget: "Estimated budget",
      message: "Tell me about your idea",
    },

    servicePlaceholder: "Select one",

    serviceOptions: [
      "Portraits",
      "Headshots",
      "Personal Branding",
      "Events",
      "Weddings",
      "Photo + Film",
    ],

    budgetPlaceholder: "Select range",

    budgetOptions: [
      "Under $350",
      "$350–$700",
      "$700–$1,500",
      "$1,500–$3,000",
      "$3,000+",
    ],

    button: "Prepare inquiry",

    note:
      "Your inquiry will be copied so you can send it directly to the studio on Instagram.",
  },

  footer: {
    copyright: "Martha Sol Studio · Miami, Florida",
  },
} as const;
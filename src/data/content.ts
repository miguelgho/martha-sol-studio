// src/data/content.ts

export const MARTHA_SOL_DATA = {
  brand: {
    name: "Martha Sol",
    subtitle: "STUDIO · PHOTOGRAPHY & FILM",
    location: "MIAMI · SOUTH FLORIDA",
    tagline: "Stories in light, made to feel.",
    description:
      "Warm, cinematic photography and film for people, brands and the moments worth remembering.",
    instagram: "https://instagram.com/marthasolstudio",
    instagramHandle: "@MARTHASOLSTUDIO",
    whatsappNumber: "17865551234", // Reemplazar con el número real de WhatsApp de Martha
    email: "contact@marthasolstudio.com",
    about: {
      headline: "Hi, I'm Martha.",
      paragraphs: [
        "I'm a Cuban-born photographer based in Miami, drawn to warm light, honest connection and the small details that make an image feel alive.",
        "Martha Sol Studio was created for people who want more than a technically perfect photograph. I want you to recognize yourself in the final images—to feel comfortable, beautiful and completely present in your own story.",
        "My approach is calm, guided and personal. Whether we are creating one powerful headshot or documenting a full celebration, every frame is made with care.",
      ],
      signoff: "With light, Martha",
    },
  },
  portfolioCategories: [
    "All",
    "Portraits",
    "Headshots",
    "Personal Branding",
    "Events",
    "Weddings",
  ],
  portfolioPhotos: [
    {
      id: 1,
      title: "Golden Hour Portrait",
      category: "Portraits",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Editorial Fashion Session",
      category: "Personal Branding",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Intimate Miami Wedding",
      category: "Weddings",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Professional Studio Headshot",
      category: "Headshots",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Evening Celebration",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Candid Couple Session",
      category: "Portraits",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  pricingCategories: [
    {
      category: "Portraits",
      description: "For creative portraits, birthdays, couples, maternity and families throughout Miami.",
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
          badge: null,
        },
        {
          name: "The Story",
          price: "$350",
          features: [
            "60-minute session",
            "One location + two looks",
            "20 fully edited images",
            "Private online gallery",
            "7–10 business day delivery",
          ],
          badge: "MOST POPULAR",
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
          badge: null,
        },
      ],
    },
    {
      category: "Headshots",
      description: "Polished, approachable portraits for professionals, entrepreneurs and teams.",
      packages: [
        {
          name: "Essential",
          price: "$195",
          features: [
            "20-minute session",
            "One look + one backdrop",
            "3 high-end retouched images",
            "Commercial web & social use",
            "5–7 business day delivery",
          ],
          badge: null,
        },
        {
          name: "Professional",
          price: "$325",
          features: [
            "45-minute session",
            "Up to two looks",
            "8 high-end retouched images",
            "Indoor or outdoor location",
            "Expression & posing guidance",
          ],
          badge: "BEST VALUE",
        },
        {
          name: "Team Day",
          price: "$450",
          features: [
            "Up to 5 people ($65 each additional)",
            "Consistent team setup",
            "One retouched image per person",
            "Individual gallery selections",
            "On-location in Miami",
          ],
          badge: null,
        },
      ],
    },
    {
      category: "Weddings",
      description: "For courthouse vows, intimate weddings and full celebrations.",
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
          badge: null,
        },
        {
          name: "The Gathering",
          price: "$1,250",
          features: [
            "3 hours of coverage",
            "150+ edited images",
            "Ceremony, portraits & details",
            "Timeline guidance",
            "Private online gallery",
          ],
          badge: "INTIMATE WEDDINGS",
        },
        {
          name: "The Celebration",
          price: "$2,400",
          features: [
            "6 hours of coverage",
            "350+ edited images",
            "Second photographer (3 hours)",
            "Timeline consultation",
            "25 previews in 72 hours",
          ],
          badge: null,
        },
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Tell me your idea",
      description: "Share your date, vision and what you need the photographs or film to do for you.",
    },
    {
      number: "02",
      title: "Plan the details",
      description: "We choose the right package, location, timing and visual direction together.",
    },
    {
      number: "03",
      title: "Make something real",
      description: "You receive a guided experience and an edited gallery made to feel like you.",
    },
  ],
};
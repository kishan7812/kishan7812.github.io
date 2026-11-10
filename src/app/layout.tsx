import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kishanm.me"),
  title: {
    default: "Kishan M Patil | Frontend Specialist & Creative Developer Portfolio",
    template: "%s | Kishan M Patil",
  },
  description:
    "Official portfolio of Kishan M Patil (kishanm.me). Frontend Specialist, Creative Developer, and AI Enthusiast showcasing featured projects like Geleya, EARTHVERSE, CampusTrace, and LLM Council.",
  keywords: [
    // Brand name discoverability terms (Ora audit requirements)
    "Kishan M Patil Portfolio KISHANMPATIL",
    "Kishan M Patil Portfolio KISAHN",
    "Kishan M Patil Portfolio",
    "Kishan M Patil",
    "KISHAN M PATIL",
    "KISHANMPATIL",
    "kishan m patil",
    "kishanmpatil",
    "KISAHN",
    "kisahn",
    "Kishan Patil",
    "kishan",
    // Project & Work search queries
    "KISHAN PROJECT",
    "KISHAN WORK",
    "KISHAN M PROJECT",
    "KISHAN M WORK",
    "KISHAN M PATIL PROJECT",
    "KISHAN M PATIL WORK",
    "kishan project",
    "kishan work",
    "kishan woek",
    "kishan m project",
    "kishan m peoject",
    "kishan m work",
    "kisahn m patil project",
    "kisahn m patil work",
    "Kishan M Patil Projects",
    "Kishan M Patil Work",
    "Kishan Developer",
    // Technical keywords
    "Frontend Specialist",
    "Creative Developer",
    "React Developer",
    "Next.js Developer",
    "Three.js Developer",
    "kishanm.me",
    "Geleya project",
    "EARTHVERSE project",
    "CampusTrace",
    "LLM Council"
  ],
  authors: [{ name: "Kishan M Patil", url: "https://kishanm.me" }],
  creator: "Kishan M Patil",
  publisher: "Kishan M Patil",
  alternates: {
    canonical: "https://kishanm.me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Kishan M Patil | Frontend Specialist & Developer Portfolio",
    description:
      "Frontend Specialist | Creative Developer | AI Enthusiast — Explore the projects, engineering work, and experience of Kishan M Patil.",
    url: "https://kishanm.me",
    siteName: "Kishan M Patil Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kishan M Patil - Frontend Specialist & Creative Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan M Patil | Frontend Specialist & Developer Portfolio",
    description:
      "Frontend Specialist | Creative Developer | AI Enthusiast — Explore projects, hackathons, and engineering work by Kishan M Patil.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "LaetPY6LMAIql2bk8H2sh3-dUYq2K5o40kWI9_zCWzY",
    other: {
      "msvalidate.01": "9EA5DC51A7426B33F94B8C0BFFFEE24A",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kishanm.me/#person",
        name: "Kishan M Patil",
        alternateName: [
          "Kishan Patil",
          "Kishan M. Patil",
          "KISHAN M PATIL",
          "KISHANMPATIL",
          "kishan m patil",
          "kishanmpatil",
          "Kishan Developer",
          "KISAHN",
          "kisahn",
          "kishan",
          "Kishan M Patil Portfolio KISHANMPATIL",
          "Kishan M Patil Portfolio KISAHN"
        ],
        jobTitle: "Frontend Specialist & Creative Developer",
        url: "https://kishanm.me",
        image: "https://kishanm.me/og-image.jpg",
        knowsAbout: [
          "Kishan M Patil Portfolio KISHANMPATIL",
          "Kishan M Patil Portfolio KISAHN",
          "Frontend Development",
          "React",
          "Next.js",
          "TypeScript",
          "Three.js",
          "Creative 3D Web",
          "Artificial Intelligence",
          "Geleya",
          "EARTHVERSE",
          "CampusTrace",
          "LLM Council"
        ],
        sameAs: [
          "https://github.com/kishan-ict",
          "https://linkedin.com",
          "https://x.com"
        ],
        description:
          "Frontend Specialist, Creative Developer, and AI Enthusiast building high-performance web applications, 3D interactive experiences, and AI-powered products.",
      },
      {
        "@type": "WebSite",
        "@id": "https://kishanm.me/#website",
        url: "https://kishanm.me",
        name: "Kishan M Patil Portfolio",
        alternateName: [
          "Kishan M Patil Portfolio KISHANMPATIL",
          "Kishan M Patil Portfolio KISAHN",
          "Kishan Portfolio",
          "Kishan M Patil Projects",
          "Kishan M Patil Work",
          "Kishan Work",
          "Kishan Project"
        ],
        keywords: [
          "Kishan M Patil Portfolio KISHANMPATIL",
          "Kishan M Patil Portfolio KISAHN",
          "Frontend Specialist",
          "Creative Developer",
          "Three.js",
          "React",
          "Next.js"
        ],
        about: {
          "@id": "https://kishanm.me/about"
        },
        publisher: {
          "@id": "https://kishanm.me/#person",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://kishanm.me/#service",
        name: "Kishan M Patil Developer Portfolio & Services",
        url: "https://kishanm.me",
        serviceType: "Kishan M Patil Portfolio KISHANMPATIL",
        alternateName: "Kishan M Patil Portfolio KISAHN",
        description: "Modern frontend engineering, creative 3D web experiences, and rapid AI prototyping by Kishan M. Patil.",
        provider: {
          "@id": "https://kishanm.me/#person"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kishan M Patil Portfolio KISHANMPATIL",
                serviceType: "Frontend Engineering & Web Development"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kishan M Patil Portfolio KISAHN",
                serviceType: "Creative 3D Web & AI Prototyping"
              }
            }
          ]
        }
      }
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Agent Discovery & RFC 8288 / 9727 / ARD / MCP Link Relations */}
        <link rel="api-catalog" href="/.well-known/api-catalog" type="application/linkset+json" />
        <link rel="service-desc" href="/.well-known/ai-catalog.json" type="application/json" />
        <link rel="service-doc" href="/llms.txt" type="text/plain" />
        <link rel="author" href="/agent-instructions.md" type="text/markdown" />
        <link rel="describedby" href="/auth.md" type="text/markdown" />
        <link rel="mcp-server-card" href="/.well-known/mcp/server-card.json" type="application/json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* WebMCP: Register site capabilities to browser agents if window.modelContext is present */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'modelContext' in navigator) {
                try {
                  navigator.modelContext.registerTool({
                    name: "get_portfolio_projects",
                    description: "Returns the list of featured projects by Kishan M. Patil (Geleya, EARTHVERSE, CampusTrace, LLM Council).",
                    inputSchema: { type: "object", properties: {} },
                    execute: async () => ({
                      projects: [
                        { name: "Geleya", url: "https://geleya.pages.dev", stack: ["React", "TypeScript", "Tailwind"] },
                        { name: "EARTHVERSE", url: "https://kishan-ict.github.io/EARTHVERSE/", stack: ["Three.js", "WebGL"] },
                        { name: "CampusTrace", url: "https://campustrace.pages.dev", stack: ["React 19", "Gemini API", "Firestore"] },
                        { name: "LLM Council", url: "https://github.com/kishan-ict/llm-council", stack: ["Python", "FastAPI", "React"] }
                      ]
                    })
                  });
                } catch (e) {}
              }
            `,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${caveat.variable} ${jetbrainsMono.variable} antialiased bg-[rgb(228,229,229)] text-[#111827]`}
      >
        {children}
      </body>
    </html>
  );
}

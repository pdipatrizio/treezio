import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Treezio, websites that grow Michigan businesses",
  description:
    "Philip DiPatrizio builds, fixes, and tunes websites for small businesses around Ann Arbor and metro Detroit. Web design, SEO, and conversion optimization work that brings you customers.",
};

// Ties the Philip DiPatrizio entity to his other profiles for search engines.
// Kept consistent with the Person schema on dipatriz.io.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Philip DiPatrizio",
  url: "https://treezio.com",
  jobTitle: "Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Treezio",
    url: "https://treezio.com",
  },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ann Arbor",
      addressRegion: "MI",
      addressCountry: "US",
    },
  },
  sameAs: [
    "https://github.com/pdipatrizio",
    "https://dipatriz.io",
    "https://www.linkedin.com/in/philipdipatrizio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

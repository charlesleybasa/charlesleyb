import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Charles Ley Baldemor - UI/UX Designer, Developer & Multimedia Artist Portfolio",
  description = "Discover the creative works of Charles Ley Baldemor — a UI/UX designer/developer, multimedia artist, and business analyst passionate about user-centered design and digital innovation. Based in Metro Manila, Philippines with 10+ years of experience.",
  keywords = "Charles Ley Baldemor, UI UX designer, UI UX developer, multimedia artist, product designer, user experience, user interface, web design, mobile app design, portfolio, Metro Manila, Philippines, design systems, accessibility, user research, prototyping, wireframing, interaction design, business analyst, Figma, Adobe XD, Sketch",
  author = "Charles Ley Baldemor",
  image = "https://img.youtube.com/vi/LeXYkGQHZoc/maxresdefault.jpg",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (
      selector: string,
      attribute: string,
      content: string
    ) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        if (selector.includes("property")) {
          element.setAttribute("property", selector.split('="')[1].split('"]')[0]);
        } else {
          element.setAttribute("name", selector.split('="')[1].split('"]')[0]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Standard meta tags
    setMetaTag('meta[name="description"]', "content", description);
    setMetaTag('meta[name="keywords"]', "content", keywords);
    setMetaTag('meta[name="author"]', "content", author);
    setMetaTag('meta[name="robots"]', "content", "index, follow");
    setMetaTag(
      'meta[name="viewport"]',
      "content",
      "width=device-width, initial-scale=1.0"
    );

    // Open Graph meta tags
    setMetaTag('meta[property="og:title"]', "content", title);
    setMetaTag('meta[property="og:description"]', "content", description);
    setMetaTag('meta[property="og:image"]', "content", image);
    setMetaTag('meta[property="og:url"]', "content", url);
    setMetaTag('meta[property="og:type"]', "content", type);
    setMetaTag('meta[property="og:site_name"]', "content", "Charles Ley Baldemor Portfolio");

    // Twitter Card meta tags
    setMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "content", title);
    setMetaTag('meta[name="twitter:description"]', "content", description);
    setMetaTag('meta[name="twitter:image"]', "content", image);
    setMetaTag('meta[name="twitter:creator"]', "content", "@charlesleyb");

    // Additional SEO tags
    setMetaTag('meta[name="theme-color"]', "content", "#097c87");
    setMetaTag('meta[name="apple-mobile-web-app-capable"]', "content", "yes");
    setMetaTag(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
      "content",
      "black-translucent"
    );

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Language attribute
    document.documentElement.setAttribute("lang", "en");

    // Add link to robots.txt and sitemap.xml
    let robotsLink = document.querySelector('link[rel="robots"]');
    if (!robotsLink) {
      robotsLink = document.createElement("link");
      robotsLink.setAttribute("rel", "robots");
      robotsLink.setAttribute("href", "/robots.txt");
      document.head.appendChild(robotsLink);
    }

    let sitemapLink = document.querySelector('link[type="application/xml"]');
    if (!sitemapLink) {
      sitemapLink = document.createElement("link");
      sitemapLink.setAttribute("rel", "sitemap");
      sitemapLink.setAttribute("type", "application/xml");
      sitemapLink.setAttribute("title", "Sitemap");
      sitemapLink.setAttribute("href", "/sitemap.xml");
      document.head.appendChild(sitemapLink);
    }

    // Structured Data (JSON-LD) for Person
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Charles Ley Baldemor",
      jobTitle: "UI/UX Designer, Developer & Multimedia Artist",
      description:
        "UI/UX designer/developer, multimedia artist, and business analyst passionate about user-centered design and digital innovation with over 10 years of experience.",
      url: url,
      image: image,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Metro Manila",
        addressCountry: "Philippines",
      },
      email: "charlesleyb24@gmail.com",
      telephone: "+63-947-880-0962",
      sameAs: [
        "https://charlesleyb.wixsite.com/charlesleyb",
        "https://www.behance.net/charlesleyb",
        "https://dribbble.com/charlesleyb",
        "http://charlesleyb.blogspot.com/",
      ],
      knowsAbout: [
        "UI/UX Design",
        "Product Design",
        "User Experience",
        "User Interface",
        "Multimedia Art",
        "Web Development",
        "Business Analysis",
        "Design Systems",
        "Interaction Design",
        "Prototyping",
        "Wireframing",
        "User Research",
        "Accessibility",
        "Figma",
        "Adobe XD",
        "Sketch",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "UI/UX Designer & Multimedia Artist",
        description:
          "Specializes in creating user-centered designs for web and mobile applications, multimedia content, and digital experiences",
        occupationLocation: {
          "@type": "City",
          name: "Metro Manila, Philippines",
        },
        skills: [
          "User Interface Design",
          "User Experience Design",
          "Product Design",
          "Multimedia Art",
          "Web Development",
          "Business Analysis",
          "Design Systems",
          "Prototyping",
          "Wireframing",
          "User Research",
          "Accessibility Design",
        ],
      },
    };

    // Portfolio/Creative Work structured data
    const portfolioData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Charles Ley Baldemor Design Portfolio",
      description:
        "A collection of UI/UX and product design projects showcasing creativity, strategy, and real-world results.",
      author: {
        "@type": "Person",
        name: "Charles Ley Baldemor",
      },
      url: url,
    };

    // Add or update structured data script tags
    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify([structuredData, portfolioData]);
  }, [title, description, keywords, author, image, url, type]);

  return null;
}

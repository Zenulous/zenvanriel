import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: string;
}

export function SEOHead({ title, description, pathname, children }: SEOProps) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=zoom, orientation=portrait"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="/icon.png" />
      {children}
    </>
  );
}

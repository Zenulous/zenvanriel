import * as React from "react";
import {Helmet} from "react-helmet";

export default function Metadata(props: {
  title: string;
  description: string;
  imageUrl?: string;
}) {
  const defaultImageUrl = "www.zenvanriel.nl/logo.png";
  let useDefaultImage = false;
  if (!props.imageUrl || props.imageUrl === "") {
    useDefaultImage = true;
  }
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no"
      />
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta name="og:site_name" content="Zen van Riel" />
      <meta
        name="og:image"
        content={useDefaultImage ? defaultImageUrl : props.imageUrl}
      />
      <meta
        name="image"
        content={useDefaultImage ? defaultImageUrl : props.imageUrl}
      />
      <meta property="og:description" content={props.description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
}

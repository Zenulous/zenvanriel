import * as React from "react";
import {Helmet} from "react-helmet";

export default function Metadata(props: {title: string; description: string}) {
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
      <meta property="og:description" content={props.description} />
    </Helmet>
  );
}

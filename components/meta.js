import Head from 'next/head';
import React from "react";

const Meta = ({title, desc, canonical}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={desc} />
    <meta property="og:site_name" content="Zefeng Wang's Personal Site" />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:site" content="@dnlwang5" />
    <meta name="twitter:creator" content="@dnlwang5" />
    <link rel="icon" type="image/png" href="/public/favicon.ico" />
    <link rel="apple-touch-icon" href="/public/favicon.ico" />
      <meta property="og:image" content="http://www.zefeng-wang.com/pro-pic.jpeg"/>
    <meta property="og:image:secure_url" content="https://www.zefeng-wang.com/pro-pic.jpeg"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta name="twitter:image" content="https://www.zefeng-wang.com/pro-pic.jpeg" />
    <link rel="canonical" href={canonical} />
  </Head>
)
export default Meta

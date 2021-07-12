// Import each scss individually
import '../styles/globals.css';
import "../styles/footer.scss";
import "../styles/header.scss";
import "../styles/home.scss";
import "../styles/about.scss";
import "../styles/experience.scss";
import "../styles/projects.scss";
import "../styles/julie.scss";

import React from "react";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

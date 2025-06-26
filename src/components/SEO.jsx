// components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="author" content="Alvin Phiri" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

export default SEO;

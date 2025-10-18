import { Helmet } from '@tanstack/react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical }) => {
  const location = useLocation();
  const siteTitle = "Maquinaria Hostelería y Bares";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  // Función para construir URLs canónicas sin www
  const buildCanonicalUrl = (path) => {
    // Base domain sin www
    const baseDomain = "https://www.calfrio.es/";
    // Asegurar que el path empiece con /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // Construir URL completa sin www
    return `${baseDomain}${cleanPath}`;
  };

  // Usar URL canónica proporcionada o construir una basada en la ruta actual
  const canonicalUrl = canonical ? buildCanonicalUrl(canonical) : buildCanonicalUrl(location.pathname);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;

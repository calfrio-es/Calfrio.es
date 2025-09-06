import { useEffect } from 'react';

const useSEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Actualizar título
    if (title) {
      document.title = title;
    }

    // Actualizar meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }

    // Actualizar meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Actualizar Open Graph description
    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    // Actualizar Twitter description
    if (description) {
      let twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    }
  }, [title, description, keywords]);
};

export default useSEO;

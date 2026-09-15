import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({ title, description, keywords, canonicalPath }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Dynamic Document Title
    if (title) {
      document.title = title;
    }

    // 3. Dynamic Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 4. Dynamic Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 5. Dynamic Canonical Link
    const currentCanonical = canonicalPath || pathname;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://sastadarzi.com${currentCanonical}`);

  }, [pathname, title, description, keywords, canonicalPath]);

  return null;
}

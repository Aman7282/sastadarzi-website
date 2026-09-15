import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const pathToSeoMap = {
  'stitching': '/services/custom-stitching-lahore',
  'alteration': '/services/ladies-alteration-lahore',
  'designing': '/services/designer-dress-stitching',
  'brands': '/services/boutique-stitching-for-brands',
  'bridal': '/services/bridal-lehenga-tailor-lahore',
  'bridal-wear': '/services/bridal-lehenga-tailor-lahore',
  'party': '/services/party-wear-stitching-lahore',
  'party-wear': '/services/party-wear-stitching-lahore',
  'casual': '/services/casual-suit-stitching-lahore',
  'casual-wear': '/services/casual-suit-stitching-lahore',
  'western': '/services/western-wear-tailor-lahore',
  'western-wear': '/services/western-wear-tailor-lahore',
  'fabric-calc': '/fabric-calculator',
  'our-work': '/tailoring-work-portfolio-lahore',
  'services': '/services',
  'about': '/about-best-ladies-tailor-lahore',
  'location': '/ladies-tailor-wapda-town-lahore-location',
  'book-appointment': '/book-ladies-tailor-appointment-lahore',
};

export default function RelatedServices({ links = [], heading = 'Related Services' }) {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">{heading}</h3>
        <div className="flex flex-wrap gap-3">
          {links.map((link, idx) => {
            const targetPath = link.path || pathToSeoMap[link.id] || '/services';
            return (
              <Link
                key={link.path || link.id || idx}
                to={targetPath}
                className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:border-yellow-400 hover:text-yellow-700 hover:bg-yellow-50 rounded-full text-sm font-semibold text-gray-700 transition"
              >
                {link.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

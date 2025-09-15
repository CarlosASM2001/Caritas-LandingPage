import React from 'react';
import { Link } from 'react-router-dom';

function CampaignCard({ imageSrc, title, to }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all news-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-all" loading="lazy" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-[#032b27] mb-3">{title}</h3>
        <Link to={to} className="inline-block text-red-700 hover:text-red-800 font-semibold">
          Conoce más
        </Link>
      </div>
    </div>
  );
}

export default CampaignCard;

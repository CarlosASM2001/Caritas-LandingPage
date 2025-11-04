import React from 'react';
import { Link } from 'react-router-dom';

function CampaignCard({ imageSrc, title, to, appointmentLink }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all news-card-hover h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-all" loading="lazy" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-extrabold text-[#032b27] mb-3">{title}</h3>
        <div className="mt-auto flex flex-wrap gap-3">
          {appointmentLink && (
            <a
              href={appointmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-red-700 text-white font-semibold rounded-full shadow hover:bg-red-800 transition-colors"
            >
              Agendar consulta
            </a>
          )}
          <Link
            to={to}
            className="inline-flex items-center justify-center px-4 py-2 border border-red-700 text-red-700 font-semibold rounded-full hover:bg-red-700 hover:text-white transition-colors"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;

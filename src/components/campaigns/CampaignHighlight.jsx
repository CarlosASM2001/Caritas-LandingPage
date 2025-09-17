import React from 'react';
import { Link } from 'react-router-dom';

function CampaignHighlight({
  imageSrc,
  title,
  description,
  to,
  reverse = false,
}) {
  return (
    <div
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Imagen con fondo decorativo */}
      <div className="relative">
        <div
          className={`absolute -top-6 ${
            reverse ? '-right-6' : '-left-6'
          } w-56 h-40 bg-[#e9d9d4] rounded-xl`}
        />
        <img
          src={imageSrc}
          alt={title}
          className="relative rounded-2xl shadow-xl object-cover w-full h-100 lg:h-115 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 -mt-10 lg:mt-0 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:shadow-xl">
        <h3 className="text-3xl lg:text-4xl font-extrabold text-[#032b27] mb-4">
          {title}
        </h3>
        <p className="text-gray-600 leading-7 mb-6">{description}</p>
        <Link
          to={to}
          className="inline-block bg-[#6e0b14] hover:bg-[#52080e] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Conocer más
        </Link>
      </div>
    </div>
  );
}

export default CampaignHighlight;

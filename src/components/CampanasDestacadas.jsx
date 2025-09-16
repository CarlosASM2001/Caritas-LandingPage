import React from 'react';
import CampaignCard from './campaigns/CampaignCard.jsx';
import { campaignsData } from '../data/campaignData.js';

function CampanasDestacadas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#032b27] mb-12">Nuestras Campañas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {campaignsData.map((c) => (
            <CampaignCard key={c.id} imageSrc={c.image} title={c.title} to={c.to} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CampanasDestacadas;


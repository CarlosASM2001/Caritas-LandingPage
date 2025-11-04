import React from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from './campaigns/CampaignCard.jsx';
import { campaignsData } from '../data/campaignData.js';

function CampanasDestacadas() {
  const consultationsCampaign = campaignsData.find((campaign) => campaign.id === 'consultas-medicas');
  const otherCampaigns = campaignsData.filter((campaign) => campaign.id !== 'consultas-medicas');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#032b27] mb-12">Nuestras Campañas</h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr,1fr] items-stretch">
          {consultationsCampaign && (
            <div className="flex flex-col justify-between bg-[#f3e9e6] border border-red-100 rounded-3xl shadow-xl p-8">
              <div>
                <p className="tracking-[0.35em] text-red-800 font-semibold mb-3">CONSULTAS MÉDICAS</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#032b27] mb-4">Agenda tu consulta</h3>
                <p className="text-gray-700 leading-7">
                  Brindamos jornadas de atención general y especializada para comunidades que necesitan apoyo médico. Completa un breve formulario y nos pondremos en contacto para coordinar tu cita.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfV8_xUmNps8ji5xviwjFTFwhxuNuR1ONX2RYiQtbpGYmf2lQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white font-semibold rounded-full shadow hover:bg-red-800 transition-colors"
                >
                  Agendar consulta
                </a>
                <Link
                  to={consultationsCampaign.to}
                  className="inline-flex items-center justify-center px-6 py-3 border border-red-700 text-red-700 font-semibold rounded-full hover:bg-red-700 hover:text-white transition-colors"
                >
                  Ver campaña
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} imageSrc={campaign.image} title={campaign.title} to={campaign.to} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampanasDestacadas;


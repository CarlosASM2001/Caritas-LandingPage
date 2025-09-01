import React from 'react';
import CampaignHighlight from './CampaignHighlight.jsx';

function ConsultasHighlight() {
  return (
    <CampaignHighlight
      imageSrc="/src/assets/banner7.jpg"
      title="Consultas Médicas"
      description="Jornadas de atención médica general y especializada."
      to="/campanas/consultas-medicas"
      reverse
    />
  );
}

export default ConsultasHighlight;


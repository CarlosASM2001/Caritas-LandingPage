import React from 'react';
import CampaignHighlight from './CampaignHighlight.jsx';
import logo from '../../assets/consultasmedicas/DSCN0248.jpg';

function ConsultasHighlight() {
  return (
    <CampaignHighlight
      imageSrc={logo}
      title="Consultas Médicas"
      description="Brindamos atención médica primaria y especializada a comunidades vulnerables, asegurando el acceso a servicios de salud esenciales para mejorar su bienestar."
      to="/campanas/consultas-medicas"
      reverse
    />
  );
}

export default ConsultasHighlight;

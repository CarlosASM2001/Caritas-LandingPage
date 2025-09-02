import React from 'react';
import CampaignHighlight from './CampaignHighlight.jsx';
import logo from '../../assets/SAMAN/samanlogo.jpg'

function SamanHighlight() {
  return (
    <CampaignHighlight
      imageSrc={logo}
      title="SAMAN"
      description="Es el Sistema de Alerta, Monitoreo y Atención en Nutrición y Salud proyecto de Cáritas de Venezuela,
para detectar y atender a niños y niñas con riesgo de desnutrición."
      to="/campanas/saman"
    />
  );
}

export default SamanHighlight;


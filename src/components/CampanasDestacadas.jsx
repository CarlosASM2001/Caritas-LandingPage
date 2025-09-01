import React from 'react';
import SamanHighlight from './campaigns/SamanHighlight.jsx';
import ConsultasHighlight from './campaigns/ConsultasHighlight.jsx';

function CampanasDestacadas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10 space-y-16">
        <SamanHighlight />
        <ConsultasHighlight />
      </div>
    </section>
  );
}

export default CampanasDestacadas;


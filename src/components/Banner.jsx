import React from "react";

function Banner() {
  return (
    <div className="relative m-3 py-40 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center rounded-2xl"
        style={{ 
            backgroundImage: `
            linear-gradient(90deg,rgba(71, 62, 62, 1) 0%, rgba(148, 120, 120, 1) 52%, rgba(71, 62, 62, 1) 100%),
            url('src/assets/banner2.jpg')`,
            backgroundBlendMode: "overlay" 
        }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">Welcome to Caritas San Cristobal</h1>
        <p className="mt-2">Join us in making a difference in our community.</p>
      </div>
    </div>
  );
}

export default Banner;
import React from "react";

function Banner() {
  return (
    <div className="relative m-3 py-40 px-4 sm:px-6 lg:px-8 text-white
      bg-[url(src/assets/banner7.jpg)] bg-local bg-cover bg-center rounded-2xl"
      style={{
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(100deg,rgba(82, 77, 77, 1) 0%, rgba(82, 77, 77, 1) 49%, rgba(82, 77, 77, 1) 100%)"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to Caritas San Cristobal</h1>
        <p className="m-2 text-2xl ">Join us in making a difference in our community.</p>
        <button href="#dona" className="bg-gradient-to-r from-red-800 to-red-900
          py-2 px-3 rounded-md text-white m-5">Dona Aqui
        </button>
      </div>
    </div>
  );
}

export default Banner;
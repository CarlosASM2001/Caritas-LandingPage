import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="relative m-3 py-40 px-4 sm:px-6 lg:px-8 text-white rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/banner7.jpg')"
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          Bienvenido a Cáritas San Cristóbal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Somos la organización de promoción y asistencia de la Iglesia Católica que fomenta la caridad y está al servicio de los más pobres y sus comunidades cristianas.
        </motion.p>
        
        {/* Enhanced Donation Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/donaciones" className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 
            hover:from-red-700 hover:via-red-800 hover:to-red-900
            text-white font-bold py-4 px-8 rounded-full text-lg
            transform hover:scale-105 transition-all duration-300 ease-out
            shadow-2xl hover:shadow-red-500/25
            border-2 border-red-500/20 hover:border-red-400/30
            overflow-hidden donation-button shimmer-effect">
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
              transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Button content */}
            <div className="relative flex items-center gap-3">
              <Heart className="w-6 h-6 group-hover:animate-pulse-heart animate-pulse" fill="currentColor" />
              <span className="text-xl">Dona Aquí</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-red-400/20 blur-xl group-hover:bg-red-300/30 transition-colors duration-300"></div>
          </Link>

        </div>
        
        {/* Call to action text */}
        <p className="text-white/80 text-sm mt-6 max-w-2xl mx-auto">
          Tu donación ayuda a transformar vidas en las comunidades más necesitadas del Tachira
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-500/10 rounded-full blur-lg"></div>
    </div>
  );
}

export default Banner;
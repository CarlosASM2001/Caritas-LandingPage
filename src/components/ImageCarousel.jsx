import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ImageCarousel({ images = [], altPrefix = 'imagen', autoPlay = true, intervalMs = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images]);
  const maxIndex = Math.max(0, safeImages.length - 1);

  useEffect(() => {
    if (!isAutoPlaying || safeImages.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, intervalMs);
    return () => clearInterval(id);
  }, [isAutoPlaying, maxIndex, intervalMs, safeImages.length]);

  if (safeImages.length === 0) {
    return null;
  }

  const goPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(autoPlay), 4000);
  };

  const goNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(autoPlay), 4000);
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={safeImages[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          className="w-full h-[420px] md:h-[520px] object-cover"
          loading="lazy"
        />

        {safeImages.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goNext}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {safeImages.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
                setTimeout(() => setIsAutoPlaying(autoPlay), 4000);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-red-800 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />)
          )}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;


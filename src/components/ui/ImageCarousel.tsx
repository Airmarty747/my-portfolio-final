'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  altTitle: string;
}

export default function ImageCarousel({ images, altTitle }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-t-xl bg-neutral-900 group">
      <img
        src={images[currentIndex]}
        alt={`${altTitle} - slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md opacity-80 hover:opacity-100 transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md opacity-80 hover:opacity-100 transition"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === i ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Jump to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
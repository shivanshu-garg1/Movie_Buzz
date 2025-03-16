import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

type MovieSliderProps = {
  movies: {
    title: string;
    year: number;
    imdb: number;
    poster: string;
  }[];
};

export default function MovieSlider({ movies }: MovieSliderProps) {
  return (
    <div className="mb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        className="rounded-lg overflow-hidden"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="relative">
            
            <div className="relative w-full h-96">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
              />
              {/* Movie Details Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h2 className="text-2xl font-bold text-white">{movie.title} ({movie.year})</h2>
                <p className="text-md text-yellow-400 font-semibold">⭐ IMDb: {movie.imdb}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

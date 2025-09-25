"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // autoplay if needed
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden rounded-lg" ref={emblaRef}>
      <div className="flex">
        {images.map((img, i) => (
          <div className="flex-[0_0_100%] relative h-48" key={i}>
            <Image src={img} alt={`slide-${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

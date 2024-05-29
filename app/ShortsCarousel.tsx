import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Short } from "./domain-models";
import { FC, memo } from "react";

interface IProps {
  _id: string;
  headline?: string;
  data: Short[];
}

const ShortsCarousel = memo(
  ({ headline, data }: IProps) => {
    return (
      <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{headline}</h2>
          <Link className="text-primary hover:underline" href="#">
            View More
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.slice(0, 5).map((short) => (
                  <div className="relative group overflow-hidden rounded-lg">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View Video</span>
                    </Link>
                    <img
                      alt="Thumbnail"
                      className="w-full aspect-[3/4] object-cover"
                      height={400}
                      src={short.image}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayIcon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.slice(5, 10).map((short) => (
                  <div className="relative group overflow-hidden rounded-lg">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View Video</span>
                    </Link>
                    <Image
                      alt="Thumbnail"
                      className="w-full aspect-[3/4] object-cover"
                      height={400}
                      src={short.image}
                      width={300}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayIcon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  },
  (previousProps, nextProps) =>
    previousProps._id === nextProps._id &&
    previousProps.data.length === nextProps.data.length
);

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export default ShortsCarousel;

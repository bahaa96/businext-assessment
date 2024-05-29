import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Story } from "./domain-models";
import { memo } from "react";

interface IProps {
  _id: string;
  data: Story[];
}

const StoriesCarousel = memo(
  ({ data }: IProps) => {
    return (
      <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto px-4 md:px-6">
        <Carousel className="w-full">
          <CarouselContent className="py-2">
            {data.map((story) => {
              return (
                <CarouselItem
                  className="basis-1/3 md:basis-1/12"
                  key={story.id}
                >
                  <Link className="group" href="#">
                    <div className="relative w-16 h-16 m-auto">
                      <Avatar
                        className={`w-full h-full border-4 border-white ring-2 ${
                          Math.floor(Math.random() * 100) % 2 === 1
                            ? "ring-green-600"
                            : "ring-gray-900/5"
                        } group-hover:ring-primary dark:border-gray-800 dark:ring-gray-800`}
                      >
                        <AvatarImage alt="@shadcn" src={story.image} />
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="mt-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                      {story.firstName}
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
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

export default StoriesCarousel;

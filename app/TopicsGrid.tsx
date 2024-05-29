import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Topic } from "./domain-models";
import { memo } from "react";

interface IProps {
  _id: string;
  data: Topic[];
}

const TopicsGrid = memo(
  ({ data }: IProps) => {
    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((topic) => (
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[45vh] overflow-hidden rounded-2xl">
            <Image
              alt={`Topic ${topic.title} Cover image`}
              src={topic.cover_photo.urls.regular}
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-md bg-muted"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-between p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MusicIcon className="h-6 w-6 text-white" />
                  <span className="text-sm text-white">
                    Original sound - TikTok
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    className="rounded-full text-white"
                    size="icon"
                    variant="ghost"
                  >
                    <ShareIcon className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button
                    className="rounded-full text-white"
                    size="icon"
                    variant="ghost"
                  >
                    <HeartIcon className="h-5 w-5" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button
                    className="rounded-full text-white"
                    size="icon"
                    variant="ghost"
                  >
                    <PlayIcon className="h-5 w-5" />
                    <span className="sr-only">Play/Pause</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="text-white font-semibold line-clamp-2">
                  {topic.description}
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height={32}
                    src={topic.cover_photo.user.profile_image.small}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>{`@${topic.cover_photo.user.username}`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
  (previousProps, nextProps) =>
    previousProps._id === nextProps._id &&
    previousProps.data.length === nextProps.data.length
);

function MusicIcon(props) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

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

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export default TopicsGrid;

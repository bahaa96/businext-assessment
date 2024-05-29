"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nanoid } from "nanoid";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAllStories } from "./useAllStories";
import { useAllShorts } from "./useAllShorts";
import { useAllTopics } from "./useAllTopics";
import StoriesCarousel from "./StoriesCarousel";
import TopicsGrid from "./TopicsGrid";
import ShortsCarousel from "./ShortsCarousel";
import { $fixMe } from "./types/fixme";

const IMAGE_PLACEHOLDER_URL =
  "https://generated.vusercontent.net/placeholder.svg";

const UUID_DIGITS = 10;

const pageScheme = {
  content: {
    body: [
      {
        _uid: nanoid(UUID_DIGITS),
        component: "stories",
      },
      {
        _uid: nanoid(UUID_DIGITS),
        component: "topics",
      },
      {
        _uid: nanoid(UUID_DIGITS),
        component: "shorts",
        headline: "YouTube Shorts",
      },
      {
        _uid: nanoid(UUID_DIGITS),
        component: "topics",
      },
      {
        _uid: nanoid(UUID_DIGITS),
        component: "topics",
      },
      {
        _uid: nanoid(UUID_DIGITS),
        component: "shorts",
        headline: "YouTube Shorts",
      },
    ],
  },
};

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [bodyContent, setBodyContent] = useState(pageScheme.content.body);

  const {
    data: allStories,
    isLoading: isStoriesLoading,
    error: storiessLoadingError,
  } = useAllStories();
  const {
    data: allShorts,
    isLoading: isShortsLoading,
    error: shortsLoadingError,
  } = useAllShorts();

  const {
    data: allTopics,
    isLoading: isTopicsLoading,
    error: topicsLoadingError,
  } = useAllTopics();

  const onScroll = () => {
    console.log(
      "yo: ",
      window.outerHeight,
      window.scrollY,
      (window.document.body.clientHeight - window.scrollY) / 100
    );
    if ((window.document.body.clientHeight - window.scrollY) / 100 > 10) {
      return;
    }
    const newBodyContent = [
      {
        _uid: nanoid(UUID_DIGITS),
        component: "topics",
      },
      {
        _uid: nanoid(UUID_DIGITS),
        component: "shorts",
        headline: "YouTube Shorts",
      },
    ];
    setBodyContent([...bodyContent, ...newBodyContent]);
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 z-10 shadow-sm">
        <div className="container mx-auto flex items-center h-16 px-4 md:px-6">
          <Link className="flex items-center" href="#">
            <TwitterIcon className="h-6 w-6 text-red-500" />
            <span className="sr-only">TikTok</span>
          </Link>
          <form className="flex-1 ml-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-10 pr-4 h-9 rounded-full bg-gray-100 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:focus:ring-gray-300"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
          <div className="ml-6 flex items-center gap-2">
            <Button className="rounded-full" size="icon" variant="ghost">
              <UploadIcon className="h-5 w-5" />
              <span className="sr-only">Upload</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <InboxIcon className="h-5 w-5" />
              <span className="sr-only">Inbox</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src={IMAGE_PLACEHOLDER_URL}
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex min-h-screen mt-12">
        <div className="bg-gray-100 dark:bg-gray-800 w-64 border-r border-gray-200 dark:border-gray-700 p-4 md:p-6">
          <div className="flex items-center gap-2 mb-6">
            <TwitterIcon className="h-6 w-6 text-red-500" />
            <span className="font-semibold text-lg">TikTok</span>
          </div>
          <nav className="space-y-2">
            <Link
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              href="#"
            >
              <HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>For You</span>
            </Link>
            <Link
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              href="#"
            >
              <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>Following</span>
            </Link>
            <Link
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              href="#"
            >
              <InboxIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>Inbox</span>
            </Link>
            <Link
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              href="#"
            >
              <WatchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>LIVE</span>
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <div className="text-gray-500 dark:text-gray-400 font-medium mb-2">
                Subscribed Channels
              </div>
              <div className="space-y-2">
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 1</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 2</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 3</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 4</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 5</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 6</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 7</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 8</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 9</span>
                </Link>
                <Link
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="#"
                >
                  <img
                    alt="Channel Avatar"
                    className="rounded-full"
                    height={32}
                    src={IMAGE_PLACEHOLDER_URL}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span>Channel 10</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <main className="flex-1 flex flex-col gap-8 md:gap-12 pt-4 md:pt-12 px-24">
          {bodyContent.map((element) => {
            switch (element.component) {
              case "stories":
                return (
                  <StoriesCarousel
                    data={allStories}
                    key={element._uid}
                    _id={element._uid}
                  />
                );
              case "topics":
                return (
                  <TopicsGrid
                    data={allTopics}
                    key={element._uid}
                    _id={element._uid}
                  />
                );
              case "shorts":
                return (
                  <ShortsCarousel
                    headline={element.headline}
                    data={allShorts}
                    key={element._uid}
                    _id={element._uid}
                  />
                );
            }
          })}
        </main>
      </div>
    </>
  );
}

function InboxIcon(props: $fixMe) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function SearchIcon(props: $fixMe) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TwitterIcon(props: $fixMe) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function UploadIcon(props: $fixMe) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function WatchIcon(props: $fixMe) {
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
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </svg>
  );
}

function UsersIcon(props: $fixMe) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HomeIcon(props: $fixMe) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

import { SparklesIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function HomeSidebar() {
  return (
    <div className="sticky top-0 z-50 flex h-screen w-full flex-col border-r border-r-gray-300">
      <header className="flex h-20 select-none items-center justify-between px-4">
        <Link href={`/app`}>
          <span className="ff-taviraj block text-2xl font-semibold text-theme-purple">
            oopla
          </span>
        </Link>
        <div className="userPhoto cursor-pointer">
          <Link href={`/app/edit-profile`}>
            <div className="usericon rounded-full bg-gray-100 p-2">
              <UserIcon className="h-8 w-8 text-gray-300" />
            </div>
          </Link>
        </div>
      </header>
      <section className="flex h-full items-center justify-center">
        <NoMatches />
      </section>
    </div>
  );
}

function NoMatches() {
  return (
    <div className="noMatches flex select-none flex-col items-center justify-center">
      <SparklesIcon className="h-14 w-14 text-theme-purple/50" />
      <span className="mt-3 block text-lg font-medium">
        Find your matches here
      </span>
      <span className="mt-1 block text-sm text-gray-400">
        Starting discovering people to find your matches
      </span>
    </div>
  );
}

export default HomeSidebar;

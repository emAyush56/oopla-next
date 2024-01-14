import { FunnelIcon } from "@heroicons/react/24/solid";
import LayoutHome from "@/components/layouts/LayoutHome";
import Finder from "@/components/App/Finder/Finder";

const AppIndex = () => {
  return (
    <LayoutHome>
      <div className="cc-index-px h-full w-full bg-white">
        <header className="relative flex h-20 items-center justify-center">
          <div className="menu text-gray flex gap-3 font-medium text-gray-400">
            <div className="find cursor-pointer select-none text-gray-800 transition-all">
              Find
            </div>
            <div className="discover cursor-pointer select-none transition-all hover:text-gray-800">
              Discover
            </div>
          </div>
          <div className="filters absolute inset-0 top-7 ml-auto flex h-fit w-fit cursor-pointer select-none items-center gap-1 rounded-full bg-theme-purple px-3 py-0.5 text-sm text-white transition-all hover:bg-theme-purple/95">
            <FunnelIcon className="h-4 w-4 " />
            Filters
          </div>
        </header>
        <section>
          <Finder />
        </section>
      </div>
    </LayoutHome>
  );
};

export default AppIndex;

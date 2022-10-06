import { Bars3Icon } from "@heroicons/react/24/solid";

export const Header = ({ onOpenSidebar }) => {
  return (
    <header className="bg-red-800 h-16 flex items-center px-4 justify-between">
      <h1 className="text-white font-semibold">Marvel</h1>
      <button onClick={onOpenSidebar} className="text-white">
        <Bars3Icon className="h-6 w-6" />
      </button>
    </header>
  );
};

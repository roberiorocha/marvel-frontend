import { ArrowPathIcon } from "@heroicons/react/24/solid";
export const Loader = () => {
    return (
      <div className="bg-gray-800 bg-opacity-75 fixed w-screen h-screen z-10">
        <ArrowPathIcon className="h-6 w-6" />        
      </div>       
    );
};
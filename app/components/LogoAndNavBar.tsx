import { FaSearch } from "react-icons/fa";






export default function LogoAndNavBar(){
  return(
    <main className="flex justify-between items-center w-full h-20 px-[10%] bg-[#00032E]/90 text-amber-50 font-bold sticky top-0 shadow-lg z-50">

      <img 
        src="/Dark Blue and Gold Luxury Modern Real Estate Property Logo-1.png" 
        alt="logo"
        className="h-full object-contain"
      />

      <ul className="flex gap-20 items-center">
        <li className="cursor-pointer hover:text-blue-400 transition duration-300">Home</li>
        <li className="cursor-pointer hover:text-blue-400 transition duration-300">Special</li>
        <li className="cursor-pointer hover:text-blue-400 transition duration-300">About</li>
        <li className="cursor-pointer hover:text-blue-400 transition duration-300">Contact</li>
      </ul>

      <div className="flex items-center gap-2 bg-[#0a0f3f] px-3 py-1 rounded-full border border-amber-50">
        <FaSearch className="text-amber-50" />
        <input 
          type="text" 
          placeholder="Search..."
          className="bg-transparent text-sm text-gray-300 outline-none w-40 placeholder:text-gray-300"
        />
      </div>

    </main>
  );
};
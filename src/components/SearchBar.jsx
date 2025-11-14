import React from "react";

export default function SearchBar({ value, setValue }) {
  return (
    <div className="flex gap-2 animate__animated  animate__fadeInLeft">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search character name..."
        className="flex-1 border rounded px-3 py-2"
      />
      {/* text-[#3b82f6] */}
      <button
        onClick={() => setValue("")}
        class="w-[100px] h-[45px] bg-blue-300  border-none text-black font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#3b82f6] hover:text-white hover:shadow-[0_0_0_5px_#3b83f65f]"
      >
        Clear
      </button>
    </div>
  );
}

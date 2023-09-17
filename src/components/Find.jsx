"use client";

import React from "react";
import { Search } from "lucide-react";

export const Find = () => {
  return (
    <div className=" flex rounded-xl bg-blue-500 shadow-none">
      <input
        className=" rounded-l-lg"
        id="inputSearch"
        type="text"
        placeholder="Find Status"
      />
      <button
        className="w-fit px-2 rounded-none hover:rounded-r-xl hover:bg-slate-800 hover:text-white"
        type="submit"
      >
        <Search color="#ffffff" className=" rounded-none" />
      </button>
    </div>
  );
};

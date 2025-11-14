import React from "react";

export default function Pagination({ page, setPage, hasNext, hasPrev }) {
  return (
    <div className="flex gap-2 items-center justify-center mt-6">
      <button
        disabled={!hasPrev}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className=" hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Prev
      </button>
      <span className="text-emerald-600">Page {page}</span>
      <button
        disabled={!hasNext}
        onClick={() => setPage((p) => p + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  hover:cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

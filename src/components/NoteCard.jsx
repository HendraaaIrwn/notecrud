import React from "react";

export const NoteCard = ({ content }) => {
  return (
    <div className="border-2 p-4 rounded-xl shadow">
      <div className="min-h-[120px]">{content }</div>
      <div className="flex gap-4 justify-end">
        <button id="editBtn">Edit</button>
        <button id="deleteBtn">Delete</button>
      </div>
    </div>
  );
};

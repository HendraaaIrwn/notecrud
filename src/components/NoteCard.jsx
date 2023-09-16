"use client ";

import { useRouter } from "next/navigation";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();

  const handleDeleteNote = async () => {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  };

  return (
    <div className="border-2 p-4 rounded-xl shadow">
      <div className="min-h-[120px]">{content}</div>
      <div className="flex gap-4 justify-end">
        <button id="editBtn">Edit</button>
        <button id="deleteBtn" onClick={handleDeleteNote}>
          Delete
        </button>
      </div>
    </div>
  );
};

"use client ";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Profile } from "./Profile";
import { MoreHorizontal, X, ThumbsUp, FileEdit, Trash2 } from "lucide-react";

export const NoteCard = ({ id, content, created }) => {
  const router = useRouter();
  const [newContent, setNewContent] = useState(content);
  const [editMode, setEditMode] = useState(false);

  const handleUpdateNote = async () => {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newContent }),
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
    setEditMode(false);
    return data;
  };

  const handleDeleteNote = async () => {
    await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <div className="p-4 rounded-xl shadow bg-white">
      <div className=" flex justify-between pb-4">
        <div className=" flex gap-2 items-center">
          <Profile />
          <div>
            <div className=" font-medium">Hendra Irawan</div>
            <div className=" flex gap-2">
              <div className=" font-light text-xs">{created}</div>
              <svg
                class="w-4 h-4 text-gray-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="iconHover w-fi h-fit rounded-full p-2">
            <MoreHorizontal color="#4c4d4c" />
          </div>
          <div className="iconHover w-fit  h-fit rounded-full p-2">
            <X onClick={handleDeleteNote} color="#4c4d4c" />
          </div>
        </div>
      </div>

      {editMode ? (
        <textarea
          id="updateTextArea"
          cols="150"
          rows="4"
          value={newContent || content}
          onChange={(e) => {
            setNewContent(e.target.value);
          }}
        ></textarea>
      ) : (
        <div className="min-h-[120px]">{content}</div>
      )}

      <div className="flex gap-4 justify-end border-y-2 font-medium py-1 mt-2">
        <div id="likeBtn" className=" flex items-center gap-2 justify-center">
          <ThumbsUp size={20} color="#4c4d4c" />
          <button>Suka</button>
        </div>

        {editMode ? (
          <div id="updateBtn" className=" flex items-center gap-2 justify-center">
            <FileEdit size={20} color="#ffffff" />
            <button onClick={handleUpdateNote}>Update</button>
          </div>
        ) : (
          <div id="editBtn" className=" flex items-center gap-2 justify-center">
            <FileEdit size={20} color="#4c4d4c" />
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        )}
        <div id="deleteBtn" className=" flex items-center gap-2 justify-center">
          <Trash2 size={20} color="#4c4d4c" />
          <button onClick={handleDeleteNote}>Delete</button>
        </div>
      </div>
    </div>
  );
};

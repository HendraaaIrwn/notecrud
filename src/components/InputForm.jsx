"use client";

import { useState } from "react";
import { NoteContext } from "./NoteEditor";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Avatar from "../assets/avatar.jpg";
import { FileImage, Laugh, MapPin, MoreHorizontal } from "lucide-react";

export const InputForm = () => {
  const [content, setContent] = useState("");
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  // const { createNotes } = useContext(NoteContext);

  const handleCreateNote = async () => {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
          user: "neuhendra@gmail.com",
        }),
      }
    );
    const data = await res.json();
    // console.log(data);
    setContent("");
    router.refresh();

    //next js punya build in caching di browser
    //harus setting dynamic / no - cache
    return data;
  };

  return (
    <div className=" bg-white rounded-xl p-4 shadow">
      <div className=" flex gap-4 pb-4 border-b-2">
        <Image className="rounded-full" src={Avatar} width={50} height={50} />
        <input
          id="submitInput"
          placeholder="Apa yang kamu pikirkan ?"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className=" flex justify-between items-center">
        <div className=" flex gap-8 justify-center items-center pt-3">
          <div className=" font-medium ">Tambahkan ke Postingan Anda</div>
          <div className=" flex gap-4 justify-center items-center">
            <div className="iconHover rounded-full p-2">
              <FileImage color="#3cc376" />
            </div>
            <div className="iconHover rounded-full p-2">
              <Laugh color="#f5c724" />
            </div>
            <div className="iconHover rounded-full p-2">
              <MapPin color="#fb3232" />
            </div>
            <div className="iconHover  rounded-full p-2">
              <MoreHorizontal color="#4c4d4c" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-4">
          <button id="postBtn" onClick={handleCreateNote} className=" w-20">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import { NoteContext } from "./NoteEditor";
import { useRouter } from "next/navigation";

export const InputForm = () => {
  const [content, setContent] = useState("");
  const router = useRouter();
  // const { createNotes } = useContext(NoteContext);

  const handleCreateNote = async () => {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records ",
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
    <div className=" flex gap-4">
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleCreateNote} className=" w-20">
        Submit
      </button>
    </div>
  );
};

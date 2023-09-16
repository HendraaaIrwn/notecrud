"use client";
 
import { InputForm } from "./InputForm";
import { NoteCard } from "./NoteCard";

export const NoteEditor = ({ notesData }) => {
  // const createNotes = async (dataNotes) => {
  //   const res = await fetch(
  //     "https://devscale-mockapi.fly.dev/api/collections/notes/records",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "aplication/json",
  //       },
  //       body: JSON.stringify({
  //         content: dataNotes,
  //         user: "neuhendra@gmail.com",
  //       }),
  //     }
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  return (
    <div className=" space-y-6 ">
      <InputForm />
      <div className=" space-y-4 ">
        {notesData.map(({ content }) => {
          return <NoteCard content={content} />;
        })}
      </div>
    </div>
  );
};

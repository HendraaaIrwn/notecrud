import { NoteEditor } from "@/components/NoteEditor";
import { Header } from "@/components/Header";

async function getNotes() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='neuhendra@gmail.com')",
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getNotes();

  return (
    <div>
      <Header />
      <NoteEditor notesData={items} />
    </div>
  );
}

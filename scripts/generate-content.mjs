import { getNotes } from "../src/lib/content.ts";
import { writeFileSync } from "fs";
const notes = getNotes();
// Strip out bodyHtml for client-side import (avoid large HTML in JSON)
// Actually keep it - page renders on server
writeFileSync("public/content.json", JSON.stringify(notes));
console.log("Wrote", notes.length, "notes to public/content.json");

function getNotesSimple(notes) {
  return notes.map(n => ({ ...n }));
}

import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, res) {
  if (!db) {
    db = await open({
      filename: "./database/hadith_db.db",
      driver: sqlite3.Database,
    });
  }

  try {
    const books = await db.all("SELECT * FROM books");
    const chapters = await db.all("SELECT * FROM chapter");
    const sections = await db.all("SELECT * FROM section");
    const hadiths = await db.all("SELECT * FROM hadith");
    const result = { books, chapters, sections, hadiths };

    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } 
  catch (error) {
    console.error(error);
    if (db) {
      await db.close();
    }
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}
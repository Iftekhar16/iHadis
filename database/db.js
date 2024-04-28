import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function openDB() {
  if (!db) {
    db = await open({
      filename: "./hadith_db.db",
      driver: sqlite3.Database,
    });
  }
  return db;
}

export async function fetchData() {
  const db = await openDB();
  try {
    const books = await db.all("SELECT * FROM books");
    const chapters = await db.all("SELECT * FROM chapter");
    const sections = await db.all("SELECT * FROM section");
    const hadiths = await db.all("SELECT * FROM hadith");
    await db.close();
    return { books, chapters, sections, hadiths };
  } catch (error) {
    console.error(error);
    await db.close();
    throw error;
  }
}

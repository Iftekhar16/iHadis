import sqlite3 from "sqlite3";

export default function handler(req, res) {
  if (req.method === "GET") {
    const db = new sqlite3.Database("database/hadith_db.db", (err) => {
      if (err) {
        console.error("Error opening database:", err.message);
        res.status(500).json({ error: err.message });
      } else {
        db.all("SELECT * FROM your_table_name", (err, rows) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).json(rows);
          }
          db.close();
        });
      }
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

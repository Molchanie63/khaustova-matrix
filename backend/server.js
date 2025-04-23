const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
 

// Подключаем middleware
app.use(cors());
app.use(express.json());

// Инициализируем базу данных SQLite
const db = new sqlite3.Database("./comments.db", (err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных:", err.message);
  } else {
    console.log("Подключено к базе данных SQLite");
  }
});

// Создаём таблицу для комментариев
db.run(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    postId TEXT NOT NULL,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt TEXT NOT NULL
  )
`);

// Создаём таблицу для просмотров
db.run(`
  CREATE TABLE IF NOT EXISTS views (
    postId TEXT PRIMARY KEY,
    viewCount INTEGER NOT NULL DEFAULT 0
  )
`);

// Получение всех комментариев для статьи
app.get("/api/comments/:postId", (req, res) => {
  const postId = req.params.postId;
  db.all("SELECT * FROM comments WHERE postId = ?", [postId], (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Ошибка при получении комментариев" });
    } else {
      res.json(rows);
    }
  });
});

// Добавление нового комментария
app.post("/api/comments", (req, res) => {
  const { postId, author, content } = req.body;
  const createdAt = new Date().toISOString();
  db.run(
    "INSERT INTO comments (postId, author, content, createdAt) VALUES (?, ?, ?, ?)",
    [postId, author, content, createdAt],
    function (err) {
      if (err) {
        res.status(500).json({ error: "Ошибка при добавлении комментария" });
      } else {
        res.json({ id: this.lastID, postId, author, content, createdAt });
      }
    }
  );
});

// Получение количества просмотров для статьи
app.get("/api/views/:postId", (req, res) => {
  const { postId } = req.params;
  db.get("SELECT viewCount FROM views WHERE postId = ?", [postId], (err, row) => {
    if (err) {
      res.status(500).json({ error: "Ошибка при получении просмотров" });
    } else if (row) {
      res.json({ viewCount: row.viewCount });
    } else {
      // Если записи нет, создаём её с 0 просмотров
      db.run(
        "INSERT INTO views (postId, viewCount) VALUES (?, 0)",
        [postId],
        (err) => {
          if (err) {
            res.status(500).json({ error: "Ошибка при создании записи просмотров" });
          } else {
            res.json({ viewCount: 0 });
          }
        }
      );
    }
  });
});

// Увеличение счётчика просмотров
app.post("/api/views/:postId", (req, res) => {
  const { postId } = req.params;
  db.get("SELECT viewCount FROM views WHERE postId = ?", [postId], (err, row) => {
    if (err) {
      res.status(500).json({ error: "Ошибка при получении просмотров" });
    } else if (row) {
      const newViewCount = row.viewCount + 1;
      db.run(
        "UPDATE views SET viewCount = ? WHERE postId = ?",
        [newViewCount, postId],
        (err) => {
          if (err) {
            res.status(500).json({ error: "Ошибка при обновлении просмотров" });
          } else {
            res.json({ viewCount: newViewCount });
          }
        }
      );
    } else {
      // Если записи нет, создаём её с 1 просмотром
      db.run(
        "INSERT INTO views (postId, viewCount) VALUES (?, 1)",
        [postId],
        (err) => {
          if (err) {
            res.status(500).json({ error: "Ошибка при создании записи просмотров" });
          } else {
            res.json({ viewCount: 1 });
          }
        }
      );
    }
  });
});
// Получение просмотров для всех постов
app.get("/api/views", (req, res) => {
  db.all("SELECT postId, viewCount FROM views", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Ошибка при получении просмотров" });
    } else {
      res.json(rows);
    }
  });
});
// Запуск сервера
const port = process.env.PORT || 49152; // Пробуем 49152
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
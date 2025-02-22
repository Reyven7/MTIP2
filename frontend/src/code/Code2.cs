import { createServer } from "http";

const PORT = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html lang="uk">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Привітання</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            h1 { color: #007bff; }
        </style>
    </head>
    <body>
        <h1>Ласкаво просимо!</h1>
        <p>Це HTML-відповідь із вбудованим стилем.</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});

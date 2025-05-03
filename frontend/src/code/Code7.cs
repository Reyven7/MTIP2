import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const api = onRequest((req, res) => {
  logger.info("Received request", { structuredData: true });
res.send("Hello from Firebase Cloud Functions!");
});

//Налаштування хостингу 
{
    "functions": [
      {
        "source": "functions",
      "codebase": "default",
      "ignore": [
        "node_modules",
        ".git",
        "firebase-debug.log",
        "firebase-debug.*.log",
        "*.local"
      ]
      }
  ],
  "hosting": {
        "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
            "source": "/api/**",
        "function": "api"
      }
    ]
  }
}


import { DatabaseConnection } from "./02-interface";

export class PlaywrightConnection implements DatabaseConnection {
  connect(): void {
    console.log(" Connected to Database.");
  }

  disconnect(): void {
    console.log(" Disconnected from  Database.");
  }

  executeUpdate(query: string): void {
    console.log(` Executing query: ${query}`);
    console.log(" Query successfully.");
  }
}

const db = new PlaywrightConnection();

db.connect();
db.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'Kumaresan')");
db.disconnect();
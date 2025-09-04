export interface DatabaseConnection {
  connect(): void;
  disconnect(): void;
  executeUpdate(query: string): void;
}
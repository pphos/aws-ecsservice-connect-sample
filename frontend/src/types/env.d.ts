declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      BACKEND_SERVER_URL: string;
    }
  }
}

export {};

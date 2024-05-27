import { getBackendApi } from "./fetch";

export async function fetchNestjsRootMessage(): Promise<string> {
  const requestUrl = process.env.BACKEND_SERVER_URL ?? "";

  const response = await getBackendApi(requestUrl);
  if (response.ok) {
    return response.text();
  }

  throw new Error("Fail to fetch Nest.js backend.");
}

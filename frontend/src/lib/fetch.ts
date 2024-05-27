export async function getBackendApi(url: string): Promise<Response> {
  const fetchOptions: RequestInit = {
    method: "GET",
    cache: "no-store",
  };
  const response = await fetch(url, fetchOptions);
  return response;
}

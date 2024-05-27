import { fetchNestjsRootMessage } from "@/lib/server-actions";
import { Header } from "@/components/header";

export default async function Home() {
  const message = await fetchNestjsRootMessage();

  return <Header message={message} />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECS Service Connect Sample",
  description:
    "ECS Service Connect Sample Application made with Next.js, Nest.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}



export const metadata = {
  title: "Anjani's Portfolio",
  description: "Personal Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}

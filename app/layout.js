import "@/styles/globals.css";

export const metadata = {
  title: "GutHub Resume",
  description: "Create your resume based on your GitHub profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

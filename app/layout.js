import "@/styles/globals.css";
import { ConfigProvider } from "antd";

export const metadata = {
  title: "GutHub Resume",
  description: "Create your resume based on your GitHub profile",
};

const themeConfig = {
  token: {
    colorPrimary: "rgb(134, 198, 87)",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ConfigProvider theme={themeConfig}>
        <body className="py-10">{children}</body>
      </ConfigProvider>
    </html>
  );
}

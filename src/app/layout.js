import { Layout } from "@/layout/Layout";
import "./globals.css";
import yekan from "@/utils/fonts";

export const metadata = {
  title: "Real state",
  description: "next real state",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={yekan.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

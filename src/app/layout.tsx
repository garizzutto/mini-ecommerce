import SideBar from "@/components/SideBar";
import localFont from "next/font/local";
import styles from "./layout.module.css";

const madefor = localFont({
  src: "../../public/fonts/WixMadeforText-VariableFont_wght.ttf",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${styles.body} ${madefor.className}`}
        suppressHydrationWarning={true}
      >
        <SideBar />
        {children}
      </body>
    </html>
  );
}

import localFont from "next/font/local";

export const aggro = localFont({
  src: [
    {
      path: "../fonts/SBAggroB.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SBAggroM.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SBAggroL.woff",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true, // LCP 향상
  variable: "--font-aggro", // Tailwind에서 사용하려면 variable 설정
});

import { Nunito } from "next/font/google";

const logoFont = Nunito({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export { logoFont };

import { Roboto, JetBrains_Mono } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export { jetBrains, roboto };

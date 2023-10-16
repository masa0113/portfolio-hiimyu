import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        test
        <video
          style={{ width: "100%", height: "100%", zIndex: 9999 }}
          src="https://www.youtube.com/watch?v=pm7JVGL2K8Y&ab_channel=FIXDTOKYO"
        ></video>
      </main>
    </>
  );
}

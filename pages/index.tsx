import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>spotify 2.0 clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {/* sidebar */}
        <Sidebar />
        {/* center */}
      </main>
      <div>{/* player section */}</div>
    </div>
  );
}

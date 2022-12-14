import Head from "next/head";
import Header from "./components/layout/Header";
import Home from "./home/index";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Home />
    </div>
  );
}

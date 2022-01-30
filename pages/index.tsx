import Head from "next/head"
import VHome from "./home"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <VHome />
    </>  
  )
}
import Head from "next/head";

export default function Annika() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <Head>
        <title>❤️</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        <img
          src="/images/annika.jpg"
          alt="Annika"
          className="rounded-3xl shadow-2xl w-72 sm:w-96 object-cover ring-4 ring-pink-400"
        />
        <p className="text-5xl sm:text-6xl font-bold tracking-tight">
          I love you ❤️
        </p>
      </div>
    </div>
  );
}

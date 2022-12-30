import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { RaceCard } from "../../../races";

const FindBuilds: NextPage = () => {
  const raceName = useRouter().query.raceName;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center gap-8 text-black dark:bg-gray-800 dark:text-white">
        <section className="flex flex-col gap-4 text-center">
          <p>{raceName}</p>
          <p>VS.</p>
          <p>(Select Opponent&apos;s Race)</p>
        </section>

        <ul className="grid grid-cols-3 gap-4">
          <li>
            <RaceCard
              isOpponent
              href={`/races/${raceName}/match-ups/zerg`}
              raceImageSrc={"/zerg.jpeg"}
              raceName="Zerg"
            />
          </li>
          <li>
            <RaceCard
              isOpponent
              href={`/races/${raceName}/match-ups/protoss`}
              raceImageSrc={"/protoss.jpeg"}
              raceName="Protoss"
            />
          </li>
          <li>
            <RaceCard
              isOpponent
              href={`/races/${raceName}/match-ups/terran`}
              raceImageSrc={"/terran.jpeg"}
              raceName="Terran"
            />
          </li>
        </ul>
      </main>
    </>
  );
};

export default FindBuilds;
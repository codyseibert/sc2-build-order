import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const RaceCard = ({
  matchUp,
  raceName,
  href,
  isOpponent = false,
}: {
  raceName: string;
  href: string;
  matchUp: string;
  isOpponent?: boolean;
}) => {
  const buttonStyle = isOpponent
    ? `bg-red-700 hover:bg-red-800`
    : `bg-blue-700 hover:bg-blue-800`;

  const raceImageMap: Record<string, string> = {
    z: "/zerg.jpeg",
    p: "/protoss.jpeg",
    t: "/terran.jpeg",
  };

  const [yourRaceLetter, opponentRaceLetter] = matchUp.split("v") as [
    string,
    string
  ];
  const yourRaceImage = raceImageMap[yourRaceLetter]!;
  const opponentRaceImage = raceImageMap[opponentRaceLetter]!;

  return (
    <div className="relative max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between gap-2">
        <Image
          className="rounded-t-lg"
          src={yourRaceImage}
          alt={raceName}
          width="100"
          height="100"
        />
        <Image
          className="rounded-t-lg"
          src={opponentRaceImage}
          alt={raceName}
          width="100"
          height="100"
        />
      </div>
      <div className="flex justify-center p-5">
        <Link
          href={href}
          className={
            `inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300  ` +
            buttonStyle
          }
        >
          {raceName}
        </Link>
      </div>
    </div>
  );
};

const matchUps = [
  {
    yourRace: "Zerg",
    opponentRace: "Terran",
    matchup: "zvt",
  },
  {
    yourRace: "Protoss",
    opponentRace: "Terran",
    matchup: "pvt",
  },
  {
    yourRace: "Terran",
    opponentRace: "Terran",
    matchup: "tvt",
  },
  {
    yourRace: "Zerg",
    opponentRace: "Protoss",
    matchup: "zvp",
  },
  {
    yourRace: "Protoss",
    opponentRace: "Protoss",
    matchup: "pvp",
  },
  {
    yourRace: "Terran",
    opponentRace: "Protoss",
    matchup: "tvp",
  },
  {
    yourRace: "Zerg",
    opponentRace: "Zerg",
    matchup: "zvz",
  },
  {
    yourRace: "Protoss",
    opponentRace: "Zerg",
    matchup: "pvz",
  },
  {
    yourRace: "Terran",
    opponentRace: "Zerg",
    matchup: "tvz",
  },
];

const FindBuilds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center gap-8 pt-12 text-black dark:bg-gray-800 dark:text-white">
        <h1>Select a Match Up</h1>

        <ul className="grid grid-cols-3 gap-8">
          {matchUps.map((matchUp) => (
            <li key={matchUp.matchup}>
              <RaceCard
                matchUp={matchUp.matchup}
                href={`/races/${matchUp.yourRace.toLowerCase()}/match-ups/${matchUp.opponentRace.toLowerCase()}`}
                raceName={`${matchUp.yourRace} vs ${matchUp.opponentRace}`}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default FindBuilds;

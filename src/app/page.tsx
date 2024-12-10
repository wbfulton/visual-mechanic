import Image from "next/image";
import Visualizer from "./components/Visualizer";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between font-[family-name:var(--font-geist-sans)]">
      <nav className="w-full flex items-center gap-4 bg-secondary border-b border-primary p-4">
        <Image
          className="invert"
          src="/toyota.svg"
          alt="Toyota logo"
          width={80}
          height={38}
          priority
        />
        <h1 className="text-2xl text-white font-bold">100 Series</h1>
      </nav>
      <main className="w-full h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full h-full">
          <Visualizer />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
      </footer>
    </div>
  );
}

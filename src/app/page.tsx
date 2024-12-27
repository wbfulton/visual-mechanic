import { Visualizer3D } from "./components/Visualizer3D";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      {/* <Navbar /> */}
      <Visualizer3D />
      <footer className="absolute bottom-0 right-0 z-50 flex flex-wrap items-center justify-center bg-transparent p-2">
        Created by Will Fulton
      </footer>
    </div>
  );
}

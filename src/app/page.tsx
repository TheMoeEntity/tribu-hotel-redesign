import About from "@/components/sections/home/About";
import Hero from "@/components/sections/home/Hero";
import Rooms from "@/components/sections/home/Rooms";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Rooms />
    </main>
  );
}

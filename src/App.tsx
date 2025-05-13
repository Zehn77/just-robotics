import { Cards } from "./components/cards/Cards";
import { Description } from "./components/desctiption/Description";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export default function App() {
  return (
    <div className="font-tektur-400">
      <Header />

      <Hero />

      <Cards />

      <Description />
    </div>
  );
}

import { Cards } from "./components/cards/Cards";
import { Courses } from "./components/courses/Courses";
import { Description } from "./components/desctiption/Description";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { LessonsForm } from "./components/lessons-form/LessonsForm";
import { Reviews } from "./components/reviews/Reviews";

export default function App() {
  return (
    <div className="font-tektur-400">
      <Header />

      <Hero />

      <Cards />

      <Description />

      <Courses />

      <Reviews />

      <LessonsForm />
    </div>
  );
}

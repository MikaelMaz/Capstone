import Servizietti from "../components/Servizietti";
import Carosello from "../components/Carosello";
import Herosection from "../components/Herosection";
import Sceglici from "../components/Sceglici";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <main>
      <Herosection />
      <Servizietti />
      <Sceglici />
      <Testimonial />
      <Carosello />
    </main>
  );
}

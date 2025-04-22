import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SportsButton from "../components/Sports Buttons/SportButtons";

export default function Home() {
  return (
    <div className="min-vh-100">
      <Header />
      <SportsButton />
      <Footer />
    </div>
  );
}

import Hero from "../../assets/Hero.jpg";
import Homepage from "../../components/Mobile/Homepage";

const Home: React.FC = () => {
  return (
    <>
      <img src={Hero} alt="Hero" className="fixed max-w-[400px] z-[0]" />
      <Homepage />
    </>
  );
};

export default Home;

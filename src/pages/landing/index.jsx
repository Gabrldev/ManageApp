import LandingLogin from "../../components/LandingLogin";
import MouseFollow from "../../components/MouseFollow";

function Landing() {
  return (
    <div className="h-screen w-full bg overflow-hidden">
      <section className="flex justify-center items-center h-full px-56 overflow-hidden">
        <MouseFollow />
        <LandingLogin />
      </section>
    </div>
  );
}
export default Landing;

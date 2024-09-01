import HeroSection from "./landingPage/heroSection";
import { Plus_Jakarta_Sans } from "next/font/google";
import Services from "./landingPage/ourSevices";
import FAQ from "./landingPage/FAQ";
import Footer from "./landingPage/footer";


const font = Plus_Jakarta_Sans({ subsets: ["latin"], style: ["normal"] });
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

export default function Home() {
  return (
    <main className={font.className}>
      <div>
        <HeroSection />
        <Services />
        <FAQ />
        <Footer/>
      </div>
    </main>
  );
}

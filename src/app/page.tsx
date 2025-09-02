import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Themes from "@/components/themes/themes";
import Gallery from "@/components/gallery/gallery";
import Packages from "@/components/packages/packages";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Themes />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

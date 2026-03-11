import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Roles } from "@/components/Roles";
import { BringYourOwn } from "@/components/BringYourOwn";
import { Tiles } from "@/components/Tiles";
import { SharedSpaces } from "@/components/SharedSpaces";

import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Roles />
        <BringYourOwn />
        <Tiles />
        <SharedSpaces />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}

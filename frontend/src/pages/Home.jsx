import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Department from "../components/Department";
import MessageForm from "../components/MessageForm";

function Home() {
  return (
    <div>
      <Hero title={"Welcom to TCare Medical Institue"} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/about.png"} />
      <Department />
      <MessageForm />
    </div>
  );
}

export default Home;

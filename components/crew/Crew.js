import React from "react";
import styles from "./Crew.module.css";
import Anoushen from "../../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  return (
    <section className={styles.crewContainer}>
      <div>
        <div className={styles.crewTitle}>
          <span>02</span>
          <h1>MEET YOUR CREW</h1>
        </div>
        <h2>FLIGHT ENGINEER</h2>
        <h1 className={styles.nameH1}>ANOUSHEN ANSARI</h1>
        <p>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
        <div className={styles.spanDiv}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <img src={Anoushen} alt="Anoushen foto" />
      </div>
    </section>
  );
};

export default Crew;

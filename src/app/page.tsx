// import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/Nav";

export default function Home() {
  return ( 
    <div className={styles.page}>
      <h1> Elizabeth Terveen </h1>
      <main className={`${styles.main} ${styles.draft}`} title= "My Blog!">
        <div className={`${styles.bio} ${styles.draft}`}>
          <div className={styles.imageContainer}>
          <img src="/pfp.png"/>
          </div>
          <div>
          <p>
            Hi! I&apos;m Elizabeth. I&apos;m a junior at Carnegie Mellon University studying
            Computer Science and Machine Learning.
            I am interested in computer vision and embodied AI, 
            with a focus on applications to healthcare. 
            I&apos;m particularly interested in developing architectures 
            that work well in resource-constrained settings 
            where there are bottlenecks in acquiring data, 
            labeling data, and making inferences.
          </p>
          </div>
        </div>
        <div className = {styles.link_container}>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/elizabeth-terveen"> linkedin </a>
             <a href="https://github.com/Elizabetht1"> github </a>
          </div>
        </div>
        <div className = {`${styles.draft}`}>
          
          A list of recent highlights / acheivements ! 
          <div className={styles.update}> update #1 </div>
          <div className={styles.update}> update #2 </div>
          <div className={styles.update}> update #3 </div>
          
        </div>
      </main>
      <Navigation/>
      {/* <footer className={styles.footer}>
        <a
          href="./about-me"
          // target="_blank"
          // rel="noopener noreferrer"
        > 
          Experience
        </a>
        <a
          href="./blog"
          // target="_blank"
          // rel="noopener noreferrer"
        > 
          Blog
        </a>
      </footer> */}
    </div>
  );
}

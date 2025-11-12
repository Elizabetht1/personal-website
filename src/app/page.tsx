import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./components/Nav";

export default function Home() {
  return ( 
    <div className={styles.page}>
      <h1> Elizabeth's Personal Blog </h1>
      <main className={`${styles.main} ${styles.draft}`} title= "My Blog!">
        <div className={`${styles.bio} ${styles.draft}`}>
          <div>
          A Picture of me! 
          </div>
          <div>
          A description of my experience! 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          </div>
        </div>
        <div className = {styles.link_container}>
          <div className={styles.links}>
            <div> linkedin </div>
            <div>  github  </div>
          </div>
        </div>
        <div className = {`${styles.draft}`}>
          
          A list of recent highlights / acheivements ! 
          <div id = "update-item"> update #1 </div>
          <div id = "update-item"> update #2 </div>
          <div id = "update-item"> update #3 </div>
          
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

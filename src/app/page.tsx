'use client';
import styles from "./page.module.css";
import Navigation from "./components/Nav";
import Social from "./components/Social";
import { useRef, useState } from 'react';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  function handleUpdateClick() {
    
    setIsClicked(!isClicked);
    console.log(`setting click status ${isClicked}\n`);
  }
  
  return ( 
    <div className={styles.page}>
      <Navigation/>
      <main className={`${styles.main}`} title= "My Blog!">
        <div className={styles.content}> 
          <div className={`${styles.bio}`}>
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
          <div className = {styles.updates}>
            
            A list of recent highlights / acheivements ! 
            <div className={styles.update}> update #1 </div>
            <div className= {isClicked ? `${styles.update} ${styles.clicked}` : styles.update}>
              <button onClick={handleUpdateClick} hidden={isClicked}> <i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
              <button onClick={handleUpdateClick} hidden={!isClicked}> <i className="fa fa-minus-square-o" aria-hidden="true"></i></button>
              update #2 
            </div>
            <div className={styles.update}> update #3 </div>
            <div className={styles.update}> update #4 </div>
            
          </div>
        </div>
      
        <div className = {styles.link_container}>
          
            <div > 
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              <a href="https://www.linkedin.com/in/elizabeth-terveen"> linkedin </a>
            </div>
            <div>
              <i className="fa fa-github-square" aria-hidden="true"></i>
               <a href="https://github.com/Elizabetht1"> github </a>
            </div>
    
  
          </div>
      </main>
     
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

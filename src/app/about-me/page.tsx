
import styles from '@/app/ui/aboutme.module.css';
// import {inter} from '@/app/ui/font';
// import Image from 'next/image';
// import Link from 'next/link';
import Navigation from '../components/Nav';
import Experience from '../components/Experience';

export default function Page() {
    return (

    <div className={styles.page}>
        <h1> Experience! </h1>
        <main className={styles.main}>
            
            <div className={styles.imageContainer}><img src="/cat.png"/></div>
   
            <div className={styles.experiencesContainer}>
                <Experience
                title={"Research Assitant @ RPAD"}
                src={"/rpad.txt"}
                />
                <Experience
                title={"AI Intern @ Medtornic"}
                src={"/medtronic.txt"}
                />
                <Experience
                title={"Software Autonomy @ CMU Lunabotics"}
                src={"/lunabotics.txt"}
                />
            </div>
            
        </main>
        <Navigation/> 
    </div>
    

   
       
      

    );
}


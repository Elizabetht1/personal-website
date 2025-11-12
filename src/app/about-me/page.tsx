
import styles from '@/app/ui/aboutme.module.css';
import {inter} from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Nav';
import Experience from '../components/Experience';

export default function Page() {
    return (

    <div className={styles.page}>
        <h1> Experience! </h1>
        <main className={styles.main}>
             <div className = {inter.className}>
                <div>

                </div>
                <Image
                    src="/cat.png"
                    height={500}
                    width={500}
                    alt="cat"
                />
            </div>
            <div id='experience-container'>
                <Experience/>
                <Experience/>
                <Experience/>
            </div>
            
        </main>
        <Navigation/> 
    </div>
    

   
       
      

    );
}


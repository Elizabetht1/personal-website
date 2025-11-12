
import styles from '@/app/ui/blog.module.css';
import {inter} from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Nav';
import Post from '../components/Post';

export default function Page() {
    return (

    <div className={styles.page}>
        
        <main className={styles.main}>
             <div className = {inter.className}>
             <h1> Blog! </h1>
        </div>
        <Post/>
        <Post/>
        <Post/>
        <Navigation/>
        </main>
        {/* <aside> Recent Comments </aside> */}
        

    </div>
       
      

    );
}


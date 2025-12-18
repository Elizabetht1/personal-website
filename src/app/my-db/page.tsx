
import styles from '@/app/ui/blog.module.css';
import {inter} from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Nav';
import Database from '../components/DB';
// const net = require('net');




export default function Page() {
 
    return  (

    <div className={styles.page}>
        
        <main className={styles.main}>
        <Database/>
        <Navigation/>
        </main>
        {/* <aside> Recent Comments </aside> */}
        

    </div>
       
      

    );
}


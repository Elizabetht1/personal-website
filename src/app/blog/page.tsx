
import styles from '@/app/ui/blog.module.css';
import {inter} from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Nav';
import Post from '../components/Post';
import Comments from '../components/Comments';

export default function Page() {
    return (

    <div className={styles.page}>
        
        <main className={styles.main}>
             
        <h1> Blog </h1>
        <div className={styles.postsContainer}>
            <Post
            title={"I made a database!"}
            src={"/post.txt"}
            link={"my-db"}
            />
            <Post 
            title = {"Am I Smarter than ChatGPT? (Spoiler Alert: No)"}
            src={""}
            link={"/"}
            ></Post>
            <Post 
            title = {"Learning a Latent Dirchlet Allocation Model for Taylor Swift's Flop Era"}
            src={""}
            link={"/"}
            ></Post>
        </div>
        
        
        
        </main>
        <Navigation/>
        {/* <aside> Recent Comments </aside> */}
        

    </div>
       
      

    );
}


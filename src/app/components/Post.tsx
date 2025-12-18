
'use client'

import Image from "next/image"
import styles from '@/app/ui/blog.module.css';
import { useState } from 'react';
import { useRef } from 'react';
// import { createRoot } from 'react-dom/client';


// const comment_button = document.getElementById("comment");
// document.addEventListener("click",() => addComment);

// @TODO write an api that exposes files from a local endpoint, and allows you to query 
// stored comments 


const COMMENT_SRV_URL = "http://127.0.0.1:8000"

export default function Post({title, src,link} : {title: string; src: string,link:string}) {

    const myRef = useRef<HTMLInputElement | null>(null)

    async function addComment() {
        if (myRef.current) {
            const post_txt = myRef.current.value;
            console.log(post_txt);
            const resp = await fetch(`${COMMENT_SRV_URL}/save_comment/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',  // Changed to JSON
                },
                body: JSON.stringify({ txt: post_txt }),  // Send as JSON object
            });
            const b = await resp.json();
            console.log(b);


            myRef.current.value = "";
        }
       
        // retrieve the input text 
        // const txtElem = document.getElementById("post-comment-txt");

        // // clear it 
        // console.log(myRef.current..textContent);
        // save it somewhere 
    }


    
    return <div className={styles.post}>
        <h3> {title} </h3>
        <div className={styles.postContent}>
            <div className={styles.postImage}> <Image src="/cat.png" height={100} width={100}  alt="post-thumbnail"/> </div>
            <div className={styles.postText}>
                <object data={src}></object>
                <a href={link}> See the full post! </a>
                <div className={styles.commentRow}>
                    <button className={styles.commentButton} onClick={addComment}>
                    <Image
                        src="/submitpost.png"   
                        alt="Add comment"
                        width={28}
                        height={28}
                    />
                    </button>
                    <input
                        type="text"
                        placeholder="Leave a Comment!"
                        ref={myRef}
                    />
                </div>
            </div>
           
        </div>
        
    </div>
}
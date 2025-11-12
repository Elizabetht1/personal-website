
'use client'

import Image from "next/image"
import styles from '@/app/ui/post.module.css';
import { useState } from 'react';
import { useRef } from 'react';
// import { createRoot } from 'react-dom/client';


// const comment_button = document.getElementById("comment");
// document.addEventListener("click",() => addComment);


export default function Post() {

    const myRef = useRef(null);

    function addComment() {
        if (myRef.current) {
            console.log(myRef.current.value);
            myRef.current.value = "";
        }
       
        // retrieve the input text 
        // const txtElem = document.getElementById("post-comment-txt");

        // // clear it 
        // console.log(myRef.current..textContent);
        // save it somewhere 
    }


    
    return <div className={styles.blog_post_container}>
        
        <Image src="/cat.png" height={100} width={100}  alt="post-thumbnail"/>
        <div className={styles.blog_post_text}>
            <h3> Post title! </h3>
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum </p>
            <button id="comment" onClick={addComment}> Add A Comment! </button>
            <input type="text" id="post-comment-txt" name="fname" placeholder="Leave a Comment!" ref={myRef} ></input>
        </div>
    </div>
}
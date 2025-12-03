'use client'

import styles from '@/app/ui/blog.module.css';
import {inter} from '@/app/ui/font';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Nav';
import Comments from './Comments';
import { useState, useRef} from 'react';

const net = require('net');





export default function Database() {
    const queryRef = useRef(null);
    const [txt, setTxt] = useState("");
    const db_proxy_url = "http://localhost:3000/"

    // const db_client = new net.Socket();

    // const setTcp() {
    //     tcpRef.current = new net.Socket();
    // }
    const writeToDB = async () => {
        if (queryRef.current) {
            setTxt("");
            console.log(`sending a request with this query: ${queryRef.current.value}`);
            const resp = await fetch(db_proxy_url, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain',
                // 'Access-Control-Allow-Origin': db_proxy_url, // Allow all origins, or specify a specific origin
                // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',

            },
            body: queryRef.current.value
            });

            const info = await resp.text();
            setTxt(info);
            console.log(info);
            queryRef.current.value = null;
        }
        
    };

    return  (

    <div className={styles.page}>
        
        <main className={styles.main}>
            <div className={styles.queryContainer}>
                <h1> eDB </h1>
                <div className={styles.query}>
                    <button id="comment" onClick={writeToDB}> <Image
                                            src="/dbicon2.png"   
                                            alt="query"
                                            width={50}
                                            height={50}
                                        /> </button>
                    <input type="text" id="post-comment-txt" name="fname" placeholder="Send the DB a Query" ref={queryRef} ></input>
                </div>
            </div>
            
            <div className={styles.dbContnet}> 
                <div className={styles.outputContainer}>
                    <h2> Output </h2>
                    <p> {txt} </p>
                </div>
                <Comments></Comments>
            </div>
            
        </main>
        {/* <aside> Recent Comments </aside> */}
        

    </div>
       
      

    );
}


import { useState, useRef} from 'react';
import styles from '@/app/ui/blog.module.css';

const COMMENT_SRV_URL = "http://127.0.0.1:8000";

export default function Comments() {

    const [txt,setTxt] = useState("");
    async function renderComments () {
        const resp2 = await fetch(`${COMMENT_SRV_URL}/get_comment`);
        const b2 = await resp2.json();
        console.log(b2);
        setTxt(b2);
    };
    return   (
        
        <div className={styles.commentsContainer}>
     
            <button onClick={renderComments}> See Comments </button>
            <p> {txt} </p>
        </div>
   );
}

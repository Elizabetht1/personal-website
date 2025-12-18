
import Image from "next/image";
import styles from '@/app/ui/aboutme.module.css';

export default function Experience({title,src}: {title: string; src?: string}) {
    return <div className={styles.experience}> 
            <h3> {title} </h3>
            <div className= {styles.experienceContent}> 
                <div className={styles.experienceImage}><Image
                                src="/cat.png"
                                height={100}
                                width={100}
                                alt="experience-thumbnail"
                            /></div>
                <div className ={styles.experienceText}><object data={src}> </object></div>
            </div>
            
        </div>;
}
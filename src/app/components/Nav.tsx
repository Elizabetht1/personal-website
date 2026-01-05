
import styles from '@/app/ui/nav.module.css';

export default function Navigation() {
    return  <div className={styles.nav} >
        <h1> Elizabeth Terveen </h1>
        <a href="." >
            <i className="fa fa-home" aria-hidden="true"></i>
             Home
        </a>
        <a href="./about-me" > 
        <i className="fa fa-road" aria-hidden="true"></i>
        Experience </a>
        <a href="./blog"> 
        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
        Blog </a>
    </div>
}
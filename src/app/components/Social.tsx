

export default function Social({title,link,icon} : {title: string; link:string, icon:string}) {
    return   (
        
        <div className="socials"> 
            <p> {icon} </p>
            <a href= {link}> {title} </a>
        </div>
   );
}

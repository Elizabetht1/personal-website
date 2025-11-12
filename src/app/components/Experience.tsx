
import Image from "next/image";


export default function Experience() {
    return <div id="experience"> 
            <h3> Experience title </h3>
            <Image
                                src="/cat.png"
                                height={100}
                                width={100}
                                alt="experience-thumbnail"
                            />
            <p> Experience descritipion </p>
        </div>;
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';




export default function Footer(){
    return(
        <div>
            <footer className="bg-black text-white text-center relative h-42"> 
                <section className="h-[80%] w-[40%] float-right text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi et, quidem eum veniam inventore, quam numquam iure explicabo, temporibus incidunt aperiam quibusdam magnam repellat laudantium. Veritatis cupiditate magni soluta.
                </section>
                 <FontAwesomeIcon icon={faFacebook} />
                 <FontAwesomeIcon icon={faGithub} className='ml-3'/>
                 <FontAwesomeIcon icon={faTwitter} className='ml-3'/>
            </footer>
        </div>
    )
}

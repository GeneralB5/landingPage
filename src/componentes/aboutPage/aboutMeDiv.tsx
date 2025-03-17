import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import imageProf from '../../assets/imageProfile/perfil.jpeg'
import AOS from 'aos';
export default function AboutMeDiv(){
    const divRef = useRef<HTMLDivElement>(null)

    
 useEffect(() => {
        // Inicializa AOS con la configuración deseada
        AOS.init({
            once: true,
            duration: 1000,
        });
        // Espera a que el DOM se renderice y luego desplaza el div al centro
        const timer = setTimeout(() => {
            divRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            AOS.refresh(); // Refresca AOS para asegurar que detecta bien la posición
        }, 1000); // Da más tiempo para que la animación de entrada funcione correctamente

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }, []);

    return(
    <div style={{margin:'auto',position:'absolute'}} data-aos="fade-down"  >
        <div ref={divRef}  tabIndex={-1} style={{ outline: "none" }}  className="AboutMeBackground aos-animate">
        <div className="AboutMeText">
            <p> <strong> ¡Hola! </strong>Soy Ian, un programador autodidacta en constante crecimiento con experiencia en <strong>Front-End</strong> y <strong>Back-End</strong>. Me apasiona resolver desafíos y encontrar soluciones efectivas, convirtiendo problemas en oportunidades para aprender y mejorar cada día.</p>
            <Link className="LinkAboutMe" to={'/work'}>More</Link>
        </div>
        <div className="AboutMeImg">
            <div style={{backgroundImage:`url(${imageProf})`}}>
            </div>
        </div>
        </div>
    </div>
    )
}
import { useEffect, useState } from "react";
import BouncingText from "./bouncingText/bouncingText";
export default function WelcomeComponent({}) {
const [visible, setVisible] = useState(true);
const [fading, setFading] = useState(false); // Estado para manejar la opacidad
useEffect(() => {
     // Inicia el fade-out después de 1s de la animación
     const fadeOutTimer = setTimeout(() => setFading(true), 1900);
     // Oculta el div después de la animación + tiempo de fade-out
     const hideTimer = setTimeout(() => setVisible(false), 2400);
     return () => {
         clearTimeout(fadeOutTimer);
         clearTimeout(hideTimer);
     };
  }, []);
return (
    <>
        {visible && <div style={{
            position:"absolute",
            height:"100vh",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"rgb(59, 59, 66)",
            top:0,
            opacity: fading ? 0 : 1, 
            transition: "opacity 0.5s ease-out" 
            }}>
            <BouncingText />
        </div>}
    </>
);
}
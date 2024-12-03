import { useEffect, useRef } from "react";
import { Typed } from "react-typed";
function H1Principal({}) {
    const el = useRef(null);

    useEffect(() => {
      const options = {
        strings: ['programador&#128187;','creador&#10024;','estudiante&#128211;',"Ian&#128075;"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: false,
        showCursor:false
      };
  
      const typed = new Typed(el.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);

    return(
        <div style={{width:'100%',
        height:100,
        color:"whitesmoke",
        display:"flex",
        alignItems:"center",
        justifyContent:"normal",
        }}>
            <p className="PH1estatico" >¡Hola! Soy</p>
            <div className="staticDivH1">
              <h1 className="H1estatico" ref={el} ></h1>
            </div>
        </div>
    )
}
export default H1Principal
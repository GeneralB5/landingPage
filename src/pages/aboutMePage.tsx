import { lazy, Suspense, useEffect, useState } from "react";
const Spline = lazy(() => import('@splinetool/react-spline'));
import WelcomeComponent from "../componentes/welcomeComp/welcomeText";
const Div = lazy(() => import("../componentes/aboutPage/aboutMeDiv")); 

export default function AboutMe() {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        // Fija la página en top:0
        document.body.style.position = "fixed";
        document.body.style.top = "0";
        document.body.style.width = "100%";

        // Después de 2s, quita la fijación
        setTimeout(() => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
        }, 2000);
    }, []);


    useEffect(()=>{
        const fadeOutTimer = setTimeout(() => setVisible(false), 2300);
        return () => clearTimeout(fadeOutTimer);
    },[])

    return(
    <>
        {visible? 
        <WelcomeComponent /> 
        :
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:'100%',height:'100%',background:'#121212'}}>   
        <Suspense fallback={<div style={{ background:'transparent'}}></div>}>
            <Spline scene="https://prod.spline.design/96HrjPVuiWxZtbks/scene.splinecode" style={{pointerEvents:"none"}}/>
        </Suspense>
        <Suspense fallback={<div style={{ background:'transparent'}}></div>}> 
            <Div />
        </Suspense>
        </div>}
    </>
    )
}
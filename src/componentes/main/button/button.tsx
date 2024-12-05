import { useRef, useState } from "react"
import CV from "../../../assets/CV/CV.pdf"
function ButtonDownload() {
  const [animation,setAnimation] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>(null);
  const handleClikc=():void=>{  
    setAnimation(true);    
      downloadLink.current?.click()    
    setTimeout(()=>{setAnimation(false)},2000);
  };
    return(
      <button onClick={handleClikc} className="buttonDownload" type="button">
      <a href={CV} download="CV.pdf" ref={downloadLink} style={{ display: 'none' }}>
        Descargar CV
      </a>
      <span className={`buttonDownload__icon ${animation?'buttonDownload__iconAnimation':''}`}>
        <svg height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" /><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" /><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" /></svg>
        <span className={`spanLeter ${animation?"spanAnimation":""}`}>DONE !</span>
      </span>
        <span className={`buttonDownload__text ${animation?'animationText':""}`}>Download CV</span>
      </button>
    )
}
export default ButtonDownload
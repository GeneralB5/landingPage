import gmail from "../../../../assets/iconos_social_net/gmail.png"
import insta from "../../../../assets/iconos_social_net/instagram.png"

export default function OtherSocialNetwork(){
    return(
        <div className="themedDivs" style={{height:150,width:320,backgroundColor:'#8D86C9',flexDirection:"column",justifyContent:'space-evenly'}}>
                    <h2 style={{fontSize:17,textTransform:'uppercase'}}>other ways to communicate</h2>
                    <div className="divOtherSocialNet">
                        <a className="aOtherSocialNet color-gmail" href="mailto:ianmarcobonfiglio@gmail.com?subject=Consulta%20sobre%20tu%20portafolio&body=Hola%20%20Vi%20tu%20portafolio%20y%20quería%20hacerte%20una%20pregunta...">                    
                            <img src={gmail} alt="Gmail" height={40} width={40}/>
                        </a>
                        <a className="aOtherSocialNet color-instagram" href="https://www.instagram.com/ian_bonfiglio/" target="_blank">
                            <img src={insta} alt="Instagram" height={40} width={40}/>
                        </a>
                    </div>   
                </div>
    )
}
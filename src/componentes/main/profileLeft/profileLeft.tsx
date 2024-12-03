import { useEffect, useState } from "react"
import ButtonDownload from "../button/button.tsx"
import SocialNetwork from "../social/divSocial"
interface Information{
    user:any
}
const ProfileLeft:React.FC<Information> =({user})=> {
const [hasAnimated,setAnimated] = useState(false)
useEffect(()=>{
    setAnimated(true)
    setTimeout(() => {
      setAnimated(false)  
    },1500);
},[])

    return(
        <div className="profileContainer">
        <div className="divProfileIMG" style={{transform:'translateY(-90px)',display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className={hasAnimated?"myProfileImg profileAnimation":"myProfileImg"} style={{backgroundImage:`url(${user.avatar_url})`}}></div>
            <span className="spanH2"><h2 className="divImgH2 TextShadow" >{user.login}</h2></span>
        </div>
        <div className="divBioProfile TextShadow">
            <h3>{user.bio}</h3>
            <SocialNetwork />
        </div>
        <ButtonDownload />
    </div>
    )
}
export default ProfileLeft
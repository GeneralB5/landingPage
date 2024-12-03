import { useEffect, useState } from "react"

 interface propsComp {
    Url:string,
    path:string
 }
const SocialIcon:React.FC<propsComp>=({Url,path})=>{
    const [img,setImg] = useState("")

    const dynamicImport = async ()=>{
        const URLJSON = await import(`../../../../assets/iconos_social_net/${Url}.png`)
        setImg(URLJSON.default)
    }

    useEffect(()=>{
        dynamicImport()
    },[])

    return(
            <a style={{display:"flex",
                alignItems:'center',
                justifyContent:"center"}} href={path} target="_blank">
                    <img className={`${Url}`} src={img} alt="" /></a>
    )
}
export default SocialIcon
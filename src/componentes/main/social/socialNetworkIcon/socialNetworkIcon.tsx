 interface propsComp {
    Url:string,
    name:string,
    path:string
 }
const SocialIcon:React.FC<propsComp>=({Url,path,name})=>{
    return(
            <a style={{display:"flex",
                alignItems:'center',
                justifyContent:"center"}} href={path} target="_blank">
                    <img className={`${name}`} src={Url} alt={name} /></a>
    )
}
export default SocialIcon
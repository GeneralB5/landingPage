interface Proyect {
    proyect:
    {
    language:string
    name:string
    updated_at:string
    html_url:string}
}
function DivNewestGenerator({proyect:{language,name,updated_at,html_url}}:Proyect){    
    return(
        <div className="divNewGeneBorder" style={{display:"flex",alignItems:"center",justifyContent:'space-between',height:100,width:300}}>
            <img style={{
                filter:'drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 12px)'
            }} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${language.toLowerCase()}/${language.toLowerCase()}-original.svg`} alt={language} width={50} height={50}/>
            <p className={`ColorLan-${language.toLowerCase()}`}>{name}</p>
            <p style={{color:"black"}}>{updated_at.split("T")[0]}</p>
            <a href={html_url} target="blank"><img src="https://img.icons8.com/?size=100&id=92&format=png&color=000000" alt="" width={20}  height={20} /></a>
        </div>
    )
}
export default DivNewestGenerator
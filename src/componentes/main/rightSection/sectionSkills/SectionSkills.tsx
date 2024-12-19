import FrameworksMostUsed from "./frameworks/frameworkMostUsed";

interface data{
    labels: string[];
}

export default function SectionSkill({labels}:data){
    return(
    <div className='themedDivs' style={{backgroundColor:'#1f1446', height:200,width:320,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:10}}>
        <h2 style={{color:"whitesmoke",textAlign:"center",fontSize:20}}>MOST USED LANGUAJES</h2>
        <div style={{width:320,display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${labels[0].toLowerCase()}/${labels[0].toLowerCase()}-original.svg`} alt={labels[0]} className="imgMostUsed" />
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${labels[1].toLowerCase()}/${labels[1].toLowerCase()}-original.svg`} alt={labels[1]} className="imgMostUsed" />
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${labels[2].toLowerCase()}/${labels[2].toLowerCase()}-original.svg`} alt={labels[2]} className="imgMostUsed" />
        </div>
        <FrameworksMostUsed />
    </div>
    )
}
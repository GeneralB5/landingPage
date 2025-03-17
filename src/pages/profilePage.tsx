import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import ProfileLeft from "../componentes/main/profileLeft/profileLeft.tsx"
import RightSection from "../componentes/main/rightSection/rightSection.tsx"
import mostUsed from "../functions/githubMostUsed.tsx"
import LoadingDots from "../componentes/loading/loading.tsx"
import H1Principal from "../componentes/main/h1Principal/h1Principla.tsx"
interface chartDataArguments{
    arrayThreeLatestProy:any[]
    arryLanguages:string[]
}

function ProfilePage({}){
    const [user,setUser]= useState()
    const [chartData,setChartData]= useState<chartDataArguments | null>({
        arrayThreeLatestProy:[],
        arryLanguages:[]})
    const [Loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(true)

            const funcionUser= async ()=>{
            const apiInfo:AxiosResponse =  await axios.get('https://api.github.com/users/GeneralB5');
            const repos:AxiosResponse = await axios.get('https://api.github.com/users/GeneralB5/repos')
            const returned = mostUsed(repos.data ?? "")    
            setChartData(returned)
            setUser(apiInfo.data);
            }
    
    funcionUser()
    setTimeout(()=>setLoading(false),2000)
    },[])
    if(Loading == true || !user || !chartData) return <LoadingDots />
    return(
    <>  
        <H1Principal />
        <div className="MainProfile">
            <ProfileLeft user={user} />
            <RightSection chartData={chartData}/>
        </div>
    </>    
    )
}
export default ProfilePage
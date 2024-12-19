import ordenarFechasPorReciente from "./ordernarFechas"

interface languages {
    name:string
    html_url:string
    updated_at:string
    language:string
}
interface chartDataArguments{
    arrayThreeLatestProy:any[]
    arryLanguages:string[]
}

const mostUsed = (arry:any):chartDataArguments | null=>{
    const arryLanguages:string[] = []
    if(!Array.isArray(arry)) return null
    const arrayThreeLatestProy:any[] = []
    ordenarFechasPorReciente(arry)
    arry.map(({name,html_url,updated_at,language}:languages)=>{
        if(!language) return 
        if(arrayThreeLatestProy.length != 3) arrayThreeLatestProy.push({name,language: language.toLocaleLowerCase() =="c#" ? "cSharp":language, html_url, updated_at})
        const numb:number = arryLanguages.findIndex( x => x == language) 
        if (numb === -1) { 
            arryLanguages.push(language=="C#"?"cSharp":language);
        }
    })
    return {arrayThreeLatestProy,arryLanguages}
}
export default mostUsed
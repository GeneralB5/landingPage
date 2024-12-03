
interface languages {
    name:string
    html_url:string
    updated_at:string
    language:string
}

const mostUsed = (arry:any)=>{
    const arryLanguages:string[] = []
    const arryLanguagesNumb:number[] = []
    if(!Array.isArray(arry)) return arryLanguages
    const arrayThreeLatestProy:any[] = []
    arry.map(({name,html_url,updated_at,language}:languages)=>{
        if(!language) return 
        if(arrayThreeLatestProy.length != 3) arrayThreeLatestProy.push({name,language: language.toLocaleLowerCase() =="c#" ? "cSharp":language, html_url, updated_at})
        const numb:number = arryLanguages.findIndex( x => x == language) 
        if (numb !== -1) { arryLanguagesNumb[numb]++;
          } else {             
            arryLanguages.push(language);
            arryLanguagesNumb.push(1);
        }

    })
    return {arryLanguages,arryLanguagesNumb,arrayThreeLatestProy}
}
export default mostUsed
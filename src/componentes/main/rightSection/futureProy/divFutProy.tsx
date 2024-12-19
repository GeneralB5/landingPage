function DivFutProy({}){
    return(
        <div className="themedDivs divFutureProy"  style={{height:350,width:320,backgroundColor:'#E9EDEB'}}>
            <div className="divContainerFutPro" style={{height:'max-content',justifyContent:"start"}}>
                <h2>Future proyects</h2>            
                <div className="divSeparadores">
                    <p>sist. recomendacion</p>
                    <div className="imgContainerFuture" >
                        <img className="iconStyleFuture" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" />                
                        <img className="iconStyleFuture" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                    </div>
                </div>
                <div className="divSeparadores">
                    <p>Front-End recomendacion</p>
                    <div className="imgContainerFuture">
                        <img className="iconStyleFuture" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />                
                        <img className="iconStyleFuture" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DivFutProy
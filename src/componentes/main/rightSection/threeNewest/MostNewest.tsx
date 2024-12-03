import DivNewestGenerator from "./divNewestGenerator/divNewestGenerator"

interface arryNewest{
    arryLatest:any[]
}

function ThreeNewest ({arryLatest}:arryNewest) {
    if(!arryLatest||arryLatest.length == 0) return(
        <p>Loading..</p>
    )
    return(
        <div className="DivThreeNewest themedDivs">
            <h2 style={{
                textTransform:'uppercase'
            }}>Latest Proyects</h2>
             {arryLatest.map(x => (<DivNewestGenerator key={x.name} proyect={x} />))} 
        </div>
    )
}
export default ThreeNewest
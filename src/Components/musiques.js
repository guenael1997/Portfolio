import { useState } from "react"
import MusiquesConst from "./Const/musiques"

function Musiques () {
    const [musiques,setMusique]= useState(MusiquesConst)
    const [ActiveMusique,SetActiveMusique] = useState(musiques[0])

    const Musiques =
    <div className="musiques py-4">
        <h1 className="text-center py-4">Musiques</h1>
        <div className="container-fluid text-center px-4">
            <div className="row">
                <div class="card col-lg-12 py-4 my-4 player shadow-lg rounded-5">
                    <div className="card-body">
                        <h2 className="card-title py-4">{ActiveMusique.titre}</h2>
                        <audio controls controlslist="noremoteplayback" src={ActiveMusique.url}></audio>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    musiques.map((e,i)=>
                    <div class="col-lg-3 rounded mx-auto my-auto  p-4" id="musicButton" style={{"--bs-bg-opacity": .9}}>
                        <div onClick={()=>SetActiveMusique(e)}>
                            <h5 class="card-title">{e.titre}</h5>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    </div>

    

    return(Musiques)
}

export default Musiques
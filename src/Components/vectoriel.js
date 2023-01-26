import React, { useState } from "react";
import VectorielConst from "./Const/vectoriel";
import '../App.css'


function Vectoriel () {
    const [image,setImage] = useState(VectorielConst)

    const matriciel =
    <div className="vectoriel">
        <div className="container my-auto text-center">
            <h1 className="py-4"> Dessin vectoriel</h1>
            <div className="row">
            {image.map((e,i)=>
                <div class="card text-center col-lg-4 my-auto mx-auto BG p-4 rounded-5" key={i} onClick={()=>{window.open(e.url2)}}>
                <img src={e.url} className="card-img-top" alt={e.nom}/>
                <div class="card-body">
                  <h2 class="card-title">{e.nom}</h2>
                </div>
              </div>
            )}
            </div>
        </div>
    </div>

    return (matriciel)
}

export default Vectoriel
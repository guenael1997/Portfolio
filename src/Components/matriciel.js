import React, { useState } from "react";
import matricielleConst from "./Const/matriciel";
import '../App.css'


function Matricielle () {
    const [image,setImage] = useState(matricielleConst)
    
    const matriciel =
    <div className="matricielle">
        <div className="container my-auto text-center">
            <h1 className="py-4"> Dessin matriciel</h1>
            <div className="row">
            {image.map((e,i)=>
                <div class="card text-center col-lg-4 my-auto mx-auto p-4 BG rounded-5" key={i}>
                <img src={e.url} className="card-img-top" alt={e.nom}/>
                <div class="card-body">
                  <h5 class="card-title">{e.nom}</h5>
                  <a href={e.url} class="btn btn-primary">Voir l'image en taille réelle</a>
                </div>
              </div>
            )}
            </div>
        </div>
    </div>

    return (matriciel)
}

export default Matricielle
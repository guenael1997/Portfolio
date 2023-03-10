import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel';

function Programation(){
    const images = [
        "images/screen2.PNG",
        "images/screen3.PNG",
        "images/screen4.PNG",
        "images/screen5.PNG",
    ]

    const prog =
    <div className="prog">
        <div className="container py-4 bg-light bg-opacity-75 rounded-5">
            <h1 className="text-center">Programation</h1>
            <div className="row py-4">
                <div className="col-lg-6 my-auto">
                    <h2> Developpement web </h2>
                    <p> Ce site a principalement été réalisé avec react. Vous retrouverez le code source de ce dernier en suivant ce <a href="https://github.com/guenael1997/Portfolio">lien</a></p>
                    <p> Par ailleurs, voici le <a href="https://github.com/guenael1997/PharmacieFidele">lien</a> d'une autre de mes réalisations : un site web pour une pharmacie. Ce dernier a été réalisé avec vueJs pour la partie front-end et avec nodeJs pour la partie back-end.</p>
                </div>
                <div className="col-lg-6">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="img-fluid rounded-4"
                        src={images[0]}
                        alt="First slide"
                        onClick={()=>{window.open(images[0])}}
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="img-fluid rounded-4"
                        src={images[1]}
                        alt="Second slide"
                        onClick={()=>{window.open(images[1])}}
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="img-fluid rounded-4"
                        src={images[2]}
                        alt="Third slide"
                        onClick={()=>{window.open(images[2])}}
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="img-fluid rounded-4"
                        src={images[3]}
                        alt="Third slide"
                        onClick={()=>{window.open(images[3])}}
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 my-auto">
                    <h2>Developpement de jeux vidéo</h2>
                    <p>Le projet Knight Clash a pour but la réalisation d'un jeu vidéo multiplateforme dont le but est de vaincre son adversaire en choisissant les actions appropriées.
                        Le jeu est développé sur Unity.
                    </p>
                </div>
                <div className="col-lg-6">
                    <video controls src="Vidéo/TestKnightClash.mp4" className="rounded-4">
                    </video>
                </div>
            </div>
        </div>
    </div>

    return(prog)
}

export default Programation
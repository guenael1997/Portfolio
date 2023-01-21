import { useState } from "react";
import data from "./Const/InfoPers";

function Contact(){

    const [Data,setData] = useState(data)
    const [MailText,setText] = useState("")
    const [Name,setName] = useState("")

    function SendMail(){
        if(Name!='' && Name!=null){
            if(MailText!='' && MailText!=null){
                window.open(`
                mailto:${Data.Mail}
                ?subject=${Data.Objet +` - ${Name}`}
                &body=${MailText}
                `)
            }
            else{
                alert("Le corps du mail est vide !")
            }
        }
        else{
            alert("Veuillez renseigner un nom")
        }       
    }



    const contact =
    <div className="py-4 contact">
        <h1 className="text-center"> Me contacter </h1>
        <div className="container-fluid">
            <div className="row py-4">
                <div className="col-lg-6 text-center my-auto">
                    <h2 className="py-4"> Données personnelles</h2>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle mx-4" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        {Data.Nom} {Data.Prenom}
                    </h3>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope-at-fill mx-4" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H3Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                        </svg>
                        {Data.Mail}
                    </h3>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone mx-4" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        {Data.Tel}
                    </h3>
                </div>
                <div className="col-lg-6 my-auto">
                    <h2> Ecrivez votre mail ici et envoyez-le depuis votre courriel par défaut !</h2>
                    <label className="fs-4">Nom</label>
                    <input type='text' className="form-control" placeholder="Votre nom" onChange={(e)=>setName(e.target.value)}/>
                    <textarea class="form-control my-4" rows= "10" aria-label="With textarea" onChange={(e)=>setText(e.target.value)} placeholder='Corps du mail'></textarea>
                    <button className="btn btn-primary" onClick={()=>{SendMail()}}>Envoyer</button>
                </div>
            </div>
        </div>
    </div>

    return(contact)
}

export default Contact
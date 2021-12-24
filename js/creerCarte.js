
//tableau pour stocke les apprent ajouter avant la sauvegarde
export const apprenants=[]

//recuperation des elements HTML
const formApprenant=document.querySelector("#form-apprenant");
const nom=document.querySelector("#nom")
const prenom=document.querySelector("#prenom")
const biographie=document.querySelector("#biographie")
const niveau =document.querySelector("#niveau");
const imgprofil=document.querySelector("#imgprofil")
const test=document.querySelector("#test")
const btnAjouter=document.querySelector("#Enregistrer")
const divTableauApprenant=document.querySelector("#divTableauApprenant")


//vider les champs inputs
function viderInputs()
{
    nom.value=""
    prenom.value=""
    biographie.value=""
    //imgprofil.value=""
}

//creation du span pour afficher les message d'erreur de validation par input
let span=document.createElement("span")

//fonction pour la mise en forme des element d'erreurs
function validationFOrmulaire(input,msgerreur,span)
{
    span.textContent=msgerreur+" est obligatoir"
    span.style.color="red"
    input.insertAdjacentElement("beforebegin",span)
    input.style.border="1px solid red"
}

//controle de saisi dans le champs biographie
biographie.addEventListener("input", (event)=>{
    const maxcaractere=130
    const contenuSaisie=biographie.value
    const longueurSaisi=contenuSaisie.length
    const rest= maxcaractere-longueurSaisi

    //actualiser le dom pour afficher le nombre

    const paragrapheLimiteTexte=document.querySelector("#paragraphe-limite-texte")
    const spanNombreCaracteres=document.querySelector("#span-nombre-caracteres")
    const testResntant=document.querySelector("#testResntant")
    spanNombreCaracteres.textContent=longueurSaisi
    testResntant.textContent="il vous reste:  "+rest+" caractere a saisir"


    if(rest<=10)
    {
        paragrapheLimiteTexte.style.color="yellow"
    }
    if(rest<0)
    {
        paragrapheLimiteTexte.style.color="red"
        btnAjouter.disabled=true
    }
    if(rest==10)
    {
        paragrapheLimiteTexte.style.color="black"
        btnAjouter.disabled=false
    }
    
})

function func_btnModifier(btnModifier,idModifier)
{
    btnModifier.addEventListener("click",(event)=>{
        event.preventDefault()
        //alert("bonjour")
        //console.log(apprenants)
        apprenants.forEach(apprenant=>{
            if(apprenant.id==idModifier)
            {
                nom.value=apprenant.nom
                prenom.value=apprenant.prenom
                biographie.value=apprenant.biographie
                console.log(apprenant.nom)
                btnAjouter.value="Modifier"
                btnAjouter.textContent="Modifier"
                console.log(btnAjouter)
                sessionStorage.setItem("apprenantAMod",idModifier)
            }
            
        })
    })
}


function func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer){
    btnSupprimer.addEventListener("click",(event)=>{
        event.preventDefault()
        apprenants.forEach(apprenant=>{
            if(apprenant.id==idSpprimer)
            {
                //console.log(apprenants)
                //console.log(apprenants.length)
                const index=apprenants.indexOf(apprenant)
                apprenants.splice(index,1)
                divTableauApprenant.removeChild(carteSupprimer)
                console.log(apprenants)
               
            }else{
                console.log("mauvaise idee")
                console.log(idSpprimer)
               
            }
            
        })
       
        
    })
}


//fonction de creation d'une carte
export function creerUNeCarte(apprenant,apprenants){


    const idButtonSupprimer = "btn_supprimer-" + apprenant.id
    const idButtonModifier = "btn_modifier-" + apprenant.id
    const idDivSupp="divSupp-"+apprenant.id

    console.log(idButtonModifier)
    const idModifier=idButtonModifier.substring(13,idButtonModifier.length)
    const idSpprimer=idButtonSupprimer.substring(14,idButtonSupprimer.length)


    divTableauApprenant.insertAdjacentHTML("afterbegin",`
    <div class="col-12 mb-2" id="${idDivSupp}">
        <div class="card">
            <div class="row mx-0">
                <div class="col-4">
                    <img src="img/image 1.png" class="img-fluid mt-5" alt="" srcset="">
                </div>
                <div class="col-8">
                    <div class="d-flex justify-content-end">
                        <i class="bi bi-pen btn text-warning" id="${idButtonModifier}"></i>
                        <i class="bi bi-x-lg btn text-danger"id="${idButtonSupprimer}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" id="nomAppTab">${apprenant.nom}</h5>
                        <h6 class="card-title" id="prenomAppTab">${apprenant.prenom}</h6>
                        <p class="card-text">${apprenant.biographie}</p>
                        <p class="card-text">${apprenant.niveau}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
   
//modification de la'pprenant du tableau
    const btnModifier=document.getElementById(idButtonModifier)
    const btnSupprimer=document.getElementById(idButtonSupprimer)
    const carteSupprimer=document.getElementById(idDivSupp)


    
    func_btnModifier(btnModifier,idModifier)

    //suppresion de la carte apprenant de la liste
    func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer)
    
}

export function AjoutApprenant(){
    formApprenant.addEventListener("submit", (e)=>{
        e.preventDefault()
        
            if(nom.value.trim()==="")
            {
                validationFOrmulaire(nom,"le nom ", span)
            }else if(prenom.value.trim()==""){
                validationFOrmulaire(prenom,"le prenom ", span)
            }
            else if(biographie.value.trim()=="")
            {
                validationFOrmulaire(biographie,"la biograohie ", span)
            }
            else if(btnAjouter.value=="Ajouter")
            {
                app={
                    id:Date.now(),
                    nom:nom.value,
                    prenom:prenom.value,
                    profile:"profile",
                    biographie:biographie.value,
                    niveau:niveau.value
                },
                apprenants.push(app),
                divTableauApprenant.innerHTML="",
                apprenants.forEach(apprenant=>{
                    creerUNeCarte(apprenant,apprenants)
                }),
              
                //console.log(apprenants),
                viderInputs()
                //e.target.submit()
                
            }else{
                alert("modifer")
                apprenants.forEach(apprenant=>{
                    if(apprenant.id==sessionStorage.getItem("apprenantAMod"))
                    {
                        alert("bonjour")
                        app={
                            id:sessionStorage.getItem("apprenantAMod"),
                            nom:nom.value,
                            prenom:prenom.value,
                            profile:"profile",
                            biographie:biographie.value,
                            niveau:niveau.value
                        }
                        const index=apprenants.indexOf(apprenant)
                        apprenants.splice(index,1,app)
                        btnAjouter.value="Ajouter"
                        btnAjouter.textContent="Ajouter"
                        divTableauApprenant.innerHTML=""
                        viderInputs()
                        apprenants.forEach(apprenant=>{
                            creerUNeCarte(apprenant,apprenants)
                        })
                    }
                })
            }
    
    })
}
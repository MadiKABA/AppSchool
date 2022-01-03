import{list_apprenant,modalDetail,show_detail,supprimer_apprenat} from './scriptSupabase'
//tableau pour stocke les apprent ajouter avant la sauvegarde
export let apprenants=[]

//recuperation des elements HTML
const formApprenant=document.querySelector("#form-apprenant");
const nom=document.querySelector("#nom")
const prenom=document.querySelector("#prenom")
const biographie=document.querySelector("#biographie")
const niveau =document.querySelector("#niveau");
const imgprofil=document.querySelector("#imgprofil")
const test=document.querySelector("#test")
const btnAjouter=document.querySelector("#Enregistrer")
let  divTableauApprenant=document.querySelector("#divTableauApprenant")
const profile=document.querySelector("#profile")
const maquetter=document.querySelector("#maquetter")
const basededonnees=document.querySelector("#basededonnees")
const interfacedynamique=document.querySelector("#interfacedynamique")
const devbackend=document.querySelector("#devbackend")
const divContainerAdd=document.querySelector("#div-container")

const modal_detailsApprenant=document.querySelector("#modal_detailsApprenant")


export let variable=2
export const kaba=5

function func_urlImage(e){
    let src=URL.createObjectURL(e.target.files[0])
    return src
}
imgprofil.addEventListener("change",(e)=>{
    let source = func_urlImage(e)
    profile.src=source
    console.log(source);
   })

//vider les champs inputs
function viderInputs()
{
    nom.value=""
    prenom.value=""
    biographie.value=""
    imgprofil.value=""
    maquetter.value=""
    basededonnees.value=""
    interfacedynamique.value=""
    devbackend.value=""
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
            if(apprenant.indicetab==idModifier)
            {
                nom.value=apprenant.nom
                prenom.value=apprenant.prenom
                biographie.value=apprenant.biographie
                maquetter.value=apprenant.maquetter,
                basededonnees.value=apprenant.basededonnees,
                interfacedynamique.value=apprenant.interfacedynamique,
                devbackend.value=apprenant.devbackend
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
            if(apprenant.indicetab==idSpprimer)
            {
                //console.log(apprenants)
                //console.log(apprenants.length)
                const indicetab=apprenants.indexOf(apprenant)
                apprenants.splice(indicetab,1)
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
export function creerUNeCarte(apprenant,dcol,btnnone,dnone,divContainer){


    const idButtonSupprimer = "btn_supprimer-" + apprenant.indicetab
    const idButtonModifier = "btn_modifier-" + apprenant.indicetab
    const idDivSupp="divSupp-"+apprenant.indicetab
    const idDetail="btn-detail-"+apprenant.id

    console.log(idButtonModifier)
    const idModifier=idButtonModifier.substring(13,idButtonModifier.length)
    const idSpprimer=idButtonSupprimer.substring(14,idButtonSupprimer.length)


    divContainer.insertAdjacentHTML("beforeend",`
    <div class="col-sm-12 ${dcol} mb-2 shadow-lg p-3 bg-body rounded" id="${idDivSupp}">
        <div class="card text-center" >
            <div class="d-flex justify-content-end">
                <i class="bi bi-pen btn text-warning ${btnnone}" id="${idButtonModifier}"></i>
                <i class="bi bi-x-lg btn text-danger ${btnnone}"id="${idButtonSupprimer}"></i>
            </div>
            <img src="${apprenant.profile}" class="card-img mx-auto d-block img-fluid w-75" alt="...">
            <div class="card-body">
                <h5 class="card-title">${apprenant.nom} ${apprenant.prenom}</h5>
                <p class="card-text">${apprenant.niveau}</p>
                <a href="#" id="${idDetail}" class="btn text-center ${dnone}">Details</a>
            </div>
        </div>
    </div>`)
   
//modification de la'pprenant du tableau
    const btnModifier=document.getElementById(idButtonModifier)
    const btnSupprimer=document.getElementById(idButtonSupprimer)
    const carteSupprimer=document.getElementById(idDivSupp)
    const btnDetail=document.getElementById(idDetail)

    const btnSpprimer=document.getElementById("btn_spprimer")
    const  btnModifierApp=document.getElementById("btn_modifierApp")


    btnDetail.setAttribute("data-bs-toggle","modal")
    btnDetail.setAttribute("data-bs-target","#modal_detailsApprenant")
    btnDetail.style.border="1px solid black"


    btnModifierApp.setAttribute("data-bs-toggle","modal")
    btnModifierApp.setAttribute("data-bs-target","#modal_modifierApprenant")

    btnDetail.addEventListener("click",(e)=>{
        sessionStorage.setItem("idApp",apprenant.id)
        //modalDetail(modal_detailsApprenant)
        show_detail(apprenant.id)
    })
    
    btnSpprimer.addEventListener("click",(e)=>{
        e.preventDefault()
        supprimer_apprenat(sessionStorage.getItem("idApp"))
    })

    func_btnModifier(btnModifier,idModifier)

    //suppresion de la carte apprenant de la liste
    func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer)
    
}

export function AjoutApprenant(){
   
        
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
                const app={
                    indicetab:Date.now(),
                    nom:nom.value,
                    prenom:prenom.value,
                    biographie:biographie.value,
                    niveau:niveau.value,
                    profile:profile.src,
                    maquetter:parseInt(maquetter.value),
                    basedonnee:parseInt(basededonnees.value),
                    interfacedynamique:parseInt(interfacedynamique.value),
                    devbackend:parseInt(devbackend.value)
                }
                apprenants.push(app),
                divTableauApprenant.innerHTML="",
                apprenants.forEach(apprenant=>{
                    creerUNeCarte(apprenant,"col-md-12","d-block","d-none",divTableauApprenant)
                }),
                
                alert(devbackend.value)
                //console.log(apprenants),
                viderInputs()
                //e.target.submit()
                
            }else{
                
                apprenants.forEach(apprenant=>{
                    if(apprenant.indicetab==sessionStorage.getItem("apprenantAMod"))
                    {
                        const app={
                            indicetab:sessionStorage.getItem("apprenantAMod"),
                            nom:nom.value,
                            prenom:prenom.value,
                            profile:profile.src,
                            biographie:biographie.value,
                            niveau:niveau.value,
                            maquetter:parseInt(maquetter.value),
                            basedonnee:parseInt(basededonnees.value),
                            interfacedynamique:parseInt(interfacedynamique.value),
                            devbackend:parseInt(devbackend.value)
                        }
                        const indicetab=apprenants.indexOf(apprenant)
                        apprenants.splice(indicetab,1,app)  
                        divTableauApprenant.innerHTML=""
                        viderInputs()
                        btnAjouter.value="Ajouter"
                        btnAjouter.innerText="Ajouter"
                        apprenants.forEach(apprenant=>{
                            creerUNeCarte(apprenant,"col-md-12","d-block","d-none",divTableauApprenant)
                        })

                    }
                })
              
            }
   
   

}
const divFormAjout=document.querySelector("#div_form_ajout")
const addApprenant=document.querySelector("#add_apprenant")

export function func_displaydiv()
{   //alert("booo")
    addApprenant.addEventListener("click",(e)=>{
        e.preventDefault()
        list_apprenant.setAttribute("class","d-none")
        divContainerAdd.setAttribute("class","d-block")
        //alert("boooo")
    })
}
/*sauvegarder.addEventListener("click",(e)=>{
    e.preventDefault()
    apprenants=[]
    //divTableauApprenant.innerHTML="",
    apprenants.forEach(apprenant=>{
        creerUNeCarte(apprenant,"d-none")
    })
})*/



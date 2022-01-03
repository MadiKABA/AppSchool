import {AjoutApprenant,variable,func_displaydiv} from './creerCarte.js'
import {func_sauvegarde,func_load_listeApprenants,list_apprenant} from './scriptSupabase.js'





const divFormAjout=document.querySelector("#div_form_ajout")
const addApprenant=document.querySelector("#add_apprenant")
const sauvegarder=document.querySelector("#sauvegarder")
const divContainerAdd=document.querySelector("#div-container")
const formApprenant=document.querySelector("#form-apprenant");

AjoutApprenant

sauvegarder.addEventListener("click",(e)=>{
    e.preventDefault()
    //alert("bonj")
    func_sauvegarde()
    list_apprenant.setAttribute("class","d-block")
   // alert("soir")
    //divContainerAdd.setAttribute("class","d-none") 
})


  /*  addApprenant.addEventListener("click",(e)=>{
        e.preventDefault()
        list_apprenant.setAttribute("class","d-none")
        divFormAjout.setAttribute("class","d-block")
        alert("boooo")
    })*/

    formApprenant.addEventListener("submit", (e)=>{
        //alert("bonjour")
        e.preventDefault()
        AjoutApprenant()
    })

window.addEventListener("DOMContentLoaded", (event) => {
    /*apprenants.forEach(apprenant => {
        creerUNeCarte(apprenant)
        
    });
   */
  event.preventDefault()
    //alert(variable)
    //alert(kaba)
    func_displaydiv()
    func_load_listeApprenants()
})

//console.log(apprenants)

import {AjoutApprenant,variable,func_displaydiv,divContainerAdd} from './creerCarte.js'
import {func_sauvegarde,func_load_listeApprenants,list_apprenant} from './scriptSupabase.js'





const divFormAjout=document.querySelector("#div_form_ajout")
const addApprenant=document.querySelector("#add_apprenant")
let sauvegarder=document.querySelector("#sauvegarder")
AjoutApprenant()

sauvegarder.addEventListener("click",(e)=>{
    func_sauvegarde  
    //list_apprenant.setAttribute("class","d-block")
    //divContainerAdd.setAttribute("class","d-none") 
})


  /*  addApprenant.addEventListener("click",(e)=>{
        e.preventDefault()
        list_apprenant.setAttribute("class","d-none")
        divFormAjout.setAttribute("class","d-block")
        alert("boooo")
    })*/



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

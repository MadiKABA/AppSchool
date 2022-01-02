import { apprenants, creerUNeCarte } from './creerCarte.js'

const API_URL = "https://qykdgfkmxloirmikimaq.supabase.co/rest/v1/apprenants"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA1NTA4OCwiZXhwIjoxOTU0NjMxMDg4fQ.FgFKuqHkJfrZyXhhmZTeeC_7NpQbCrnulyEKe2KCN-0"


//recuperation des elements du HTML
export let kaba = 74
let sauvegarder = document.querySelector("#sauvegarder")
export let list_apprenant = document.querySelector("#list_apprenant")

const bio = document.querySelector("#bio")
const nom_prenom = document.querySelector("#nom_prenom")
const niveaudetail = document.querySelector("#niveaudetail")
const pourcentageMaquetter = document.querySelector("#pourcentageMaquetter")
const pourcentageinterfaceStatic = document.querySelector("#pourcentageinterfaceStatic")
const pourcentageBaseD = document.querySelector("#pourcentageBaseD")
let pourcentageBackend = document.querySelector("#pourcentageBackend")


export function func_sauvegarde() {
  console.log(apprenants)
  apprenants.forEach(apprenant => {
    //alert("bien sauvegarder")
    fetch(API_URL, {
      method: "POST",
      headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify(apprenant)
    })
   // alert("bien sauvegarder")
  
  })
  //alert("bien sauvegarder")
  //



}
export function func_load_listeApprenants() {

  fetch(API_URL, {
    headers: {
      apiKey: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((apprenant) => {
      apprenant.forEach((app) => creerUNeCarte(app, "col-md-4", "d-none", "d-block", list_apprenant));
    });

}

export function show_detail(id) {
  fetch(`${API_URL}?id=eq.${id}`, {
    headers: {
      apiKey: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((apprenant) => {
      //modalDetail(apprenant)
      modalDetail(apprenant[0])
    });

  //alert("show")
}



function modalDetail(apprenant) {
  nom_prenom.textContent = apprenant.nom + " " + apprenant.prenom
  niveaudetail.textContent = apprenant.niveau
  bio.textContent = apprenant.biographie
  pourcentageMaquetter.style.width = `${apprenant.maquetter}%`
  pourcentageinterfaceStatic.style.width = `${apprenant.interfacedynamique}%`
  pourcentageBaseD.style.width = `${apprenant.basedonnee}%`
  pourcentageBackend.style.width = `${apprenant.devbackend}%`

  pourcentageMaquetter.textContent = `${apprenant.maquetter}%`
  pourcentageinterfaceStatic.textContent = `${apprenant.interfacedynamique}%`
  pourcentageBaseD.textContent = `${apprenant.basedonnee}%`
  pourcentageBackend.textContent = `${apprenant.devbackend}%`
}


export function supprimer_apprenat(id) {

  fetch(`${API_URL}?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      apiKey: API_KEY
    },
    body: null
  })
  window.location.href = "../#"

}

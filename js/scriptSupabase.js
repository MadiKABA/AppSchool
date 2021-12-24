import {apprenants } from './creerCarte.js'

const API_URL="https://qykdgfkmxloirmikimaq.supabase.co/rest/v1/apprenants"
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTA1NTA4OCwiZXhwIjoxOTU0NjMxMDg4fQ.FgFKuqHkJfrZyXhhmZTeeC_7NpQbCrnulyEKe2KCN-0"


//recuperation des elements du HTML

const sauvegarder=document.querySelector("#sauvegarder")

export function func_sauvegarde(){
    sauvegarder.addEventListener("click",(event)=>{
      event.preventDefault()
      console.log(apprenants)
        apprenants.forEach(apprenant=>{
            fetch(API_URL,{
              method:"POST",
              headers:{
                apikey:API_KEY,
                "Content-Type": "application/json",
                Prefer: "return=representation"
              },
              body:JSON.stringify(apprenant)
            })
            .then((response)=>{
              console.log(response);
            })
        })
    })
}
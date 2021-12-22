const formApprenant=document.querySelector("#form-apprenant");
const nom=document.querySelector("#nom")
const prenom=document.querySelector("#prenom")
const biographie=document.querySelector("#biographie")



let span=document.createElement("span")
formApprenant.addEventListener("submit", (e)=>{
    e.preventDefault()
    let inputs=document.querySelectorAll("input,textarea")
    
        if(nom.value.trim()==="")
        {
            validationFOrmulaire(nom,"le nom ", span)
        }else if(prenom.value.trim()==""){
            validationFOrmulaire(prenom,"le prenom ", span)
        }else if(biographie.value.trim()=="")
        {
            validationFOrmulaire(biographie,"la biograohie ", span)
        }
        else 
        (
            e.target.submit()
        )
})
function validationFOrmulaire(input,msgerreur,span)
{
    span.textContent=msgerreur+" est obligatoir"
    span.style.color="red"
    input.insertAdjacentElement("beforebegin",span)
    input.style.border="1px solid red"
}


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

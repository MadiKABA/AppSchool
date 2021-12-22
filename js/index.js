let formApprenant=document.querySelector("#form-apprenant");
let nom=document.querySelector("#nom")
let prenom=document.querySelector("#prenom")
let biographie=document.querySelector("#biographie")

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

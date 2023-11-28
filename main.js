// var inputsArray = Array.from(inputs);
// // ou
// var inputsArray = [...inputs];

const formulario = document.getElementById("contato");
formulario.addEventListener("submit", (evento) => 
{
    evento.preventDefault();

    const divs = document.querySelectorAll(".div-formulario");
    const novasDivs = [...divs];
    for(let i = 0; i < novasDivs.length; i++)
    {
        const inputs = novasDivs[i].getElementsByTagName("input");
        const labels = novasDivs[i].getElementsByTagName("label");
        const novosInputs = [...inputs];
        const novosLabels = [...labels];
        for(let j = 0; j < novosInputs.length; j++)
        {
            if(novosInputs[j].value === "")
            {
                novosInputs[j].classList.add("atencao");
                alert("Por gentileza, preencha o campo " + novosLabels[j].innerText);
            }
        }
        if(novosLabels[0].innerText === "Email")
        {
            const campoEmail = novosInputs[0];
            if(!validarEmail(campoEmail.value))
            {
                campoEmail.classList.add("invalido");
                const span = document.querySelector("#span-email");
                span.classList.remove("d-none");
                span.classList.add("d-inline");
            }
            
        }
        if(novosLabels[0].innerText === "Password")
        {
            const campoPassword = novosInputs[0];
            if(!validarEmail(campoPassword.value))
            {
                campoPassword.classList.add("invalido");
                const span = document.querySelector("#span-senha");
                span.classList.remove("d-none");
                span.classList.add("d-inline");
            }
        }
        if(novosLabels[0].innerText === "Phone Number")
        {
            const campoTelefone = novosInputs[0];
            if(!validarTelefone(campoTelefone.value)) 
            {
                campoTelefone.classList.add("invalido");
                const span = document.querySelector("#span-telefone");
                span.classList.remove("d-none");
                span.classList.add("d-inline");
            }
        }
        
    }
})

function validarEmail(email)
{
    const regexEmail = new RegExp
    (
        /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    ); 

    if(regexEmail.test(email))
    {
        return true;
    }
    return false;

}

function validarSenha()
{
    const regexPassword = new RegExp 
    (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    );
    if(regexPassword.test(senha))
    {
        return true;
    }
    return false;
}
function validarTelefone(telefone)
{
    const regexTelefone = new RegExp 
    (
        /^(?:[1-9]{2}|[0-9]{3})[0-9]{8,9}$/
    );
    if(regexTelefone.test(telefone))
    {
        return true;
    }
    return false;
}
console.clear();
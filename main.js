// var inputsArray = Array.from(inputs);
// // ou
// var inputsArray = [...inputs];

let formulario = document.getElementById("contato");
formulario.addEventListener("submit", (evento) => 
{
    evento.preventDefault();

    let divs = document.querySelectorAll(".div-formulario");
    let novasDivs = [...divs];
    for(let i = 0; i < novasDivs.length; i++)
    {
        let inputs = novasDivs[i].getElementsByTagName("input");
        let labels = novasDivs[i].getElementsByTagName("label");
        let novosInputs = [...inputs];
        let novosLabels = [...labels];
        for(let j = 0; j < novosInputs.length; j++)
        {
            if(novosInputs[j].value === "")
            {
                alert("Por gentileza, preencha o campo " + novosLabels[j].innerText);
            }
        }
        if(novosLabels[0].innerText === "Email")
        {
            let campoEmail = novosInputs[0];
            if(!validarEmail(campoEmail.value)) alert(novosLabels[0].innerText + " está inválido pois não se encaixa na nomenclatura de um email válido");
            
        }
        if(novosLabels[0].innerText === "Password")
        {
            let campoPassword = novosInputs[0];
            if(!validarEmail(campoPassword.value)) alert(novosLabels[0].innerText + " está inválido pois a senha deve ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
        }
        if(novosLabels[0].innerText === "Phone Number")
        {
            let campoTelefone = novosInputs[0];
            if(!validarTelefone(campoTelefone.value)) alert(novosLabels[0].innerText + " está inválido Pois o DDD deve conter entre 2 ou mais dígitos, o número precisa ter entre 8 e 9 caracteres numéricos");
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
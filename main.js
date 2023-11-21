// var inputsArray = Array.from(inputs);
// // ou
// var inputsArray = [...inputs];

let formulario = document.getElementById("form");
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
        if(novosLabels[0].innerText=== "Email")
        {
            let labelEmail= novosLabels[0];
            let campoEmail = novosInputs[0];
            if(!validarEmail(campoEmail.value)) alert(novosLabels[0].innerText + " está inválido");
            // if(!validarEmail(campoEmail.value))
            // {
            //     alert("Digite um email válido");
            // }
        }
        {

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
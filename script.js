function Validar(){
    let email=document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
   
    if(!email || !senha || !nome || !telefone ){
        alert("Campos de preenchimento obrigatório.Favor preencher");
    }else
        alert("Campos preenchido com sucesso!");
    
} 
let Datadanascimento = document.getElementById('Datadenascimento').value;
let CPF = document.getElementById('CPF').value;
let Rua = document.getElementById('Rua').value;
let Cidade= document.getElementById('Cidade').value;
let Endereço = document.getElementById('Endereço').value;
let CEP = document.getElementById('CEP').value;
let Numerodacasa = document.getElementById('Numerodacasa').value;
let Estado = document.getElementById('Estado').value;

if(!Datadanascimento || !CPF || !Rua || !Cidade || !Endereço || !Numerodacasa || !Estado){
    alert("Campos de preenchimento obrigatório.Por favor preencher");
}else{
    alert("Campos preenchido com sucesso!");
}

var randomstring = '';


function geratePassword(){
   randomstring = Math.random().toString(36).slice(-8);

   // pegar o elemento div com pass
   const divPass = document.querySelector(".pass") 

   // remover a div pass da tela
    divPass.remove();

   // pegar o elemento div,
   const divPassword = document.querySelector(".password")

   // criar uma div pro pass
   const newDivPass = document.createElement('div')

   // adicionando uma class pass
   newDivPass.className = "pass"

   //  passar a senha para o elemento div
   newDivPass.append(`${randomstring}`)

   // adicionando a div pass para dentro da div password
   divPassword.append(newDivPass)
}
*eventos podem ser adicionados direto no html do documento, junto das tags.
            <h1 on(evento)="funçaoFazAlgumaCoisa()" >popozao</h1>



---eventos de teclado---
*sao eventos disparados pelo teclado.
como: onkeydown = function();
      onkeyup = function();
      onkeypress = function();



---adicionando eventos via js---
* adiciona um evento
            var.addEventListener('evento', funcao());
//ele vai atribuir uma funcao a um evento e pode iniciar varias funcoes de uma vez.


*outra maneira de adicionar
            h1.onclick = print
//ele executa a funcao porem somente a ultima funcao com esse evento.


---argumento Event---
*é um poderosissimo objeto que passamos como argumento de uma funcao.
            input.onKeyDown = function(event){
                  console.log(event)
            }
// atraves desse argumento podemos acessar varias propriedades dos eventos disparados.









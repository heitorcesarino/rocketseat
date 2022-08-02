---.createElement---
*ele cria um elemento html que vai receber alguam coisa.
            document.createElement('elemento');
// ele cria o elemento porem ainda nao faz parte do documento, esse elemento criado esta em memoria, ou seja precisamos adicionalo atraves do append ou prepend.



---.append---
*ele adiciona o elemento a um pai, no caso sera o ultimo filho desse pai.
            body.append('elemento');



---.prepend---
*ele adiciona o elemento a um pai, no caso sera o primeiro filho desse pai.
            body.prepend('elemento');



---.insertBefore---
* ele insere um novo elemento filho em um pai, uma posiçao antes do elemento irmao selecionado.
            body.insertBefore('elemento novo', 'elemento irmao);
// ele possui dois parametros, o do novo elemento a ser inserido no documento, e o outro parametro é o irmao.


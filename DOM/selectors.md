--- getElementById()---

* a tag html precisa de um (id=""), onde com js vamos atraves dessa marcação pegar essa tag.

* como funciona ?
            document.getElementById('name id');
// ele retorna o filho completo, a tag html completa.



---getElementsByClassName()---

* a tag html precisa de um (class=""), onde com js vamos atraves dessa marcação pegar essa tag.

* como funciona ?
            document.getElementsByClassName('name class');
// ele retorna uma lista viva do htmlCollection com todos os elementos encontrados que recebem o nome da classe.



---getElementsByTagName()---

* utiliza a propria tag para seleciona-la, onde atraves da propria nos a manipulamos.

*como funciona?
            document.getElementsByTagName('name tag');
// ele retorna uma lista viva do htmlCollection com todas as tags que recebem o nome da tag desejada.



---querySelector()---

* ele utiliza dos seletores css para pegar o elemento htlm. como '.class', '[atributo]'...
            document.querySelector('css selector');
// ele retorna o primeiro elemento html pedido.



---querySelectorAll()---

* ele utiliza dos seletores css para pegar os elementos html como '.class', '[atributo]'...
            document.querySelectorAll('css selector');
// ele retorna uma nodeList(lista de nos) com os elementos.



HTMLcollecttion = A interface HTMLCollection representa uma coleção genérica (objeto array) de elementos (na ordem em que aparecem no documento) e oferece métodos e propriedades para selecioná-los da lista.


NodeList = Objetos NodeList são coleções de nodos semelhantes aos objetos retornados pelos métodos Node.childNodes e document.querySelectorAll() Em alguns casos, NodeList é uma coleção viva, ou seja, toda alteração feita no DOM reflete nos elementos da coleção. Por exemplo, Node.childNodes é uma coleção viva. NodeList é um coleção estática, significando que toda alteração subsequente ao DOM não afeta o conteúdo da coleção. document.querySelectorAll() é um exemplo de método que retorna uma NodeList estática. possui o metodo forEach.


---qual seletor usar ???---

//--- getElementById()--- retorna (element)
//---getElementsByClassName()--- retorna (htmlcollection)
//---getElementsByTagName()--- retorna (htmlcollection)
//---querySelector()--- retorna (element)
//---querySelectorAll()--- retorna (nodelist)








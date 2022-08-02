# a cascata (cascading)

a escolha do browser de qual regra aplciar, caso haja muitas regras par ao mesmo elemento

* seu estilo e lido de cima para baixo.
é levado em consideraçao 3 fatores
 1. origem de estilo
 2. especificidade
 3. importancia

 ### origem de estilo

 inline > tag style > tag link

 ### especificidade

 é um calculo matematico, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

 0. universal selector, combinators e nagation pseudo-class (:not())
 1. element type selector e pseudo-elements (::before, ::after)
10. classes e attribute selectors ([type="radio"])
100. id selector
1000. inline

#### a regra !important

* cuidado, evite o uso
* nao é considerado boa pratica
* quebra o fluxo natural da cascata
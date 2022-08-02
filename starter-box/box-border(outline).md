# # border ( e outline)
as bordas da caixa

- value `<border-style>`| `<border-width>`| `<border-color>`
   - style solid | dotted | dashed | double | groove | ridge | inset | outset |
   - width: `<length>`
   - color: `<color>`


```css
div {
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;

    # # # e outline
    - difere em 4 sentidos:
    - nao modifica o tamanho da caixa, pois nao é parte do box model
    - podera ser diferente de retangular
    - nao permite ajuste individuais
    - mais usado pelo user agent para acessibilidade
    ...



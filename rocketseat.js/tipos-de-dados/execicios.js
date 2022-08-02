/* let student = {
  name: 'heitor',
  age: 21,
  weight: 120.8,
  isSubscribe: true,
}

console.log(student); */

/* function nota(notaNumerica) {
  if (notaNumerica < 60) {
    notaAlphabetica = "F";
  } else if (notaNumerica > 60 && notaNumerica < 70) {
    notaAlphabetica = "D";
  } else if (notaNumerica > 70 && notaNumerica < 80) {
    notaAlphabetica = "C";
  } else if (notaNumerica > 80 && notaNumerica < 90) {
    notaAlphabetica = "B";
  } else if (notaNumerica > 90 && notaNumerica <= 100) {
    notaAlphabetica = "A";
  }
  return notaAlphabetica;
}

const alunoNota1 = `maria = ${nota(75)}`;
const alunoNota2 = `joao = ${nota(54)}`;
const alunoNota3 = `emilia = ${nota(66)}`;
const alunoNota4 = `ovolino = ${nota(99)}`;
const alunoNota5 = `madruguinha = ${nota(82)}`;

let listaDeAlunos = [alunoNota1, alunoNota2, alunoNota3, alunoNota4, alunoNota5];
console.log(listaDeAlunos); */


/* let conta = {
  receitas: [22, 35, 78, 200],
  despesas: [100, 100, 3000],
}

function soma(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function saldoDaConta() {
  const receitasCalculadas = soma(conta.receitas);
  const despesasCalculadas = soma(conta.despesas);

  const saldo = receitasCalculadas - despesasCalculadas;

  const saldoPositivo = saldo >= 0;

  let balanço = "negativo";

  if (saldoPositivo) {
    balanço = "positivo";
  }
  console.log(`seu saldo é ${balanço}: R$${saldo.toFixed(2)}`);
}

saldoDaConta(); */

/* function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  // fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('coloca um grau decente animal');
  }

  //fluxo ideal F -> C
  let updatedDegree = number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5 / 9;
  let degreeSign = 'C';

  // fluxo alternativo C -> F
  if (celsiusExists) {
    updatedDegree = number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9 / 5 + 32;
    degreeSign = 'F';
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree('10C'));
  console.log(transformDegree('50F'));
  transformDegree('50Z')
} catch (Error) {
  console.log(Error.message);
}
 */


const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente mílionaria",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Bailônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter ",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubistituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length

for (let category of booksByCategory) {
  console.log("Total de livros da categoria:", category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log("total de autores:", authors.length);
}

countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`livros do autor ${author}: ${books.join(", ")}`);
}


booksOfAuthor('Augusto Cury');
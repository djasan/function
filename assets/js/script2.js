const btnArray = document.querySelectorAll('button');

const affiche = (btn) => {
    console.log(btn.innerText);
}

//dans les boucles while il est impossible de se baser sur l'index(n) de ces boucles pour manipuler les éléments du tableau
//je dois IMPERATIVEMENT créer un autre index affilié à mon tableau(i).
let n = 0;
while (n < btnArray.length) {
//dans les boucles while il est impossible de se baser sur l'index(n)
// de ces boucles pour manipuler les éléments du tableau.
//je dois IMPERATIVEMENT créer un autre index affilié à mon tableau(i).
    let i = n
    console.dir(n)
    console.dir(btnArray)
    console.dir(btnArray[i]);
    btnArray[i].addEventListener('click', () => {

        affiche(btnArray[i])
    })
    console.log('bbblala')
    n++
}

//créer une boucle while basée sur mon tableau btnArray
//qui  pour chaque entrée de mon tableau effectuera un clg('bbblala')
// en ESC 6 se introdujo Var Let y Const
function fruits() {
  if (true) {
    var fruit1 = 'Apple'; //Tiene acceso a function scope
    let fruit2 = 'Kiwi'; //Solamente tienen de alcance Block scope
    const fruit3 = 'Banana'; //Solamente tienen de alcance Block scope
  }

  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits()
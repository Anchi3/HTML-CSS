


  document.getElementByClass ('textbox').disabled = true;
  document.getElementById ('restart').disabled = true;
  document.getElementById ('update').disabled = true;

  function swapNorthWest() {

    let a = document.getElementById("cell2").innerHTML;
    let b = document.getElementById("cell4").innerHTML;
    let temp = a;
    a = b;
    b = temp;

    document.getElementById("cell2").innerHTML = a;
    document.getElementById("cell4").innerHTML = b;


  }
  function swapWestEast() {

    let b = document.getElementById("cell4").innerHTML;
    let c = document.getElementById("cell6").innerHTML;
    let temp = b;
    b = c;
    c = temp;

    document.getElementById("cell4").innerHTML = b;
    document.getElementById("cell6").innerHTML = c;

  }

  function swapEastSouth() {

    let c = document.getElementById("cell6").innerHTML;
    let d = document.getElementById("cell8").innerHTML;
    let temp = c;
    c = d;
    d = temp;

    document.getElementById("cell6").innerHTML = c;
    document.getElementById("cell8").innerHTML = d;
  }



  let wonGame = function() {

  }

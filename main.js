
//------------------------------------------------------------
//------------------------EasyCalc----------------------------
//------------------------------------------------------------

function somma(){
  let empty = '';
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

    let result = Number(n1) + Number(n2)
    if(n1 == empty & n2 == empty){
      Swal.fire({
        title: 'Oops...',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else if(result == 0){
      Swal.fire({
        title: "0",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }else{
      Swal.fire({
        title: result,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
}


function sottrazione(){
  let empty = '';
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

  let result = n1 - n2
  if(n1 == empty & n2 == empty){
    Swal.fire({
      title: 'Oops...',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }else if(result == 0){
    Swal.fire({
      title: "0",
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }else{
    Swal.fire({
      title: result,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

}

function moltiplicazione(){
  let empty = '';
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

    let result = Number(n1) * Number(n2)
    if(n1 == empty & n2 == empty){
      Swal.fire({
        title: 'Oops...',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else if(result == 0){
      Swal.fire({
        title: "0",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }else{
      Swal.fire({
        title: result,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
}

function divisione(){
  let empty = '';
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

    let result = Number(n1) / Number(n2)
    if(n1 == empty & n2 == empty){
      Swal.fire({
        title: 'Oops...',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else if(result == 0){
      Swal.fire({
        title: "0",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }else{
      Swal.fire({
        title: result,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
}

//------------------------------------------------------------
//------------------CONTATORE DI VIEWS------------------------
//------------------------------------------------------------
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

//------------------------------------------------------------
//--------------------SOUND BUTTONS---------------------------
//------------------------------------------------------------

function bruh(){
  document.getElementById('bruh').play();
}

function mac(){
  document.getElementById('mac').play();
}

//------------------------------------------------------------
//--------------------LOGIN BUTTON----------------------------
//------------------------------------------------------------
function login(){
  Swal.fire({
    title: 'Login',
    html: 
    `<div class="logindiv">
    <input type="text" id="login" class="loginput" placeholder="Username..." value="">
     <input type="password" id="password" class="loginput" placeholder="Password...">
     <\div>`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
  })
}

//------------------------------------------------------------
//--------------------ORARIO BUTTON---------------------------
//------------------------------------------------------------
function orario(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let ora = 'Sono le ' + h + ':' + m;

  if(m<=9){
    ora = 'Sono le ' + h + ':0' + m;
  }

  Swal.fire({
    title: ora,
    icon: 'success',
    confirmButtonText: 'Ok'
  }) 
  //window.alert('Sono le ore:' + h + ':' + m)
}

//------------------------------------------------------------
//----------------------GEOLOCATION---------------------------
//------------------------------------------------------------

let button = document.getElementById("tobac");

button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    
    Swal.fire({
      title: 'Posizione',
      html: `
      <div class="position">
      <p>Latitudine: <span id="latitude">0.00</span>° </p>
      </div>
      <div class="position">
      <p>Longitudine: <span id="longitude">0.00</span>° </p>
      </div>
      `,
      confirmButtonText: 'Ok',
      focusConfirm: false,
    })

    let latText = document.getElementById("latitude");
    let longText = document.getElementById("longitude");
    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});

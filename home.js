//------------------------------------------------------------
//------------------------ANIMAZIONI--------------------------
//------------------------------------------------------------
if (window.matchMedia("(max-width: 767px)").matches) {
  console.log('schermo piccolo')
}else{
  gsap.from(".animation", { 
    opacity:-2, 
    duration: 1,
});

gsap.from(".projects-list", {
    x: 713,
    duration: 0.7
});  

gsap.from(".", { 
    opacity:-2, 
    duration: 1,
});
}

//------------------------------------------------------------
//-----------------------SWEETALERT---------------------------
//------------------------------------------------------------
function contact(){
    Swal.fire({
      title: 'Dove contattarmi',
      icon: 'info',
      html:`
      <div class="main-alert">
        <div class="alert-contact">
          <button class="alert-mail">GitHub</button>
          <button class="alert-mail">Twitter</button>
        </div>
        <div class="alert-contact">
          <button class="alert-mail">Instagram</button>
          <button class="alert-mail">E-mail</button>
        </div>
      </div>
      `,
      confirmButtonText: 'Ok'
  })
}  


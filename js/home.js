//------------------------------------------------------------
//------------------------ANIMAZIONI--------------------------
//------------------------------------------------------------
if (window.matchMedia("(max-width: 767px)").matches) {
  console.log('schermo grande')
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
          <button class="alert-mail"><p>GitHub</p></button>
          <button class="alert-mail"><p>Twitter</p></button>
        </div>
        <div class="alert-contact">
          <button class="alert-mail"><p>Instagram</p></button>
          <button class="alert-mail"><p>E-mail</p></button>
        </div>
      </div>
      `,
      confirmButtonText: 'Ok'
  })
}  



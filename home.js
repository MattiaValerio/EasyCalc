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

function contact(){
    Swal.fire({
      title: 'Dove contattarmi',
      icon: 'info',
      html:`
      <div class="alert-contact">
      <button class="alert-mail">GitHub</button>
      <button class="alert-mail">Twitter</button>
      </div>
      <div class="alert-contact">
      <button class="alert-mail">Instagram</button>
      <button class="alert-mail">E-mail</button>
      </div>
      `,
      confirmButtonText: 'Ok'
  })
}  


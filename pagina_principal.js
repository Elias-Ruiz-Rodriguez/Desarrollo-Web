var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween :30,
    grabCursos:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints : {
      991: {
        slidesPerView: 3
      }
    }

  });

  function inicio() {
    document.getElementById('contenidoPrincipal').innerHTML = `
        <div class="header-txt">
            <h1>Servicio de Celulares</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo facilis, iusto nemo aut veritatis debitis autem nesciunt nam vitae incidunt doloremque cupiditate sunt, distinctio iure minima. Amet, vel hic.
            </p>
        </div>`;
}

function servicios() {
    document.getElementById('contenidoPrincipal').innerHTML = `
        <div class="header-txt">
            <p>
                Servicios.
            </p>
        </div>`;
}

function productos() {
    document.getElementById('contenidoPrincipal').innerHTML = `
        <div class="header-txt">
            <p>
                Productos.
            </p>
        </div>`;
}

function reservaciones() {
    document.getElementById('contenidoPrincipal').innerHTML = `
        <div class="header-txt">
            <p>
                Reservaciones.
            </p>
        </div>`;
}

function contactos() {
    document.getElementById('contenidoPrincipal').innerHTML = `
        <div class="header-txt">
            <p>
                Contactos.
            </p>
        </div>`;
}
$(document).ready(function () {
    $(".owl-carrossel").owlCarousel({
        navigation: false,
        nav: true,
        navText: ["<img class='img-responsive' src='assets/images/esquerda.svg' aria-hidden='true'>", "<img class='img-responsive' src='assets/images/direita.svg' aria-hidden='true'>"],
        autoplay: true,
        autoWidth: true,
        // slideBy: 3,
        dots: false,
        margin: 45,
        // center: true,
        // stagePadding: 10,
        loop: true,
        responsiveClass:true,
        responsive: 
        {
            0: {
                items : 1,
                nav:true
            },
            768: {
                items : 3
            },
            1200: {
                items : 3,
            }

        }
    });
});
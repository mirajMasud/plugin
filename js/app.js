$(document).ready(function(){
    // hero Slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots: false,
        smartSpeed:1000,
        
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    });
    $('#project-slider').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        margin:30,
        smartSpeed:1000,
        responsive:{
            0:{
              items:1,  
            },
            768:{
                items:2,
            },
            1140:{
                items:3,
                center:true,
            },
        },
    });
    $('#review').owlCarousel({
        loop:true,
        
        nav: false,
        dots: true,
        margin:30,
        smartSpeed:1000,
        responsive:{
            0:{
              items:1,  
            },
            768:{
                items:2,
            },
            1140:{
                items:3,
                center:true,
            },
        },
    });
    $('#brand-slider').owlCarousel({
        loop:true,
        
        nav: false,
        dots: false,
        smartSpeed:1000,
        responsive:{
            0:{
              items:2,  
            },
            768:{
                items:3,
            },
            1140:{
                items:5,
                center:true,
            },
        },
    });

})
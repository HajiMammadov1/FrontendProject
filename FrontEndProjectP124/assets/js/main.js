$(document).ready(function () {
    $('.loader').fadeOut();



    // function header() {
    //     if ($(document).scrollTop() > 0) {
    //         $('header').addClass('white')
    //     } else {
    //         $('header').removeClass('white');
    //     }
    // }
    // header();

    
    // $(document).on('scroll', () => {
    //     header();
    // })

    // $('.faq-header').on("click", function () {
    //     //$('.faq-content').removeClass("active")
    //     if ($(".active")[0] != $(this).next[0]) {
    //         $(".active").slideUp(function () {
    //             $(this).removeClass("active")
    //         });
    //         $(this).next().slideDown(function () {
    //             $(this).addClass("active")
    //         })
    //     }

    // }

    // let acc = document.querySelector(".faq-header");
    // let content = document.querySelector(".faq-content");

    // acc.addEventListener("click", function() {
    //     content.classList.add("active")

    // })

    $('.faq-header').each(function (index, item) {
        //$('.faq-content')[0].addClass("active")
        $('.faq-header').eq(index).click(() => {
            $('.faq-content').removeClass("active")
            $('.faq-content').not(':eq(' + index + ')').removeClass('show');
            $('.faq-content').eq(index).toggleClass('show')
            $('.faq-header').eq(index).toggleClass('collapsed')

        })
    });



        // $('.faq-header').on("click", function() {
        //     e.preventDefault()
        //     if($(".active")[0] != $(this).next[0]) {
        //         $(".active").slideUp(function() {
        //             $(this).removeClass("active")
        //         });
        //         $(this).next().slideDown(function() {
        //             $(this).addClass("active")
        //         })
        //     }
        // }
        //     $('.faq-content').adClass("show")
        // })

        // $("#accordionGroup").accordion({
        //     "animate":true,
        //     "collapsible":true
        // })
    })

let myNav = document.querySelector("#Nav");
window.addEventListener("scroll", function (e) {

    if (window.scrollY > 50) {
        myNav.style.backgroundColor = "white";
        myNav.style.height = "80px";
        //myNav.style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)"
        myNav.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        
    }

    if (window.scrollY < 50) {
        myNav.style.backgroundColor = "transparent";
        myNav.style.boxShadow = "none";
    }

})

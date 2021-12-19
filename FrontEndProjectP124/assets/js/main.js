$(document).ready(function () {

    //Loader fade out
    $('.loader').fadeOut();


    //Accordion
    $('.faq-header').each(function (index, item) {
        //$('.faq-content')[0].addClass("active")
        $('.faq-header').eq(index).click(() => {
            $('.faq-content').removeClass("active")
            $('.faq-content').not(':eq(' + index + ')').removeClass('show');
            $('.faq-content').eq(index).toggleClass('show')
            $('.faq-header').eq(index).toggleClass('collapsed')

        })
    });



    let myNav = document.querySelector("#Nav");
    window.addEventListener("scroll", function (e) {

        if (window.scrollY > 50) {
            myNav.style.backgroundColor = "white";
            myNav.style.height = "80px";
            myNav.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        }

        if (window.scrollY < 50) {
            myNav.style.backgroundColor = "transparent";
            myNav.style.boxShadow = "none";
        }

    })

})


$(document).ready(function() {
    $('.loader').fadeOut();


    // $('.faq-header').each(function (index, item) {
    //     $('.faq-header').eq(index).click(() => {
    //         $('.faq-content').not(':eq(' + index + ')').removeClass('show');
    //         $('.faq-content').eq(index).toggleClass('show')
    //         $('.faq-header').eq(index).toggleClass('collapsed')

    //     })
    // });
})

let myNav = document.querySelector("#Nav");
window.addEventListener("scroll", function(e) {

    if(window.scrollY>50) {
        myNav.style.backgroundColor = "white";
        myNav.style.height = "80px";
        myNav.style.boxShadow = "0 10px 20px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)"
    }

    if(window.scrollY < 50) {
        myNav.style.backgroundColor = "transparent";
        myNav.style.boxShadow = "none";
    }

})
    
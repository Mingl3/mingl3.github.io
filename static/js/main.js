$(document).ready(function () {
    ga();
    hideMobile();
    scrollToBottom();
    faq();
});
// Navbar
function hideMobile() {
    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        swapCols();
        return;
    }
    $("#mobile-nav").hide();
}
// Navbar End
// Index
function swapCols() {
    $("#col-1").removeClass("order-1").addClass("order-2");
    $("#col-2").removeClass("order-2").addClass("order-1");
}

function scrollToBottom(){
    $("button").click(function() {
        $(document).scrollTop($(document).height());
    });
}
// Index End
// FAQ
function faq() {
    var faqs = document.getElementsByClassName("faq");

    for (var i = 0; i < faqs.length; i++) {
        faqs[i].addEventListener("click", function () {
            this.classList.toggle("active-faq");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}
// FAQ End
// GA
const ga = () =>{
    var imported = document.createElement('script');
    imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-198186321-1';
    document.head.appendChild(imported);


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-198186321-1');
};
// GA End





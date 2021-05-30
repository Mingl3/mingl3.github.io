$(document).ready(function () {
    hideMobile();
    faq();


    $("button").click(function() {
        $(document).scrollTop($(document).height());
    });
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

// Index End


// Contact


// Contact End

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





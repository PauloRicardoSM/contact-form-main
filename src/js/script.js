// Jquery for to change the display of div "massageSent" for block and others changes 
$(document).ready(function () {
    $("#submitButton").click(function (event) {
        event.preventDefault();

        $('#myForm')[0].reset();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        $(".massageSent").css({
            "display": "block",
            "position": "absolute",
            "margin": "0 1rem",
            "top": "1rem"
        });

        gsap.fromTo(".massageSent", {scale: 0}, {scale: 1, duration: .5});
    })
})
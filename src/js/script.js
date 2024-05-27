// Jquery and GSAP for to change the display of div "massageSent" for block and others changes
$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();

    let hasErros = false;
    $(".input").each(function () {
      if (!$(this).val()) {
        $(this).next(".card-form-error").css("display", "block");
        hasErros = true;
      } else {
        $(this).next(".card-form-error".css("display", "none"));
      }
    });

    if (!hasErros) {
      $("#myForm")[0].reset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      $(".massageSent").css({
        display: "block",
        position: "absolute",
        margin: "0 1rem",
        top: "1rem",
      });

      gsap.fromTo(".massageSent", { scale: 0 }, { scale: 1, duration: 0.5 });
    }
  });
});
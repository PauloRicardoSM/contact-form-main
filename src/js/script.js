// Jquery and GSAP for to change the display of div "massageSent" for block and others changes
$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasErros = false;

    $(".input").each(function () {
      if (!$(this).val()) {
        $(this).nextAll(".card-form-error").css("display", "block");

        hasErros = true;
      } else {
        $(this).nextAll(".card-form-error").css("display", "none");
        
        if ($(this).attr('type') === 'email' && !emailRegex.test($(this).val())) {
          $('#emailInvalidError').css('display', 'block');
          hasErros = true;
        } else if ($(this).attr('type')  === 'email') {
          $('#emailInvalidError').css('display', 'none');
        }  
      }
    });

    if (!$("input[name='queryType']:checked").length) {
      $("#queryTypeError").css("display", "block");
      hasErros = true;
    } else {
      $("#queryTypeError").css("display", "none");
    }    

    if (!$("#iconsent").prop("checked")) {
      $("#consentError").css("display", "block");
      hasErros = true;
    } else {
      $("#consentError").css("display", "none");
    }

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
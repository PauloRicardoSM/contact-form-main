/* Jquery and GSAP for to change the display of div "massageSent" for block and others 
changes */
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

/* 
This snippet changes the background color of the paragraph associated with the input
[type:radio], but I couldn’t make it revert to white when the radio button is unchecked.
If you have any suggestions on how to fix this detail, please get in touch via an issue.

$(document).ready(function() {
  $('input[name="queryType').on('change', function() {
    if (!$(this).is(':checked')) {
      $(this).parent().css({
        'background-color': 'hsl(148, 38%, 91%)',
      });
    } else {
      $(this).parent().css({
        'background-color': 'white',
      });
    }
  });
});
*/
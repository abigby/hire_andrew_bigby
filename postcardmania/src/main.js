$(document).ready(function() {

  //Form Validation Methods
  (function($,W,D) {
      var JQUERY4U = {};

      JQUERY4U.UTIL = {
          setupFormValidation: function() {
              //form validation rules
              $("#register-form").validate({
                  rules: {
                      name: "required",
                      phone: "required",
                      email: {
                          required: true,
                          email: true
                      },
                      agree: "required"
                  },
                  messages: {
                      name: "Please enter your name",
                      email: "Please enter a valid email address",
                      phone: "Please enter a valid phone number",
                      agree: "Please accept our policy"
                  },
                  submitHandler: function(form) {
                      form.submit();
                  }
              });
          }
      }

      //when the dom has loaded setup form validation rules
      $(D).ready(function($) {
          JQUERY4U.UTIL.setupFormValidation();
      });

  })(jQuery, window, document);

  //Cleanup --- Clears form on page load & Submit
  $("#register-form").on('submit load', function(){
    $(this).reset();
  })

});

<?php
  include 'sendMail.php';
?>

<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Professional Painters</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" sizes="16x16" href="brush_icon.png">
        <!-- Place favicon.ico in the root directory -->
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <header class="main-header">
          <div class="container">
            <div class="row">
                <div class="col-xs-12">
                  <div class="col-xs-12 col-md-12 col-lg-8">
                    <div class="main-logo">
                      <img src="img/pro_logo.png" alt="">
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-12 col-lg-4">
                      <span class="call-num">
                        Call <a href="tel:5551234567">555-123-4567</a>
                      </span>
                  </div>
                </div>
            </div>
          </div>
        </header>

        <section class="promo-section">
            <div class="center-box">
                <div id="box-title" class="col-xs-12">
                  <h1>Professional <span>Painters</span></h1>
                  <h2>of largo, clearwater, tampa</h2>
                  <hr>
                  <p>We Care About More Than Paint! </p>
                </div>
                <div id="box-promo-details">

                  <h4>
                    Schedule Your free Estimate to redeem promo code for
                  </h4>
                  <span class="price_big">
                    $150 OFF
                  </span>
                  <span class="close-statement">Any Job Of $3000 or More!</span>
                  <div id="box-promo-band" class="col-xs-12">
                  </div>
                </div>

                <div id="box-form-wrapper" class="col-xs-12">
                  <form id="register-form" class="form-horizontal" novalidate="novalidate" method="post" action="<?=$_SERVER['PHP_SELF'];?>">
                    <div class="form-group">
                      <label class="control-label col-xs-12 col-md-2" for="email">Name</label>
                      <div class="col-xs-12 col-md-10">
                        <input type="text" class="form-control" id="text" name="name" placeholder="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-xs-12 col-md-2" for="email">Email</label>
                      <div class="col-xs-12 col-md-10">
                        <input type="email" class="form-control" id="email" name="email" placeholder="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-xs-12 col-md-2" for="phone">Phone</label>
                      <div class="col-xs-12 col-md-10">
                        <input type="text" class="form-control" id="phone" name="phone" placeholder="">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-12">
                        <button type="submit" name="submitBtn" class="btn btn-default">Save $150</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="box-footer" class="col-xs-12">
                  <ul>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i> Quality Work
                    </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i> Professional Painters
                    </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i> Flexible Schedules
                    </li>
                  </ul>
                  <div class="reasons-background"></div>
                </div>
            </div>
          </section>

          <section class="content-details">
            <div class="container">
              <div class="row">
                  <div class="col-xs-12">
                    <h1>Professional Painters</h1>
                    <h3>Tackling Residential &amp; Commercial Painting Projects</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida massa pharetra, tempor ligula ut, aliquet nulla. Quisque eu quam turpis. Sed porttitor mauris nec quam dignissim, et placerat odio scelerisque. In hac habitasse platea dictumst. Proin et accumsan nunc, sit amet bibendum purus. Proin at euismod ante. Phasellus ipsum orci, feugiat tristique mollis vitae, sagittis sollicitudin libero. In tempus ex non ipsum pretium, ac consequat justo fringilla.
                    </p>
                  </div>
                  <div class="col-xs-12">
                    <h3>Why Clients Choose to Hire Our Team</h3>
                    <ul class="hire-reasons">
                      <li>Mauris sit amet urna et leo pulvinar tristique.</li>
                      <li>Nam eu eros mollis, interdum sapien tincidunt, accumsan erat.</li>
                      <li>Maecenas rutrum libero ac diam volutpat, eu vehicula risus molestie.</li>
                      <li>Mauris at tellus in lacus efficitur fringilla.</li>
                      <li>Nullam lacinia nulla eget quam ornare blandit.</li>
                      <li>Sed mollis magna eu mi aliquet scelerisque.</li>
                    </ul>
                  </div>
                  <div class="col-xs-12">
                    <p>
                      Donec aliquam sit amet nisi sed consequat. Etiam non gravida nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean feugiat lacinia velit non lacinia. Proin eget tristique leo.
                    </p>
                  </div>
              </div>
          </section>


        <footer>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center col-md-offset-1">
                <div class="col-xs-12 col-md-6"><span>Schedule Your Free Estimate!</span></div>
                <div class="col-xs-12 col-md-6"><a class="estimate-num" href="tel:5551234567">555-123-4567</a></div>
              </div>
            </div>
          </div>
        </footer>

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"></script>
        <script type="text/javascript" src="js/jquery.validate.min.js"></script>
        <script src="src/main.js"></script>

    </body>
</html>
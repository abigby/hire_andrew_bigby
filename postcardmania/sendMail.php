<?php
if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submitBtn'])) {
  //Initialize Variables --------------------------------------------

  $to = $_POST['email'];
  $from = "abigbygunner@gmail.com";
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  //Values/Format for Professional Painters Customer's Confirmation Email --------------------------------------------
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859-1';
  $headers[] = "From: " . $from;
  $subject = "Professional Painters - Estimate Confirmation";
  $message = '
  <table cellpadding="0" cellspacing="0" border="0" width="660" style="margin: 0 auto;">
    <thead width="100%">
      <tr>
        <th width="320" style="float:left">
          <img width="320" height="59" style="float:left;" src="http://abigby.com/postcardmania/img/pro_logo.png"/>
        </th>
        <th width="340" bgcolor="#004b8d" height="59" style="float:right; border-top-right-radius: 50px;">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#004b8d">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#fff">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left">
          Hello ' . $name .',
        </th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th width="100%" align="left" height="30" bgcolor="#fff">
      </th>
    </tr>
      <tr>
        <td align="left" style="vertical-align:top; padding:0px 0px 0px 0px; font-family:Calibri,Trebuchet,Arial,sans serif; font-size:19px; line-height:24px; color:#333">
          Thank you for submitting a request for a Free Estimate. We will contact you shortly to schedule an appointment that works best for you. Please let us know if you have any questions. We look forward to speaking with you soon.
        </td>
      </tr>
    </tbody>
    <tfoot>
    <tr>
      <th width="100%" align="left" height="30" bgcolor="#fff">
      </th>
    </tr>
      <tr>
        <td style="font-weight: bold">
          Kind Best,<br/>
          John Smith<br/>
          Professional Painters
        </td>
      <tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#fff">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#cc0033" style="border-bottom-right-radius: 50px;">
        </th>
      </tr>
    </tfoot>
  </table>';



  //Sends Confirmation Email to Customer --------------------------------------------
  mail( $to, $subject, $message, implode("\r\n", $headers));

  //Values/Format for Professional Painters Email --------------------------------------------
  $headers2[] = 'MIME-Version: 1.0';
  $headers2[] = 'Content-type: text/html; charset=iso-8859-1';
  $headers2[] = "From: " . $from;
  $subject2 = "Professional Painters - Free Estimate Submission";
  $message2 = '
  <table cellpadding="0" cellspacing="0" border="0" width="660" style="margin: 0 auto;">
    <thead width="100%">
      <tr>
        <th width="320" style="float:left">
          <img width="320" height="59" style="float:left;" src="http://abigby.com/postcardmania/img/pro_logo.png"/>
        </th>
        <th width="340" bgcolor="#004b8d" height="59" style="float:right; border-top-right-radius: 50px;">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#004b8d">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#fff">
        </th>
      </tr>
      <tr>
        <th width="100%" align="left">
          Hello John,
        </th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th width="100%" align="left" height="30" bgcolor="#fff">
      </th>
    </tr>
      <tr>
        <td align="left" style="vertical-align:top; padding:0px 0px 0px 0px; font-family:Calibri,Trebuchet,Arial,sans serif; font-size:19px; line-height:24px; color:#333">
          There is a new submission for Free Estimate  by <strong>'. $name .'</strong>, <strong style="color: #333 !important"> Phone: '. $phone .'</strong> Contact to schedule an appointment.
        </td>
      </tr>
    </tbody>
    <tfoot>
    <tr>
      <th width="100%" align="left" height="30" bgcolor="#fff">
      </th>
    </tr>
      <tr>
        <th width="100%" align="left" height="30" bgcolor="#cc0033" style="border-bottom-right-radius: 50px;">
        </th>
      </tr>
    </tfoot>
  </table>';

  //Sends confirmation Email to Customer --------------------------------------------
  mail($from, $subject2, $message2, implode("\r\n", $headers2));

  //Redirects to thank you page after form submission --------------------------------------------
  header('Location: thank_you.php');

  //Stop's all processes after form submission --------------------------------------------
  die();

}

?>

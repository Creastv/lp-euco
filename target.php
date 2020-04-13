<?php

//sumbission data
$ipaddress = $_SERVER['REMOTE_ADDR'];
$date = date('d/m/Y');
//form data
$name = $_POST['fName']; 
$surname = $_POST['fSurname']; 
$email = $_POST['fEmail']; 
$phone = $_POST['fPhone']; 
$zgodaDan = $_POST['zgodaDane'];

    /*ini_set("SMTP","mail.domain.com"); //mail.yoursite.com should be your local smtp
    ini_set("smtp_port","25"); //25 should be your smtp port
    ini_set("sendmail_from","example@email.com"); //info@yoursite.com should be your site email*/
    $headers .= 'Content-type: text/html; charset="utf-8' . "\r\n";
    $emailbody = "
                  <html>
                  <body>
                  <head>
                  </head>
                  <table align='center' style=' background:#fff; width: 600px;'>
                    <thead>
                      <tr>
                        <td colspan='2' style='border-bottom:1px solid;'>
                         <span style='text-align:center; font-size:21px;'><b>Dane kontaktowe:</b></span>
                       </td>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Imię:</td>
                      <td style='border-bottom:1px solid ;'> {$name}</td>      
                    </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Nazwisko:</td>
                      <td style='border-bottom:1px solid ;'> {$surname}</td>      
                    </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >E-mail:</td>
                      <td style='border-bottom:1px solid ;'>{$email}</td>     
                    </tr>
                    <tr>
                      <td style='border-bottom:1px solid ;' >Nr kontaktowy:</td>
                      <td style='border-bottom:1px solid ;'>{$phone}</td>     
                    </tr>
                  
                    <tr>
                      <td style='border-bottom:1px solid ;' >Zgoda:</td>
                      <td style='border-bottom:1px solid ;'>{$zgodaDan}</td>     
                    </tr>
                  </tbody>

                  </table>
                   </body>
                  </html>
                  ";

// Send
mail("biuro@kapitalizacja-renty.pl","Formularz z dnia:{$date}",$emailbody,$headers);
// Send
?>

<script type="text/javascript">
window.location = "thx.html";
</script>      
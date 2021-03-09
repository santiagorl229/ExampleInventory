export class InformationModel {
  validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }

  validatePhone(phone){
    var re = /^\d+$/;
    return re.test(phone);
  };

  dateFormat(date){
    return ( "0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear() + " " + date.toLocaleTimeString();
  }

  ResponseLanding (email, phone, name, message){
    var template = {
      en: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml"><head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Newsletter</title>
  <style type="text/css">
  html { width: 100% !important; height: 100% !important; }
  body, #bodytable { width: 100% !important; height: 100% !important; margin: 0; padding: 0; }
  body, table, td, p, a, li, blockquote { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
  table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; }
  img, a img { border: 0; outline: none; text-decoration: none; }
  .ReadMsgBody { width: 100%; }
  .ExternalClass { width: 100%; }
  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
  @media only screen and (max-width: 550px) {
  .container { width: 100% !important; }
  .cell { width: 100% !important; display: block !important; padding: 0px !important; }
  .table { width: 100% !important; display: block !important; padding: 0px !important; }
  .header-l { font-size: 18px !important; }
  .header-s { font-size: 16px !important; }
  }
  </style>
  </head>
  <body bgcolor="#FFFFFF" style="background-color: #FFFFFF">
  <style type="text/css">
  @media only screen and (max-width: 550px) {
  .container { width: 100% !important; }
  .cell { width: 100% !important; display: block !important; padding: 0px !important; }
  .table { width: 100% !important; display: block !important; padding: 0px !important; }
  .header-l { font-size: 18px !important; }
  .header-s { font-size: 16px !important; }
  }
  </style>
  <!-- BACKGROUND TABLE START -->
  <table border="0" cellpadding="0" cellspacing="0" height="100%" id="bodytable" style="width: 100%; height: 100%; margin: 0px; padding: 0px; min-width: 320px;" width="100%">
    <tbody><tr>
      <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF; vertical-align: top" valign="top">
  
        <!-- PREHEADER START -->
        <div><br></div>
        <table border="0" cellpadding="0" cellspacing="0" class="container" style="width: 550px" width="550">
          <tbody><tr>
            <td>
              <div style="font-family: Verdana, Geneva, sans-serif; font-size: 14px; color: #212121; font-style: normal; font-weight: normal; text-align: center"></div>
              <div><br></div>
            </td>
          </tr>
        </tbody></table>
        <div><br></div>
        <!-- PREHEADER END -->
  
        <!-- BORDER TABLE START -->
        <table border="0" cellpadding="0" cellspacing="0" class="container" style="-webkit-box-shadow: 4px 3px 10px -1px rgba(0,0,0,0.21);
  -moz-box-shadow: 4px 3px 10px -1px rgba(0,0,0,0.21); box-shadow: 4px 3px 10px -1px rgba(0,0,0,0.21); border-radius: 12px; -webkit-border-radius: 12px; -moz-border-radius: 12px; width: 550px" width="550">
          <tbody><tr>
            <td>
  
              <!-- HEADER START -->
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;" width="100%; ">
                <tbody>
                <tr>
                  <td bgcolor="#FFFFFF" height="0" style="background-color: #FFFFFF; height: 0px"></td>
                </tr>
              </tbody></table>
              <!-- HEADER END -->
  
              <!-- TWO-COLUMN BLOCK START -->
              <table border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%">
                <tbody><tr>
                  <td bgcolor="#FFFFFF" style="background-color: #FFFFFF">
                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                      <tbody>
                        <tr>
                        <td class="cell" style="width: 40%; vertical-align: top" width="40%" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                            <tbody>
                              <tr>
                              <td style="padding: 0">
                                <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                                  <tbody><tr>
                                    <td style="background-color: #4EA545; vertical-align: middle; padding: 0px; text-align: center; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px">
                                      <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;" width="100%" >
                                        <tbody>
                                        <tr>
                                          <td style="padding: 10px 0px 10px 0px; vertical-align: middle;" height="300px" ><div><img alt="SMS" src="https://app.zlivio.com/img/messaging/E-Mail.png" style="display: block; height: auto; width: 100%" width="95"></div></td>
                                        </tr>
                                        <tr>
                                          <td style="padding: 10px 0px 0px 0px;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="text-align: center; margin-left: auto; margin-right: auto">
                                              <tbody>
                                            </tbody></table>
                                          </td>
                                        </tr>
                                      </tbody>
                                  </table>
                                    </td>
                                  </tr>
                                </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                        <td class="cell" style="width: 60%; vertical-align: top" width="60%" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                            <tbody>
                              <tr>
                              <td style="padding: 0px">
                                <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;" width="100%">
                                  <tbody>
                                   <tr>
                                    <td style="background-color: #FFFFFF; padding: 5px; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px">
                                      <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                                        <tbody><tr>
                                          <td style="padding: 10px 0px 10px 0px"><div><center><img alt="Logo" src="https://app.zlivio.com/img/messaging/Logo-Zlivio.png" style="display: block; height: 74; width: 130" width="130"></div></center></td>
                                        </tr>
                                        <tr>
                                          <td style="padding: 0px 0px 15px 10px"><div class="header-s" style="font-family: Verdana, Geneva, sans-serif; font-size: 20px; color: #212121; font-style: normal; text-align: center"><div>Hemos recibido <br> tu solicitud</div></</td>
                                        </tr>
                                        <tr>
                                        <td style="text-align:center">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="background-color: #FFFFFF;text-align: center; margin-left: auto; margin-right: auto; width: 92%">
                                              <tbody>
                                              <tr>
                                                <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: bold; text-align: left">Name:</div>
                                                </td>
                                                <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${name}</div>
                                                </td>
                                              </tr>
                                              <tr>
                                               <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight:bold; text-align: left">Cell Phone:</div>
                                               </td>
                                               <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${phone}</div>
                                                </td>
                                              </tr>
                                              <tr>
                                               <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-style: bold; font-weight: bold; text-align: left">E-mail:</div>
                                               </td>
                                               <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${email}</div>
                                                </td>                                                                                 	
                                              </tr>
                                              <tr>
                                               <td align="center" bgcolor="#FFFFFF" style="width: 40%; vertical-align: top; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-style: bold; font-weight: bold; text-align: left">Mensaje</div>
                                               </td>
                                               <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; vertical-align: top; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                 <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${message}</div>
                                                </td>   
                                              </tr>
                                              <tr>
                                                <td height="25px"></td>
                                              </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                        </tr>
                                        <tr>
                                          <td style="padding: 0px 0px 0px 0px">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="background-color: #FFFFFF;text-align: center; margin-left: auto; margin-right: auto">
                                              <tbody>
                                              <tr>
                                                <td align="center" bgcolor="#ece9e9" style="background-color: #ece9e9; font-weight: bold; padding: 8px 12px;"><div style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; color: #000000; font-style: normal; text-align: center">Pronto nos pondremos en contacto contigo.</div>
                                                </td>
                                              </tr>
                                            </tbody>
                                        </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>                        
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
              <!-- TWO-COLUMN BLOCK END -->
  
            </td>
          </tr>
        </tbody></table>
        <!-- BORDER TABLE END -->
  
        <!-- POSTFOOTER START -->
        <div><br></div>
        <table border="0" cellpadding="0" cellspacing="0" class="container" style="width: 550px" width="550">
          <tbody><tr>
            <td>
              <div style="font-family: Verdana, Geneva, sans-serif; font-size: 14px; color: #212121; font-weight: normal; font-style: normal; text-align: center">Copyright © 2019 Zlivio.  All rights reserved.</div>
              <div><br></div>
            </td>
          </tr>
        </tbody></table>
        <div><br></div>
        <!-- POSTFOOTER END -->
  
      </td>
    </tr>
  </tbody></table>
  <!-- BACKGROUND TABLE END -->
  
  </body>
  </html>
      `,
    };
    return template.en;
  };

  ContactUs(email, name, phone, date, message) {
    var template = {
      email: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml"><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Newsletter</title>
      <style type="text/css">
      html { width: 100% !important; height: 100% !important; }
      body, #bodytable { width: 100% !important; height: 100% !important; margin: 0; padding: 0; }
      body, table, td, p, a, li, blockquote { -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
      table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
      img, a img { border: 0; outline: none; text-decoration: none; }
      .ReadMsgBody { width: 100%; }
      .ExternalClass { width: 100%; }
      .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
      @media only screen and (max-width: 550px) {
      .container { width: 100% !important; }
      .cell { width: 100% !important; display: block !important; padding: 0px !important; }
      .table { width: 100% !important; display: block !important; padding: 0px !important; }
      .header-l { font-size: 18px !important; }
      .header-s { font-size: 16px !important; }
      }
      </style>
      </head>
      <body bgcolor="#FFFFFF" style="background-color: #FFFFFF">
      <style type="text/css">
      @media only screen and (max-width: 550px) {
      .container { width: 100% !important; }
      .cell { width: 100% !important; display: block !important; padding: 0px !important; }
      .table { width: 100% !important; display: block !important; padding: 0px !important; }
      .header-l { font-size: 18px !important; }
      .header-s { font-size: 16px !important; }
      }
      </style>
      <!-- BACKGROUND TABLE START -->
      <table border="0" cellpadding="0" cellspacing="0" height="100%" id="bodytable" style="width: 100%; height: 100%; margin: 0px; padding: 0px; min-width: 320px;" width="100%">
        <tbody><tr>
          <td align="center" bgcolor="#FFFFFF" style="background-color: #FFFFFF; vertical-align: top" valign="top">
      
            <!-- PREHEADER START -->
            <div><br></div>
            <table border="0" cellpadding="0" cellspacing="0" class="container" style="width: 550px" width="550">
              <tbody><tr>
                <td>
                  <div style="font-family: Verdana, Geneva, sans-serif; font-size: 14px; color: #212121; font-style: normal; font-weight: normal; text-align: center"></div>
                  <div><br></div>
                </td>
              </tr>
            </tbody></table>
            <div><br></div>
            <!-- PREHEADER END -->
      
            <!-- BORDER TABLE START -->
            <table border="0" cellpadding="0" cellspacing="0" class="container" style="-webkit-box-shadow: 4px 3px 10px -1px rgba(0,0,0,0.21);
      -moz-box-shadow: 4px 3px 10px -1px rgba(0,0,0,0.21); box-shadow: 4px 3px 10px -1px rgba(0,0,0,0.21); border-radius: 12px; -webkit-border-radius: 12px; -moz-border-radius: 12px; width: 550px" width="550">
              <tbody><tr>
                <td>
      
                  <!-- HEADER START -->
                  <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;" width="100%; ">
                    <tbody>
                    <tr>
                      <td bgcolor="#FFFFFF" height="0" style="background-color: #FFFFFF; height: 0px"></td>
                    </tr>
                  </tbody></table>
                  <!-- HEADER END -->
      
                  <!-- TWO-COLUMN BLOCK START -->
                  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%" width="100%">
                    <tbody><tr>
                      <td bgcolor="#FFFFFF" style="background-color: #FFFFFF">
                        <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                          <tbody>
                            <tr>
                            <td class="cell" style="width: 40%; vertical-align: top" width="40%" valign="top">
                              <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                                <tbody>
                                  <tr>
                                  <td style="padding: 0">
                                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                                      <tbody><tr>
                                        <td style="background-color: #4EA545; vertical-align: middle; padding: 0px; text-align: center; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px">
                                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;" width="100%" >
                                            <tbody>
                                            <tr>
                                              <td style="padding: 10px 0px 10px 0px; vertical-align: middle;" height="300px" ><div><img alt="SMS" src="https://app.zlivio.com/img/messaging/E-Mail.png" style="display: block; height: auto; width: 100%" width="95"></div></td>
                                            </tr>
                                            <tr>
                                              <td style="padding: 10px 0px 0px 0px;">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="text-align: center; margin-left: auto; margin-right: auto">
                                                  <tbody>
                                                </tbody></table>
                                              </td>
                                            </tr>
                                          </tbody>
                                      </table>
                                        </td>
                                      </tr>
                                    </tbody></table>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                            <td class="cell" style="width: 60%; vertical-align: top" width="60%" valign="top">
                              <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                                <tbody>
                                  <tr>
                                  <td style="padding: 0px">
                                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important;" width="100%">
                                      <tbody>
                                       <tr>
                                        <td style="background-color: #FFFFFF; padding: 5px; border-radius: 10px; -webkit-border-radius: 10px; -moz-border-radius: 10px">
                                          <table border="0" cellpadding="0" cellspacing="0" style="width: 100% !important" width="100%">
                                            <tbody><tr>
                                              <td style="padding: 10px 0px 10px 0px"><div><center><img alt="Logo" src="https://app.zlivio.com/img/messaging/Logo-Zlivio.png" style="display: block; height: 74; width: 130" width="130"></div></center></td>
                                            </tr>
                                            <tr>
                                              <td style="padding: 0px 0px 15px 10px"><div class="header-s" style="font-family: Verdana, Geneva, sans-serif; font-size: 20px; color: #212121; font-style: normal; text-align: center"><div>Hemos recibido <br> un nuevo contacto</div></</td>
                                            </tr>
                                            <tr>
                                            <td style="text-align:center">
                                              <table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="background-color: #FFFFFF;text-align: center; margin-left: auto; margin-right: auto; width: 92%">
                                                  <tbody>
                                                  <tr>
                                                    <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: bold; text-align: left">Name:</div>
                                                    </td>
                                                    <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${name}</div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                   <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-style: bold; font-weight: bold; text-align: left">E-mail:</div>
                                                   </td>
                                                   <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${email}</div>
                                                    </td>                                                                                 	
                                                  </tr>
                                                  <tr>
                                                   <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-style: bold; font-weight: bold; text-align: left">Phone:</div>
                                                   </td>
                                                   <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${phone}</div>
                                                    </td>                                                                                 	
                                                  </tr>
      
                                                  <tr>
                                                   <td align="center" bgcolor="#FFFFFF" style="width: 40%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-style: bold; font-weight: bold; text-align: left">Fecha:</div>
                                                   </td>
                                                   <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                     <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${date}</div>
                                                    </td>                                                                                 	
                                                  </tr>
                                                  <tr>
                                                    <td align="center" bgcolor="#FFFFFF" style="width: 40%; vertical-align: top; background-color: #ffffff; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                      <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-style: bold; font-weight: bold; text-align: left">Mensaje</div>
                                                    </td>
                                                    <td align="center" bgcolor="#FFFFFF" style="width: 60%; background-color: #ffffff; vertical-align: top; padding: 3px; border-radius: 10px; -webkit-border-radius: 13px; -moz-border-radius: 10px">
                                                      <div style="font-family: Verdana, Geneva, sans-serif; font-size: 13px; color: #000000; font-weight: normal; text-align: left">${message}</div>
                                                      </td>   
                                                  </tr>
                                                  <tr>
                                                    <td height="25px"></td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                            </td>
                                            </tr>
                                            <tr>
                                              <td style="padding: 0px 0px 0px 0px">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="background-color: #FFFFFF;text-align: center; margin-left: auto; margin-right: auto">
                                                  <tbody>
                                                  <tr>
                                                    <td align="center" bgcolor="#ece9e9" style="background-color: #ece9e9; font-weight: bold; padding: 8px 12px;"><div style="font-family: Verdana, Geneva, sans-serif; font-size: 12px; color: #000000; font-style: normal; text-align: center">Ponte en contacto pronto con ${name}</div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>                        
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
                  <!-- TWO-COLUMN BLOCK END -->
      
                </td>
              </tr>
            </tbody></table>
            <!-- BORDER TABLE END -->
      
            <!-- POSTFOOTER START -->
            <div><br></div>
            <table border="0" cellpadding="0" cellspacing="0" class="container" style="width: 550px" width="550">
              <tbody><tr>
                <td>
                  <div style="font-family: Verdana, Geneva, sans-serif; font-size: 14px; color: #212121; font-weight: normal; font-style: normal; text-align: center">Copyright © 2019 Zlivio.  All rights reserved.</div>
                  <div><br></div>
                </td>
              </tr>
            </tbody></table>
            <div><br></div>
            <!-- POSTFOOTER END -->
      
          </td>
        </tr>
      </tbody></table>
      <!-- BACKGROUND TABLE END -->
      
      </body>
      </html>`,
    };
    return template.email;
  };
}

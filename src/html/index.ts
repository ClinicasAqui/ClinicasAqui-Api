import "dotenv/config";

export function htmlBody(
  token: String,
  message: string,
  reset: boolean = false
) {
  let link = process.env.BASE_URL;

  if (reset === true) {
    link = process.env.BASE_RESET;
  }

  const email = `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  
       <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Confirm Account ClínicasAqui!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </head>
  
       <body style="margin: 0; padding: 0; ">
  
            <!-- HEADER -->
            <table bgcolor="#7CE6FF" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                 <tr>
                      <td align="center" height="200">
                           <img src="../assets/logo.png" alt="Clinicas Aqui" style="display: block; width: 40%;" />
                      </td>
                 </tr>
                 <!-- MAIN BODY -->
                 <tr>
                      <td bgcolor=" #7CE6FF" style="padding: 2em;">
                           <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                     <td align="center" style=" font-weight: 600; color: #03045e; font-family: Arial, sans-serif; font-size: 1.5em; padding-top: 2em;">
                                         Clique no botão para ativar sua conta!
                                     </td>
                                </tr>
                                <tr>
                                     <td align="center" style="padding: 3em 0 1em;">
                                          <button style="background-color: #729CF9; border-radius: 10px; border: 0; padding: 1em 2em;  font-family: Arial, sans-serif; font-size: 1.5rem;">
                                               <!-- precisa redirecionar para pagina com a rota + token -->
                                               <a style="text-decoration: none; font-weight: 600; color: #03045e;" href="https://htttinder.herokuapp.com/email/:tokenEmail" target="_blank">Confirmar conta</a>
                                          </button>
                                     </td>
                                </tr>
                                <tr>
                                     <td align="center">
                                          <img src="../assets/hospital.png" alt="" width="50%" style="display: block;" />
                                     </td>
                                </tr>
                                <!-- RODAPE -->
                                <tr>
  
                                     <td align="bottom" bgcolor="#7CE6FF" style="padding: 2em 2em 0;" >
                                     
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                               <tr>
                                                    <td style="color: #03045e; font-family: Arial, sans-serif; font-size: 1rem;">
                                                         &reg; Clínicas Aqui, feito para você 2022<br />
                                                         Não foi voce que se cadastrou no nosso portal? <br /><a href="malito:clinicasaqui@outlook.com" style="color: #03045e;">Nos mande um email!</a> 
                                                    </td>
                                               </tr>
  
  
                                          </table>
                                     </td>
                                </tr>
                           </table>
       </body>
  
  </html>`;

  return email;
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GET Confirm</title>
  </head>

  <style>

    tbody {
        background-color: #e4f0f5;
    }

    table {
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-family: sans-serif;
        font-size: .8rem;
    }

    td
    {
        border: 1px solid rgb(190, 190, 190);
        padding: 5px 10px;
    }

    #qr {
        width: 200px;
        height: 200px;
        margin: 20px 20px;
    }

    </style>

  <body>
    <table>
      <tr>
          <td><strong>Encuentro:</strong> <% Response.Write(Request.Form("games")) %></td>
          <td><strong>Ubicacion:</strong> <% Response.Write(Request.Form("location")) %> </td>
          <td><strong>Cantidad:</strong>  <% Response.Write(Request.Form("tickets")) %> </td>
          <td><strong>Precio:</strong> $ <% Response.Write(Request.Form("price")) %> </td>
      </tr>

      <tr>
          <td><strong>Apellido:</strong> <% Response.Write(Request.Form("lastName")) %></td>
          <td><strong>Nombre:</strong> <% Response.Write(Request.Form("firstName")) %> </td>
          <td><strong>E-mail:</strong> <% Response.Write(Request.Form("email")) %> </td>
          <td><strong>Tarjeta:</strong> <% Response.Write(Request.Form("card")) %> </td>
      </tr>
  </table>
    <img src="./assets/img/qr.png" alt="qr" id="qr" />
  </body>
</html>



module.exports = templateData => {
  // destructure page data by section
  // const { employee, ...detail } = templateData;
  const employee = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
    </header>
    <main class="container my-5">
      ${employee}
    </main>
  </body>
  </html>
  `;
};
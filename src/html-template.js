const getDetail = employee => {
  details = {};
  switch (employee.getRole()) {
    case 'Manager':
      return `Office number: ${employee.getOfficeNumber()}`
    case 'Engineer':
      return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
    case 'Intern':
      return `School: ${employee.getSchool()}`
  }
}

const employeeCards = employees => {
  let detail;
  return `
    <main class="container my-5 d-flex flex-wrap justify-content-center">
      ${employees
      .map((employee) => {
        return `
          <div class="card shadow mb-5 rounded bg-light-grey m-3">
            <div class="card-header bg-primary text-white">
              <h5>${employee.getName()}</h5>
              <i class="fa-solid fa-mug-hot"></i><span class="m-2 role">${employee.getRol()}</span>
            </div>
            <ul class="list-group list-group-flush p-4">
              <li class="list-group-item">ID: ${employee.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
              <li class="list-group-item">${getDetail(employee)}</li>
            </ul>
          </div>
        `})
      .join('')}
    </main>
  `;
}

module.exports = templateData => {

  // destructure page data by section
  // const { employee, ...detail } = templateData;
  const employees = templateData;
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header class="container bg-danger pt-4 pb-4">
      <div class="row text-white text-center" >
        <h2>My Team</h2>
      </div>
    </header>
      ${employeeCards(employees)}
    </main>
  </body>
  </html>
  `;
};
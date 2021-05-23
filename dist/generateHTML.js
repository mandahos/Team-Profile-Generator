
//manager card
const generateManager = function (manager) {

  return `
  <div class="card">
    <div class="card-content">
      <div class="content">
      <p class="card-header-title">📋 Manager</p>
      <h3>${manager.name}</h3>
      <p class="id">ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="office">Office Number: ${manager.officeNumber}</p>    
      </div>
    </div>
  </div>
      `
}

//enginer card
const generateEngineer = function (engineer) {

  return `
  <div class="card">
    <div class="card-content">
      <div class="content">
      <p class="card-header-title">🕹️ Engineer</p>
      <h3>${engineer.name}</h3> 
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>    
    </div>
  </div>
</div>
  `
}

//intern card
const generateIntern = function (intern) {

  return `  
  <div class="card">
    <div class="card-content">
      <div class="content">
      <p class="card-header-title">📚 Intern</p>
      <h3>${intern.name}</h3>
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="school">School: ${intern.school}</p>    
      </div>
    </div>
  </div>
  `
}

//push to page
generateHTML = (data) => {

  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();


    // call manager function
    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }

  }

  const employeeCards = pageArray.join('')
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;

}

const generateTeamPage = function (employeeCards) {
  return ` 
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profiles</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
  </head>
  <body>
      <section class="hero is-link">
          <div class="hero-body">
            <p class="title" style="text-align: center;">
              My Team
            </p>
          </div>
        </section>
        
      ${employeeCards}

  </body>
  </html>
  `
    ;
}


module.exports = generateHTML;

//team card
const buildTeam = function (team) {
  
    for (let i  = 0; i  <team[i].length; i ++) {
        return ` <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
          <p class="title">team</p>  
          <h3>${team[i].name}</h3>
          <p class="id">ID: ${team[i].id}</p>
          <p class="email">Email:<a href:"mailto:${team.email}" ${team[i].email}</p> 
          
            </article>
        </div>
        `
        
    }
    generateLastQ();
};

//creating the team cards
const generateLastQ = function (team) {
   
  if (team.role === 'Manager') {
    return  `<p class="officeNum">Office Number: ${team.officeNumber}</p>`
  } else if (team.role === 'Intern') {
    return `<p class="school">School: ${team.school}</p>`
  } else {
    return `<p class="github">Github: ${team.github}</p>`
  }

}


//employee card
  function generateHtml() {
    return ` <!DOCTYPE html>
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
      ${buildTeam}   
          
          
    </body>
    </html>
    `
}


module.exports = generateHtml
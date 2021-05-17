
//manager card
const generateManager = function (manager) {
    for (let i  = 0; i  < manager.length; i ++) {
        return ` <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
          <p class="title">Manager</p>  
          <h3>${manager[i].name}</h3>
          <p class="id">ID: ${manager[i].id}</p>
          <p class="email">Email: ${manager[i].email}</p> 
          <p class="officeNum">Office Number: ${manager[i].officeNumber}</p>   
            </article>
        </div>
        `
        
    }
   
};

//engineer card
const generateEngineer = function (engineer) {
    for (let i  = 0; i  < engineer.length; i ++) {
        return ` <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
          <p class="title">Engineer</p>  
          <h3>${engineer[i].name}</h3>
          <p class="id">ID: ${engineer[i].id}</p>
          <p class="email">Email: ${engineer[i].email}</p> 
          <p class="github">Github: ${engineer[i].github}</p>   
            </article>
        </div>
        `
}
}

//intern card
const generateIntern = function (intern) {
    for (let i  = 0; i  < intern.length; i ++) {
        return ` <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
          <p class="title">Intern</p>  
          <h3>${intern[i].name}</h3>
          <p class="id">ID: ${intern[i].id}</p>
          <p class="email">Email: ${intern[i].email}</p> 
          <p class="school">School: ${intern[i].school}</p>   
            </article>
        </div>
        `
}
}


//employee card
const generateHtml = function (data) {
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
      ${generateManager (data)}
      ${generateEngineer (data)}  
      ${generateIntern (data)}    
          
          
    </body>
    </html>
    `
}


module.exports = {generateHtml}
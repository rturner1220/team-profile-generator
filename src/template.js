// Export to generate HTML page
// create team profile

module.exports = team => {
  return`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>


  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 page-title">
                <h1 class="text-center">Team Profile</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="main-section col-12 d-flex justify-content-center">
                ${generatePage(team)}
            </div>
        </div>
    </div>
  </body>
  </html>  
    `;
};

// create team profile
const generatePage = team => {

    // create manager profile
    const managerProfile = manager => {
        return`
        <div class="card employee-card manager-card">
        <div class="card-header text-center">
            <h2 class="card-title">${manager.getName()}</h2>
            <h4 class="card-title">Title:${manager.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
            </ul>
        </div>
    </div>
        `; 
    };

// create engineer profile
const engineerProfile = engineer => {
    return`
    <div class="card employee-card manager-card">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h4 class="card-title">Title:${engineer.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
    `; 
};

// create manager profile
const interProfile = inter => {
    return`
    <div class="card employee-card manager-card">
    <div class="card-header text-center">
        <h2 class="card-title">${inter.getName()}</h2>
        <h4 class="card-title">Title:${inter.getRole()}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group text-dark">
            <li class="list-group-item">ID: ${inter.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${inter.getEmail()}">${inter.getEmail()}</a></li>
            <li class="list-group-item">School: ${inter.getSchool()}</li>
        </ul>
    </div>
</div>
    `; 
};

const html = [];

html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerProfile(manager))
 );

html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerProfile(engineer))
    .join('')
 );
 
html.push(team
    .filter(employee => employee.getRole() === 'Inter')
    .map(inter => interProfile(inter))
    .join('')
 );

 return html.join('');

}

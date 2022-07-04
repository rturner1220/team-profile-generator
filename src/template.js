// Export to generate HTML page

// create team profile
const teamProfile = team => {

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
                <li class="list-group-item">ID:${manager.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}'>${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: <a href="tel:${manager.getofficeNumber()}">${manager.getofficeNumber()}</a></li>
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
            <li class="list-group-item">ID:${engineer.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
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
            <li class="list-group-item">ID:${inter.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${inter.getEmail()}'>${inter.getEmail()}</a></li>
            <li class="list-group-item">School:${intern.getSchool()}</li>
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
 );

 
html.push(team
    .filter(employee => employee.getRole() === 'Inter')
    .map(inter => interProfile(inter))
 );

 return html.join("");

}
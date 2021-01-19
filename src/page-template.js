const employee = ("./lib/employeeClass");
const manager = ("./lib/managerClass");
const engineer = ("./lib/engineerClass");
const intern = ("./lib/internClass");

generateTemplate = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
    </head>
  
    <body>
      <header>My Team</header>
      <div class="container">
        <div class="row">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">${employee.getName()}</h5>
              <h5 class="card-title">${employee.getRole()}</h5>
            <div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-item-group">${employee.getId()}</li>
                <li class="list-item-group">${employee.getEmail()}</li>
                ${employee.getRole() ===  "Manager"} ?  
                "<li class='list-group-item'>"Office Number: " + ${manager.getOfficeNumber()}</li> :
                  ${employee.getRole() === "Engineer"} ?  
                  "<li class='list-group-item'>"Github: " + ${engineer.getGithub()}</li> :
                  "<li class='list-group-item'>"School: " + ${intern.getSchool()}</li>
                 }
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </body>
  </html>
`}


module.exports = generateTemplate;
const htmlTemp = (data) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" rel="stylesheet"  integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet" type="text/css">
    <title>Employee Directory</title>
    
</head>
<body>
  <header>
    <h1>${data}'s Team Directory</h1>
  </header>
  <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
`
}
const managerCard = (data) =>{
 return `
  <div class="card">
    <div class="card-head">
      <h5 class="card-title">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2"><i class="fas fa-user-tie"></i>${data.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${data.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}" target="_blank"> ${data.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${data.getofficeNumber()}</li>
      </ul>
    </div>
  </div>
`
};

const engineerCard = (data) =>{
return `
  <div class="card">
    <div class="card-head">
      <h5 class="card-title">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2"><i class="fas fa-laptop-code"></i></i>${data.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${data.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${data.getEmail()}" target="_blank"> ${data.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${data.getGitHub()}" target="_blank">${data.getGitHub()}</a></li>
      </ul>
    </div>
  </div>
`
};
const internCard = (data) =>{
  return `
  <div class="card">
    <div class="card-head">
      <h5 class="card-title">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2"><i class="fas fa-graduation-cap"></i></i>${data.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${data.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}" target="_blank"> ${data.getEmail()}</a></li>
        <li class="list-group-item">School: ${data.getSchool()}</li>
      </ul>
    </div>
  </div>
`
};

const endHtml = () => {
  return `
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</body>`
}

module.exports ={
  htmlTemp,
  managerCard,
  engineerCard,
  internCard,
  endHtml
}

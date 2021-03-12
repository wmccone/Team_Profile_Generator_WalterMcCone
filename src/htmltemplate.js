const htmlTemp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a67b6155f8.js" crossorigin="anonymous"></script>
    <title>Employee Directory</title>
    
</head>
<body>`

const managerCard = (data) =>{
  htmlTemp +=`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${data.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-user-tie"></i>${data.getRole()}</h6>
  <ul class="list-group">
  <li class="list-group-item">ID: ${data.getID()}</li>
  <li class="list-group-item">Email: ${data.getEmail()}</li>
  <li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>
</ul>
</div>
</div>`
};

const engineerCard = (data) =>{
  htmlTemp += `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${data.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-user-tie"></i>${data.getRole()}</h6>
  <ul class="list-group">
  <li class="list-group-item">ID: ${data.getID()}</li>
  <li class="list-group-item">Email: ${data.getEmail()}</li>
  <li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>
</ul>
</div>
</div>`
};
const internCard = (data) =>{
  htmlTemp += `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${data.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-user-tie"></i>${data.getRole()}</h6>
  <ul class="list-group">
  <li class="list-group-item">ID: ${data.getID()}</li>
  <li class="list-group-item">Email: ${data.getEmail()}</li>
  <li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>
</ul>
</div>
</div>`
};

module.exports ={
  htmlTemp,
  managerCard,
  engineerCard,
  internCard
}

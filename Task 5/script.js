fetch('./persons.json')
.then(function(response) {
  return response.json();
})
.then (function(data) {
  for (var i = 0; i < data.length; i++) {
    document.querySelector('.data').innerHTML 
    +='Name : ' + data[i].name + "<br>" 
    +'Age : '+ data[i].age+"<br>"
    +'Place : '+data[i].place+"<br>" 
    +'Date of Birth : '+ data[i].dob + "<br> <br>";
}
})
.cacth(function(error) {
  alert(error);
})
// let ptAge = document.querySelector('#age').value;
// let pulse = document.querySelector('#hr').value;
// let systolic = document.querySelector('#bp-s').value;
// let diastolic = document.querySelector('#bp-d').value;
// let temp = document.querySelector('#temp').value;
// let resp = document.querySelector('#resp').value;
// const report = document.querySelector('#btn').value;
// const myForm = document.querySelector('#myForm');


// add event listener
document.getElementById('btn').addEventListener('click', function(e){
 

  // define pt name
  let ptName = document.getElementById('name').value;
  document.getElementById('name-result').textContent = ptName;
  
  // define pt age
  let ptAge = document.getElementById('age').value;
  document.getElementById('age-result').textContent = ptAge;

  // define pulse
  let pulse = document.getElementById('hr').value;
  document.getElementById('hr-result').textContent = pulse + ' bpm';

  // define blood pressure
  let systolic = document.getElementById('bp-s').value;
  let diastolic = document.getElementById('bp-d').value;
  document.getElementById('bp-result').textContent = `${systolic}/${diastolic} mmHg`;

  // define temperature
  let temp = document.getElementById('temp').value;
  document.getElementById('temp-result').textContent = `${temp}\u00B0 F`;

  // define respiratory rate
  let resp = document.getElementById('resp').value;
  document.getElementById('resp-result').textContent = resp;

 
  console.log(nameResult);
  // e.preventDefault();
})

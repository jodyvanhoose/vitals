// add event listener to run report
document.getElementById('btn').addEventListener('click', function(e){

  e.preventDefault();


  // show loader
  document.querySelector('img').style.display = 'block';

  // run report and hide loader
  setTimeout(report, 2000);
 
  // reports if vitals are in normal range
  reportRange();

  // clears form out after close of report
  clearReport();

})

// function to refresh page after clicking close button on report
function clearReport(){
  document.getElementById('close').addEventListener('click', () =>{
    document.location.reload();
  })
}



// form report
function report(){

  document.querySelector('img').style.display = 'none';

  // define pt name
  document.getElementById('name-result').textContent = localStorage.getItem('name');

  // define pt age
  document.getElementById('age-result').textContent = JSON.parse(localStorage.getItem('age'));

  // define pulse
  document.getElementById('hr-result').textContent = JSON.parse(localStorage.getItem('heart rate')) + ' bpm';

  // define blood pressure
  document.getElementById('bp-result').textContent = JSON.parse(localStorage.getItem('systolic')) + '/' + JSON.parse(localStorage.getItem('diastolic')) + ' mmHg';

  // define temperature
  document.getElementById('temp-result').textContent = JSON.parse(localStorage.getItem('temperature')) + '\u00B0 F';

  // define respiratory rate
  document.getElementById('resp-result').textContent = JSON.parse(localStorage.getItem('respirations')) + ' breaths/minute';

}


// determines if vital is in normal range
function reportRange(){
  let vitalAge = JSON.parse(localStorage.getItem('age'));
  let vitalPulse = JSON.parse(localStorage.getItem('heart rate'));
  let vitalSystolic = JSON.parse(localStorage.getItem('systolic'));
  let vitalDiastolic = JSON.parse(localStorage.getItem('diastolic'));
  let vitalTemp = JSON.parse(localStorage.getItem('temperature'));
  let vitalResp = JSON.parse(localStorage.getItem('respirations'));


  // vitals for age 1 year and less
  if (vitalAge <= 1){
    if(vitalPulse <= 79 || vitalPulse >= 161){
      document.getElementById('hr-result').classList.add('bg-danger');
      document.getElementById('hr-result').style.color = 'white';  
      
      
    }else{
      document.getElementById('hr-result').classList.add('bg-success');
      document.getElementById('hr-result').style.color = 'white';
    }

    if(vitalSystolic <= 86 || vitalSystolic >= 106 || vitalDiastolic <= 52 || vitalDiastolic >= 67){
      document.getElementById('bp-result').classList.add('bg-danger');
      document.getElementById('bp-result').style.color = 'white';
    }else{
      document.getElementById('bp-result').classList.add('bg-success');
      document.getElementById('bp-result').style.color = 'white';
    }
    
    if(vitalTemp <= 95.7 || vitalTemp >= 99.4){
      document.getElementById('temp-result').classList.add('bg-danger');
      document.getElementById('temp-result').style.color = 'white';
    }else{
      document.getElementById('temp-result').classList.add('bg-success');
      document.getElementById('temp-result').style.color = 'white';
    }
    if(vitalResp <= 29 || vitalResp >= 61){
      document.getElementById('resp-result').classList.add('bg-danger');
      document.getElementById('resp-result').style.color = 'white';
    }else{
      document.getElementById('resp-result').classList.add('bg-success');
      document.getElementById('resp-result').style.color = 'white';
    }

  }

  // vitals for age 2-5 years old
  if (vitalAge >= 2 && vitalAge <= 5){
    if(vitalPulse <= 79 || vitalPulse >= 131){
      document.getElementById('hr-result').classList.add('bg-danger');
      document.getElementById('hr-result').style.color = 'white';  
      
      
    }else{
      document.getElementById('hr-result').classList.add('bg-success');
      document.getElementById('hr-result').style.color = 'white';
    }

    if(vitalSystolic <= 84 || vitalSystolic >= 114 || vitalDiastolic <= 45 || vitalDiastolic >= 81){
      document.getElementById('bp-result').classList.add('bg-danger');
      document.getElementById('bp-result').style.color = 'white';
    }else{
      document.getElementById('bp-result').classList.add('bg-success');
      document.getElementById('bp-result').style.color = 'white';
    }
    
    if(vitalTemp <= 97.5 || vitalTemp >= 99.4){
      document.getElementById('temp-result').classList.add('bg-danger');
      document.getElementById('temp-result').style.color = 'white';
    }else{
      document.getElementById('temp-result').classList.add('bg-success');
      document.getElementById('temp-result').style.color = 'white';
    }
    if(vitalResp <= 22 || vitalResp >= 41){
      document.getElementById('resp-result').classList.add('bg-danger');
      document.getElementById('resp-result').style.color = 'white';
    }else{
      document.getElementById('resp-result').classList.add('bg-success');
      document.getElementById('resp-result').style.color = 'white';
    }

  }

  // vitals HR for ages 6-10
  if (vitalAge <= 6 && vitalAge >= 10){
    if(vitalPulse <= 69 || vitalPulse >= 101){
      document.getElementById('hr-result').classList.add('bg-danger');
      document.getElementById('hr-result').style.color = 'white';  
      
      
    }else{
      document.getElementById('hr-result').classList.add('bg-success');
      document.getElementById('hr-result').style.color = 'white';
    }
  }

  // vitals HR for ages 11-14
  if (vitalAge <= 11 && vitalAge >= 12){
    if(vitalPulse <= 59 || vitalPulse >= 106){
      document.getElementById('hr-result').classList.add('bg-danger');
      document.getElementById('hr-result').style.color = 'white';  
      
      
    }else{
      document.getElementById('hr-result').classList.add('bg-success');
      document.getElementById('hr-result').style.color = 'white';
    }
  }

  // vitals 6-12 years old
  if (vitalAge >= 6 && vitalAge <= 12){
    if(vitalSystolic <= 95 || vitalSystolic >= 132 || vitalDiastolic <= 54 || vitalDiastolic >= 63){
      document.getElementById('bp-result').classList.add('bg-danger');
      document.getElementById('bp-result').style.color = 'white';
    }else{
        document.getElementById('bp-result').classList.add('bg-success');
        document.getElementById('bp-result').style.color = 'white';
    }
    
    if(vitalTemp <= 97.5 || vitalTemp >= 99.4){
      document.getElementById('temp-result').classList.add('bg-danger');
      document.getElementById('temp-result').style.color = 'white';
    }else{
      document.getElementById('temp-result').classList.add('bg-success');
      document.getElementById('temp-result').style.color = 'white';
    }
    if(vitalResp <= 17 || vitalResp >= 31){
      document.getElementById('resp-result').classList.add('bg-danger');
      document.getElementById('resp-result').style.color = 'white';
    }else{
      document.getElementById('resp-result').classList.add('bg-success');
      document.getElementById('resp-result').style.color = 'white';
    }

  }

  // adults vitals
  if (vitalAge >= 13){
    if(vitalPulse <= 59 && vitalPulse >= 101){
      document.getElementById('hr-result').classList.add('bg-danger');
      document.getElementById('hr-result').style.color = 'white';  
    }else{
      document.getElementById('hr-result').classList.add('bg-success');
      document.getElementById('hr-result').style.color = 'white';
    }
    if(vitalSystolic <= 105 || vitalSystolic >= 144 || vitalDiastolic <= 61 || vitalDiastolic >= 95){
      document.getElementById('bp-result').classList.add('bg-danger');
      document.getElementById('bp-result').style.color = 'white';
    }
    else if(vitalSystolic <= 110 || vitalSystolic >= 121 || vitalDiastolic <= 69 || vitalDiastolic >= 81){
      document.getElementById('bp-result').classList.add('bg-warning');
      document.getElementById('bp-result').style.color = 'black';
    
    }
    else{
      document.getElementById('bp-result').classList.add('bg-success');
      document.getElementById('bp-result').style.color = 'white';
    }
    
    if(vitalTemp <= 95.9 || vitalTemp >= 98.9){
      document.getElementById('temp-result').classList.add('bg-danger');
      document.getElementById('temp-result').style.color = 'white';
    }else{
      document.getElementById('temp-result').classList.add('bg-success');
      document.getElementById('temp-result').style.color = 'white';
    }
    if(vitalResp <= 11 || vitalResp >= 17){
      document.getElementById('resp-result').classList.add('bg-danger');
      document.getElementById('resp-result').style.color = 'white';
    }else{
      document.getElementById('resp-result').classList.add('bg-success');
      document.getElementById('resp-result').style.color = 'white';
    }

  }

}

// print report page
function printReport(){
  document.getElementById('hr-result').style.color = 'black';
  document.getElementById('bp-result').style.color = 'black';
  document.getElementById('temp-result').style.color = 'black';
  document.getElementById('resp-result').style.color = 'black';
  window.print();
}

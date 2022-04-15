
// add event listener to save report
document.getElementById('btn1').addEventListener('click', (e) =>{
  e.preventDefault();

const submitBtn = document.getElementById('report');
const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputPulse = document.getElementById('hr');
const inputSystolic = document.getElementById('bp-s');
const inputDiastolic = document.getElementById('bp-d');
const inputTemp = document.getElementById('temp');
const inputResp = document.getElementById('resp');

// form validation
if(inputName.value !== ''){
  if( inputAge.value !== ''){
    if(inputPulse.value !== ''){
      if(inputSystolic.value !== ''){
        if(inputDiastolic.value !== ''){
          let inputBp = `${inputSystolic.value}/${inputDiastolic.value}`
          if (inputTemp.value !== ''){
            if(inputResp.value !== ''){

              // display run report button
              submitBtn.style.display = 'block';

              // save to local storage
              localStorage.setItem('name', inputName.value);
              localStorage.setItem('age', inputAge.value);
              localStorage.setItem('heart rate', inputPulse.value);
              localStorage.setItem('systolic', inputSystolic.value);
              localStorage.setItem('diastolic', inputDiastolic.value);
              localStorage.setItem('blood pressure', inputBp);
              localStorage.setItem('temperature', inputTemp.value);
              localStorage.setItem('respirations', inputResp.value);

              // if no info is provided run the following code
            }else{
              addErrorMsg(6);
              inputResp.classList.add('border-danger');
              inputResp.addEventListener('keyup', () =>{
                if (inputResp !== ''){
                  inputResp.classList.remove('border-danger');
                  removeErrorMsg(6);
                }
              })
            }
          }else{
            addErrorMsg(5);
            inputTemp.classList.add('border-danger');
            inputTemp.addEventListener('keyup', () =>{
              if (inputTemp !== ''){
                inputTemp.classList.remove('border-danger');
                removeErrorMsg(5);
              }
            })
          }
        }else{
          addErrorMsg(4);
          inputDiastolic.classList.add('border-danger');
          inputDiastolic.addEventListener('keyup', () =>{
            if (inputDiastolic !== ''){
              inputDiastolic.classList.remove('border-danger');
              removeErrorMsg(4);
            }
          })
        }
      }else{
        addErrorMsg(3);
        inputSystolic.classList.add('border-danger');
        inputSystolic.addEventListener('keyup', () =>{
          if (inputSystolic !== ''){
            inputSystolic.classList.remove('border-danger');
            removeErrorMsg(3);
          }
        })
      }
    }else{
      addErrorMsg(2);
      inputPulse.classList.add('border-danger');
      inputPulse.addEventListener('keyup', () =>{
        if (inputPulse !== ''){
          inputPulse.classList.remove('border-danger');
          removeErrorMsg(2);
        }
      })
    }
  }else{
    addErrorMsg(1);
    inputAge.classList.add('border-danger');
    inputAge.addEventListener('keyup', () =>{
      if (inputAge !== ''){
        inputAge.classList.remove('border-danger');
        removeErrorMsg(1);
      }
    })
  }
}else{
  addErrorMsg(0);
  inputName.classList.add('border-danger');
  inputName.addEventListener('keyup', () =>{
    if (inputName !== ''){
      inputName.classList.remove('border-danger');
      removeErrorMsg(0);
    }
  })
}

})


// add error message
// i = index of 'error-message' class 
function addErrorMsg(i){
  const errorMsg = document.getElementsByClassName('error-message')[i];
  errorMsg.textContent = 'Please fill out';
  errorMsg.style.color = 'red';
}

// remove error message
// i = index of 'error-message' class 
function removeErrorMsg(i){
  const errorMsg = document.getElementsByClassName('error-message')[i];
  errorMsg.textContent = '';
}
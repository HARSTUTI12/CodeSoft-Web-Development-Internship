window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};
function calculateBMI(){
    let height=document.querySelector("#height").value;
    let weight=document.querySelector("#weight").value;
    let result=document.querySelector("#result");
    if(isNaN(height)){
        result.innerHTML="provide a valid height";
    }else if(isNaN(weight)){
        result.innerHTML="provide a valid weight";
    }
    else{
        bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);

        if (bmi < 18.6) result.innerHTML =
           alert(`Your BMI is Under Weight:${bmi}`);

        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
            alert(`Congratulations your BMI is Normal: ${bmi}`);
 
        else result.innerHTML =
                alert(`Your BMI is Over Weight:${bmi}`);
    }
}


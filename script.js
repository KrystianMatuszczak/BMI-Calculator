document.getElementById("calculate-button").addEventListener("click", function(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value /100);

    let bmi = weight/(height*height);

    document.getElementById("result").innerHTML = bmi;

    let divColor = document.getElementById("bmiColor");

    if(bmi < 20){
        divColor.style.backgroundColor = "orange";
    } else if (bmi > 20 && bmi < 25){
        divColor.style.backgroundColor = "green";
    } else if (bmi > 25 && bmi < 30){
        divColor.style.backgroundColor = "yellow";
    } else if (bmi > 30 && bmi < 40){
        divColor.style.backgroundColor = "red";
    } else{
        divColor.style.backgroundColor = "firebrick";
    }
});
//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1c").checked;
    var q2 = document.getElementById("q2a").checked;
    var q3 = document.getElementById("q3D").checked;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5b").checked;
    var q6 = document.getElementById("q6a").checked;
    var q7 = document.getElementById("q7a").checked;
    var q8 = document.getElementById("q8c").checked;
    var q9 = document.getElementById("q9a").checked;
    var q10 = document.getElementById("q10c").checked;
    var q11 = document.getElementById("q11d").checked;
    var q12 = document.getElementById("q12b").checked;
    var q13 = document.getElementById("q13a").checked;
    var q14 = document.getElementById("q14a").checked;
    var q15 = document.getElementById("q15d").checked;
    var q16 = document.getElementById("q16b").checked;
    var q17 = document.getElementById("q17c").checked;
    var q18 = document.getElementById("q18b").checked;
    var q19 = document.getElementById("q19d").checked;
    var q20 = document.getElementById("q20a").checked;

    //Assign correct answers to field inputs
      if (q1){
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if(q3){
        correctAnswers += 1;
    } if (q4) {
        correctAnswers += 1;
    } if (q5) {
        correctAnswers += 1;
    } if (q6) {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if (q8){
        correctAnswers += 1;
    }  if(q9){
        correctAnswers += 1;
    }  if (q10) {
        correctAnswers += 1;
    } if (q11) {
        correctAnswers += 1;
    } if (q12) {
        correctAnswers += 1;
    } if (q13) {
        correctAnswers += 1;
    }  if (q14) {
        correctAnswers += 1;
    }  if (q15) {
        correctAnswers += 1;
    }  if (q16) {
        correctAnswers += 1;
    }  if (q17) {
        correctAnswers += 1;
    }  if (q18) {
        correctAnswers += 1;
    }  if (q19) {
        correctAnswers += 1;
    }  if(q20){
        correctAnswers += 1;
    }

         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 20) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 20 answers correct";}
    else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)China (2)Chile (3)Victoria (4)Canberra (5)Florida (6)Tangent (7)Triskaidecagon (8)5 (9)90 (10)150 (11)Bromine (12)Salt (13)deliquescence (14)Aluminium (15)Hydrogen (16)1914 (17)Austria (18)Dallas (19)France (20)10";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}



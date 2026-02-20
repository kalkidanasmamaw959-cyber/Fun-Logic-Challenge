function startTest(){
    let score = 0;

    let q1 = parseInt(prompt("How many hours do you sleep per day?"));
    if(q1>=3){
        score++
    }
    let q2 = parseInt(prompt("How many hours do you spend on social media per day?")); 
    if(q2<=4){
        score++
    }
    let q3 = parseInt(prompt("How many hours do you spend on physical activity per day?"));
    if(q3>=1){
        score++
    }
    let q4 = prompt("Do you eat and drink daily? (yes/no)");
    if(q4.toLowerCase() === "yes"){
        score++
    }

    let q5 = prompt("Do you get tired? (yes/no)").toLowerCase();
    if(q5 === "yes"){
        score++
    }

    let q6 = prompt("Do you have trouble concentrating? (yes/no)").toLowerCase();
    if(q6 === "no"){
        score++
    }

    if(score >= 4){
        alert("You are detacted as Human being");
    }else if(score > 0 && score <= 3){
        alert("You are showing some human-like behavior, but not enough to be fully recognized.");
    }else{
        alert("You are Robot please leave the Page!")
    }
}
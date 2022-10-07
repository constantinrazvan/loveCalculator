var firstName = prompt("first name: ");
var secondName = prompt("first name: ");
var loveScore = Math.random() * 100; 
loveScore = Math.floor(loveScore); 

//If you loveScore is greater than 70 then...
if (loveScore > 70) { 
    alert(`Your percentage is ${loveScore}. You are like Romeo and Juliet`);
}

//If you loveScore is greater than 30 and less than or equal 70 then...
if(loveScore > 30 && loveScore <= 70) { 
    alert(`Your percentage love is: ${loveScore}`);
}

//If you loveScore is less than or equal 30 then...
if(loveScore <= 30) { 
    alert(`Your percentage love is: ${loveScore}. You are like oil and water`);
}

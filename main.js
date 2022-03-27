//question 1
const targetDiv = document.getElementById('answer1');
const btn = document.getElementById('question1');
btn.onclick = function(){
    if(targetDiv.style.display !=="none"){
        targetDiv.style.display="none";
    }else{
        targetDiv.style.display = "block";
    }
}

//question 2
const question2 = document.getElementById('answer2');
const question2btn = document.getElementById('question2');
question2btn.onclick = function(){
    if(question2.style.display !=="none"){
        question2.style.display="none";
    }else{
        question2.style.display = "block";
    }
}

//question 3
const question3 = document.getElementById('answer3');
const question3btn = document.getElementById('question3');
question3btn.onclick = function(){
    if(question3.style.display !=="none"){
        question3.style.display="none";
    }else{
        question3.style.display = "block";
    }
}

//question 4
const question4 = document.getElementById('answer4');
const question4btn = document.getElementById('question4');
question4btn.onclick = function(){
    if(question4.style.display !=="none"){
        question4.style.display="none";
    }else{
        question4.style.display = "block";
    }
}

//question 5
const question5 = document.getElementById('answer5');
const question5btn = document.getElementById('question5');
question5btn.onclick = function(){
    if(question5.style.display !=="none"){
        question5.style.display="none";
    }else{
        question5.style.display = "block";
    }
}

document.querySelector('#redirect')
.addEventListener('click', () =>{
    window.location.href="form.html"
});





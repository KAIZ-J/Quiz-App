 const home = document.getElementById("home");
      const res = document.getElementById("result");
      const scoreresult = document.getElementById("scoreresult");
      let counter = 0;
      let userAnswer = [];
      let choicesLet = ["A", "B", "C", "D"];
      let questioNum = 0;
      const HtmlQuestions = [ [ { question: "What does HTML stand for?", options: [ "Highly Talented Modern Language", "Home Tool Markup Language", "HyperText Markup Language", "Hyper Transfer Mail Language", ], answer: "C", }, { question: "Which tag is used for the largest heading?", options: ["< heading >", "< h6 >", "< h1 >", "< head  >"], answer: "C", }, { question: "Which tag is used to make text bold in HTML?", options: ["< strong >", "< italic >",  "< br >", "< link >"], answer: "A", }, { question: "What does <br> do in HTML?", options: [ "Makes text bold", "Breaks the page", "Adds a line break", "Creates a new tab", ], answer: "C", }, { question: "Which file extension is used for HTML files?", options: [".htm", ".html", ".web", ".markup"], answer: "B", }, ],  [ { question: "Which tag is used to add an image in HTML?", options: ["< pic >", "< image >", "< img >", "< src >"], answer: "C", }, { question: "Which attribute specifies the URL of the page the link goes to?", options: ["href", "src", "link", "url"], answer: "A", }, { question: "What is the correct HTML element for inserting a line break?", options: ["< break > ", "< lb >", "< br >", "< line >"], answer: "C", }, { question: "Which tag is used to create a table row?", options: ["< tr >", "< td >", "< table >", "< row >"], answer: "A", }, { question: "What is the correct way to comment in HTML?", options: [ "// This is a comment", "< !-- This is a comment -- >", "# This is a comment", "<comment>This is a comment</comment>", ], answer: "B", }, ], [ { question: "Which HTML element defines the document's title that shows in the browser tab?", options: ["< header >", "< meta >", "< title >", "< head >"],  answer: "C", }, { question: "Which doctype is correct for HTML5?", options: [ "<! DOCTYPE html >", "< !HTML5 >", "< doctype html5 >", "<! DOCTYPE HTML PUBLIC >", ], answer: "A", }, { question: "Which element is used to embed external JavaScript files in HTML?", options: ["< js >", "< script src='' >", "< javascript >", "< link >"], answer: "B", }, { question: "What is the purpose of the 'alt' attribute in <img> tag?", options: [ "To set image alignment", "To provide alternative text if the image fails to load", "To resize image", "To give hyperlink to image", ], answer: "B", }, { question: "Which HTML tag is used for defining metadata about an HTML document?", options: ["< meta >", "< data >", "< style >", "< info >"], answer: "A", }, ], ];
const cssQuestions = [ [ { question: "What does CSS stand for?", options: [ "Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets" ], answer: "C" }, { question: "Which tag is used to link CSS to an HTML file?", options: [ "< css >", "< style >", "< link >", "< script >" ], answer: "C" }, { question: "Which property is used to change the text color?", options: [ "font-color", "text-style", "color", "text-color" ], answer: "C" }, { question: "Which symbol is used to select a class in CSS?", options: [ "#", ".", "*", "$" ], answer: "B" }, { question: "Where in an HTML document is the correct place to refer to an external CSS file?", options: [ "At the end of the body", "Inside the body", "Inside the head", "After the closing html tag" ], answer: "C" } ], [ { question: "Which property controls the size of text?", options: [ "font-style", "text-size", "font-size", "text-style" ], answer: "C" }, { question: "What does the 'box-model' in CSS include?", options: [ "Only content", "Margin, padding, border, and content", "Only padding and margin", "Border and margin only" ], answer: "B" }, { question: "Which property is used to make text italic?", options: [ "font-style", "text-decoration", "font-weight", "text-style" ], answer: "A" }, { question: "How do you select an element with id='main' in CSS?", options: [ "#main", ".main", "*main", "main" ], answer: "A" }, { question: "Which CSS property makes an element float to the left or right?", options: [ "position", "align", "float", "display" ], answer: "C" } ], [ { question: "What is the default position value of an HTML element?", options: [ "relative", "fixed", "static", "absolute" ], answer: "C" }, { question: "Which unit is relative to the font-size of the root element?", options: [ "em", "px", "rem", "%" ], answer: "C" }, { question: "How can you apply the same style to multiple selectors?", options: [ "Separate them with commas", "Use the + symbol", "Wrap them in brackets", "Use multiple style tags" ], answer: "A" }, { question: "What does 'z-index' in CSS control?", options: [ "The zoom level", "The layering order", "The size of elements", "The opacity level" ], answer: "B" }, { question: "Which pseudo-class selects an element when you hover over it?", options: [ ":active", ":focus", ":hover", ":visited" ], answer: "C" } ] ];
const jsQuestions = [ [ { question: "What does JS stand for?", options: [ "Java System", "JavaScript", "JustStyle", "JumboScript" ], answer: "B" }, { question: "Which keyword is used to declare a variable in JavaScript?", options: [ "var", "let", "const", "All of the above" ], answer: "D" }, { question: "Which symbol is used for single-line comments?", options: [ "//", " /* */ ", " < !-- -- > ", "#" ], answer: "A" }, { question: "How do you output data in JS?", options: [ "console.log()", "print()", "echo()", "log.print()" ], answer: "A" }, { question: "What data type is 'true' in JavaScript?", options: [ "String", "Number", "Boolean", "Null" ], answer: "C" } ], [ { question: "Which operator is used to compare value and type?", options: [ "==", "=", "===", "!=" ], answer: "C" }, { question: "What will `typeof NaN` return?", options: [ "NaN", "number", "undefined", "object" ], answer: "B" }, { question: "Which method converts JSON to a JavaScript object?", options: [ "JSON.convert()", "JSON.stringify()", "JSON.parse()", "JSON.objectify()" ], answer: "C" }, { question: "Which array method adds an element to the end?", options: [ "push()", "pop()", "shift()", "unshift()" ], answer: "A" }, { question: "What does `isNaN('123')` return?", options: [ "true", "false", "undefined", "null" ], answer: "B" } ], [ { question: "What is a closure in JavaScript?", options: [ "An object inside an array", "A function with no name", "A function that remembers its scope even after the outer function has returned", "A hidden loop" ], answer: "C" }, { question: "What is the result of `[] + {} in JavaScript`?", options: [ "'[object Object]'", "NaN", "Error", "undefined" ], answer: "A" }, { question: "Which keyword is used to handle errors in JavaScript?", options: [ "catch", "handle", "exception", "error" ], answer: "A" }, { question: "What does the `this` keyword refer to inside a regular function?", options: [ "Global object", "The function itself", "The parent scope", "Always undefined" ], answer: "A" }, { question: "Which of the following is not a primitive type in JavaScript?", options: [ "string", "number", "object", "boolean" ], answer: "C" } ] ];
 let gameStart = false;
 let time = 30;
 const timerText = document.getElementById("time");
      function start(array) {
        if(!gameStart){
            gameStart=true;
            
           setInterval(() => {
                time--;
                timerText.innerText=time;
                document.getElementById("imgclock").classList.remove("fa-shake");
                if(time<10){
                    document.getElementById("imgclock").classList.add("fa-shake");
                };
                if(time===0){
document.getElementById("container").style.display = "none";
          res.style.display = "flex";
            scoreresult.innerText = `${counter}/5`; 
            timerText.innerText="0";
            document.getElementById("imgclock").classList.remove("fa-shake");
        }
            }, 1000);
             
        }
        const range = Number(document.getElementById("range").value);
        document.getElementById("container").style.display = "flex";
        document.getElementById("question").textContent =
          array[range][questioNum].question; //getting the question
        const optcont = document.getElementById("choices");
        optcont.innerHTML = "";//clearing out the before for the next choice
        for (let i = 0; i < 4; i++) {
          let newh = document.createElement("button");
          newh.id = choicesLet[i];
          newh.classList.add("item");//creating the button and giving it class and id
          newh.innerHTML = array[range][questioNum].options[i];
          optcont.append(newh);//appending it
          //click
          newh.addEventListener("click", function() {  
       //check if the chosen button's id is same as the correct answer from the array
            if (array[range][questioNum].answer===newh.id) {
          counter++;//if so increase player score
        }  
        questioNum++; //when any of the choices button clicked then increase the current question number
        contin(array); //game continuation
          });
        }
      }
function contin(array){
    const range = Number(document.getElementById("range").value);
if (questioNum < array[range].length) {
          start(array);//game contiues until current question number is equal to number of questions(5 in this case)
        } else {
          //hide container and then display results and score
          document.getElementById("container").style.display = "none";
          res.style.display = "flex";
            scoreresult.innerText = `${counter}/5`;
          }
}
function continrandom(array){ if (questioNum < array.length ) { random(array); } else { document.getElementById("container").style.display = "none"; res.style.display = "flex"; if(counter<=1){ scoreresult.innerText = `${counter}/5`; } else if(counter<=3){ scoreresult.innerText = `${counter}/5`; } else if(counter<=5){ scoreresult.innerText = `${counter}/5`; } } }
let arrays = [jsQuestions,cssQuestions,HtmlQuestions];
function randomArray(){
     if(!gameStart){
            gameStart=true;
            
           setInterval(() => {
                time--;
                timerText.innerText=time;
                document.getElementById("imgclock").classList.remove("fa-shake");
                if(time<10){
                    document.getElementById("imgclock").classList.add("fa-shake");
                };
                if(time===0){
document.getElementById("container").style.display = "none";
          res.style.display = "flex";
            scoreresult.innerText = `${counter}/5`; 
            timerText.innerText="";
            document.getElementById("imgclock").classList.remove("fa-shake");
        }
            }, 1000);
             
        }
    let newArray = [];//generating new array with 5 random questions from the 3 arrays
    for(let i=0;;i++){
        let a = Math.floor(Math.random()*3);
        let b = Math.floor(Math.random()*3);
         let c = Math.floor(Math.random()*5);
        let randomQuestion = arrays[a][b][c];
        if(!newArray.includes(randomQuestion)){
            newArray.push(randomQuestion);
        } ;
        if(newArray.length>4) break;
    }
       return newArray;
}

function random(array) { document.getElementById("container").style.display = "flex"; document.getElementById("question").textContent = array[questioNum].question; const optcont = document.getElementById("choices"); optcont.innerHTML = ""; for (let i = 0; i < 4; i++) { let newh = document.createElement("button"); newh.id = choicesLet[i]; newh.innerHTML = array[questioNum].options[i]; optcont.append(newh); newh.addEventListener("click", function() { if (array[questioNum].answer===newh.id) { counter++; } questioNum++; continrandom(array); }); } }
     
document.getElementById("css").addEventListener("click",function(){
        reseting();//when clicked resets value to 0(counter and questionum)
        start(cssQuestions);
        home.style.display="none";
        document.getElementById("again").addEventListener("click",function(){;
          res.style.display="none";
  questioNum = 0;
        counter=0;
        time=30;
  start(cssQuestions);})
        })
        
        document.getElementById("html").addEventListener("click",function(){
        reseting();
        start(HtmlQuestions);
        home.style.display="none";
document.getElementById("again").addEventListener("click",function(){;
          res.style.display="none";
  questioNum = 0;
        counter=0;
        time=30;
  start(HtmlQuestions);
  
  });
        })
        document.getElementById("js").addEventListener("click",function(){
        reseting();
            start(jsQuestions);
        home.style.display="none";
      document.getElementById("again").addEventListener("click",function(){;
          res.style.display="none";
  questioNum = 0;
        counter=0;
        time=30;
  start(jsQuestions)});})

        document.getElementById("random").addEventListener("click",function(){
        reseting();
            random(randomArray());
        home.style.display="none";
      document.getElementById("again").addEventListener("click",function(){;
          res.style.display="none";
  questioNum = 0;
        counter=0;
        time=30;
  random(randomArray())});})
        
function reseting(){
    questioNum = 0;
        counter=0;
        time=30;
}

        
function goHome(){
  questioNum = 0;
        counter=0;
        time=30;
        home.style.display="block";
        document.getElementById("result").style.display = "none";
}
function goHomeback(){
  questioNum = 0;
        counter=0;
        time=30;
        home.style.display="block";
        document.getElementById("container").style.display = "none";
}

document.getElementById("back-home").addEventListener("click",goHomeback);
document.getElementById("back").addEventListener("click",goHome);
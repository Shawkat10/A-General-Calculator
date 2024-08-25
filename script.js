let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");


let string="";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (evt) => {
      if(evt.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
      }
      else if(evt.target.innerHTML == '%'){
        string = (eval(string)*100);
        input.value = string;
      }
      else if(evt.target.innerHTML == 'AC'){
        string = '';
        input.value = string;
      }
      else if(evt.target.innerHTML == 'DE'){
        string = string.substring(0, string.length-1);
        input.value = string;
      }
      else{
        string = string + evt.target.innerHTML;
        input.value = string;
      }
        
        })
});


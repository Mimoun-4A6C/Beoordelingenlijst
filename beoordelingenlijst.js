function toevoeg(){
    var input=document.getElementById('input').value;
    console.log(input);
    if(input >0 && input <=49) {
    document.getElementById('resultaat').innerHTML="u hebt een onvoldoende";
           
    }else if(input >=50 && input <=59) {
           
        document.getElementById('resultaat').innerHTML="u hebt een matig";
           
    }else if(input >=60 && input <=74){
        document.getElementById('resultaat').innerHTML="u hebt een vooldoende";
        
    }else if(input >=75 && input<=100){ 
        document.getElementById('resultaat').innerHTML="u hebt een vooldoende";
    
      
}
    
};function toevoeg(){
    console.log(input);
    if(input >0 && input <=49) {
    document.getElementById('resultaat').innerHTML=input+" punten wat neer komt op een onvoldende";
           
    }else if(input >=50 && input <=59) {
           
        document.getElementById('resultaat').innerHTML=input+" punten wat neer komt op een matig";
           
    }else if(input >=60 && input <=74){
        document.getElementById('resultaat').innerHTML=input+" punten wat neer komt op een voldoende";
        
    }else if(input >=75 && input<=100){ 
        document.getElementById('resultaat').innerHTML=input+" punten wat neer komt op een goed";
    
      
}
};
function toevoeg1(){
    var input=document.getElementById('input').value;
   toevoeg();
  document.getElementById('resultaat').innerHTML=toevoeg;  
}

    
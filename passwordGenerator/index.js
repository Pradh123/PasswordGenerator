var input=document.querySelector('#input');
var Generate=document.querySelector('#Generate');
var copy=document.querySelector('#copy');
var range=document.querySelector('#range');
var number=document.querySelector('#number');
var specialChar=document.querySelector('#specialChar');
var Paragraph=document.querySelector('p');
var lenth=0;
range.addEventListener('input',(e)=>{
    lenth=e.target.value;  
    if(lenth>=5){
    Paragraph.innerHTML=`<p>Length : ${lenth}</p>`;}  
})
Generate.addEventListener('click',()=>{
   var str=""
   var pass="";
   str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(number.checked) str+="1234567890"
   if(specialChar.checked) str+="~!@#$%^&*()_+*/-+"
   if(lenth>0){
       for(var i=0;i<lenth;i++){
          var cha=(Math.floor(Math.random()*str.length));
           pass+=str.charAt(cha)
       } 
   }
   input.value=pass;
})
input.addEventListener('click',()=>{
   input.value=""
})
copy.addEventListener('click',()=>{
    input.select();
    input.setSelectionRange(0,12);
    window.navigator.clipboard.writeText(input.value)
})




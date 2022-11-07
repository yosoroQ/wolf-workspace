// 这是综合新闻社区的那个列表
let zonghe=document.getElementsByClassName('zonghe')[0];
let zonghelist=document.getElementsByClassName('zonghelist')[0];


let xinwen=document.getElementsByClassName('xinwen')[0];
let xinwenlist=document.getElementsByClassName('xinwenlist')[0];


let gonggao=document.getElementsByClassName('gonggao')[0];
let gonggaolist=document.getElementsByClassName('gonggaolist')[0];


let shequ=document.getElementsByClassName('shequ')[0];
let shequlist=document.getElementsByClassName('shequlist')[0];


zonghe.onmouseover=()=>{
        
  
    zonghelist.style.display="block";
    xinwenlist.style.display="none";
    gonggaolist.style.display="none";
    shequlist.style.display="none";

 }

 xinwen.onmouseover=()=>{
        
  
    zonghelist.style.display="none";
    xinwenlist.style.display="block";
    gonggaolist.style.display="none";
    shequlist.style.display="none";

 }

 gonggao.onmouseover=()=>{
        
  
    zonghelist.style.display="none";
    xinwenlist.style.display="none";
    gonggaolist.style.display="block";
    shequlist.style.display="none";

 }

shequ.onmouseover=()=>{
        
  
    zonghelist.style.display="none";
    xinwenlist.style.display="none";
    gonggaolist.style.display="none";
    shequlist.style.display="block";

 }

 

 
// 资料站排行榜争霸赛
let ziliao=document.getElementsByClassName('ziliao')[0];
let ziliaolist=document.getElementsByClassName('ziliaolist')[0];


let paihang=document.getElementsByClassName('paihang')[0];
let paihanglist=document.getElementsByClassName('paihanglist')[0];


let zhengba=document.getElementsByClassName('zhengba')[0];
let zhengbalist=document.getElementsByClassName('zhengbalist')[0];


ziliao.onmouseover=()=>{
        
  
    ziliaolist.style.display="block";
    paihanglist.style.display="none";
    zhengbalist.style.display="none";

 }

 paihang.onmouseover=()=>{
        
  
    ziliaolist.style.display="none";
    paihanglist.style.display="block";
    zhengbalist.style.display="none";

 }
 zhengba.onmouseover=()=>{
        
  
    ziliaolist.style.display="none";
    paihanglist.style.display="none";
    zhengbalist.style.display="block";

 }

 
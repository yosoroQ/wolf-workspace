
let qq=document.getElementById("nav_dt").getElementsByTagName("a");
let dd=document.getElementById("nav_dd");
console.log(qq.length);
console.log(dd.style.display);

for (let i = 0; i < qq.length; i++) {
    qq[i].onmouseover=()=>{
        console.log(i);
        dd.style.display="block";
    }
    qq[i].onmouseout=()=>{
        console.log(i);
        dd.style.display="none";
    }

}
  
 


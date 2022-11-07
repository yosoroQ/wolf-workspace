
// 视听盛宴

let shiping=document.getElementsByClassName('shiping')[0];
let shipinglist=document.getElementsByClassName('shipinglist')[0];

let bizhi=document.getElementsByClassName('bizhi')[0];
let bizhilist=document.getElementsByClassName('bizhilist')[0];

let yuanhua=document.getElementsByClassName('yuanhua')[0];
let yuanhualist=document.getElementsByClassName('yuanhualist')[0];

let jietu=document.getElementsByClassName('jietu')[0];
let jietulist=document.getElementsByClassName('jietulist')[0];


shiping.onmouseover=()=>{
        
    shipinglist.style.display="block";
    bizhilist.style.display="none";
    yuanhualist.style.display="none";
    jietulist.style.display="none";

 }
 bizhi.onmouseover=()=>{
        
    shipinglist.style.display="none";
    bizhilist.style.display="block";
    yuanhualist.style.display="none";
    jietulist.style.display="none";

 }
 yuanhua.onmouseover=()=>{
        
    shipinglist.style.display="none";
    bizhilist.style.display="none";
    yuanhualist.style.display="block";
    jietulist.style.display="none";

 }
 jietu.onmouseover=()=>{
        
    shipinglist.style.display="none";
    bizhilist.style.display="none";
    yuanhualist.style.display="none";
    jietulist.style.display="block";

 }




let m=document.getElementsByTagName("ins");
let fff=document.getElementsByClassName("fff");

    for(let i=0;i<fff.length;i++){
        // console.log(fff[i]);
        // console.log(i);
        let child =fff[i].lastElementChild;
        let child1 =fff[i].getElementsByTagName("font")[0];

        fff[i].onmouseover=(()=>{
    //    console.log(child)
       child.style.background="none";
        child1.style.background="none";
       
     })

     fff[i].onmouseout=(()=>{
        // console.log(child)
        child.style.background="";
        child1.style.background="";
        
      })
}







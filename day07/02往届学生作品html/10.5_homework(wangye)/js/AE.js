
        // 第一个列表
        let a=document.getElementsByClassName('A')[0];
        let li=document.getElementsByClassName('E')[0];
        
        let b=document.getElementsByClassName('B')[0];
        let li2=document.getElementsByClassName('F')[0];

        let c=document.getElementsByClassName('C')[0];
        let li3=document.getElementsByClassName('G')[0];
        
        let d=document.getElementsByClassName('D')[0];
        let li4=document.getElementsByClassName('H')[0];

        // a.onmouseover=()=>{
        //    li.style.display="none";
        // }
        a.onmouseover=()=>{
        
           li.style.display="block";
           li2.style.display="none";
           li3.style.display="none";
           li4.style.display="none";

        }
        

        // b.onmouseover=()=>{
        //    li2.style.display="none";
        // }
        b.onmouseover=()=>{
        
           li2.style.display="block";
           li.style.display="none";
           li3.style.display="none";
           li4.style.display="none";

        }



 
        // c.onmouseover=()=>{
        //    li3.style.display="none";
        // }
        c.onmouseover=()=>{
        
           li3.style.display="block";
           li.style.display="none";
           li2.style.display="none";
           li4.style.display="none";
        }

        // d.onmouseover=()=>{
        //    li4.style.display="none";
        // }
        d.onmouseover=()=>{
        
           li4.style.display="block";
           li.style.display="none";
           li2.style.display="none";
           li3.style.display="none";
        }


     




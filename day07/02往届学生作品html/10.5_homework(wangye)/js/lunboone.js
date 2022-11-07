

let lunboone=document.getElementsByClassName("lunbo-a")[0];
let pen=lunboone.getElementsByClassName("pen");//a
let center=document.getElementsByClassName("center")[0];
let dots=document.getElementById("dot").getElementsByTagName("a");
let left = 0;
let auto = null;
let index = 0;                                      // 当前显示图片的下标
let status = false; 


window.onload = ()=> {


// center.onmouseover = ()=>{
//     clearInterval(auto);
// }
 
 // 绑定触摸焦点图标的事件
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover = ()=> {
           if(index==i||status){
               return false;
           }
           let new_index=i;
        //    animate2(new_index);
        changeDot(new_index);
        }
    }




  //自动轮播动画图片的方法
let temp_fl = 0;
function animate1(speed){
    let list_index = parseInt(lunboone.style.left);

    list_index -= 705;
    lunboone.style.left = list_index + "px";
    
    // console.log(list_index);
    speed = 2000;
    
    if (list_index == 0 || list_index == -705 || list_index == -1410 || list_index == -2115 || list_index == -2820) {
        speed = 3000;
        
    }

    if (list_index >= -2820) {
        setTimeout(()=> {
            temp_fl = list_index / (-705);
            temp_fl = (temp_fl == -0)? 0:temp_fl;
            changeDot(temp_fl);
            animate1();
        }, speed);
    } else {
        lunboone.style.left = "705px";
        animate1(1000);
    }
}
function changeDot(t_index){
    dots[t_index].className="om";
     let n=t_index;
    for(let i=0;i<dots.length;i++)
    // console.log(i);
    if (i != t_index){
     dots[i].className="";
    }
    for(let i=0;i<dots.length;i++)
     dots[i].style.color="#FFFFFF";

     dots[n].style.color=" rgb(255, 173, 105)";
    
      
  }
animate1();



   


   

}




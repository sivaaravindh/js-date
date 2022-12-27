let dat=new Date();
console.log(dat);
let c=parseInt(prompt("enter the time"));

let time=dat.setTime(c);

if(4>=time && time<12){
    console.log("this is morning");
}
else if(time>=12 && time<=16){
        console.log("this is afternoon");
    }
 else{
          console.log("this is night"); 
    }
    







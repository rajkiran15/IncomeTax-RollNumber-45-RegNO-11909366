const submit=document.querySelector(".submit");
submit.addEventListener("click",(e)=>{
  if(e.target.style.background==="green"){
    e.target.style.background="rgb(206, 57, 92)";
  }
    else{
         e.target.style.background="green";
    }
})
const news=document.querySelector(".new");
setInterval(()=>{
    //news.style.color='red';
    if(news.style.color==="red")
         {
             news.style.color="black";
             news.style.fontSize="20px";
         }
    else{
             news.style.color="red";
            news.style.fontSize="15px";
     }
    
},500);

const newsUpadte=document.querySelector("ul li a");
setInterval(()=>{
    if(newsUpadte.style.color==="rgba(0,0,0,0.9)")
        {
             newsUpadte.style.color="rgba(0,0,0,0.5)";
        }
    else{
          newsUpadte.style.color="rgba(0,0,0,0.9)";
      }
},1000);



$ git config --global user.name "rajkiran15"

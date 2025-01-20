let div=document.querySelectorAll(".child");
let h2=document.querySelector("h2")
let body=document.querySelector("body")
let s=document.querySelector(".s")
let hs=document.querySelector(".hs")
let btn=document.querySelector("button")

btn.addEventListener("click",()=>{
     highScore=[0]
     hs.innerText="Highest Score:0"
})


body.addEventListener("keydown" ,()=> {
     s.innerText=`Score:0`
     memory.splice(0,memory.length)
     memory.push(randomChange())
     h2.innerText="Level 1"
     body.style.backgroundColor="rgb(98, 112, 126)"
     console.log("memory:",memory)
})


function randomChange() {
     let lst=[...div]
     let idx=Math.floor(Math.random()*4)
     let rem=lst[idx].style.backgroundColor
     lst[idx].style.backgroundColor="white"
     setTimeout(()=>{lst[idx].style.backgroundColor=rem},100)
     return lst[idx]
}
let highScore=[0];
let memory=[];
let player=[];
for(el of div) {
     el.onclick=(event)=> {
          if (memory.length>0) {
               let clickedEl=event.target
               player.push(clickedEl)
               console.log("player:",player)
          }else{
               alert("First press any key to start the game")
          }


          if (player.length===memory.length) {
               for (let a=0;a<memory.length;a++) {
                    if (memory[a]===player[a]){
                         continue
                    }else{
                         s.innerText=`Score:${memory.length-1}`
                         highScore.push(memory.length-1)
                         memory.splice(0,memory.length)
                         player.splice(0,player.length)
                         body.style.backgroundColor="red"
                    }
               }
               player.splice(0,player.length)
               if (memory.length>0) {
                    memory.push(randomChange())
                    h2.innerText=`Level ${memory.length}`
                    
                    
               }else{
                    h2.innerText=`'Game End'Press any key to start the game`
               }
               
               console.log("memory:",memory)

          hs.innerText=`Highest Score:${Math.max(...highScore)}`
               
          }
     }
}

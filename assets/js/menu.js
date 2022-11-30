let ul=document.querySelector("nav>ul")
let nav=document.querySelector("nav")
let svgmenu=document.querySelector(".menubtn")
let lineBar1=document.querySelector(".bar-1")
let lineBar2=document.querySelector(".bar-2")
let lineBar3=document.querySelector(".bar-3")
document.querySelector(".menubtn").addEventListener("click",()=>{
    setTimeout(() => {
        if (svgmenu.classList.contains("event-menubtn1")) {
            
            setTimeout(() => {
                svgmenu.classList.remove("event-menubtn1")
                svgmenu.classList.add("event-menubtn1-post")
            }, 400);
        }else{svgmenu.classList.remove("event-menubtn1-post");svgmenu.classList.add("event-menubtn1")}
        setTimeout(() => {
            if (svgmenu.classList.contains("event-menubtn2")) {
                svgmenu.classList.remove("event-menubtn2")
                svgmenu.classList.add("event-menubtn2-post")
            }else{svgmenu.classList.remove("event-menubtn2-post");svgmenu.classList.add("event-menubtn2")}
        }, 100);
    }, 200);
    ul.classList.remove("event-menu3")
    if (ul.classList.contains("event-menu1")) {
        setTimeout(()=>{ul.classList.remove("event-menu1")},1000)
    }else{ul.classList.add("event-menu1")}
    setTimeout(()=>{
        if (ul.classList.contains("event-menu2")) {
            ul.classList.add("event-menu3")
            ul.classList.remove("event-menu2")
        }else{ul.classList.add("event-menu2")}
    },200)
})

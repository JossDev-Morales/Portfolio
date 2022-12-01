let width=window.innerWidth
let height=window.innerHeight
let img=document.querySelector(".header__bg-circle>img")
let copyemail=document.querySelector(".pemail")
let copytelefono=document.querySelector(".ptelefono")
//DOM modifications
if (width>=1000) {
    img.src="/assets/sources/Logos/photo desktop.png"
}
console.log(height);

//services
let servicesE=document.querySelector(".services")
let services=[{title:"Design",text:"Diseño de interfaces con perspectiva UX/UI",num:1,svg:`<svg width="110" height="111" viewBox="0 0 110 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55.0001 9.22222C29.6863 9.22222 9.16675 29.8662 9.16675 55.3333C9.16675 80.8005 29.6863 101.444 55.0001 101.444C80.3138 101.444 100.833 80.8005 100.833 55.3333C100.833 29.8662 80.3138 9.22222 55.0001 9.22222Z" fill="white" stroke="#34B0BE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6667 97.608V64.5556L55.0001 32.2778L73.3334 64.5556V97.608" fill="#34B0BE"/>
<path d="M36.6667 97.608V64.5556L55.0001 32.2778L73.3334 64.5556V97.608" stroke="#34B0BE" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6667 64.5555C36.6667 64.5555 41.8322 69.1667 45.8334 69.1667C49.8347 69.1667 55.0001 64.5555 55.0001 64.5555C55.0001 64.5555 60.1655 69.1667 64.1667 69.1667C68.168 69.1667 73.3334 64.5555 73.3334 64.5555" fill="#34B0BE"/>
<path d="M36.6667 64.5555C36.6667 64.5555 41.8322 69.1667 45.8334 69.1667C49.8347 69.1667 55.0001 64.5555 55.0001 64.5555C55.0001 64.5555 60.1655 69.1667 64.1667 69.1667C68.168 69.1667 73.3334 64.5555 73.3334 64.5555" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`},
{title:"Developing",text:"Desarrollo de proyectos e implementacion de ideas adaptadas a la web",num:2},
{title:"research",text:"Investigacion de mercado, diseño y metricas",num:3,svg:`<svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.4167 86.5878C70.6671 86.5878 87.0833 70.265 87.0833 50.1298C87.0833 29.9946 70.6671 13.6718 50.4167 13.6718C30.1662 13.6718 13.75 29.9946 13.75 50.1298C13.75 70.265 30.1662 86.5878 50.4167 86.5878Z" stroke="#34B0BE" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M96.25 95.7023L76.3125 75.8783" stroke="#34B0BE" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
]
function createServices(service) {
    const container=document.createElement("div")
    container.classList.add("cont-services","display-IF",`service${service.num}`,"cont-serv-position")
    
    const i=document.createElement("i")
    i.classList.add("fa-solid","fa-code")
    const title=document.createElement("h2")
    title.textContent=service.title
    const text=document.createElement("p")
    text.textContent=service.text
    if (container.classList.contains("service2")) {
        container.insertAdjacentElement("beforeend",i)
    }else{
        container.insertAdjacentHTML("beforeend",service.svg)
    }
    container.insertAdjacentElement("beforeend",title)
    container.insertAdjacentElement("beforeend",text)

    servicesE.insertAdjacentElement("beforeend",container)
}

//Slider-services
if (width<=1000) {
    document.addEventListener("DOMContentLoaded",()=>{
        let index=0
        if (index==0) {
            createServices(services[0])
            index++
        }
        const leftArrow=document.createElement("div")
        leftArrow.classList.add("arrow","left")
        leftArrow.insertAdjacentHTML("beforeend",'<i class="fa-solid fa-chevron-left"></i>')
        const rightArrow=document.createElement("div")
        rightArrow.classList.add("arrow","right")
        rightArrow.insertAdjacentHTML("beforeend",'<i class="fa-solid fa-chevron-right"></i>')
    
        leftArrow.addEventListener("click",()=>{
            createServices(services[index])
            index--
            console.log(index);
            if (index==-1) {
                index=2
            }
        })
        rightArrow.addEventListener("click",()=>{
            createServices(services[index])
            index++
            if (index==3) {
                index= 0
            }
        })
        servicesE.insertAdjacentElement("beforeend",leftArrow)
        servicesE.insertAdjacentElement("beforeend",rightArrow)
    })
}
let portArrL=document.querySelector(".port__arr-L")
let portArrR=document.querySelector(".port__arr-R")
let anchor=document.querySelector(".portfolio__cont>a")
let imgport=document.querySelector("#port-imgmain")
let index=1
let arregloPortafolio=[{href:"https://graceful-dango-bb058a.netlify.app",src:"/assets/sources/Portfolio/Ourstory.png"},{href:"https://unique-custard-105852.netlify.app",src:"/assets/sources/Portfolio/Ecommerce.jpeg"},{href:"https://lucent-youtiao-e4deb2.netlify.app",src:"/assets/sources/Portfolio/Focusonrelax.jpeg"}]
anchor.href=arregloPortafolio[0].href
imgport.src=arregloPortafolio[0].src
portArrL.addEventListener("click",()=>{
    anchor.href=arregloPortafolio[index].href
    imgport.src=arregloPortafolio[index].src
    index--
    if (index==-1) {
        index=2
    }
})
portArrR.addEventListener("click",()=>{
    anchor.href=arregloPortafolio[index].href
    imgport.src=arregloPortafolio[index].src
    index++
    if (index==3) {
        index= 0
    }
})

copyemail.addEventListener("click",()=>{
    let string=copyemail.textContent
    navigator.clipboard.writeText(string)
    copyemail.classList.add("succescolor")
    setTimeout(() => {copyemail.classList.remove("succescolor")}, 500);
})
copytelefono.addEventListener("click",()=>{
    let string=copytelefono.textContent
    navigator.clipboard.writeText(string)
    copytelefono.classList.add("succescolor")
    setTimeout(() => {copytelefono.classList.remove("succescolor")}, 500);
})
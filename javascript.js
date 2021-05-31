const sliders = document.querySelectorAll(".carousel-inner")
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicators");
console.log(sliders)

for(let i=0;i<sliders.length;i++){
    sliders[i].innerHTML = i + 1
}

let index = 0
let timer = setInterval(autoplay,5000)
function autoplay(){
    nextSlide()
}

function nextSlide(){
    ++index
    if(index == sliders.length){
        index = 0
    }

    console.log(index)
    changeSlide()
}

function prevSlide(){
    index--
    if(index == -1){
        index = sliders.length - 1
    }

    console.log(index)
    changeSlide()
}

function changeSlide(){
    for(let i=0;i<sliders.length;i++){
        sliders[i].classList.remove("active")
    }

    sliders[index].classList.add("active")
    updateIndicator()
}

next.addEventListener("click",function(){
    nextSlide()
    updateIndicator()
    resetTimer()
})

prev.addEventListener("click",function(){
    prevSlide()
    updateIndicator()
    resetTimer()
})

function resetTimer(){
    // while click to indicator or controls buttons stop timer
    clearInterval(timer);
    // then start again
    timer = setInterval(autoplay,5000); 
}

Indicator()

function Indicator(){
    for(let i=0;i<sliders.length;i++){
        let div = document.createElement("div")
        div.setAttribute("onclick","indicateSlide(this)")
        div.id = i
        if(i==0){
            div.className = "active"
        }
        indicator.appendChild(div)
    }
}

function indicateSlide(element){
    index = element.id
    changeSlide()
    updateIndicator()
    resetTimer()
}

function updateIndicator(){
    for(let i=0;i<indicator.children.length;i++){
        indicator.children[i].classList.remove("active")
    }
    indicator.children[index].classList.add("active")
}

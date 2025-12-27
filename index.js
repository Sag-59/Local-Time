const time = document.querySelector("#clock")

setInterval(()=>{
    let now = new Date()
    time.innerHTML = now.toLocaleTimeString()
}, 1000)
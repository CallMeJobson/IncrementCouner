const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerHTML = "0"
  
    const updateCounter = () =>{
        //Grabs the attribute from the HTML
        const target = +counter.getAttribute("data-target") 
        //Adding the + sign converts it from a string to a number.
        const c = +counter.textContent

        const increment = target / 200;
        console.log(increment)

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`

            // Wait 3 mili second
            setTimeout(updateCounter, 3)
        }else{
            counter.textContent = target;
        }
    }
    updateCounter()
})
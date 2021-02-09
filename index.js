const input = document.querySelector("input");
const list = document.querySelectorAll("li");


function debounce (func, wait = 500){
    let timmer;
    return function() {
         let context = this,
            args = arguments
          clearTimeout(timmer)
          timmer = setTimeout(function(){
            func.apply(context, args)
        }, wait)

    }
  

}


function getData(){
    console.log("run")
    list.forEach((current, index) => {
            const upper = this.value.toUpperCase()
       if(current.innerText.toUpperCase().indexOf(upper) > -1){
           
            list[index].style.display = "block";
       }else{
      
        list[index].style.display = "none";
       }

    })  

}









input.addEventListener("keyup", debounce(getData))
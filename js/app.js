document.onload = function() {

    const form = document.querySelector("form")
    const inputs = document.querySelectorAll("input")

    form.addEventListener("submit", () => {
        inputs.forEach((input) =>{
            if (!input.value){
                input.parentElement.classList.add("error");
                console.log("no input element")
            }else{
                input.parentElement.classList.remove("error");
                console.log("yes log")
            }
        })
    }) 
}
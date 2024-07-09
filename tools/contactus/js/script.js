document.addEventListener("readystatechange", () => {
    console.log("--Form has been loadded---");
    if (document.readyState == "complete") {
        const form = document.forms[0];
        const submitButton=document.getElementById("submitButton");
        console.log("====CLICKED in JS Form========{} : {}",form.id,submitButton.id);
        const formSubmitHandler = (event) => {
            event.preventDefault();
            console.log("---Submitting form ----");
            document.getElementById("name");
      

           console.log( " NAME ->",document.getElementById("name").value);

            const formdata = new FormData();
            formdata.append("name", document.getElementById("name").value);
            formdata.append("phone", document.getElementById("phone").value);
            formdata.append("email", document.getElementById("email").value);
            formdata.append("message", document.getElementById("message").value);
            console.log("---Submitting form 2----");
            const requestOptions = {
              method: "POST",
              body: formdata,
              redirect: "follow"
            };
            
            fetch("https://webhook.site/f591cb89-4799-4d66-a6e3-4d7c67081bf2", requestOptions)
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.error(error));


    };
     //submitButton.addEventListener("click", formSubmitHandler);
     form.addEventListener("submit", formSubmitHandler);  
    }    
});

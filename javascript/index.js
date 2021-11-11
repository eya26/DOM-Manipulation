const body = document.body
const onSub = document.getElementById("submit-button").addEventListener("click", e => {    
    var email = document.getElementById("onSubmit1");
    var password = document.getElementById("onSubmit2");
    if ((email.value == "smu@smu.tn") && (password.value =="123456"))
    {
        alert("Welcome")
    }
    else if (email.value != "smu@smu.tn") 
    {
        console.log(email.value + " "+ password.value)
        alert("Wrong email")
    }
    else if (password.value != "123456")
    {
        alert("Wrong password")
    }
    else {
        alert("please fill the form  first")
    }

})
  
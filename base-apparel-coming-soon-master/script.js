let sub = document.getElementById('submit-btn');


function validateEmail(email) 
    {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    }
  


sub.addEventListener('click', function(e){
    let mail = document.getElementById('email').value;
    if(validateEmail(mail) === false) {
        console.log(mail);
        console.log(validateEmail(mail));
        e.preventDefault();
        document
            .getElementById('error')
            .setAttribute('style', 'opacity: 1;');
        document
            .getElementById('error-logo')
            .setAttribute('style', 'opacity: 1;');
        document
            .getElementById('email')
            .setAttribute('style', 'border: solid 2px red;');
        
    }
    
})
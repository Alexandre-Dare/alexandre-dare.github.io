document
    .getElementById('advice-generator')
    .addEventListener('click', function(e) {
        fetch('https://api.adviceslip.com/advice')
            .then(result => result.json())
            .then(data => {
                console.log(data.slip.advice);
                document
                    .getElementById('num')
                    .innerHTML = data.slip.id;
                document
                    .getElementById('advice')
                    .innerHTML = data.slip.advice;
            })
        e.preventDefault();
    })
document.getElementById('submit').addEventListener('click', function submit () {
    window.postMessage("successfully submitted");
    let data = {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value
    }
    console.log(data);
})

const axios = require('axios');

let name = document.getElementById('name');
let team = document.getElementById('team');

let validationResultName = document.getElementById('validation-name');
let validationResultTeam = document.getElementById('validation-team');

const validate = (validationResult) => {
    validationResult.innerText = '...';
    axios.post(validationResult.dataset.path, {input: name.value})
        .then(function(response) {
            if (response.data.valid) {
                validationResult.innerHTML = ":)";
            } else {
                validationResult.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            validationResult.innerText = 'Error: ' + error;
        });
};

name.onkeyup = () => validate(validationResultName);
name.onchange = () => validate(validationResultName);
team.onkeyup = () => validate(validationResultTeam);
team.onchange = () => validate(validationResultTeam);
const defaultHeaders = {'Content-Type': 'application/json'};
const authorizationHeaders = {
    Authorization: 'WGtYUVVOTmtDTE1pNmtGWE9JSmRlWW5nRmxkNUFXVkE=',
    'Content-Type': 'application/',
};

const number_ip = '1141186267';
const user_token = 'bV04-Ie61XQXgH9-F-IkZaUkeHIe5j-O-FFXT1A';

const credentials = `username=${number_ip}&password=${user_token}`;

function connectApi() {
    fetch('', {
        method: 'POST',
        headers: {...defaultHeaders, ...authorizationHeaders},
        body: credentials,
    })
    .then((response) => response.json())
    .then((data) => {
        acess_token = data['acess_token'];  
    })
    .catch((error) => prompt(error));
}

function getToken() {
    const options = {
        method: 'POST', 
        headers,
        body: `token=${acess_token}`,
    };

    fetch('', options).then((response) => {
        response.json;
    })
}

function sendSms(numberPhone, message = false) {
    const authHeaders = {Authorization: `Auth ${acess_token}`};
    
    fetch('', {
        method: 'POST', 
        headers: {...defaultHeaders, ...authHeaders},
        body: JSON.stringify({
            numberPhone,
            message,
        })
    })
    .then((response) => response.json)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");

//import exp from "../02-Country-Search/script.js";

// console.log(exp("turkey"));
const whereAmI = function (lat, lng) {
    //const apiKey = "ec2370d0-7e1d-11ec-afa9-3bc0a3b03ac7";
    const url = `https://app.geocodeapi.io/api/v1/reverse?apikey=ec2370d0-7e1d-11ec-afa9-3bc0a3b03ac7&point.lat=${lat}&point.lon=${lng}`
    fetch(url)
        .then(res =>res.json()) //res.features[0].properties.country
        .then(res => {
            function getCountry(country) {
                let url = "https://restcountries.com/v3.1/name/"
                const request = new XMLHttpRequest;
                request.responseType = "json";
                console.log(request)
                request.onreadystatechange = () => {
                    if (request.readyState === XMLHttpRequest.DONE) {
                        const [data] = request.response;
                        renderCountry(data);
                        console.log(data)
                    }
                }
                request.open('GET', url + country)
                request.send()
            }
            getCountry(res.features[0].properties.country)

        })
        .catch(err => console.log(err))

};


btn.addEventListener("click", displayCountry);

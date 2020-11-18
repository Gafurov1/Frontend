fetch('http://194.58.122.219/test/weather-api-test2/?t=70752da4-1848-4f9e-8d31-92f26791cc45&lat=54&lon=37')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let temp =data.data.fact.temp;
        let feelsLike =data.data.fact.feels_like;
        console.log(data);
        document.write(temp);
/*
        document.write(feelsLike);
*/
    });

$(document).ready(function(){


});
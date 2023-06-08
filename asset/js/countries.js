const loadCountries = ()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data=> displayCountries(data));

}
const displayCountries = countries =>{
    // console.log(countries);
    const countriesHtml = countries.map(country =>getCountriesHtml(country));
    // console.log(countriesHtml);
    const container = document.getElementById('countries');
    // console.log(container);
    container.innerHTML = countriesHtml.join(' ');
}
const getCountriesHtml = country =>{
    console.log(country);
    return `
    <div class="country">
    <h2> ${country.name}</h2>
    <h2> ${country.alpha3Code}</h2>
    <br>
   <img src="${country.flag}" >
    </div>
    `
}
loadCountries()
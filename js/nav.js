fetch('html/nav.html')
.then(res => res.text())
.then(text => {
    let element =  document.getElementById('navbar');
    //copy the html into a new div
    document.getElementById('navbar').innerHTML = text
});

let button = document.getElementById('btn');

function displayDiv(){
    document.getElementById('sec1').style.display = 'block';
    button.style.display = 'none';
    document.getElementById('section2').style.display = 'none';
}


button.addEventListener('click' , displayDiv);
button.addEventListener('mouseover', function(){
    button.style.backgroundColor = "#BB99CD"   
});
button.addEventListener('mouseout', function(){
    button.style.backgroundColor = "#F5EDF7"   
});
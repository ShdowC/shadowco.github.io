let button = document.getElementById('btn');

function displayDiv(){
    document.getElementById('sec1').style.display = 'block';
    button.style.display = 'none';
}


button.addEventListener('click' , displayDiv);
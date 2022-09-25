const btn = document.getElementById('button');
const randomColor = () =>{
    let val = "0123456789ABCDEFG";
    let hash = "#";

    for(let i=0; i<6; i++)
    {
    hash = hash + val[Math.floor(Math.random(val)*16)];
    }
    return hash;
}

    function changeColor()
    {
        document.getElementById('canvas').style.backgroundColor = randomColor();  
    }

btn.addEventListener("click", changeColor);



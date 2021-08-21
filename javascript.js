document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "406px";
    document.getElementById("box").style.width = "425px"
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundImage = "none";
    document.getElementById("box").style.backgroundColor = "blue"
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.5"
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.backgroundImage = "url('https://media.istockphoto.com/vectors/surprise-comic-style-phrase-vector-id517802932?k=6&m=517802932&s=170667a&w=0&h=ZcD4yutDbOEQy6M6zplEcpqrvvh1899WivCEgWzpPfo=')";
    document.getElementById("box").style.backgroundImage.size = "auto";

});
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("heading").style.textAlign = "center"
});
document.getElementById("button6").addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = "red"
});
document.getElementById("button7").addEventListener("click", function(){
    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px";
    document.getElementById("heading").style.textAlign = "left"
    document.getElementById("body").style.backgroundColor = "white"
});
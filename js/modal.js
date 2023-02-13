const body = document.querySelector("body");
const popupAnimete = [
    {
		opacity: 0
	},
    {
        opacity: 1
    },
]
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            document.querySelector(".popup").animate(popupAnimete, 500);
            body.style.overflow = "hidden";
        },
        3000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    body.style.overflow = "auto";
});


const modal = document.querySelector(".popup");

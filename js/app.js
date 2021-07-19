const crousel = document.querySelectorAll("#crousel img");
let i = 0;
crousel.forEach((elem) => {
	elem.style.display = "none";
});

setInterval(() => {
	if (i == 0) {
		crousel[i].style.display = "block";
	} else if (i == crousel.length) {
		crousel[i - 1].style.display = "none";
		crousel[0].style.display = "block";
		i = 0;
	} else {
		crousel[i].style.display = "block";
		crousel[i - 1].style.display = "none";
	}
	i++;
}, 2000);

let star = document.getElementById("star-icon");

function scroll_variant () {
	let scrollY = ( window.scrollY / 2 );
	star.style.transform = 'rotate(' + scrollY + 'deg)';
	console.log(scrollY);
}

setInterval(scroll_variant, 100);

let root_styles = document.querySelector(":root");
let checkbox_value = document.getElementById("switch-button")

checkbox_value.addEventListener('change', function () {
	if ( document.getElementById("switch-button").checked == true ) {
		root_styles.style.setProperty('--background-gradient', 'linear-gradient(70deg, var(--secondary), var(--accent), var(--primary))')
		document.getElementById("switch-button-label").innerHTML = "&#9790;"
	} else {
		root_styles.style.setProperty('--background-gradient', 'linear-gradient(70deg, var(--secondary), #112, #111)')
		document.getElementById("switch-button-label").innerHTML = "&#9728;"
	}
})

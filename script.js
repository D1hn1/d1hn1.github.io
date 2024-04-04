let star = document.getElementById("star-icon");

function scroll_variant () {
	let scrollY = ( window.scrollY / 2 );
	star.style.transform = 'rotate(' + scrollY + 'deg)';
	console.log(scrollY);
}

setInterval(scroll_variant, 100);

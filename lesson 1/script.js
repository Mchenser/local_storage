let text = document.querySelector('textarea');

let val ='';

text.addEventListener ('input', function () {
	val = this.value;
	localStorage.setItem('text', val);
});

window.document.addEventListener('DOMContentLoaded', function(event) {
	const func = () => text.value = localStorage.getItem('text');
	setTimeout(func, 1000);
}, false);
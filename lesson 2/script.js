let text = document.querySelector('#text'),
back = document.querySelector('#back'),
next = document.querySelector('#next'),
arr,
a;

if(localStorage['arr']) {
	var json = localStorage.getItem('arr');
	arr = JSON.parse(json);
	text.value = arr[arr.length -1]
	a = arr.length - 1;
	} else {
	arr = [];
}


text.addEventListener('change', function () {
	arr.push(this.value);
	a = arr.length - 1;
	var json = JSON.stringify(arr);
	localStorage.setItem('arr', json);
})

back.addEventListener('click', function () {
	if(arr.length > 0 && a !== 0) {
	text.value = arr[a - 1];
	a--;
	}
})

next.addEventListener('click', function () {
	if(arr.length > 0 && a < arr.length - 1) {
	text.value = arr[a + 1];
	a++;
	}
})

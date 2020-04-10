let inpText = qSAll('input[type="text"]'),
inpCheckbox = qSAll('input[type="checkbox"]'),
inpRadio = qSAll('input[type="radio"]'),
inpSelect = qS('select'),
inpTextarea = qS('textarea');

window.onload = function(){
	for (let i = 0; i < inpText.length; i++){
	inpText[i].value = get('inpText'+i);
	}
	for (let i = 0; i < inpCheckbox.length; i++){
	if (get('inpCheckbox'+i) === 'true'){
	inpCheckbox[i].checked = true;
	 }
	}
	for (let i = 0; i < inpRadio.length; i++){
	if (get('inpRadio'+i) === 'true'){
	inpRadio[i].checked = true;
	 }
	}
	inpSelect.selectedIndex = get('inpSelect');
	inpTextarea.value = get('inpTextarea');
	};

window.onbeforeunload = function(){
	for (let i = 0; i < inpText.length; i++){
	set('inpText'+i, inpText[i].value);
}
for (let i = 0; i < inpCheckbox.length; i++){
	set('inpCheckbox'+i, inpCheckbox[i].checked);
}
for (let i = 0; i < inpRadio.length; i++){
	set('inpRadio'+i, inpRadio[i].checked);
	}
	set('inpSelect', inpSelect.selectedIndex);
	set('inpTextarea', inpTextarea.value);
};

function get(id){return localStorage.getItem(id);}
function set(id, val){return localStorage.setItem(id, val);}

function qS(val){return document.querySelector(val);}
function qSAll(val){return document.querySelectorAll(val);}
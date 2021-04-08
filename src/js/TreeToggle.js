//Фунция, отвечающая за работу списка, а именно, складывание элементов в дереве и их разворачивание
function TreeToggle(event) {
	event = event || window.event;
	let clickedElem = event.target || event.srcElement;

	if (!hasClass(clickedElem, 'Expand')) {
		return; 
	}

	let node = clickedElem.parentNode;
	if (hasClass(node, 'ExpandLeaf')) {
		return; 
	}


	let newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen';

	let re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/;
	node.className = node.className.replace(re, '$1'+newClass+'$3');
}


function hasClass(elem, className) {
	return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className);
}
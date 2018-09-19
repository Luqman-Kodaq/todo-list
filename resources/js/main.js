var data = {
	todo: [],
	completed: []
}

 // Focus on the input on reload
document.addEventListener('DOMContentLoaded', inputFocus);

// Focus Function
function inputFocus() {
	var input = document.getElementById('item');
	input.focus();
}

// Get Submit Button
submit = document.querySelector('#submit');

// Event for submit button clicked
submit.addEventListener('click', addTodo);

// Submit button function
function addTodo() {
	var value = document.getElementById('item').value;
	if (value) {

		addItemTodo(value);
		document.getElementById('item').value = '';
		document.getElementById('item').focus();

		data.todo.push(value);
	}
};

// DOM Elements created on submit button clicked
function addItemTodo(text) {
	var list = document.getElementById('todo');

	var div = document.createElement('div');
	div.classList.add('row','todo');

	var item = document.createElement('div');	
	item.classList.add('col-md-9', 'col-xm-12');

	var li = document.createElement('li');
	li.id = 'main';
	li.innerText = text;

	var btnDiv = document.createElement('div');
	btnDiv.classList.add('col-md-3', 'col-xm-12');

	var completedBtn = document.createElement('a');
	completedBtn.id = 'taskDone';
	completedBtn.classList.add('btn', 'btn-outline-success', 'btn-sm');
	completedBtn.innerText = 'Complete';

	// Add click event for completed Item
	completedBtn.addEventListener('click', completeItem);

	var removeBtn = document.createElement('a');
	removeBtn.classList.add('btn', 'btn-outline-danger', 'btn-sm');
	removeBtn.innerText = 'remove';

	// Add click event for removing Item
	removeBtn.addEventListener('click', removeItem);

	btnDiv.appendChild(completedBtn);
	btnDiv.appendChild(removeBtn);

	item.appendChild(li);
	div.appendChild(item);
	list.appendChild(div);
	div.appendChild(btnDiv);

	list.insertBefore(div, list.childNodes[0]);
}

// Remove Item Function
function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;
	// var value = item.innerText;
	
	// if (id === 'todo') {
	// 	data.todo.splice(data.todo.indexOf(value), 1);
	// } else {
	// 	data.completed.splice(data.completed.indexOf(value), 1);
	// }
	// console.log(data);
	parent.removeChild(item);
}

// Complete Item Function
function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;
	// var value = document.querySelector('li').innerText;

	// Check if the item should be added to the Completed list or to be re-added to the todo list
	var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
	
	// if (id === 'todo') {
	// 	data.todo.splice(data.todo.indexOf(value), 1);
	// 	data.completed.push(value);
	// } else {
	// 	data.completed.splice(data.completed.indexOf(value), 1);
	// 	data.todo.push(value);
	// }
	console.log(item);
	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}
const turtle_arr = ["turtle1.jpeg", "turtle2.jpg", "turtle3.jpg", "turtle4.jpg", "turtle5.jpg"];
let current_photo = 0;

document.getElementById('image').src = turtle_arr[current_photo];

function next() {
	if(current_photo == 4) {
		current_photo = 0;
	} else {
		current_photo++;
	}
	document.getElementById('image').src = turtle_arr[current_photo];
}

function previous() {
	if(current_photo == 0) {
		current_photo = 4;
	} else {
		current_photo--;
	}
	document.getElementById('image').src = turtle_arr[current_photo];
}

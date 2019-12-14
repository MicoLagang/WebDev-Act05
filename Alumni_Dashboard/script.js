function home() {
	document.getElementById("home").style.display = "block";
	document.getElementById("menu").style.display = "none";
	document.getElementById("message").style.display = "none";
	document.getElementById("notification").style.display = "none";

	document.getElementById("homeIcon").classList.add("active");
	document.getElementById("menuIcon").classList.remove("active");
	document.getElementById("messageIcon").classList.remove("active");
	document.getElementById("notificationIcon").classList.remove("active");
}

function menu() {
	document.getElementById("home").style.display = "none";
	document.getElementById("menu").style.display = "block";
	document.getElementById("message").style.display = "none";
	document.getElementById("notification").style.display = "none";

	document.getElementById("menuIcon").classList.add("active");
	document.getElementById("homeIcon").classList.remove("active");
	document.getElementById("messageIcon").classList.remove("active");
	document.getElementById("notificationIcon").classList.remove("active");
}

function message() {
	document.getElementById("home").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("message").style.display = "block";
	document.getElementById("notification").style.display = "none";
	
	document.getElementById("homeIcon").classList.remove("active");
	document.getElementById("menuIcon").classList.remove("active");
	document.getElementById("messageIcon").classList.add("active");
	document.getElementById("notificationIcon").classList.remove("active");
}

function notification() {
	document.getElementById("home").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("message").style.display = "none";
	document.getElementById("notification").style.display = "block";
	
	document.getElementById("homeIcon").classList.remove("active");
	document.getElementById("menuIcon").classList.remove("active");
	document.getElementById("messageIcon").classList.remove("active");
	document.getElementById("notificationIcon").classList.add("active");
}
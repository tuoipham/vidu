function UserName(){
	var x = document.getElementById("username");
	var m = document.getElementById("msgName");
		if (x.value.length == 0){

			m.style.color = "red";
			m.innerHTML = "nhập tên đăng nhập";
	    }
		else if(x.value.length <7){
			m.style.color = "red";
			m.innerHTML = "tên quá ngắn";
		}
		else {
			m.innerHTML = "tên hợp lệ";
			m.style.color = "green";
		}
}
document.getElementById("username").onkeyup = function() {
	UserName();
};
//Js cho phần fullname//
function fullName(){
	var y = document.getElementById("full-name");
	var m = document.getElementById("Name");
		if (y.value.length == 0){

			m.style.color = "red";
			m.innerHTML = "nhập họ và tên";
	    }
		else if(y.value.length <7){
			m.style.color = "red";
			m.innerHTML = "họ tên quá ngắn";
		}
		else {
			m.innerHTML = " họ tên hợp lệ";
			m.style.color = "green";
		}
}
document.getElementById("full-name").onkeyup = function() {
	fullName();
};
//password//
function password(){
	var z = document.getElementById("pass-word");
	var m = document.getElementById("pass");
		if (z.value.length == 0){

			m.style.color = "red";
			m.innerHTML = "nhập mật khẩu"
	    }
		else if(z.value.length <7){
			m.style.color = "red";
			m.innerHTML = "mật khẩu quá ngắn";
		}
		else {
			m.innerHTML = " mật khẩu hợp lệ";
			m.style.color = "green";
		}
}

document.getElementById("pass-word").onkeyup = function() {
	password();
};
//repeatpassword//
function repeatpassword(){
	var d = document.getElementById("Repeat-Password");
	var i= document.getElementById("pass-word");
	var t = document.getElementById("Repeat");
		if (d.value.length == 0){

			t.style.color = "red";
			t.innerHTML = "nhập lại mật khẩu"
	    }
		else if(d.value.length != i.value.length){
			t.style.color = "red";
			t.innerHTML = "mật khẩu không khớp";
		}
		else {
			
			t.style.color = "green";
			t.innerHTML = "mật khẩu hợp lệ";
		}
}
document.getElementById("Repeat-Password").onkeyup = function() {
	repeatpassword();
};
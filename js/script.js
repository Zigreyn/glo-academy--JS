function app(name, age) {
	checkAge();

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills(){
		let skills = ["java", "git", "sql"];

		for (let i = 0; i < skills.length; i++) {
			document.write("<br>"+"Я владею: "+skills[i]+"</br>");
		}
	}

	function checkAge(){
		if (age >= 18) {
			alert("Добро пожаловать");
		}else{
			alert("Подрасти еще немного")
		}
	}

	function calcPow(num){

		alert("Квадрат числа " + num + " равен " + num*num);
	}

	calcPow(4);
	showSkills();
}

let nameReq = prompt('Введите ваше имя', '')
let ageReq = prompt('Введите ваш возвраст', '');

app(nameReq, +ageReq);

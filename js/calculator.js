/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-11 11:25:47
 * @version $Id$
 */

var clearShow = (key) => {
	if (key == "AC") {
		showNum1 = "";
		showNum2 = "";
		history.innerHTML = "";
		show1.innerHTML = "";
		show2.innerHTML = "";
		option.innerHTML = "";
	}
}

var showNum1 = "";
var showNum2 = "";
var Inputs = (key) => {
	showNum1 = showNum1.toString();
	showNum2 = showNum2.toString();
	// 删除上一位
	if (key == "del") {
		if (option.innerHTML == "") {
			showNum1 = showNum1.slice(0, showNum1.length - 1);
			show1.innerHTML = showNum1;
		} else {
			showNum2 = showNum2.slice(0, showNum1.length - 1);
			show2.innerHTML = showNum2;
		}
		return;
	}
	// 浮点数
	if (key == ".") {

	}
	//整数
	if (key != '%' && key != '÷' && key != 'x' && key != '-' && key != '+' && key != '=' && key != '') {
		if (option.innerHTML == "") {
			showNum1 += key;
			show1.innerHTML = showNum1;
		} else {
			if (!showNum1) {
				showNum1 = 0;
				show1.innerHTML = showNum1;
			}
			showNum2 += key;
			show2.innerHTML = showNum2;
		}
	} else {
		option.innerHTML = key;
	}

}

// 计算结果
var res;
var Count = (key) => {
	if (option.innerHTML) {
		switch (option.innerHTML) {
			case '+':
				res = Number(showNum1) + Number(showNum2);
				break;
			case '-':
				res = Number(showNum1) - Number(showNum2);
				break;
			case 'x':
				res = Number(showNum1) * Number(showNum2);
				break;
			case '÷':
				res = Number(showNum1) / Number(showNum2);
				break;
			case '%':
				res = Number(showNum1) % Number(showNum2);
				break;
		}
		res = (res != undefined) ? res : "别胡乱来";
		history.innerHTML = showNum1 + " " + option.innerHTML + " " + showNum2 + "=" + res;
		history.style.display = "";
		show1.innerHTML = "";
		showNum1 = "";
		showNum2 = "";
		show2.innerHTML = "";
		option.innerHTML = "";
	} else {
		res = showNum1;
		history.innerHTML = showNum1 + " " + option.innerHTML + " " + showNum2 + "=" + res;
		history.style.display = "";
		show1.innerHTML = "";
		showNum1 = "";
		showNum2 = "";
		show2.innerHTML = "";
		option.innerHTML = "";
	}

}
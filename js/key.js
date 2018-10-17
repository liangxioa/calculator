/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-11 11:31:25
 * @version $Id$
 */
// 获取节点
const keys = document.getElementById('keys');
const show1 = document.getElementById('show1');
const show2 = document.getElementById('show2');
const option = document.getElementById('option');
const history = document.getElementById('history');
history.style.display = "none";
// 设置参数
const allkey = {
	'normal': ['AC', 'del', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', '.', '='],
	'advanced': []
}
var key = "";

// 函数
var createKey = (kind) => {

	if (kind == "normal") {
		for (var i in allkey.normal) {
			var AC = "clearShow('" + allkey.normal[i] + "')";
			var Count = "Count('" + allkey.normal[i] + "')";
			var Inputs = "Inputs('" + allkey.normal[i] + "')";
			if (allkey.normal[i] == "AC") {
				key += "<div class='noraml-key color-orange' onclick=" + AC + ">" + allkey.normal[i] + "</div>";
			} else if (allkey.normal[i] == "=") {
				key += "<div class='noraml-key bg-orange' onclick=" + Count + ">" + allkey.normal[i] + "</div>";
			} else {
				key += "<div class='noraml-key' onclick=" + Inputs + ">" + allkey.normal[i] + "</div>";
			}

		}
	}
	keys.innerHTML = key;
}
createKey("normal");
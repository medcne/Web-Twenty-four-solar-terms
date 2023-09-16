let day = document.querySelector('.day')
let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let jieqi = document.querySelector('.jieqi')
let p1 = document.getElementsByClassName('p1')
let p2 = document.getElementsByClassName('p2')
let tips = document.querySelector('.tips')
console.log(tips.innerHTML);
let timearr = [{
	"mon": 4,
	"day": 21,
	"name": "小满",
	"sen": "麦穗渐满，丰收在望",
	"senn": "愿你在小满的时节里，心想事成，梦想成真"
}, {
	"mon": 5,
	"day": 6,
	"name": "芒种",
	"sen": "芒种时节，播种希望",
	"senn": "愿你在芒种的日子里，播下希望的种子，收获幸福的果实"
}, {
	"mon": 5,
	"day": 21,
	"name": "夏至",
	"sen": "夏至日长，阴阳互换",
	"senn": "愿你在夏至的时候，享受阳光的温暖，拥抱生命的美好"
}, {
	"mon": 6,
	"day": 7,
	"name": "小暑",
	"sen": "小暑炎热，消暑解渴",
	"senn": "愿你在小暑的日子里，清凉一夏，舒心一年"
}, {
	"mon": 6,
	"day": 23,
	"name": "大暑",
	"sen": "大暑酷暑，避暑养生",
	"senn": "愿你在大暑的时节里，避开酷暑的困扰，保持良好的状态"
}, {
	"mon": 7,
	"day": 8,
	"name": "立秋",
	"sen": "立秋入秋，凉爽来临",
	"senn": "愿你在立秋的日子里，感受秋风的凉爽，迎接新的开始"
}, {
	"mon": 7,
	"day": 23,
	"name": "处暑",
	"sen": "处暑过后，暑气消散",
	"senn": "愿你在处暑的时候，告别暑气的烦恼，迎来清爽的心情"
}
,{
	"mon": 8,
	"day": 23,
	"name": "秋分",
	"sen": "处暑过后，暑气消散",
	"senn": "愿你在处暑的时候，告别暑气的烦恼，迎来清爽的心情"
}]

function check(i) {
	if (i < 10) {
		i = '0' + i
	}
	return i
}
let pointer = 0

function timer() {
	var date = new Date(2023, timearr[pointer].mon, timearr[pointer].day, 0, 0, 0);
	var now = new Date();
	var delta = (date - now) / 1000; // 秒差值
	while (delta <= 0) {
		pointer += 1
		date = new Date(2023, timearr[pointer].mon, timearr[pointer].day, 0, 0, 0);
		now = new Date();
		delta = (date - now) / 1000;
	}


	// 把差值换算成:  天时分秒
	var days = parseInt(delta / 3600 / 24);
	var hours = parseInt(delta % (3600 * 24) / 3600);
	var minutes = parseInt(delta % 3600 / 60);
	var seconds = parseInt(delta % 60);

	days = check(days)
	hours = check(hours)
	minutes = check(minutes)
	seconds = check(seconds)
	day.innerHTML = days
	hour.innerHTML = hours
	min.innerHTML = minutes
	sec.innerHTML = seconds
	jieqi.innerHTML = timearr[pointer].name
	p1[0].innerHTML = timearr[pointer].sen
	p2[0].innerHTML = timearr[pointer].senn
	tips.innerHTML = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
}
timer();
setInterval(timer, 1000);

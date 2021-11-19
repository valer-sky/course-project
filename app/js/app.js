// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)
// Custom JS
// document.addEventListener('DOMContentLoaded', () => {

	

// })
//timer
const deadline = '2021-11-30';

function getTimeRemaining(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date()),
		days = Math.floor( (t/(1000 *60 *60 * 24)) ),
		seconds = Math.floor((t/1000)%60),
		minutes = Math.floor((t/1000/60)%60),
		hours = Math.floor( (t/(1000*60*60) % 24));

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}
function getZero(num){
	if (num >= 0 && num < 10) { 
		return `0${num}`;
	} else {
		return num;
	}
}
function setClock(selector, endtime) {

	const timer = document.querySelector(selector),
		days = timer.querySelector("#days"),
		hours = timer.querySelector('#hours'),
		minutes = timer.querySelector('#minutes'),
		seconds = timer.querySelector('#seconds');


	const updateClock = () => {
	  const t = getTimeRemaining(endtime);

	  days.innerHTML = getZero(t.days);
	  hours.innerHTML = getZero(t.hours);
	  minutes.innerHTML = getZero(t.minutes);
	  seconds.innerHTML = getZero(t.seconds);

	  if (t.total <= 0) {
		  clearInterval(timeInterval);
	  }
	}
	const timeInterval = setInterval(updateClock, 1000);
	updateClock();
}
setClock('.timer', deadline);



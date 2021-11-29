// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)
// Custom JS
// document.addEventListener('DOMContentLoaded', () => {

	

// })
// "use strict"
// стрелочное меню

// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return(
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };
// if (isMobile.any()) {
// 	document.body.classList.add('_touch');
//   let menuArrows = document.querySelectorAll('.menu__arrow');
//   if (menuArrows.length > 0) {
// 	  for(let index = 0; index < menuArrows.length; index++) {
// 		  const menuArrow = menu[index];
// 		  menuArrow.addEventListener("click", function(e) {
// 			  menuArrow.parentElement.classList.toggle('_acrive');
// 		  });
// 	  }

//   }
// } else {
// 	document.body.classList.add('_pc');
// }


// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');   /*---убирается прокрутка при открытом меню бургер--*/
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			
			if (iconMenu.classList.contains('_active')){
			document.body.classList.remove('_lock');   /*---убирается прокрутка при открытом меню бургер--*/
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');

			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
	
//timer
const deadline = '2021-12-31';

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



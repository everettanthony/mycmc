(function() {
	const search = document.querySelector('.input-search');
	const navTrigger = document.querySelector('.icon-nav-trigger');
	const navList = document.querySelectorAll('.dashboard-nav-list li');
	const parentNav = document.querySelectorAll('.parent-nav');

	function addEventListeners() {
		// Add styles to search input based on where the mouse is clicked
		search.addEventListener('blur', function(evt) {
			evt.target.classList.remove('input-dirty');  
	
			if (evt.target.value !== '') {
				evt.target.classList.add('input-dirty');  
			}
		});

		// When pressing ENTER, submit search and clear searh input value
		search.addEventListener('keyup', function(evt) {
			if (evt.keyCode === 13) {
				evt.preventDefault();
				initSearch(evt);
			}
		});
	
		// Toggle left column drawer menu
		navTrigger.addEventListener('click', function(evt) {
			document.body.classList.toggle('drawer-open'); 
		});

		// Close sub nav when clicked outside of left column
		document.addEventListener('click', function(evt) {
			var leftCol = document.querySelector('.dashboard-col-left-col'),
				targetElement = evt.target;
		
			do {
				if (targetElement === leftCol) {
					return;
				}
				targetElement = targetElement.parentNode;
			} while (targetElement);
		
			closeSubNav();
		});
	}

	// Events triggered when the browser size changes
	function windowResizeEvents() {
		if (window.innerWidth > 1400) {
			document.body.classList.remove('drawer-open'); 
		}

		closeSubNav();
	}

	// Header search bar function
	function initSearch(e) {
		e.target.value = '';
	}

	// Function to close the left nav sub menu
	function closeSubNav() {
		parentNav.forEach(function(el) {
			el.classList.remove('sub-nav-active');
		});
	}

	// Add styles to left nav items to indicate when an item is active
	function initSideNav() {
		const linkClick = function(e) {
			e.preventDefault();
			const active = document.querySelector('.active');
			const hasParentNav = e.currentTarget.classList.contains('parent-nav');
			if (active) {
				active.classList.remove('active');
			}
			e.currentTarget.classList.add('active');

			if (hasParentNav) {
				e.currentTarget.classList.toggle('sub-nav-active');
			}
		}

		navList.forEach(function(el) {
			el.addEventListener('click', linkClick);
		});
	}

	addEventListeners();
	initSideNav();
	window.onresize = windowResizeEvents;
	document.getElementById("year").innerHTML = new Date().getFullYear();
})();
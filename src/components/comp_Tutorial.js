var tips = {
	welcome: {
		text: '<b>Welcome to Happy Chicken Farm!</b> We care about the well-being of our chickens. A happy chicken is a tasty chicken!<br><br><em>Use the arrow keys or WASD to walk around.</em>',
	},
	cleaning: {
		text: '<b>A chicken made a doo-doo!</b> Filth makes chickens unhappy. The happier a chicken is throughout its lifetime, the better and more valueable the meat.<br><br><em>Press ' + actions.clean.key + ' to activate cleaning, then move to a dirty spot and press Space until it\'s clean.</em>',
	},
	moreCleaning: {
		text: '<b>Don\'t forget to keep the pen clean!</b><br><br><em>Press ' + actions.clean.key + ' to activate cleaning, then move to a dirty spot and press Space until it\'s clean.</em>',
		prerequisites: ['cleaning'],
	},
	buyChicken: {
		text: '<b>You have some savings.</b> Money can be turned into chickens. More chickens means more future income.<br><br><em>Press ' + actions.chicken.key + ', move into the pen, then press Space to buy a chicken.</em>',
		prerequisites: ['cleaning'],
	},
	buyAnotherChicken: {
		text: '<b>You have plenty of money.</b> Buy another chicken or two to be certain of future income.<br><br><em>Press ' + actions.chicken.key + ', move into the pen, then press Space to buy a chicken.</em>',
		prerequisites: ['buyChicken'],
	},
	buyFood: {
		text: '<b>The feeder is empty!</b> Good food throughout a chicken\'s lifetime contributes to the quality of the meat.<br><br><em>Press ' + actions.food.key + ', move to the feeder, then press Space to fill it up.</em>',
	},
	sellChicken: {
		text: '<b>A chicken is ' + params.ripeAgeYears + ' years old now, ready to be sold.</b> Remember: the happier and better fed it has been, the higher the profit.<br><br><em>Walk up to the indicated chicken, hold Shift to pick it up, then carry it to the chopping block to sell it.</em>',
	},
	overripeChicken: {
		text: '<b>A chicken is ' + params.overripeAgeYears + ' years old now, and its value is declining.</b> Sell it before it gets too stringy.<br><br><em>Walk up to the indicated chicken, hold Shift to pick it up, then carry it to the chopping block to sell it.</em>',
		prerequisites: ['sellChicken'],
	},
	unhappyChicken: {
		text: '<b>Some chickens are unhappy.</b> Make sure the pen is clean and that chickens have enough space.',
	},
	hungryChicken: {
		text: '<b>Some chickens have empty bellies.</b> Make sure that the feeder is full, and that chickens can reach it.',
	},
	buyFence: {
		text: '<b>The pen is getting crowded.</b> Chickens get unhappy if they don\'t have enough space. It\'s time to expand.<br><br><em>Use actions ' + actions.fence.key + ' and ' + actions.gate.key + ' to place fences and gates. Use action ' + actions.sell.key + ' to sell the old ones.</em>',
	},
	rentWarning: {
		text: '<b>You don\'t have enough money to pay the rent at the end of this year.</b><br><br><em>You can go negative once, but if you\'re already in debt when the rent is due, you will be declared bankrupt!</em>',
	},
	rentCritical: {
		text: '<b>You are in debt.</b> If you are still in debt at the end of the year, you will be declared bankrupt.<br><br><em>Sell some chickens to get some cash. You may even have to sell them before they are mature.</em>',
		prerequisites: ['rentWarning'],
	},
};

Crafty.c('Tutorial', {
	init: function() {
		this.requires('Delay');
		this.tipQueue = [];
		this.currentTip = null;
		this.tipElement = document.getElementById('tip');
	},

	showTip: function(name) {
		if (!tips[name].shown) {
			var prerequisites = tips[name].prerequisites || [];
			for (var i = 0; i < prerequisites.length; i++) {
				if (!tips[prerequisites[i]].shown) {
					return;
				}
			}
			tips[name].shown = true;
			this.tipQueue.push(name);
			this.processQueue();
		}
	},

	hideTip: function(name) {
		if (this.currentTip === name) {
			this.tipElement.className = 'hidden';
			this.currentTip = null;
			this.processQueue();
		}
	},

	processQueue: function() {
		if (!this.currentTip && this.tipQueue.length > 0) {
			var name = this.tipQueue.shift();
			this.tipElement.innerHTML = tips[name].text;
			this.tipElement.className = 'visible';
			this.currentTip = name;
		}
	},
});

// shorthand functions
function showTip(name) { Crafty('Tutorial').showTip(name); }
function hideTip(name) { Crafty('Tutorial').hideTip(name); }

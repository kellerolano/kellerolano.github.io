var tabLabels = document.querySelectorAll(".parent-tab > label");
var childTabs = document.querySelectorAll(".child-tab > label");

for(var label of tabLabels) {
	label.addEventListener("click", function () {
		var alreadyOpen = this.querySelector(".icon").classList.contains("open");
		removeAllOpenClassesFromParentTabs();
		removeAllOpenClassesFromChildTabs();
		if ( ! alreadyOpen) {
			this.querySelector(".icon").classList.add("open");
			this.parentElement.querySelector(".content").classList.add("open");
		}
	});
}

for(var label of childTabs) {
	label.addEventListener("click", function () {
		var alreadyOpen = this.querySelector(".icon").classList.contains("open");
		removeAllOpenClassesFromChildTabs();
		if ( ! alreadyOpen) {
			this.querySelector(".icon").classList.add("open");
			this.parentElement.querySelector(".sub-content").classList.add("open");
		}
	});
}

function removeAllOpenClassesFromParentTabs() {
	tabLabels.forEach(function (label) {
		label.querySelector(".icon").classList.remove("open");
		label.parentElement.querySelector(".content").classList.remove("open");
	});
}

function removeAllOpenClassesFromChildTabs() {
	childTabs.forEach(function (label) {
		label.querySelector(".icon").classList.remove("open");
		label.parentElement.querySelector(".sub-content").classList.remove("open");
	});
}

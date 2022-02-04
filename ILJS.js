const d01 = document.querySelectorAll("h2");
const d02 = new Array();
d01.forEach(element => {
	d02.push(element.textContent);
	
	const d03 = document.createElement("a");
	d03.setAttribute("name", element.textContent);
	element.append(d03);
	
	const d04 = document.createElement("a");
	d04.setAttribute("href", "#");
	d04.textContent = "início";
	element.parentElement.insertBefore(d04, element.nextElementSibling);
});

const list = document.querySelector("ol");
topico.forEach(topico => {
	const item = document.createElement("li");
	const link = document.createElement("a");
	list.append(item);
	item.append(link);
	link.setAttribute("href", `#${topico}`);
	link.textContent = topico;

});

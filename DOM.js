document.addEventListener("DOMContentLoaded", daday)
let tamanho = 2;

        function daday(){
			div = document.createElement("div");
			div.style.fontSize = `${tamanho}em`;
			div.innerHTML = `<button onclick="maior()">+</button>
            <button onclick="menor()">-</button>
			`;
			document.body.prepend(div)
		}

        function maria() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${tamanho}em`;
        }
        function maior() {
			if (tamanho < 10) {
				tamanho += 0.10;
				maria();
			}
        }
        function menor() {
            if (tamanho > 0.10) {
                tamanho -= 0.10;
                maria();
            }
        }

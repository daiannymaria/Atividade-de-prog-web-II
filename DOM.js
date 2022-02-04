document.addEventListener("DOMContentLoaded", daday)
let mediano = 2;

        function daday(){
			div = document.createElement("div");
			div.style.fontSize = `${controle}em`;
			div.innerHTML = `<button onclick="maior()">+</button>
            <button onclick="menor()">-</button>
			`;
			document.body.prepend(div)
		}
        }
        function menor() {
            if (controle > 0.7) {
                controle -= 0.7;
                mediano();
            }
        }

        function mediano() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${controle}em`;
        }

        function maior() {
			if (controle < 7) {
				controle += 0.7;
				mediano();
			}


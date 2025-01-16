document.addEventListener("DOMContentLoaded", () => {
    // Fisher-Yates algorithm
    let pairs = [
        { fraction: "8/4", match: "2" },
        { fraction: "1/2", match: "3/6" },
        { fraction: "16/12", match: "4/3" },
        { fraction: "90/100", match: "9/10" },
        { fraction: "12y/20y", match: "3/5" },
        { fraction: "100/10", match: "10" },
        { fraction: "7/8", match: "21/24" },
        { fraction: "10x/4x", match: "5/2" },
        { fraction: "abc/abc", match: "1" },
        { fraction: "33/60", match: "11/20" },
        { fraction: "12/16", match: "3/4" },
        { fraction: "25/35", match: "5/7" },
        { fraction: "12/4", match: "3" },
        { fraction: "3/7", match: "9/21" },
        { fraction: "15/18", match: "5/6" },
        { fraction: "24/27", match: "8/9" },
        { fraction: "4/44", match: "1/11" },
        { fraction: "5z/25z", match: "1/5" },
        { fraction: "4/5", match: "40/50" },
        { fraction: "2/5", match: "22/55" },
        { fraction: "14/2", match: "7" },
        { fraction: "w/10w", match: "1/10" },
        { fraction: "12/42", match: "4/14" },
        { fraction: "30/1000", match: "3/100" },
        { fraction: "1/8", match: "2/16" },
        { fraction: "4k/6k", match: "2/3" },
        { fraction: "2/9", match: "6/27" },
        { fraction: "21/22", match: "21000/22000" },
        { fraction: "48/4", match: "12" },
        { fraction: "10/6", match: "5/3" }
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffles() {
        let flatArray = [];
        let cards = document.getElementsByClassName("item");
        let shuffledObj = shuffleArray(pairs.slice(0, cards.length / 2));
        for (let i = 0; i < shuffledObj.length; i++) {
            flatArray.push(shuffledObj[i].fraction);
            flatArray.push(shuffledObj[i].match);
        }
        flatArray = shuffleArray(flatArray);
        for (let i = 0; i < flatArray.length; i++) {
            cards[i].innerText = flatArray[i];
            cards[i].onclick = isClicked; // Add onclick handler
        }
    }

    function isClicked(event) {
        let cardClicked = event.target;
        cardClicked.classList.add("clicked");
        let clicked = document.getElementsByClassName("clicked");
        if (clicked.length == 2) {
            if (isMatch(clicked[0].innerText, clicked[1].innerText)) {
                clicked[0].style.backgroundColor = "gray";
                clicked[1].style.backgroundColor = "gray";

                clicked[0].onclick = null; // Disable further clicks
                clicked[1].onclick = null;

                clicked[1].classList.remove("clicked");
                clicked[0].classList.remove("clicked");
            } else {
                setTimeout(() => {
                    clicked[0].classList.remove("clicked");
                    clicked[1].classList.remove("clicked");
                }, 1000); // Delay to show mismatch
            }
        }
    }

    function isMatch(item1, item2) {
        for (let i = 0; i < pairs.length; i++) {
            if (
                (item1 === pairs[i].fraction && item2 === pairs[i].match) ||
                (item1 === pairs[i].match && item2 === pairs[i].fraction)
            ) {
                return true;
            }
        }
        return false;
    }

    shuffles();
});

const body = document.body;
let count = 0;
let str = "";

function elementPerson() {
    const eForm = document.createElement("form");
    const eInput = document.createElement("input");
    const eBtn = document.createElement("button");
    eForm.className = "num-form";
    eInput.className = "num-input";
    eBtn.className = "num-btn";
    eForm.setAttribute("onsubmit", "return false");
    eInput.setAttribute("type", "number");
    eInput.setAttribute("placeholder", "몇 명이 참가하나요?");
    eBtn.innerText = "게임 시작";
    body.appendChild(eForm);
    eForm.appendChild(eInput);
    eForm.appendChild(eBtn);
    eBtn.addEventListener("click", () => {
        const value = Number(eInput.value);
        if(value == 0) return;
        startBtnEvent(eForm ,eInput.value);
    })
}

elementPerson();

function elementWord() {
    const eText = document.createElement("p");
    const eForm = document.createElement("form");
    const eInput = document.createElement("input");
    const eBtn = document.createElement("button");
    eText.className = "text"
    eForm.className = "text-form";
    eInput.className = "text-input";
    eBtn.className = "text-btn";
    eForm.setAttribute("onsubmit", "return false");
    eInput.setAttribute("placeholder", "제시어를 입력하시오");
    eText.innerText = "제시어 입력 중.."
    eBtn.innerText = "제시어 입력";
    body.appendChild(eText);
    body.appendChild(eForm);
    eForm.appendChild(eInput);
    eForm.appendChild(eBtn);
    eForm.addEventListener("submit", () => {
        wordInputEvent(eText, eInput);
        eInput.value = "";
    })
}

function startBtnEvent(form) {
    form.parentNode.removeChild(form);
    elementWord();
}

function wordInputEvent(text, input) {
    let texts = String(text.innerText);
    if(count == 0) {
        text.innerText = `제시어 : ${input.value}`;
        count++;
    } else {
        if(texts.charAt(texts.length-1) == input.value.charAt(0)) {
            text.innerText = `제시어 : ${input.value}`;
        }
    }
}
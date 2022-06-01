"use-strict";

import { HTMLElement } from "../utils/HtmlElement.js";

//? Add RegExp function
function verifForm(input, reg) {
    let regEx = new RegExp(reg, 'g');
    return regEx.test(input.value);
};

//! add invalid fonction box
function noValidateForm(firstName, email, object) {
    let spanName = document.querySelector('label[for=firstName]');
    let spanEmail = document.querySelector('label[for=email]');
    let spanObject = document.querySelector('label[for=object]');

    !verifForm(firstName, "^[A-Za-z\\s]{3,25}$") ? spanName.innerHTML = "Name invalid" : spanName.innerHTML = "";
    !verifForm(email, "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$") ? spanEmail.innerHTML = "Email invalid" : spanEmail.innerHTML = "";
    !verifForm(object, "^[A-Za-z\\s]{3,20}$") ? spanObject.innerHTML = "Object invalid" : spanObject.innerHTML = "";

    firstName.value.length < 3 ? spanName.innerHTML = "Name invalid : characters mini 3" : null;
    firstName.value.length > 25 ? spanName.innerHTML = "Name invalid : characters max 25" : null;

    object.value.length < 3 ? spanObject.innerHTML = "object invalid : characters mini 3" : null;
    object.value.length > 20 ? spanObject.innerHTML = "object invalid : characters max 20" : null;

    speChar(firstName, spanName);
    speChar(object, spanObject);

}

function speChar(input, span) {
    let charSpe = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    for (let i = 0; i < input.value.length; i++) {
        if (charSpe.indexOf(input.value.charAt(i)) != -1) {
            span.innerHTML = `${input.name} invalid : cannot use spécial characters`
        }
    }
}

export function validateForm(form, modal, pModal, container) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let labels = document.querySelectorAll("form fieldset label");
        let inputs = document.querySelectorAll("form fieldset input");
        noValidateForm(form.firstName, form.email, form.object);

        let myForm = {
            name: form.firstName.value,
            email: form.email.value,
            object: form.object.value,
            message: form.message.value
        };
        let init = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(myForm)
        };
        if (verifForm(form.firstName, "^[A-Za-z\\s]{3,25}$") &&
            verifForm(form.email, "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$") &&
            verifForm(form.object, "^[A-Za-z\\s]{3,20}$")
        ) {
            fetch("../server/send.form.php", init)
                .then(res => {
                    if (res.ok) {
                        pModal.textContent = "Form send, thanks for ure mail !";
                        pModal.className = "valid";
                        let cancelModal = new HTMLElement("span", "cancel_modal").text("x");

                        labels.forEach(el => el.style.visibility = "hidden");
                        inputs.forEach(el => el.value = "");

                        pModal.appendChild(cancelModal);
                        modal.appendChild(pModal);
                        container.appendChild(modal);
                        modal.addEventListener("click", () => modal.remove());
                    } else {

                        pModal.textContent = "Error, send mail failed, try again.";
                        pModal.className = "invalid";
                        let cancelModal = new HTMLElement("span", "cancel_modal").text("x");

                        labels.forEach(el => el.style.visibility = "visible");
                        pModal.appendChild(cancelModal);
                        modal.appendChild(pModal);
                        container.appendChild(modal);

                        modal.addEventListener("click", () => modal.remove());
                    }
                });
        } else {
            pModal.textContent = "Form invalid, please verify ure data";
            pModal.className = "invalid";
            let cancelModal = new HTMLElement("span", "cancel_modal").text("x");

            labels.forEach(el => el.style.visibility = "visible");
            pModal.appendChild(cancelModal);
            modal.appendChild(pModal);
            container.appendChild(modal);

            modal.addEventListener("click", () => modal.remove());
        }

    })
};
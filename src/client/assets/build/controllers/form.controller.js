"use-strict";

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

export function validateForm(form, modal, container) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

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
            // fetch("./php/postForm.php", init)
            //     .then(res => {
            //         if (res.ok) {
            //             let alert = document.getElementById("alert");
            //             alert.style.height = "initial";
            //             setTimeout(() => {
            //                 alert.style.height = "0";
            //             }, 3500)
            //         }
            //         return res.json()
            //     })
            //     .then(res => {
            //         console.log(res);

            //     })
        } else {
            let inputs = document.querySelectorAll("form fieldset input");
            // alert('Formulaire Invalid !')
            inputs.forEach(el => el.style.display = "block");
            container.appendChild(modal);
            modal.addEventListener("click", () => modal.remove());

        }

    })
};

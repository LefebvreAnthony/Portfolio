"use-strict";

import { Canvas } from "../components/Canvas.js";
import { AllOfMe } from "./allOfMe.content.js";

export const AboutsContents = {
    aboutMe() {
        let fragment = new DocumentFragment();
        let aboutMe = document.createElement("div");
        let myCvContainer = document.createElement("div");
        let myName = document.createElement("p");
        let myDesc = document.createElement("p");
        let pDownload = document.createElement("p");
        let svgDownload = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        //*container education
        let educationContainer = document.createElement("div");
        educationContainer.setAttribute("id", "container_cv--education")
        let titleEducation = document.createElement("h2");
        let ulEducation = document.createElement("ul")
        for (let key in AllOfMe.education) {
            let li = document.createElement("li");
            let h4 = document.createElement("h4");
            let dateEducation = document.createElement("p");
            h4.textContent = key;
            dateEducation.textContent = AllOfMe.education[key];
            li.append(h4, dateEducation);
            ulEducation.appendChild(li);
        }
        titleEducation.textContent = "Education";

        //*Container work
        let workContainer = document.createElement("div");
        workContainer.setAttribute("id", "container_cv--work");
        let titleWork = document.createElement("h2");
        titleWork.textContent = "Work experience";
        let ulWork = document.createElement("ul");

        for (let key in AllOfMe.work) {
            let liWork = document.createElement('li');
            let h4 = document.createElement("h4");
            let dateWork = document.createElement("p");
            h4.textContent = key;
            dateWork = AllOfMe.work[key];
            liWork.append(h4, dateWork);

            if (key == "OnlineFormaPro") {
                let ul = document.createElement("ul");
                for (let k in AllOfMe.workDescription.OnlineFormaPro) {
                    let li = document.createElement("li");
                    li.textContent = AllOfMe.workDescription.OnlineFormaPro[k];
                    ul.appendChild(li);
                }
                liWork.appendChild(ul);
            }
            ulWork.appendChild(liWork);
        }
        workContainer.append(titleWork, ulWork);

        pDownload.setAttribute("id", "download-popup")
        pDownload.textContent = "View CV here";
        svgDownload.innerHTML = `
        <path d="M10.4875 18.9938C8.51713 19.4896 6.7956 20.6879 5.64638 22.3634C4.49716 24.039 3.99936 26.0766 4.24649 28.0933C4.49363 30.1101 5.46869 31.9671 6.98849 33.3157C8.50829 34.6642 10.4682 35.4113 12.5 35.4167H14.5834M25 45.8334V27.0834V45.8334ZM25 45.8334L19.7917 41.6667L25 45.8334ZM25 45.8334L30.2084 41.6667L25 45.8334Z" stroke="#EBEAEC" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.9792 14.8708C32.2671 12.0512 30.5095 9.60778 28.0628 8.03594C25.616 6.46409 22.6631 5.88142 19.8026 6.40603C16.9422 6.93064 14.3882 8.52328 12.6585 10.8611C10.9287 13.1989 10.1526 16.107 10.4875 18.9958C10.4875 18.9958 10.8063 20.8333 11.4583 21.875" stroke="#EBEAEC" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.4167 35.4167C36.8876 35.4157 38.3416 35.1032 39.6831 34.4997C41.0245 33.8963 42.2229 33.0156 43.1995 31.9156C44.176 30.8156 44.9085 29.5213 45.3488 28.1178C45.789 26.7143 45.927 25.2335 45.7537 23.7728C45.5804 22.3122 45.0998 20.9048 44.3434 19.6432C43.5869 18.3817 42.5719 17.2947 41.3651 16.4538C40.1583 15.6128 38.7871 15.0369 37.3417 14.7641C35.8963 14.4913 34.4095 14.5277 32.9792 14.8709L30.2084 15.625" stroke="#EBEAEC" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        `;
        svgDownload.setAttribute("viewBox", "0 0 50 50");
        svgDownload.setAttribute("width", "50");
        svgDownload.setAttribute("height", "50");
        svgDownload.setAttribute("id", "download");
        svgDownload.setAttribute("fill", "none");
        svgDownload.addEventListener("click", () => { window.open("./assets/img/cv/cvDev.pdf") });

        aboutMe.setAttribute("id", "container_about_me");
        myCvContainer.setAttribute("id", "container_cv");
        myDesc.className = "soft";
        myName.textContent = "Hi, my name is Anthony, i'm a developper web fullStack.";
        myDesc.textContent = "Former cook i new find my happiness in this job, here are somes links to find out more about my career.";


        educationContainer.append(titleEducation, ulEducation);
        myCvContainer.append(educationContainer, workContainer, svgDownload, pDownload);
        aboutMe.append(myName, myDesc);
        fragment.append(aboutMe, myCvContainer);

        return fragment;
    },

    skills() {

        let fragment = new DocumentFragment();
        let canvas = document.createElement("canvas");

        canvas.setAttribute("id", "canvas");
        Canvas(canvas);

        fragment.append(canvas);

        return fragment;
    },

    contactMe() {

        let fragment = new DocumentFragment();
        let containertitle = document.createElement("div");
        containertitle.setAttribute("id", "container_contact--title")
        let titleContact = document.createElement("h2");
        titleContact.textContent = "Contact me here...";

        let containerForm = document.createElement("div");
        let form = document.createElement("form");
        let btnSubmit = document.createElement("button");
        btnSubmit.setAttribute("id", "submit");
        btnSubmit.textContent = "Send";
        btnSubmit.addEventListener("click", (e) => {
            e.preventDefault();
        })
        containerForm.setAttribute("id", "container_form");
        form.innerHTML = `
        <fieldset>
            <label hidden for="firstName">Name</label>
            <input type="text" id="firstName" name="firstName" placeHolder="Name">
            <label hidden for="email">Email</label>
            <input type="email" id="email" name="email" placeHolder="Email">
            <label hidden for="object">Object</label>
            <input type="text" id="object" name="object" placeHolder="Object">
        </fieldset>
            <label hidden for="message">Message</label>
            <textarea id="message" name="message" rows="7" cols="35" placeHolder="type ure text"></textarea>
        `;
        form.appendChild(btnSubmit)
        containertitle.appendChild(titleContact);
        containerForm.appendChild(form);

        fragment.append(containertitle, containerForm);

        return fragment;

    }
}
"use-strict";

import { HTMLElement, SVGElement } from "../../base/HtmlElement.js";
import { Canvas } from "../components/Canvas.js";
import { AllOfMe } from "./allOfMe.content.js";

export const AboutsContents = {
    aboutMe() {
        let fragment = new DocumentFragment();
        let aboutMe = new HTMLElement("div", "container_about_me").element;
        let myCvContainer = new HTMLElement("div", "container_cv").element;
        let myName = new HTMLElement("p").text("Hi, my name is Anthony, i'm a developper web fullStack.");
        let myDesc = new HTMLElement("p");
        myDesc.attributes([["class", "soft"]]);
        myDesc.text("Former cook i new find my happiness in this job, here are somes links to find out more about my career.");
        //*container education
        let educationContainer = new HTMLElement("div", "container_cv--education").element;
        let titleEducation = new HTMLElement("h2").text("Education");
        let ulEducation = new HTMLElement("ul").element;
        for (let key in AllOfMe.education) {
            let li = new HTMLElement("li").element;
            let h4 = new HTMLElement("h4").text(key);
            let dateEducation = new HTMLElement("p").text(AllOfMe.education[key]);
            li.append(h4, dateEducation);
            ulEducation.appendChild(li);
        };
        //*Container work
        let workContainer = new HTMLElement("div", "container_cv--work").element;
        let titleWork = new HTMLElement("h2").text("Work experience");
        let ulWork = new HTMLElement("ul").element;
        for (let key in AllOfMe.work) {
            let liWork = new HTMLElement("li").element;
            let h4 = new HTMLElement("h4").text(key);
            let dateWork = new HTMLElement("p").text(AllOfMe.work[key]);
            liWork.append(h4, dateWork);

            if (key == "OnlineFormaPro") {
                let ul = new HTMLElement("ul").element;
                for (let k in AllOfMe.workDescription.OnlineFormaPro) {
                    let li = new HTMLElement("li").text(AllOfMe.workDescription.OnlineFormaPro[k]);
                    ul.appendChild(li);
                }
                liWork.appendChild(ul);
            }
            ulWork.appendChild(liWork);
        }
        workContainer.append(titleWork, ulWork);

        //* cloud download element //
        let pDownload = new HTMLElement("p", "download-popup").text("View CV here");
        let svgDownload = new SVGElement("svg", "download").attributes([["viewBox", " 0 0 50 50"], ["width", "50"], ["height", "50"], ["fill", "none"]]);
        svgDownload.innerHTML = `
        <path d="M10.4875 18.9938C8.51713 19.4896 6.7956 20.6879 5.64638 22.3634C4.49716 24.039 3.99936 26.0766 4.24649 28.0933C4.49363 30.1101 5.46869 31.9671 6.98849 33.3157C8.50829 34.6642 10.4682 35.4113 12.5 35.4167H14.5834M25 45.8334V27.0834V45.8334ZM25 45.8334L19.7917 41.6667L25 45.8334ZM25 45.8334L30.2084 41.6667L25 45.8334Z" stroke="#EBEAEC" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.9792 14.8708C32.2671 12.0512 30.5095 9.60778 28.0628 8.03594C25.616 6.46409 22.6631 5.88142 19.8026 6.40603C16.9422 6.93064 14.3882 8.52328 12.6585 10.8611C10.9287 13.1989 10.1526 16.107 10.4875 18.9958C10.4875 18.9958 10.8063 20.8333 11.4583 21.875" stroke="#EBEAEC" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.4167 35.4167C36.8876 35.4157 38.3416 35.1032 39.6831 34.4997C41.0245 33.8963 42.2229 33.0156 43.1995 31.9156C44.176 30.8156 44.9085 29.5213 45.3488 28.1178C45.789 26.7143 45.927 25.2335 45.7537 23.7728C45.5804 22.3122 45.0998 20.9048 44.3434 19.6432C43.5869 18.3817 42.5719 17.2947 41.3651 16.4538C40.1583 15.6128 38.7871 15.0369 37.3417 14.7641C35.8963 14.4913 34.4095 14.5277 32.9792 14.8709L30.2084 15.625" stroke="#EBEAEC" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        `;

        svgDownload.addEventListener("click", () => { window.open("./assets/img/cv/cvDev.pdf") });

        //Add to fragment
        educationContainer.append(titleEducation, ulEducation);
        myCvContainer.append(educationContainer, workContainer, svgDownload, pDownload);
        aboutMe.append(myName, myDesc.element);
        fragment.append(aboutMe, myCvContainer);

        return fragment;
    },

    skills() {

        let fragment = new DocumentFragment();
        let canvas = new HTMLElement("canvas", "canvas").element;
        console.log(canvas);
        Canvas(canvas);

        fragment.append(canvas);

        return fragment;
    },

    contactMe() {

        let fragment = new DocumentFragment();
        let containertitle = new HTMLElement("div", "container_contact--title").element;
        let titleContact = new HTMLElement("h2").text("Contact me here...");

        let containerForm = new HTMLElement("div", "container_form").element;
        let form = new HTMLElement("form").element;
        let btnSubmit = new HTMLElement("button", "submit").text("Send");
        btnSubmit.addEventListener("click", (e) => {
            e.preventDefault();
        })
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
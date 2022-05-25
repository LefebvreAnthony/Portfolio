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
                    console.log(AllOfMe.workDescription.OnlineFormaPro[k]);
                    let li = document.createElement("li");
                    li.textContent = AllOfMe.workDescription.OnlineFormaPro[k];
                    ul.appendChild(li);
                }
                liWork.appendChild(ul);
            }
            ulWork.appendChild(liWork);
        }
        workContainer.append(titleWork, ulWork);


        aboutMe.setAttribute("id", "container_about_me");
        myCvContainer.setAttribute("id", "container_cv");
        myDesc.className = "soft";
        myName.textContent = "Hi, my name is Anthony, i'm a developper web fullStack.";
        myDesc.textContent = "Former cook i new find my happiness in this job, here are somes links to find out more about my career.";


        educationContainer.append(titleEducation, ulEducation);
        myCvContainer.append(educationContainer, workContainer)
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

        return fragment;

    }
}
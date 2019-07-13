import {mxFirebase} from './mx';
import riot from 'riot';
import './index.css';
import './mx.css';

import "./tags/homepage.tag";
import "./tags/signin.tag";
import route from "riot-route";



var firebaseConfig = {
    apiKey: "AIzaSyCBlDFhagaooP7GY9oCosTQehzDr0GUfxo",
    authDomain: "minhanh-project.firebaseapp.com",
    databaseURL: "https://minhanh-project.firebaseio.com",
    projectId: "minhanh-project",
    storageBucket: "",
    messagingSenderId: "1093019322491",
    appId: "1:1093019322491:web:50de53adcbeb1ff6"
};

mxFirebase.init(firebaseConfig);

route.base("/");

route("/home", () => {
    const homePage = riot.mount("div#root", "homepage")
})

route("/signin", () => {
    const signIn = riot.mount("div#root", "signin");
    document.getElementById("sign-in-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
            await mxFirebase.signIn(email, password);
            console.log("success");
            window.location.href = "/home"
        } catch(err) {
            document.getElementById("error-message").innerText = err.message;
        }
    });
})

route("/signup", () => {
    const homePage = riot.mount("div#root", "signup");
    document.getElementById("")
})

route("/tubers", () => {
    const homePage = riot.mount("div#root", "tubers")
})




route.start(true);
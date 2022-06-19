document.querySelector("#logo img").addEventListener("click", logofunc)

function logofunc() {
    window.location.href = "index.html"
}

document.querySelector("#create").addEventListener("click", createfunction);

function createfunction() {
    window.location.href = "instavideo.html"
}

document.querySelector("#learn").addEventListener("click", learnfunction);

function learnfunction() {
    window.location.href = "blog.html"
}


document.querySelector("#pricing").addEventListener("click", pricingfunction);

function pricingfunction() {
    window.location.href = "pricing.html"
}

document.querySelector("#enterprise").addEventListener("click", enterprisefunction);

function enterprisefunction() {
    window.location.href = "enterprise.html"
}

document.querySelector("#casestudy").addEventListener("click", casefunction);

function casefunction() {
    window.location.href = "casestudy.html"
}

document.querySelector("#btn1").addEventListener("click", loginfunction);

function loginfunction() {
    window.location.href = "login.html"
}

document.querySelector("#btn2").addEventListener("click", signupfunction);

function signupfunction() {
    window.location.href = "signup.html"
}

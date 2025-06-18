"use strict";
const form = document.querySelector(".ts-contact-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    var _a, _b, _c;
    e.preventDefault();
    console.log("click");
    const emailInput = (_a = document.getElementById("ts-email-input")) === null || _a === void 0 ? void 0 : _a.value.trim();
    const subjectInput = (_b = document.getElementById("ts-subject-input")) === null || _b === void 0 ? void 0 : _b.value.trim();
    const bodyInput = (_c = document.getElementById("ts-body-input")) === null || _c === void 0 ? void 0 : _c.value.trim();
    if (!emailInput || !subjectInput || !bodyInput) {
        alert("Please fill in all fields");
    }
    else {
        fetch("https://formspree.io/f/xblykqdp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: emailInput,
                subject: subjectInput,
                message: bodyInput,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("Message sent successfully!");
            }
            else {
                alert("Something went wrong.");
            }
        });
        document.getElementById("ts-email-input").value = "";
        document.getElementById("ts-subject-input").value =
            "";
        document.getElementById("ts-body-input").value = "";
    }
});

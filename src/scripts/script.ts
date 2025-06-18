const form = document.querySelector(".ts-contact-form");
form?.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("click");

	const emailInput = (
		document.getElementById("ts-email-input") as HTMLInputElement
	)?.value.trim();
	const subjectInput = (
		document.getElementById("ts-subject-input") as HTMLInputElement
	)?.value.trim();
	const bodyInput = (
		document.getElementById("ts-body-input") as HTMLInputElement
	)?.value.trim();

	if (!emailInput || !subjectInput || !bodyInput) {
		alert("Please fill in all fields");
	} else {
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
			} else {
				alert("Something went wrong.");
			}
		});

		(document.getElementById("ts-email-input") as HTMLInputElement).value = "";
		(document.getElementById("ts-subject-input") as HTMLInputElement).value =
			"";
		(document.getElementById("ts-body-input") as HTMLInputElement).value = "";
	}
});

interface IProject {
	name: string;
	summary: string;
	image: string;
	icons: string[];
}

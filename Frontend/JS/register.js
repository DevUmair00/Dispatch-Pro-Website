form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    //Collect Form Data -> Create JS Object To Send To Server

    let first_name = document.getElementById("first_Name").value;

    let last_name = document.getElementById("last_Name").value;


    const registrationData = {

        name: `${first_name} ${last_name}`,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        operating_state: document.getElementById("operating-state").value,

        experience: document.getElementById("years-of-experience").value,

        truck_type: document.getElementById("truck-type").value,

        no_of_trucks: document.getElementById("number-of-trucks").value,

        mc_no: document.getElementById("mc-dot-number").value,

        truck_year: document.getElementById("truck-year").value,

        preferred_lane: document.getElementById("operating-Lanes").value
    };

    console.log(registrationData);

    try {

        const response = await fetch(
            "http://localhost:8080/api/register",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(registrationData)
            }
        )

        if (response.ok) {
            const data = await response.json();

            console.log(data);

            alert("Quote Request Submitted Successfully");

            form.reset();
        }
        else {
            alert("Failed To Submit Form");
        }

    }
    catch (error) {
        console.log(error);

        alert("Server Error");
    }
});
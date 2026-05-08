const form = document.getElementById("contactForm");


form.addEventListener("submit", async function (e) {

    e.preventDefault();

    let firstName = document.getElementById("first-name").value;

    let lastName = document.getElementById("last-name").value;

    // Collect Form Data
    const contactData = {


        name: `${firstName} ${lastName}`,
        
        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        truck_type: document.getElementById("truck-type").value,

        no_of_trucks: document.getElementById("number-of-trucks").value,

        operating_state: document.getElementById("operating-lanes").value,

        note: document.getElementById("additional-notes").value
    };

    console.log(contactData);

    try {

        const response = await fetch(
            "http://localhost:8080/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(contactData)
            }
        );

        if(response.ok)
        {
            const data = await response.json();

            console.log(data);

            alert("Quote Request Submitted Successfully");

            form.reset();
        }
        else
        {
            alert("Failed To Submit Form");
        }

    }
    catch(error)
    {
        console.log(error);

        alert("Server Error Found");
    }

});
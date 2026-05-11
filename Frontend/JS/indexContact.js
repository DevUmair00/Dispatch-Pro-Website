const form = document.getElementById("instantContactForm");


form.addEventListener("submit", async function (e) {

    e.preventDefault();


    // Collect Form Data
    const contactData = {


        name: document.getElementById("name").value,
        
        phone: document.getElementById("phone").value,

        truck_type: document.getElementById("truck-type").value,

        operating_state: document.getElementById("operating-lanes").value,

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

        alert("Server Error");
    }

}); 
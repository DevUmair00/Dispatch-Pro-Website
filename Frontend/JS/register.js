const URL = "https://cat-facts.herokuapp.com/facts";

const getData = async () => {

    console.log("Getting Data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
};
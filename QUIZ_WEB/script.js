document
  .getElementById("responseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send data to the server
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Responses submitted successfully!");
          this.reset(); // Reset the form
        } else {
          alert("Submission failed: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your responses: " + error.message);
      });
  });

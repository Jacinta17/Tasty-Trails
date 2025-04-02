document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Get values from form
        const name = document.getElementById("name").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const guests = document.getElementById("guests").value;

        if (!name || !date || !time || !guests) {
            alert("Please fill in all fields!");
            return;
        }

        console.log("Submitting booking:", { name, date, time, guests });

        try {
            const db = window.db;
            const addDoc = window.addDoc;
            const collection = window.collection;

            const docRef = await addDoc(collection(db, "bookings"), {
                name: name,
                date: date,
                time: time,
                guests: parseInt(guests)
            });

            console.log("Booking stored with ID: ", docRef.id);
            alert("Booking Successful!");
            bookingForm.reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Booking failed! Check console for details.");
        }
    });
});

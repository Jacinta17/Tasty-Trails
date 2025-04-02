import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const db = getFirestore();
const bookingsTable = document.getElementById("bookingsTable");

onSnapshot(collection(db, "bookings"), (snapshot) => {
    bookingsTable.innerHTML = `<tr>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Guests</th>
    </tr>`;
    
    snapshot.forEach((doc) => {
        const booking = doc.data();
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>${booking.guests}</td>
        `;
        bookingsTable.appendChild(row);
    });
});

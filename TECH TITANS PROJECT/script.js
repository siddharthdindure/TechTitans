const form = document.getElementById('ride-form');
const ridesList = document.getElementById('rides-list');


function fetchRides() {

    const rides = [
        { driverName: "Alice", pickup: "123 Main St", drop: "456 Elm St", date: "2024-10-20", seats: 3, emergencyContact: "123-456-7890" },
        { driverName: "Bob", pickup: "789 Oak St", drop: "101 Pine St", date: "2024-10-21", seats: 2, emergencyContact: "987-654-3210" }
    ];

    ridesList.innerHTML = rides.map(ride => `
        <li>
            ${ride.driverName} offers a ride from ${ride.pickup} to ${ride.drop} on ${new Date(ride.date).toLocaleDateString()} (Seats: ${ride.seats})
            <button onclick="bookRide('${ride.driverName}', '${ride.pickup}', '${ride.drop}', '${ride.date}', ${ride.seats}, '${ride.emergencyContact}')">Book</button>
        </li>
    `).join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rideData = {
        driverName: form.driverName.value,
        pickup: form.pickup.value,
        drop: form.drop.value,
        date: form.date.value,
        seats: form.seats.value,
        emergencyContact: form.emergencyContact.value
    };

  
    localStorage.setItem('rideDetails', JSON.stringify(rideData));

  
    window.location.href = 'confirmation.html';
});


function bookRide(driverName, pickup, drop, date, seats, emergencyContact) {
    const myRides = JSON.parse(localStorage.getItem('myRides')) || [];
    myRides.push({ driverName, pickup, drop, date, seats, emergencyContact });
    localStorage.setItem('myRides', JSON.stringify(myRides));
    alert('Ride booked successfully! You can view it in the "My Rides" page.');
}

fetchRides();

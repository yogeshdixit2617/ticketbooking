const ticketForm = document.getElementById('ticketForm');
const ticketList = document.getElementById('ticketList');
const fromSelect = document.getElementById('from');
const destinationSelect = document.getElementById('destination');
const priceInput = document.getElementById('price');

// List of Indian cities with airports
const cities = [
    "Agartala", "Agra", "Ahmedabad", "Aizawl", "Amritsar", "Aurangabad",
    "Bagdogra", "Bangalore", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai",
    "Coimbatore", "Dehradun", "Delhi", "Dibrugarh", "Dimapur", "Gaya",
    "Goa", "Gorakhpur", "Guwahati", "Hyderabad", "Imphal",
    "Indore", "Jaipur", "Jammu", "Kolkata", "Lucknow", "Mumbai",
    "Patna", "Pune", "Ranchi", "Siliguri", "Srinagar", "Thiruvananthapuram", "Varanasi"
];
function redirectToPage() {
    window.location.href = 'file:///C:/Users/Yogesh%20Dixit/OneDrive/Documents/Desktop/Airplane-Ticket-Mangement-System--main/Book%20Tickets.html'; // Replace with the desired URL
}

function redirectTopage2(){
    window.location.href ='file:///C:/Users/Yogesh%20Dixit/OneDrive/Documents/Desktop/Airplane-Ticket-Mangement-System--main/index.html'
}
// Populate dropdowns with city options
function populateDropdowns() {
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        fromSelect.appendChild(option.cloneNode(true)); // Add to "From" dropdown
        destinationSelect.appendChild(option); // Add to "To" dropdown
    });
}

// Populate dropdowns on load
populateDropdowns();

// Update price dynamically based on cities
function updatePrice() {
    const from = fromSelect.value;
    const to = destinationSelect.value;
    if (from && to && from !== to) {
        priceInput.value = `₹${Math.floor(Math.random() * 4000) + 2000}`; // Random price
    } else {
        priceInput.value = '';
    }
}

// Event listeners for price update
fromSelect.addEventListener('change', updatePrice);
destinationSelect.addEventListener('change', updatePrice);

// Generate a unique ticket ID
function generateTicketID() {
    return `TID-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

// Handle form submission
ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const from = fromSelect.value;
    const to = destinationSelect.value;
    const price = priceInput.value;

    // Validate form inputs
    if (!name || !email || !phone || !from || !to || from === to) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const ticketID = generateTicketID();
    const ticketHTML = `
        <div class="ticket">
            <p><strong>Ticket ID:</strong> ${ticketID}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>From:</strong> ${from}</p>
            <p><strong>To:</strong> ${to}</p>
            <p><strong>Price:</strong> ${price}</p>
        </div>
    `;

    // Add ticket to the list
    ticketList.innerHTML += ticketHTML;

    // Reset the form
    ticketForm.reset();
    priceInput.value = '';
});

// Clear ticket history
document.getElementById('clearTickets').addEventListener('click', () => {
    ticketList.innerHTML = '';
});
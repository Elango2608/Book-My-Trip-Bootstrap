const bookingForm = document.getElementById("bookingForm");
const travelDate = document.getElementById("travelDate");

const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

travelDate.min = localToday;
travelDate.value = localToday;

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const tripType = document.getElementById("tripType").value;
    const location = document.getElementById("location").value.trim();
    const date = travelDate.value;
    const rooms = document.getElementById("rooms").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;

    if (!location) {
        alert("Please enter your destination.");
        return;
    }

    alert(
        "Your search details:\n\n" +
        "Trip: " + tripType + "\n" +
        "Destination: " + location + "\n" +
        "Date: " + date + "\n" +
        "Rooms: " + rooms + "\n" +
        "Adults: " + adults + "\n" +
        "Children: " + children
    );
});

document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("subscribeMessage");

    if (email) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
        this.reset();
    }
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const message = document.getElementById("signupMessage");

    message.textContent = "Welcome, " + name + "! This is a demo signup form.";
    message.style.color = "green";
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.getElementById("loginMessage");

    message.textContent = "Demo login submitted. Connect a backend to authenticate.";
    message.style.color = "green";
});

const hotelList = document.getElementById("hotelList");
const hotelItems = Array.from(hotelList.children);

document.getElementById("hotelNext").addEventListener("click", function () {
    if (hotelItems.length > 1) {
        hotelList.appendChild(hotelItems.shift());
        hotelItems.push(hotelList.lastElementChild);
    }
});

document.getElementById("hotelPrev").addEventListener("click", function () {
    if (hotelItems.length > 1) {
        hotelList.insertBefore(hotelItems[hotelItems.length - 1], hotelList.firstElementChild);
        hotelItems.unshift(hotelItems.pop());
    }
});
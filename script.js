$(document).ready(function () {
    $('.wish-lists').on('mouseover', function () {
        $('.wish-box').css('transform', 'translateX(0)');
    });

    $('.wish-lists').on('mouseout', function () {
        const containerWidth = $('.wish-lists').width();
        const totalWidth = $('.wish-box').length * $('.wish-box').outerWidth(true);
        const maxTranslate = totalWidth - containerWidth;
        $('.wish-box').css('transform', 'translateX(' + -maxTranslate + 'px)');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const apiResponse = ["Wish 1", "Wish 2", "Wish 3", "Wish 4", "Wish 5"];

    const wishContainer = document.getElementById("wish-container");

    apiResponse.forEach((wish, index) => {
        const wishBox = document.createElement("div");
        wishBox.className = "wish-box";
        wishBox.textContent = wish; // Set the wish text
        wishContainer.appendChild(wishBox); // Append wish box to the container
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the "Edit Profile" button element
    const editProfileBtn = document.getElementById("editProfileBtn");

    // Add a click event listener to the button
    editProfileBtn.addEventListener("click", function() {
        alert("Edit Profile button clicked!");
        // Add your code to handle the profile editing functionality
    });
});
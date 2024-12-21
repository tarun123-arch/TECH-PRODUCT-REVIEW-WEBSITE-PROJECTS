// Get the review list element
const reviewList = document.getElementById("reviewList");

// Load reviews from LocalStorage when the page loads
window.onload = function() {
    loadReviews();
};

// Function to load reviews from LocalStorage
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviewList.innerHTML = '';  // Clear existing reviews

    reviews.forEach((review, index) => {
        const reviewItem = document.createElement("li");
        reviewItem.textContent = review;
        reviewList.appendChild(reviewItem);
    });
}

// Function to submit a new review
function submitReview() {
    const reviewText = document.getElementById("reviewText").value.trim();

    if (reviewText) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(reviewText);  // Add the new review

        // Save the reviews back to LocalStorage
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Reload the reviews
        loadReviews();

        // Clear the textarea
        document.getElementById("reviewText").value = '';
    } else {
        alert("Please enter a review before submitting.");
    }
}

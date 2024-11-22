let profileButton = document.querySelector(".chat-list__profile");
let settingProfile = document.querySelector(".profile-settings");

profileButton.addEventListener("click", function() {
    if (settingProfile.style.display === "none") {
        settingProfile.style.display = "flex";
    } else {
        settingProfile.style.display = "none";
    }
});

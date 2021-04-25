$('.header-avt').attr("src", localStorage.getItem("avatar"))
$(".header-avt").on("click", () => {
    window.location.href = "/userInfo.html"
})
    if(localStorage.getItem("IsLogin") != "true") {
        window.location = "register.html"
    }
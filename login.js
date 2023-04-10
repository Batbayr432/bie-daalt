const email = document.querySelector(".emails");
const password = document.querySelector(".passwords");
const loginBtn = document.getElementById("login");
const userData = JSON.parse(localStorage.getItem("userData"));
const loginDefualt = document.querySelector(".loginDefualt");
const user = document.querySelector(".user");
const form = document.querySelector("form");
const container = document.querySelector(".container-form");
const mainContainerUser = document.querySelector(".forms-container");
let userLogin = "";
let UserUpdateInfo = "";
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let loginEmail = email.value;
  let loginPassword = password.value;

  if (userData) {
    let isUserValid = userData.find((user) => {
      return user.email === loginEmail && user.password === loginPassword;
    });

    if (isUserValid) {
      if (isUserValid.email === "admin@gmail.com") {
        console.log("first");
        window.location.href = "/admin.html";
      } else {
        // alert("Танд энэ өдрийн мэнд хүргэе " + isUserValid.name);
        form.style.display = "none";
        container.classList.add("form");
        userLogin = `
        <form
              action=""
              method="post"
              class="loginDefualt"
              enctype="multipart/form-data"
            >
              <h3>My Account</h3>
              <div class="img">
                <img src="${isUserValid.img}" alt="" />
              </div>
              <h1 class="proName">${isUserValid.name}</h1>
              <input
                type="submit"
                name="update"
                id="updateProfile"
                value="Update profile"
                class="btn update"
              />
              <input
                type="submit"
                name="goback"
                id="goBack"
                value="Welcom to  LANN market "
                class="btn goBack"
              />
        `;
        mainContainerUser.innerHTML = userLogin;
      }
      const goBack = document.getElementById("goBack");
      goBack.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "/index.html";
      });
    } else {
      alert("Нууц үг буруу");
    }
  } else {
    console.log("Мэдээлэл олдсонгүй");
  }
});
const userJson = JSON.parse(localStorage.getItem("userList"));

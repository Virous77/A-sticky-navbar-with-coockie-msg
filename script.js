//Sticky Navbar
const nav = document.querySelector(".nav");

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) nav.classList.remove("sticky");
  else nav.classList.add("sticky");
};
const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObs.observe(header);

//Coockie Msg
const message = document.createElement("div");
message.classList.add("cookie-message");

message.innerHTML =
  'we use cookied for improved functionality and analytics. <button class= "btn btn--close-cookie">Got it!</button>';
header.append(message);

const fact1 = document.querySelector(".btn--close-cookie");
fact1.addEventListener("click", () => message.remove());

message.style.backgroundColor = "white";
message.style.padding = "6px 0";

//////
const button = document.querySelector(".button");
const list = document.querySelector(".nav-list");
console.log(button);

button.addEventListener("click", () => {
  list.classList.toggle("show");
});

// 휴대전화에서 "메뉴" 버튼을 누르면 메뉴를 열고 닫습니다.
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// 메뉴 항목을 누르면 메뉴를 닫습니다.
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// 지금 보고 있는 구역의 메뉴에 밑줄을 표시합니다.
const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((section) => observer.observe(section));

// 맨 아래 저작권 연도를 올해로 자동 표시합니다.
document.querySelector("#year").textContent = new Date().getFullYear();

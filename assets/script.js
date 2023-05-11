const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // 隱藏所有的 tab-link
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    // 隱藏所有的 tab-content
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    // 顯示與當前選項相對應的 tab-link 與 tab-content
    const selectedTab = link.dataset.tab;
    const selectedContent = document.querySelector(`#${selectedTab}`);
    link.classList.add('active');
    selectedContent.classList.add('active');
  });
});

window.addEventListener("scroll", function() {
  var backtop = document.getElementById("back-top");
  if (window.pageYOffset > 1) {
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none";
  }
});
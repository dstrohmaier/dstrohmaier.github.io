// Builds an "On this page" table of contents in the sidebar from the article's
// headings. Hides itself when there are too few headings (short posts, list and
// index pages). No dependencies.
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toc = document.getElementById("toc");
    var article = document.querySelector("article");
    if (!toc || !article) {
      return;
    }

    var headings = Array.prototype.slice.call(
      article.querySelectorAll("h2[id], h3[id]")
    );

    // Not worth a TOC for one or zero sections.
    if (headings.length < 2) {
      return;
    }

    var title = document.createElement("p");
    title.className = "toc-title";
    title.textContent = "On this page";
    toc.appendChild(title);

    var list = document.createElement("ul");
    headings.forEach(function (heading) {
      var item = document.createElement("li");
      item.className = "toc-" + heading.tagName.toLowerCase(); // toc-h2 / toc-h3

      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      link.dataset.target = heading.id;

      item.appendChild(link);
      list.appendChild(item);
    });
    toc.appendChild(list);
    toc.hidden = false;

    // Scroll-spy: highlight the section currently in view.
    var links = Array.prototype.slice.call(toc.querySelectorAll("a"));
    var byId = {};
    links.forEach(function (link) {
      byId[link.dataset.target] = link;
    });

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle("active", link.dataset.target === id);
      });
    }

    if ("IntersectionObserver" in window) {
      var visible = {};
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            visible[entry.target.id] = entry.isIntersecting;
          });
          // Pick the first heading (document order) that is currently visible.
          for (var i = 0; i < headings.length; i++) {
            if (visible[headings[i].id]) {
              setActive(headings[i].id);
              break;
            }
          }
        },
        { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
      );
      headings.forEach(function (heading) {
        observer.observe(heading);
      });
    }
  });
})();

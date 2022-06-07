/* Start Header */
let toggle = document.querySelector(".toggle-menu");
let ul = document.querySelector("header nav ul");

toggle.onclick = function () {
  if (ul.className === "javaS") {
    ul.className = "";
  } else {
    ul.className = "javaS";
  }
};
/* End Header */
/* Start Landing */
let landing = document.querySelector(".landing");
let left = document.querySelector(".landing .fa-angle-left");
let right = document.querySelector(".landing .fa-angle-right");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let liAll = document.querySelectorAll(".landing .bullets li");
one.onclick = function oneF() {
  liAll.forEach((e) => {
    e.className = "";
  });
  landing.style.cssText = "background-image: url(./images/owl1.jpg)";
  one.className = "active";
};
two.onclick = function twoF() {
  liAll.forEach((e) => {
    e.className = "";
  });
  landing.style.cssText = "background-image: url(./images/landing.jpg)";
  two.className = "active";
};
three.onclick = function threeF() {
  liAll.forEach((e) => {
    e.className = "";
  });
  landing.style.cssText = "background-image: url(./images/owl2.png)";
  three.className = "active";
};
right.onclick = function () {
  if (one.className == "active") {
    liAll.forEach((e) => {
      e.className = "";
    });
    landing.style.cssText = "background-image: url(./images/landing.jpg)";
    two.className = "active";
  } else if (two.className == "active") {
    liAll.forEach((e) => {
      e.className = "";
    });
    landing.style.cssText = "background-image: url(./images/owl2.png)";
    three.className = "active";
  } else {
    liAll.forEach((e) => {
      e.className = "";
    });
    landing.style.cssText = "background-image: url(./images/owl1.jpg)";
    one.className = "active";
  }
};
left.onclick = function () {
  if (one.className == "active") {
    liAll.forEach((e) => {
      e.className = "";
    });
    landing.style.cssText = "background-image: url(./images/owl2.png)";
    three.className = "active";
  } else if (two.className == "active") {
    liAll.forEach((e) => {
      e.className = "";
    });
    landing.style.cssText = "background-image: url(./images/owl1.jpg)";
    one.className = "active";
  } else {
    liAll.forEach((e) => {
      e.className = "";
    });
    landing.style.cssText = "background-image: url(./images/landing.jpg)";
    two.className = "active";
  }
};
/* End Landing */
/* Start Portfolio */
let boxes = document.querySelectorAll(".Portfolio .box");
let allLi = document.querySelectorAll(".shuffle li");

let portOne = document.querySelectorAll(".app");
let portTwo = document.querySelectorAll(".photo");
let portThree = document.querySelectorAll(".web");
let portFour = document.querySelectorAll(".print");

let all = document.querySelector("#all");
let app = document.querySelector("#app");
let photo = document.querySelector("#photo");
let web = document.querySelector("#web");
let print = document.querySelector("#print");

let more = document.querySelector(".more");
let hide = document.querySelector(".hide");
let test = document.querySelector(".test");

all.onclick = function () {
  allLi.forEach((e) => {
    e.className = "";
  });
  all.className = "active";
  // boxes.forEach((e) => {e.style.cssText = "display: none;" })
  boxes.forEach((e) => {
    e.style.cssText = "display: flex;";
  });
};
app.onclick = function () {
  allLi.forEach((e) => {
    e.className = "";
  });
  app.className = "active";
  boxes.forEach((e) => {
    e.style.cssText = "display: none;";
  });
  portOne.forEach((e) => {
    e.style.cssText = "display: flex;";
  });
};
photo.onclick = function () {
  allLi.forEach((e) => {
    e.className = "";
  });
  photo.className = "active";
  boxes.forEach((e) => {
    e.style.cssText = "display: none;";
  });
  portTwo.forEach((e) => {
    e.style.cssText = "display: flex;";
  });
};
web.onclick = function () {
  allLi.forEach((e) => {
    e.className = "";
  });
  web.className = "active";
  boxes.forEach((e) => {
    e.style.cssText = "display: none;";
  });
  portThree.forEach((e) => {
    e.style.cssText = "display: flex;";
  });
};
print.onclick = function () {
  allLi.forEach((e) => {
    e.className = "";
  });
  print.className = "active";
  boxes.forEach((e) => {
    e.style.cssText = "display: none;";
  });
  portFour.forEach((e) => {
    e.style.cssText = "display: flex;";
  });
};
more.onclick = function () {
  test.style.cssText = "display: flex;";
  more.style.cssText = "display: none;";
  hide.style.cssText = "display: block;";
};
hide.onclick = function () {
  test.style.cssText = "display: none;";
  hide.style.cssText = "display: none;";
  more.style.cssText = "display: block;";
};
/* End Portfolio */
/* Start Stats */
let number = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false;
let stRd = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      number.forEach((nums) => startCount(nums));
    }
    started = true;
  }
  /* End Stats */
  /* Start Skills */
  let mySkills = document.querySelector(".our-skills");
  let mySpan = document.querySelectorAll(".prog-holder span");

  if (window.scrollY >= mySkills.offsetTop - 300) {
    mySpan.forEach((spans) => {
      spans.style.width = spans.dataset.width;
    });
    if (!stRd) {
      mySpan.forEach((mmm) => {
        jj(mmm);
      });
      function jj(t) {
        let count = setInterval(() => {
        let vv = t.dataset.progress++
        if (`${t.dataset.progress}%` == t.dataset.goal) {
          clearInterval(count);
        }
      });
      }
    }
    stRd = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
    /* End Skills */
  }, 2000 / goal);
}

let bulletsLi = document.querySelectorAll(".our-skills .testimonials .bullets li")
let content = document.querySelectorAll(".content")
let con1 = document.querySelectorAll(".con1")
let con2 = document.querySelectorAll(".con2")
let con3 = document.querySelectorAll(".con3")
let liOne = document.querySelector(".bullets li.liOne")
let liTwo = document.querySelector(".bullets .liTwo")
let liThree = document.querySelector(".bullets .liThree")
let myLi = document.querySelectorAll(".bullets li")

liOne.onclick = function () {
  myLi.forEach((e) => {
    e.className = "";
  });
  content.forEach((e) => {e.style.cssText = "display: none;" })
  con1.forEach((e) => {e.style.cssText = "display: flex;" })
  liOne.className = "active"
}

liTwo.onclick = function () {
  myLi.forEach((e) => {
    e.className = "";
  });
  content.forEach((e) => {e.style.cssText = "display: none;" })
  con2.forEach((e) => {e.style.cssText = "display: flex;" })
  liTwo.className = "active"
}

liThree.onclick = function () {
  myLi.forEach((e) => {
    e.className = "";
  });
  content.forEach((e) => {e.style.cssText = "display: none;" })
  con3.forEach((e) => {e.style.cssText = "display: flex;" })
  liThree.className = "active"
}
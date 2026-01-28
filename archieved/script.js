function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function filterProjects(tool) {
  const projects = document.querySelectorAll('.details-container');
  projects.forEach(project => {
    if (tool === 'all' || project.getAttribute('category').includes(tool)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Open the modal
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


const texts = ["Data Analytics", "Data Engineering", "Machine Learning", "Data Science"];
let index = 0;
let textIndex = 0;
let typingSpeed = 40;

function typeText(element, text, callback) {
    if (textIndex < text.length) {
        element.innerHTML += text.charAt(textIndex);
        textIndex++;
        setTimeout(() => typeText(element, text, callback), typingSpeed);
    } else {
        setTimeout(callback, 600);
    }
}

function deleteText(element, callback) {
    if (textIndex > 0) {
        element.innerHTML = element.innerHTML.substring(0, textIndex - 1);
        textIndex--;
        setTimeout(() => deleteText(element, callback), typingSpeed);
    } else {
        callback();
    }
}

function changeText() {
    const textElement = document.getElementById("changing-interest");

    deleteText(textElement, () => {
        textIndex = 0;
        typeText(textElement, texts[index], () => {
            index = (index + 1) % texts.length;
            setTimeout(changeText, 600);
        });
    });
}

document.addEventListener("DOMContentLoaded", changeText);

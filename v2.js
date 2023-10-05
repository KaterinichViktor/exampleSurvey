document.addEventListener("DOMContentLoaded", function () {
    const nextButton1 = document.getElementById("nextButton1");
    const nextButton2 = document.getElementById("nextButton2");
    const nextButton3 = document.getElementById("nextButton3");
    const nextButton4 = document.getElementById("nextButton4");

    const q1Options = document.querySelectorAll("input[class='q1Option']");
    const q2Options = document.querySelectorAll("input[class='q2Option']");
    const q3Options = document.querySelectorAll("input[class='q3Option']");
    const q4Options = document.querySelectorAll("input[class='q4Option']");

    const techProblemFreeInput = document.getElementById("techProblemFreeInput");


    techProblemFreeInput.addEventListener("focus", function () {
        // Always show the next button when the input field is focused (clicked)
        nextButton2.classList.remove("hidden");
    });

    techProblemFreeInput.addEventListener("blur", function () {
        // Check if the input field is empty before hiding the next button
        if (techProblemFreeInput.value.trim() === "") {
            nextButton2.classList.add("hidden");
        }
    });

    techProblemFreeInput.addEventListener("input", function () {
        // Always show the next button when there is input in the field
        if (techProblemFreeInput.value.trim() !== "") {
            nextButton2.classList.remove("hidden");
        }
    });
    

    const sliderContent = document.querySelector('.slider-content');
    const slideWidth = 700; // Width of each slide

    let currentSlide = 0;

    function isAnyChecked(nodeList) {
        return Array.from(nodeList).some(checkbox => checkbox.checked);
    }

    function toggleNextButton(button, checkboxes) {
        if (isAnyChecked(checkboxes)) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    }

    function updateSlider() {
        const offsetX = -currentSlide * slideWidth;
        sliderContent.style.transform = `translateX(${offsetX}px)`;
    }

    let badQualityChecked = false;
    let stayHiddenChecked = false;
    let default1Checked = false;
    let default2Checked = false;
    let default3Checked = false;

    q1Options.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            badQualityChecked = document.getElementById("badQuality").checked;
            stayHiddenChecked = document.getElementById("stayHidden").checked;
            default1Checked = document.getElementById("default1").checked;
            default2Checked = document.getElementById("default2").checked;
            default3Checked = document.getElementById("default3").checked;
            toggleNextButton(nextButton1, q1Options);
        });
    });

    q2Options.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleNextButton(nextButton2, q2Options);

            if (techProblemFreeInput.checked) {
                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.name = "techProblemFreeInputText";
                inputField.placeholder = "Write your issue here";
                techProblemFreeInput.parentElement.appendChild(inputField);
                techProblemFreeInput.parentElement.removeChild(techProblemFreeInput);
                toggleNextButton(nextButton2, q2Options);
            }
        });
    });

    q3Options.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleNextButton(nextButton3, q3Options);
        });
    });

    q4Options.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleNextButton(nextButton4, q4Options);
        });
    });

    nextButton1.addEventListener("click", () => {
        if (currentSlide < 4) { // 5 slides, 0-based index
            if (stayHiddenChecked && (badQualityChecked || default1Checked || default2Checked || default3Checked)) {
                document.getElementById("quality").classList.add("hidden");
                currentSlide++;
                updateSlider();
            } else if (badQualityChecked) {
                document.getElementById("quality").classList.remove("hidden");
                currentSlide++;
                updateSlider();
            } else if (stayHiddenChecked) {
                document.getElementById("finalSubmit").classList.remove("hidden");
                document.getElementById("nextButton1").classList.add("hidden");
            } else {
                currentSlide++;
                updateSlider();
            }
        }
    });

    nextButton2.addEventListener("click", function () {
        if (currentSlide < 4) { // 5 slides, 0-based index
            currentSlide++;
            updateSlider();
        }
    });

    nextButton3.addEventListener("click", function () {
        if (currentSlide < 4) { // 5 slides, 0-based index
            currentSlide++;
            updateSlider();
        }
    });

    nextButton4.addEventListener("click", function () {
        if (currentSlide < 4) {
            currentSlide++;
            updateSlider();
        }
        setTimeout(function () {
            document.getElementById("finalSubmit").classList.remove("hidden");
        }, 500);
    });

    document.getElementById("surveyForm").addEventListener("submit", function (e) {
        e.preventDefault();
        // Handle form submission here
        surveyForm.submit();
    });
});

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

    const sliderContent = document.querySelector('.slider-content');
    const slideWidth = 600; // Width of each slide

    let currentSlide = 0;

    nextBtn.addEventListener('click', () => {
        if (currentSlide < 4) { // 5 slides, 0-based index
            currentSlide++;
            updateSlider();
        }
    });

    function updateSlider() {
        const offsetX = -currentSlide * slideWidth;
        sliderContent.style.transform = `translateX(${offsetX}px)`;
    }

  
    function isAnyChecked(nodeList) {
        return Array.from(nodeList).some(checkbox => checkbox.checked);
    }


    function toggleNextButton(button, checkboxes) {
        if (isAnyChecked(checkboxes)) {
            button.classList.remove("hidden");
        }
    }


    q1Options.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
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




    nextButton1.addEventListener("click", function () {
        const badQualityChecked = document.getElementById("badQuality").checked;
        const stayHiddenChecked = document.getElementById("stayHidden").checked;
        const default1 = document.getElementById("default1").checked;
        const default2 = document.getElementById("default2").checked;
        const default3 = document.getElementById("default3").checked;

        // Check if "stayHidden" is selected along with other checkboxes
        if (stayHiddenChecked && (badQualityChecked || default1 || default2 || default3)) {
            // If "stayHidden" is selected along with other checkboxes, open the next question
            document.getElementById("version").classList.remove("hidden");
            document.getElementById("version").classList.add("visible");
            document.getElementById("quality").classList.remove("visible");
            document.getElementById("quality").classList.add("hidden");
        } else if (badQualityChecked) {
            // If only "badQuality" is checked, open the quality question
            document.getElementById("quality").classList.remove("hidden");
            document.getElementById("quality").classList.add("visible");
            document.getElementById("version").classList.remove("visible");
            document.getElementById("version").classList.add("hidden");
        } else if (stayHiddenChecked) {
            document.getElementById("finalSubmit").classList.remove("hidden");
            document.getElementById("nextButton1").classList.add("hidden");
        } else {
            // If "stayHidden" is not selected or none of the checkboxes are selected, open the version question
            document.getElementById("quality").classList.remove("visible");
            document.getElementById("quality").classList.add("hidden");
            document.getElementById("version").classList.remove("hidden");
            document.getElementById("version").classList.add("visible");
        }
    });





    nextButton2.addEventListener("click", function () {

    });

    nextButton3.addEventListener("click", function () {

    });

    nextButton4.addEventListener("click", function () {

        document.getElementById("finalSubmit").classList.remove("hidden");
    });


    document.getElementById("surveyForm").addEventListener("submit", function (e) {
        e.preventDefault();
        // Handle form submission here
        surveyForm.submit();
    });
});

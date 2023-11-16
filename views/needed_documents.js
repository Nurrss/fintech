function showPopup() {
    let time = 5000;

    document.getElementById('loading_popup_container').style.display = 'block';
    document.querySelector('.container').style.opacity = 0.3;
    setTimeout(closePopup, time); 
    document.querySelector('.documents_checkbox').src = "../views/images/checked_checkbox.png"
    }

    function closePopup() {
        document.getElementById('loading_popup_container').style.display = 'none';
        document.querySelector('.container').style.opacity = 1;
    }

    function updateFileInput(inputElement, displayElement) {
        const fileInput = inputElement.files[0];
        if (fileInput) {
            displayElement.value = fileInput.name;
        } else {
            displayElement.value = '';
        }
    }

    // Add event listeners for file input changes
    const identityCardInput = document.getElementById('identityCardInput');
    const graduationInput = document.getElementById('graduationInput');
    const sertificateInput = document.getElementById('sertificateInput');

    const identityCardDisplay = document.querySelector('.identity_card');
    const graduateDisplay = document.querySelector('.graduation');
    const certificateDisplay = document.querySelector('.residence_certificate');

    identityCardInput.addEventListener('change', function () {
        updateFileInput(this, identityCardDisplay);
    });
    graduationInput.addEventListener('change', function () {
        updateFileInput(this, graduateDisplay);
    });
    sertificateInput.addEventListener('change', function () {
        updateFileInput(this, certificateDisplay);
    });
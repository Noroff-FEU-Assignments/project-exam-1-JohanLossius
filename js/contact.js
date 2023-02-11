// Contact form validation

const form = document.querySelector(".contact-form");

const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email-input");
const subjectInput = document.querySelector("#subject-input");
const messageInput = document.querySelector("#contact-message");

const nameLabel = document.querySelector("#name-label");
const emailLabel = document.querySelector("#email-label");
const subjectLabel = document.querySelector("#subject-label");
const messageLabel = document.querySelector("#message-label");

const messageCont = document.querySelector(".contact-form-instruction-div");
const sendButtonCont = document.querySelector("#submit-button");

// Name validation

nameInput.addEventListener("change", nameInputValidation);

function nameInputValidation() {
    if (nameCheck(nameInput.value) === false) {
        nameLabel.innerHTML = `Full name* <span class="error-message">*Please fill in your full name of at least 5 characters*</span>`;
    } else {
        nameLabel.innerHTML = `Full name* <span class="success-message">*Looks good*</span>`;
    }
}

// Email validation

emailInput.addEventListener("change", emailInputValidation);

function emailInputValidation() {
    if (emailCheck(emailInput.value) === false) {
        emailLabel.innerHTML = `Email* <span class="error-message">*Please fill in a valid email.*</span>`;
    } else {
        emailLabel.innerHTML = `Email* <span class="success-message">*Looks good*</span>`;
    }
}

// Subject validation

subjectInput.addEventListener("change", subjectInputValidation);

function subjectInputValidation() {
    if (subjectCheck(subjectInput.value) === false) {
        subjectLabel.innerHTML = `Subject* <span class="error-message">*Please fill in your subject of at least 15 characters*</span>`;
    } else {
        subjectLabel.innerHTML = `Subject* <span class="success-message">*Looks good*</span>`;
    }
}

// Message validation

messageInput.addEventListener("change", messageInputValidation);

function messageInputValidation() {
    if (messageCheck(messageInput.value) === false) {
        messageLabel.innerHTML = `Your message* <span class="error-message">*Please fill in a valid message of at least 10 characters.*</span>`;
    } else {
        messageLabel.innerHTML = `Your message* <span class="success-message">*Looks good*</span>`;
    }
}

// Form submit management

form.addEventListener("submit", sendMessage);

function sendMessage() {
    event.preventDefault();
    console.log(event);

    // Manage the name instructions
    if (nameCheck(nameInput.value) === false) {
        nameLabel.innerHTML = `Full name* <span class="error-message">*Please fill in your full name of at least 5 characters*</span>`;
    } else {
        nameLabel.innerHTML = `Full name* <span class="success-message">*Looks good*</span>`;
    }

    // Manage the email instructions
    if (emailCheck(emailInput.value) === false) {
        emailLabel.innerHTML = `Email* <span class="error-message">*Please fill in a valid email.*</span>`;
    } else {
        emailLabel.innerHTML = `Email* (required) <span class="success-message">*Looks good*</span>`;
    }

    // Manage the subject instructions
    if (subjectCheck(subjectInput.value) === false) {
        subjectLabel.innerHTML = `Subject* <span class="error-message">*Please fill in your subject of at least 15 characters*</span>`;
    } else {
        subjectLabel.innerHTML = `Subject* <span class="success-message">*Looks good*</span>`;
    }
    
    // Manage the messaging instructions
    if (messageCheck(messageInput.value) === false) {
        messageLabel.innerHTML = `Your message* <span class="error-message">*Please fill in your message of at least 25 characters.*</span>`;
    } else {
        messageLabel.innerHTML = `Your message* <span class="success-message">*Looks good*</span>`;
    }

    // Submission validation and messaging.
    if (nameCheck(nameInput.value) && subjectCheck(subjectInput.value) && emailCheck(emailInput.value) && messageCheck(messageInput.value)) {
        messageCont.innerHTML = `<span class="success-message">Your message was sent successfully. You'll hear from us within 2 working days.</span>`;
        form.reset();
        nameLabel.innerHTML = `Full name*`;
        emailLabel.innerHTML = `Email*`;
        subjectLabel.innerHTML = `Subject*`;
        messageLabel.innerHTML = `Your message*`;
    } else {
        messageCont.innerHTML = `<span class="error-message">Your message was not sent. Please correct the following:</span>`
    }
};

function nameCheck(name) {
    const nameLength = name.trim().length;
    console.log(nameLength);
    if (nameLength >= 5) {
        return true;
    } else {
        return false;
    }
};

function emailCheck(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);
    console.log(validEmail);
    return validEmail;
};

function subjectCheck(subject) {
    const subjectLength = subject.trim().length;
    console.log(subjectLength);
    if (subjectLength >= 15) {
        return true;
    } else {
        return false;
    }
};

function messageCheck(message) {
    const messageLength = message.trim().length;
    console.log(messageLength);
    if (messageLength >= 25) {
        return true;
    } else {
        return false;
    }
};
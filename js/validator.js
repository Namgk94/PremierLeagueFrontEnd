
// Tạo Validator
function Validator(options) {
    var formElement = document.querySelector(options.form);
    console.log(formElement)
    // Tạo hàm check hợp lệ: validate
    function validate(inputElement, rule) {
        console.log(inputElement)
        var errorElement = inputElement.parentElement.parentElement.querySelector(".form-message");
        console.log('erroEl: ', errorElement)
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            inputElement.classList.add('invalid');
            errorElement.innerText = errorMessage;
        }
        else {

            errorElement.innerText = '';
            inputElement.classList.remove('invalid');

        }
    }


    if (formElement) {

        options.rules.forEach(function (rule) {
            var inputElement = document.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.parentElement.querySelector(".form-message");

            if (inputElement) {
                inputElement.onblur = (e) => {

                    validate(inputElement, rule);

                }
                inputElement.oninput = (e) => {
                    errorElement.innerText = '';
                }
            }
        });
    }


    // Xử lý event submit
    formElement.onsubmit = function (e) {
        // Ngặn chặn event default khi ấn submit
        e.preventDefault();

        // Xử lý thông báo error message khi ấn submit
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            validate(inputElement, rule);
            console.log(inputElement.value);
        });
    }
}



// xử lý rule bắt buộc nhập 
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message;
        }
    }
}

// xử lý rule đúng email
Validator.isEmail = function (selector, message1, message2) {
    return {
        selector: selector,
        test: function (value) {

            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (value == '')
                return message1;

            return regex.test(value) ? undefined : message2;

        }
    }
}

// Xử lý password hợp lệ 
Validator.isPasswordValid = function (selector, minLetter, message1, message2) {
    return {
        selector: selector,
        test: function (value) {
            console.log(value.length);
            if (value == '')
                return message1;

            return (value.length >= minLetter) ? undefined : message2;
        }

    }
}

// Xử lý nhập lại mật khẩu hợp lệ:
Validator.isConfirmed = function (selector, getValuePassWord, minLetter, message1, message2) {
    return {
        selector: selector,
        test: function (value) {

            if (getValuePassWord().length >= minLetter) {

                if (value == '')
                    return message1;

                return (value === getValuePassWord()) ? undefined : message2;

            }

            return undefined;

        }
    }
}

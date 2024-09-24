class Validator {
    constructor() {}

    passwordCheck(value) {
        if (value.length > 25) {
            return "Password can only be 30 characters long.";
        }
        return true;
    }

    nameCheck(value) {
        if (value.length > 30) {
            return 'it should be a maximum of 30 characters long.';
        }
        return true;
    }

    urlCheck(value) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|' + // domain name
            'localhost|' + // localhost
            '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IPv4
            '\\[([0-9a-fA-F:\\.]*)\\])' + // IPv6
            '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)*$');

        if (pattern.test(value)) {
            return true;
        } else {
            return "Please provide a valid URL.";
        }
    }

    emailCheck(value) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (pattern.test(value)) {
            return true;
        } else {
            return "Please provide a valid email.";
        }
    }

    allNumbersCheck(value) {
        if (/^\d+$/.test(value)) {
            return true;
        } else {
            return "Input must contain only numbers.";
        }
    }

    versionCheck(value) {
        const pattern = /^\d+\.\d+\.\d+$/; 

        if (pattern.test(value)) {
            return true;
        } else {
            return "Version must be in the format x.y.z (e.g., 1.0.0).";
        }
    }



    validate(value, valid_type) {
        switch (valid_type) {
            case "name":
                return this.nameCheck(value)
            case "password":
                return this.passwordCheck(value)
            case "url":
                return this.urlCheck(value)
            case "email":
                return this.emailCheck(value)
            case 'number' : 
                return this.allNumbersCheck(value)
            case 'version' : 
                return this.versionCheck(value)    

            default:
                return "Please fill details.";
        }
    }
}

export default Validator;

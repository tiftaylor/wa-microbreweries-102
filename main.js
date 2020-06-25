function askAge() {
    var ageInput = prompt('How old are you?');
    return ageInput;
};

var age = askAge();

function checkAge(age) {
    var greeting;
    if (age > 20) {
        greeting = 'Welcome, adult! ;)';
        alert(greeting);
    } else {
        greeting = 'You\'re about to enter a site that you can\'t partke of :o';
        alert(greeting);
    };
};

checkAge(age);


function ready() {
    var answer;
    answer = prompt('Do you like the idea of local breweries? (please enter: "yes" or "no")');
    while(answer.toLowerCase() !== 'no' && answer !== 'yes') {
        answer = prompt('I am a computer and need you to type "yes" or "no"...');
    };
    return answer;
};

function askAge() {
    var ageInput = prompt('How old are you?');
    return ageInput;
};

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

ready();
checkAge(askAge());

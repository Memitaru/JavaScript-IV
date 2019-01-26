// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }

}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`)
    }

}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.faveSubjects = attributes.faveSubjects;
    }

    listSubjects(subjects) {
        this.faveSubjects.forEach(function(subject){
            console.log(subject);
        })
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }

}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to #${channel}: @channel standy times!`)
    }
    
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }

}

// Instructor Objects

const sam = new Instructor ({
    name: "Sam",
    age: 34,
    location: "Idaho",
    gender: "Female",
    speciality: "React",
    catchPhrase: "What kind of person has a catch phrase?",
})

const brad = new Instructor ({
    name: "Brad",
    age: 41,
    location: "Nebraska",
    gender: "Male",
    speciality: "JavaScript",
    catchPhrase: "Don't forget to ask for help if you get stuck!"
})

// Project Manager Objects

const julie = new ProjectManager({
    name: "Julie",
    age: 25,
    location: "Florida",
    gender: "Male",
    speciality: "CSS",
    catchPhrase: "Check out this YouTube tutorial.",
    gradClassName: "FSW13",
    favInstructor: sam
})

const robert = new ProjectManager({
    name: "Robert",
    age: 28,
    location: "New York",
    speciality: "None",
    catchPhrase: "Keep trying and you'll get it!",
    gradClassName: "FSW14",
    favInstructor: brad
})

// Student Objects

const ami = new Student({
    name: "Ami",
    age: 30,
    location: "Washington",
    gender: "Nonbinary",
    previousBackground: "delivery person",
    className: "webpt4",
    faveSubjects: ['CSS preprocessors', 'JavaScript']
})

const dave = new Student({
    name: "Dave",
    age: 40,
    location: "Washington",
    gender: "Male",
    previousBackground: "php developer",
    className: "webpt5",
    faveSubjects: ['JavaScript', 'React']
})

// testing instructors

sam.demo("array methods");
brad.grade(ami, "LESS");

// testing project managers

julie.standUp("webpt4_julie");
robert.debugsCode(ami, "JavaScript classes");

// testing students

ami.listSubjects();
dave.PRAssignment("JavaScript I");
ami.sprintChallenge("JavaScript Fundamentals")

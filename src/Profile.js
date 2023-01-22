import data from "./data.json";
let users = data;

export function createProfile(input) {
    // name, age, gender, major, personality, availability
    const newUser = {
            name: input.name,
            age: input.age,
            gender: input.gender,
            personality: input.personality,
            major: input.major
            //availability: Boolean(input.availability) or whether or not it's been matched?
        };
    users.push(newUser);
    return users;
}

export function readProfile(input) {

    const nameExists = users.find((user) => {
        return user.name === input.name;
    });
    if (!nameExists) {
        const newUser = {
            name: input.name,
            age: input.age,
            gender: input.gender,
            personality: input.personality,
            //availability: Boolean(input.availability) or whether or not it's been matched?
        }
    };
    users.push(newUser);
    return users;
}


  export function readPeople(input) {
    // TODO: implement the read function!
    // Specification: We want to be able to filter by two properties: name and/or country.
    //                A user can choose to filter by one, both of these properties or none at all (i.e. empty input).
    //                If a user chooses not to filter by any of the properties, assume that you should return all of the data.
    return people;
  }
  
  export function updatePeople(input) {
    // TODO: implement the update function!
    // Specification: Remember that the id of our entries is "name".
    //                We want to be able to change: a user's subscription status, interests, and their age.
    //                For simplicity, assume that the input for interests will only ADD onto the user's current list (i.e. no need to worry about removing/replacing).
    //                If interests or age are left blank (i.e. empty input), those properties should remain the same.
    //                If the id does not exist in the data, nothing happens.
    return people;
  }
  
  export function deletePeople(input) {
    // TODO: implement the delete function!
    // Specification: Remember that the id of our entries is "name".
    //                If the id does not exist in the data, nothing happens.
    return people;
  }
  


class Profile {
  constructor(name, age, gender, major) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
    //this.interests = interests;
    this.personality = personality;
    this.availability = "Available";
    this.friends = Array();

    this.changeName = function (name) {
        this.name = name;
    };
    this.changeAge = function (age) {
        this.age = age;
    };
    this.changeMajor = function (major) {
        this.major = major;
    };
    this.changeGender = function (gender) {
        this.gender = gender;
    };
    this.changeAvailability = function () {
        if (this.availability) {
            this.availability == false;
        } else {
            this.availability == true;
        }
    };
    this.changePersonality = function (personality) {
        this.personality = personality;
    }
  }

}
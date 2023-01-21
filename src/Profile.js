class Profile {
  constructor(name, age, gender, major) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
    //this.interests = interests;
    //this.personality = personality;
    this.availability = "Available";
    this.friends = Array();

    this.changeName = function (name) {
        this.name = name
    };
    this.changeAge = function (age) {
        this.age = age;
    };
    this.changeGender = function (gender) {
        this.gender = gender;
    };
    this.changeAvailability = function () {
        if (this.availability == "Available") {
            this.availability == "Unavailable";
        } else {
            this.availability == "Available"
        }
    };
  }

}
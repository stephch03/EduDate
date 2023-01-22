import data from "./data.json";
let users = data;


//check for data in file later

export function createProfile(input) {
    // name, age, gender, major, personality, availability
    // cannot have duplicate names

    nameExists = users.find((user) => {
        return user.name === input.name;
    });

    if (nameExists) {
        return users;
    } else {
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
}

export function filterProfile(input) {
    filteredUsers = users.filter((user) => {
        return user.major === input.name; //only one input which is the major
    });
    return filteredUsers;
}

  export function updateProfile(input) {
// name will not be changeable
    const userIndex = users.findIndex((user) => {
        return user.name === input.name;
    });

    if (index === -1) {
        return users;
    }

    const tempUser = users[userIndex];
    if (input.age) {
        tempUser.age = input.age;
    }
    if (input.gender) {
        tempUser.gender = input.gender;
    }
    if (input.personality) {
        tempUser.personality = input.personality;
    }
    if (input.major) {
        tempUser.major = input.major;
    }
    users[userIndex] = tempUser;
    return users;
}
  
export function deleteProfile(input) {
    users = users.filter((user) => {
        return user.profile !== input.profile;
    });
    return users;
}
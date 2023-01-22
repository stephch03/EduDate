import {
    createProfile,
    filterProfile,
    updateProfile,
    deleteProfile
  } from "./profile.js";

  const showResult = document.getElementById("result");
  const createProfileForm = document.getElementById("createProfileForm");
  const filterProfileForm = document.getElementById("filterProfileForm");
  const updateProfileForm = document.getElementById("updateProfileForm");
  const deleteProfileForm = document.getElementById("deleteProfileForm");
  
  createProfileForm.addEventListener("submit", function (event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = createProfile(formProps);
    showResult = JSON.stringify(result, null, 2);
  });
  
  filterProfileForm.addEventListener("submit", function (event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = filterProfile(formProps);
    showResult.innerHTML = JSON.stringify(result, null, 2);
  });
  
  updateProfileForm.addEventListener("submit", function (event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = updateProfile(formProps);
    showResult.innerHTML = JSON.stringify(result, null, 2);
  });
  
  deleteProfileForm.addEventListener("submit", function (event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const result = deleteProfile(formProps);
    showResult.innerHTML = JSON.stringify(result, null, 2);
  });
  
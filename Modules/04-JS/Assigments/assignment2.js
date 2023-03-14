// Create a function that takes in user's birth date in dd/mm/yyyy format, and calculate user's age

function calculateAge(date) {
  let today = new Date();
  let currDate = today.getDate();
  let currMth = today.getMonth() + 1;
  let currYear = today.getFullYear();

  let birthdate = date.split("/");
  let userBirthYear = birthdate[2];
  let userBirthMth = birthdate[1];
  let userBirthDate = birthdate[0];

  let userAge = currYear - userBirthYear;

  if (currMth < userBirthMth) {
    userAge = userAge - 1;
  } else if (currMth == userBirthMth) {
    if (currDate < userBirthDate) {
      userAge = userAge - 1;
    } 
  }
  return userAge;
}

console.log(`User's age would be: ${calculateAge('18/01/1999')}`);

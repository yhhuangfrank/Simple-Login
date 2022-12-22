const users = [
  {
    firstName: "Tony",
    email: "tony@stark.com",
    password: "iamironman",
  },
  {
    firstName: "Steve",
    email: "captain@hotmail.com",
    password: "icandothisallday",
  },
  {
    firstName: "Peter",
    email: "peter@parker.com",
    password: "enajyram",
  },
  {
    firstName: "Natasha",
    email: "natasha@gamil.com",
    password: "*parol#@$!",
  },
  {
    firstName: "Nick",
    email: "nick@shield.com",
    password: "password",
  },
];
function accountValidator(email, password) {
  let result = {};
  let invalidMsg = "";
  const filterUsers = users.filter(
    (user) => user.email === email && user.password === password
  );
  //- if cannot find user
  if (!filterUsers.length) {
    invalidMsg += "Email or Password is invalid !";
    result.invalidMsg = invalidMsg;
    return result
  }
  result.firstName = filterUsers[0].firstName;
  return result;
}

module.exports = accountValidator;

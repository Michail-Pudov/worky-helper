export const registrationFetch = async (email, password) => {
  let response = await fetch("http://localhost:5000/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
  let result = await response.json();
  return result;
};

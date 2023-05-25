export function signUp({ name, email, password }) {
  if (name === undefined || name === "") {
    return { err: true, message: "Name field should be empty" };
  } else if (email === undefined || email === "") {
    return { err: true, message: "Email field should be empty" };
  }
  if (password === undefined || password === "") {
    return { err: true, message: "Password field should be empty" };
  }
  const usersList = localStorage.getItem("usersList")
    ? JSON.parse(localStorage.getItem("usersList"))
    : [];
  const itemIndex = usersList.findIndex((user) => user.email === email);
  if (itemIndex === -1) {
    const id = usersList.length + 1;
    const newUser = {
      id: id,
      name: name,
      password: password,
      email: email,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU",
    };
    usersList.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(usersList));
    localStorage.setItem("user", JSON.stringify(newUser));
    return { err: false, message: "Registration Success!" };
  }

  return { err: true, message: "email Id already exists" };
}

export function getUserData() {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;
    if (user) {
      return { isAuthenticate: true, user: user };
    }
  }

  return { isAuthenticate: false, user: null };
}

export function login({ email, password }) {
  if (email === undefined || email === "") {
    return { err: true, message: "Email field should be empty" };
  }
  if (password === undefined || password === "") {
    return { err: true, message: "Password field should be empty" };
  }

  const usersList = localStorage.getItem("usersList")
    ? JSON.parse(localStorage.getItem("usersList"))
    : [];
  const userData = usersList.find((user) => user.email === email);
  if (userData) {
    if (userData?.password == password) {
      localStorage.setItem("user", JSON.stringify(userData));
      return { err: false, message: "Login successful" };
    } else {
      return { err: true, message: "Wrong password" };
    }
  } else {
    return { err: true, message: "User not found" };
  }
}

export function logout() {
  localStorage.removeItem("user");
}

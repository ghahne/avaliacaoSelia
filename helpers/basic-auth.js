async function basicAuth(req, res, next) {
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf("Basic") === -1
  ) {
    return res.status(403).json({
      message: "usuario e/ou senha invalidos",
    });
  }
  const base64credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  console.log(username, password);

  const users = [
    {
      username: "selia",
      password: "fullservice",
    },
  ];

  const usersFound = users.find(
    (u) => u.username == username && u.password == password
  );
  if (!usersFound) {
    return res.status(403).json({
      message: "usuario e/ou senha inválidos",
    });
  } else {
    next();
  }
}

module.exports = basicAuth;

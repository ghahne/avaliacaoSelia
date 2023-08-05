const express = require("express");
const database = require("./config/database");
const basicAuth = require("./helpers/basic-auth");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/funcionarios", basicAuth, async (req, res) => {
  const { razao_social, cnpj, nome, cpf, salario } = req.body;

  console.log(req.body);

  let empresa = await database("empresas").where({ cnpj });
  if (empresa.length === 0) {
    const id = await database("empresas").insert({ razao_social, cnpj });
    empresa = await database("empresas").where({ id: id[0] });
  }

  let funcionario = await database("funcionarios").where({ cpf });
  if (funcionario.length === 0) {
    funcionario = await database("funcionarios").insert({
      nome,
      cpf,
      salario,
      empresa_id: empresa[0].id,
    });
  } else {
    return res.status(400).json({
      message: "funcionario já cadastrado",
    });
  }

  return res.status(201).json({
    message: "funcionario cadastrado com sucesso",
  });
});

app.listen("3000");

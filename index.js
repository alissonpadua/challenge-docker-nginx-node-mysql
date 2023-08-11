const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;
const db = require("./config");

app.get("/", async (req, res) => {
  try {
    console.log(faker);
    await create(faker.person.fullName());
    const peoples = await query("SELECT * FROM peoples");
    let html = "";
    peoples.forEach((people) => {
      html += `<li>${people.name}</li>`;
    });
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>${html}</ul>
    `);
  } catch (error) {
    res.send(`Deu Ruim ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Node Running ${port}`);
});

async function query(sql, params) {
  const [results] = await db.connection.execute(sql, params);

  return results;
}

async function create(name) {
  const result = await db.connection.query(
    `INSERT INTO peoples (name) VALUES ('${name}')`
  );
  return result.affectedRows;
}

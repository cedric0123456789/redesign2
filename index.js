import { createApp } from "./config.js";

const app = createApp({
  user: "autumn_star_7622",
  host: "168.119.168.41",
  database: "demo",
  password: "uaioysdfjoysfdf",
  port: 18324,
});

/* Startseite */
app.get("/", async function (req, res) {
  res.render("start", {});
});

app.get("/erklaerseite", async function (req, res) {
  res.render("erklaerseite", {});
});

app.get("/impressum", async function (req, res) {
  res.render("impressum", {});
});

app.get("/tabelle-2-liga", async function (req, res) {
  res.render("tabelle-2-liga", {});
});

app.get("/tabelle-4-liga", async function (req, res) {
  res.render("tabelle-4-liga", {});
});

app.get("/tabelle-damen", async function (req, res) {
  res.render("tabelle-damen", {});
});

app.get("/404", async function (req, res) {
  res.render("404", {});
});

app.get("/verein", async function (req, res) {
  res.render("verein", {});
});

app.get("/teams/herren1", async function (req, res) {
  res.render("herren1", {});
});

app.get("/verein/news", async function (req, res) {
  res.render("news", {});
});

app.get("/100er-club", async function (req, res) {
  res.render("100er-club", {});
});

app.get("/verein/news/newsbeitrag", async function (req, res) {
  res.render("newsbeitrag", {});
});

app.get("/test", async function (req, res) {
  res.render("test", {});
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});

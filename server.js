const express = require("express");
const path = require("path");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 3000; // Default to 6000 if no environment variable is set

// Middleware
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(express.json()); // For handling JSON data
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.set("view engine", "ejs"); // Set EJS as the view engine

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.use("/", blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

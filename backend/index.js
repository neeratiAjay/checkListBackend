const express = require("express");
const fetchedData = require("./fetchData");
const rules = require("./rules");
const path = require("path");
const cors = require("cors");

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS
app.use(cors({ origin: 'http://localhost:4000' }));

// Define the /api/evaluate route
app.get("/api/evaluate", async (request, response) => {
    try {
        const data = await fetchedData()
        const result = rules.map(rule=>({
            rule:rule.name,
            status:rule.evaluate(data)? "Passed" :"Failed"
        }));
        response.json(result)
    } catch (e) {
        response.status(500);
        response.json(`Server Error: ${e.message}`);
    }
});

const port = 4000;

// Start the server
app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}/`);
});

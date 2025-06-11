const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
fs.mkdir(dataDir, { recursive: true }).catch(console.error);

// Routes
app.post('/save-data', async (req, res) => {
    try {
        const data = req.body;
        const filePath = path.join(dataDir, 'timetable-data.json');
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

app.get('/load-data', async (req, res) => {
    try {
        const filePath = path.join(dataDir, 'timetable-data.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        if (error.code === 'ENOENT') {
            // If file doesn't exist, return default data
            res.json({
                activities: [],
                progress: {
                    studyHours: 0,
                    leetcodeProblems: 0,
                    jobApplications: 0,
                    exerciseMinutes: 0,
                    meditationMinutes: 0,
                    phoneUsage: 0
                },
                wishes: [],
                streak: 0,
                lastUpdated: new Date().toISOString()
            });
        } else {
            console.error('Error loading data:', error);
            res.status(500).json({ error: 'Failed to load data' });
        }
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
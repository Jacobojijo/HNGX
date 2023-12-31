const express = require('express');

const app = express();

const port_number = process.env.port_number || 6000;

app.listen(port_number);
const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const array_of_day_week = new Date().getDay();

app.use(express.json());

app.post('/api', (req, res) => console.log(req.body));

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const current_day = days_of_week[array_of_day_week];
    const utc_time = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
    const github_file_url = "https://github.com/Jacobojijo/HNGX/blob/main/task1/endpoint.js";
    const github_repo_url = "https://github.com/Jacobojijo/HNGX";
    const status_code = 200;

    const jsonObject = {
        slack_name: slack_name,
        track: track ,
        current_day: current_day,
        utc_time: utc_time,
        github_file_url: github_file_url,
        github_repo_url: github_repo_url,
        status_code: status_code,
    }

    res.json(jsonObject);
})

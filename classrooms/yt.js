const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/getLinks', async (req, res) => {
    const question = req.query.question;
    const youtubeAPIKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual API key
    const youtubeSearchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(question)}&key=${youtubeAPIKey}`;

    try {
        const youtubeResponse = await fetch(youtubeSearchURL);
        const youtubeData = await youtubeResponse.json();
        const links = youtubeData.items.map(item => `https://www.youtube.com/watch?v=${item.id.videoId}`);
        res.json({links: links});
    } catch (error) {
        console.error('Error fetching YouTube links:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
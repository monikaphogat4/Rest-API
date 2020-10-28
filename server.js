import "dotenv/config.js";
import express from 'express';
import cors from "cors";

// create an instance of express to serve our end points
const app = express();

app.use(cors());

app.get('/api/sections', (req, res) => {
    const sections =[
        {
            name: "01-hero-lightpass",
            text:
                "Active Noise Cancellation for immersive sound. Transparency mode for hearing what is happening around you.",
            style: "black",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "148"
        },
        {
            name: "02-head-bob-turn",
            text: "Arrival of the fittest.",
            style: "black",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "132"
        },
        {
            name: "03-flip-for-guts",
            text: "Sound that cuts out the noise.",
            style: "white",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "89"
        },
        {
            name: "04-explode-tips",
            text:
                "Choose from three sizes of soft, flexible silicone tips that click into place. Find the best fit and get the best sound by using the Ear Tip Fit Test.",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "139"
        },
        {
            name: "05-flip-for-nc",
            text:
                "Enjoy superior sound quality with Adaptive EQ, which automatically tunes music to the shape of your ear for a rich, consistent listening experience.",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "140"
        },
        {
            name: "06-transparency-head",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "177"
        },
        {
            name: "07-flip-reveal-guts",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "69"
        },
        {
            name: "08-turn-for-chip",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "90"
        },
        {
            name: "09-scoop-turn",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "235"
        },
        {
            name: "10-fall-into-case",
            text: "Charge wirelessly. Use tirelessly.",
            baseUrl:
                "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
            imageCount :  "286"
        },


    ];
    res.json(sections);
});

app.post('/sections', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/sections', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/sections', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

// finally, launch our server on port 3001.
app.listen(process.env.PORT, () => console.log("App listening on ", `${process.env.PORT}`));

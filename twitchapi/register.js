app.get("/", (req, res) => {

    res.status(200).send(req.query['hub.challenge']);
    console.log("event was subscribed to");

})

app.post("/", (req, res) => {


    console.log(req.body);
    return res.status(200).send();
});

async function registerWebHook() {

    const data = {
        "hub.callback": process.env.TWITCH_API_CALLBACK,
        "hub.mode": "subscribe",
        "hub.topic": "https://api.twitch.tv/helix/users/follows?first=1&to_id=501793804",
        "hub.lease_seconds": 84600
    }

    const headers = {
        Authorization: `Bearer ${process.env.TWITCH_OAUTH}`,
        "Client-Id": process.env.TWITCH_CLIENT_ID,
        "Content-Type": "application/json",
    }

    try {
        const res = await axios.post("https://api.twitch.tv/helix/webhooks/hub", data, {
            headers: headers
        });

        if(res.status === 202) {
            console.log("Sent!");
        }

    } catch (err) {
        console.error(err);
    }
}


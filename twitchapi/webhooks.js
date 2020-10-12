async function checkBroadcasterLiveStatus() {

    const headers = {
        Authorization: `Bearer ${process.env.TWITCH_OAUTH}`,
        "client-id": process.env.TWITCH_CLIENT_ID
    }


    const data = {
        "hub.callback": process.env.TWITCH_API_CALLBACK,
        "hub.mode": "subscribe",
        "hub.topic": "https://api.twitch.tv/helix/streams?user_id=501793804",
        "hub.lease_seconds": 84600
    }
    try {

        const res = await axios.post(`https://api.twitch.tv/helix/webhooks/hub`, data, {
            headers: headers,
        });
        
        // console.log(res.data.data[0]);
        console.log(res.data)

        
    } catch (err) {
        console.error(err);
    }
}
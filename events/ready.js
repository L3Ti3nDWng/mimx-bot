module.exports = (client) => {
    console.log(`Đã kết nối với ${client.user.username}`);
    client.user.setPresence({
        activities: [{
            name: 'Free Fire',
            type: 'STREAMING',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }],
        status: "idle",
    });
}
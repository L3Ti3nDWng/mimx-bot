module.exports = {
    name: 'say',
    description: 'Để bot nói thay bạn.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'query',
            description: 'Nội dung muốn nói.',
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const chat = interaction.options.getString('query')
        interaction.channel.send(chat);
        interaction.reply({ content: 'Đã gửi thành công.',  ephemeral: true })
    },
}
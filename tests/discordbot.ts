import dotenv from 'dotenv';
import { Client, Intents, MessageEmbed } from 'discord.js';
import request from 'request';
import { existsSync, mkdirSync, readFileSync, unlink, writeFileSync } from 'fs';
import { gunzipSync } from 'node:zlib';
import { ByteTag, CompoundTag, DoubleTag, FloatTag, IntTag, ListTag, NbtBeBinaryStream, ShortTag, StringTag } from '../src';
dotenv.config();
const clinet: Client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

clinet.on('ready', () => {
    console.log(`Logged in as ${clinet.user?.tag}`);
});

clinet.on('messageCreate', message => {
    if (!message.guild || message.system || message.author.bot || !message.content.startsWith(process.env.PREFIX as string)) return;
    const args = message.content.slice(process.env.PREFIX?.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    if (!command) return;
    if (command === 'playerfile') {
        if (message.attachments.size < 1) {
            message.reply('player.datファイルを添付してください');
            return;
        }
        const file = message.attachments.first();
        if (!file) {
            message.reply('ファイルが読み取れません');
            return;
        }

        request(
            {
                method: 'GET',
                url: file.url,
                encoding: null,
            },
            // eslint-disable-next-line space-before-function-paren
            async function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    if (!existsSync('./dat/discord')) {
                        mkdirSync('./dat/discord');
                    }

                    writeFileSync('./dat/discord/player.dat', body, 'binary');
                    const data: Buffer = readFileSync('./dat/discord/player.dat');
                    unlink('./dat/discord/player.dat', (err) => {
                        if (err) console.error(err);
                    });
                    const binary: Buffer = gunzipSync(data);
                    const stream: NbtBeBinaryStream = new NbtBeBinaryStream(binary);
                    const tags = stream.read_root_tag() as CompoundTag;
                    message.reply(`解析結果

    ゲームモード: ${((tags.get_tag('playerGameType') as IntTag).value === 0 ? 'サバイバルモード' : ((tags.get_tag('playerGameType') as IntTag).value === 1 ? 'クリエイティブモード' : ((tags.get_tag('playerGameType') as IntTag).value === 2 ? 'アドベンチャー' : 'スペクテイター')))}
    プレイヤーX座標: ${((tags.get_tag('Pos') as ListTag).value as Array<DoubleTag>)[0].value}
    プレイヤーY座標: ${((tags.get_tag('Pos') as ListTag).value as Array<DoubleTag>)[1].value}
    プレイヤーZ座標: ${((tags.get_tag('Pos') as ListTag).value as Array<DoubleTag>)[2].value}
    プレイヤーワールド名: ${(tags.get_tag('Level') as StringTag).value}
    プレイヤーが地面に着地しているか: ${(tags.get_tag('OnGround') as ByteTag).value === 1 ? 'ついている' : 'ついていない'}
    体力: ${(tags.get_tag('Health') as FloatTag).value}
    プレイヤーの満腹度: ${(tags.get_tag('foodLevel') as IntTag).value}
    プレイヤーの満腹度消耗値: ${(tags.get_tag('foodExhaustionLevel') as FloatTag).value}
    プレイヤーの隠し満腹値: ${(tags.get_tag('foodSaturationLevel') as FloatTag).value}
    経験値ケージに表示されるレベル: ${(tags.get_tag('XpLevel') as IntTag).value}
    次のレベルまでの進捗率/パーセント: ${(tags.get_tag('XpP') as FloatTag).value}
    プレイヤーが収集した経験値の総量: ${(tags.get_tag('XpTotal') as IntTag).value}
    エンチャントテーブルで次のエンチャントを決定するために使われる乱数種: ${(tags.get_tag('XpSeed') as IntTag).value}
    XUID: ${(tags.get_tag('LastKnownXUID') as StringTag).value}
                    `);

                    let item_string = '';
                    for (const item of (tags.get_tag('Inventory') as ListTag).value as CompoundTag[]) {
                        item_string += `スロット番号: ${(item.get_tag('Slot') as ByteTag).value} アイテムID: ${(item.get_tag('id') as ShortTag).value} アイテムMETA: ${(item.get_tag('Damage') as ShortTag).value} 所持数: ${(item.get_tag('Count') as ByteTag).value}\n`;
                    }
                    message.reply(`所持アイテム(インベントリ)

                    ${item_string}
                    `);

                    let EnderChestInventory_string = '';
                    for (const item of (tags.get_tag('EnderChestInventory') as ListTag).value as CompoundTag[]) {
                        EnderChestInventory_string += `スロット番号: ${(item.get_tag('Slot') as ByteTag).value} アイテムID: ${(item.get_tag('id') as ShortTag).value} アイテムMETA: ${(item.get_tag('Damage') as ShortTag).value} 所持数: ${(item.get_tag('Count') as ByteTag).value}\n`;
                    }
                    message.reply(`エンダーチェストインベントリ

                    ${EnderChestInventory_string}
                    `);
                }
                else {
                    message.reply(
                        {
                            embeds: [
                                new MessageEmbed()
                                    .setTitle('データ保存中にエラーが発生しました')
                                    .setDescription(`statusCode: ${response.statusCode}\n${error}`)
                                    .setColor('RANDOM')
                                    .setTimestamp(),
                            ],
                        },
                    );
                }
            },
        );
    }
});

process.on('unhandledRejection', error => {
    console.error(error);
});

clinet.login()
    .catch(error => {
        console.error(error);
        process.exit(-1);
    });
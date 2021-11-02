/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from 'dotenv';
import { Client, Intents, MessageEmbed } from 'discord.js';
import request from 'request';
import { existsSync, mkdirSync, readFileSync, unlink, writeFileSync } from 'fs';
import { gunzipSync } from 'node:zlib';
import { ByteTag, CompoundTag, FloatTag, IntTag, ListTag, LongTag, NbtBeBinaryStream, ShortTag, StringTag } from '..';
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
    if (command === 'levelfile') {
        if (message.attachments.size < 1) {
            message.reply('level.datファイルを添付してください');
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

                    writeFileSync('./dat/discord/level.dat', body, 'binary');
                    const data: Buffer = readFileSync('./dat/discord/level.dat');
                    unlink('./dat/discord/level.dat', (err) => {
                        if (err) console.error(err);
                    });
                    const binary: Buffer = gunzipSync(data);
                    const stream: NbtBeBinaryStream = new NbtBeBinaryStream(binary);
                    const tags = (stream.read_root_tag() as CompoundTag).get_tag('Data') as CompoundTag;
                    message.reply(`解析結果


    NBTバージョン: ${(tags.get_tag('version') as IntTag).value}
    ワールドが正常に初期化されているか: ${(tags.get_tag('initialized') as ByteTag).value === 1 ? 'はい' : 'いいえ'}
    ワールド名:  ${(tags.get_tag('LevelName') as StringTag).value}
    ワールド生成プログラム名: ${(tags.get_tag('generatorName') as StringTag).value}
    ワールド生成プログラムバージョン: ${(tags.get_tag('generatorVersion') as IntTag).value}
    ワールドジェネレーターオプション: ${(tags.get_tag('generatorOptions') as StringTag).value}
    ワールドシード値: ${((tags.get_tag('RandomSeed') as LongTag).value as any).toString()}
    全世界の推定サイズ: ${((tags.get_tag('SizeOnDisk') as LongTag).value as any).toString()}
    ハードコアモードであるか: ${(tags.get_tag('hardcore') as ByteTag).value === 1 ? 'はい' : 'いいえ'}
    ゲームモード: ${((tags.get_tag('GameType') as IntTag).value === 0 ? 'サバイバルモード' : ((tags.get_tag('GameType') as IntTag).value === 1 ? 'クリエイティブモード' : ((tags.get_tag('GameType') as IntTag).value === 2 ? 'アドベンチャー' : 'スペクテイター')))}
    ワールド難易度: ${(tags.get_tag('Difficulty') as ByteTag).value === 0 ? 'ピースフル' : (tags.get_tag('Difficulty') as ByteTag).value === 1 ? 'イージー' : (tags.get_tag('Difficulty') as ByteTag).value === 2 ? 'ノーマル' : 'ハード'}
    レベルの開始以降のティック数: ${((tags.get_tag('Time') as LongTag).value as any).toString()}
    ワールド時刻: ${(tags.get_tag('DayTime') as IntTag).value}
    ワールドスポーンX座標: ${(tags.get_tag('SpawnX') as IntTag).value}
    ワールドスポーンX座標: ${(tags.get_tag('SpawnY') as IntTag).value}
    ワールドスポーンX座標: ${(tags.get_tag('SpawnZ') as IntTag).value}
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
    else if (command === 'playerfile') {
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
    プレイヤーリスポーンX座標(undefinedはなし): ${(tags.get_tag('SpawnX') as IntTag | undefined)?.value}
    プレイヤーリスポーンY座標(undefinedはなし): ${(tags.get_tag('SpawnY') as IntTag | undefined)?.value}
    プレイヤーリスポーンZ座標(undefinedはなし): ${(tags.get_tag('SpawnX') as IntTag | undefined)?.value}
    プレイヤーのリスポーンワールド名: ${(tags.get_tag('SpawnLevel') as StringTag).value}
    プレイヤーの満腹度、20が最大: ${(tags.get_tag('foodLevel') as IntTag).value}
    プレイヤーの満腹度消耗値: ${(tags.get_tag('foodExhaustionLevel') as FloatTag).value}
    プレイヤーの隠し満腹値: ${(tags.get_tag('foodSaturationLevel') as FloatTag).value}
    プレイヤーの満腹/満腹度タイマー: ${(tags.get_tag('foodTickTimer') as FloatTag).value}
    経験値ケージに表示されるレベル: ${(tags.get_tag('XpLevel') as IntTag).value}
    次のレベルまでの進捗率/パーセント: ${(tags.get_tag('XpP') as FloatTag).value}
    プレイヤーが収集した経験値の総量: ${(tags.get_tag('XpTotal') as IntTag).value}
    エンチャントテーブルで次のエンチャントを決定するために使われる乱数種: ${(tags.get_tag('XpSeed') as IntTag).value}
    現在選択しているインベントリのスロットID: ${(tags.get_tag('SelectedInventorySlot') as IntTag).value}
    ネームタグ: ${(tags.get_tag('NameTag') as StringTag).value}
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
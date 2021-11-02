/* eslint-disable @typescript-eslint/no-explicit-any */
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { gunzipSync } from 'zlib';
import { ByteTag, CompoundTag, IntTag, LongTag, NbtBeBinaryStream, StringTag } from '../index';
const [, , format, filepath, writetext] = process.argv;

// もし引数がない or -help だった
if (!format || format === '-help') {
	console.info(`
    コマンド使用例: 
    helpを表示する: nbt-utils -help
    level.datを解析する: nbt-utils -level ファイルパス
    level.datを解析して解析結果をtxt出力する: nbt-utils -level ファイルパス -txt
    player.datを解析する: nbt-utils -player ファイルパス
    player.datを解析して解析結果をtxt出力する: nbt-utils -player ファイルパス -txt

    ファイルパスに変なもの入れたらぶっ壊れますのでやめてください。
    今のところリュージョンフォーマットには対応していません。
    多分そのうち対応すると思います。
    もやんが仕様変更してきたら多分動かないです。
    バグ報告はKen_Cirまでお願いします。
    `);
	process.exit();
}

// フォーマット の指定が無効
if (format !== '-level' && format !== '-player') {
	console.info(`
    コマンドの最初の引数が無効です、nbt-utils -help で使用法を確認してください
    `);
	process.exit();
}

// ファイルパスの指定が無効な場合は
if (!existsSync(filepath)) {
	console.info(`
    コマンドの第二引数ファイルパスが無効です。
    `);
	process.exit();
}

const data: Buffer = readFileSync(filepath);
const binary: Buffer = gunzipSync(data);
const stream: NbtBeBinaryStream = new NbtBeBinaryStream(binary);
const tags = (stream.read_root_tag() as CompoundTag).get_tag('Data') as CompoundTag;
if (format === '-level') {
	console.info(`
    ${filepath} level.dat解析モードで解析します
    
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
    
    解析結果です
    `);

	if (writetext === '-txt') {
		writeFileSync('level.dat.txt', `NBTバージョン: ${(tags.get_tag('version') as IntTag).value}
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
ワールドスポーンX座標: ${(tags.get_tag('SpawnZ') as IntTag).value}`);
		console.info('level.dat.txtに解析結果を書き出しました');
	}

	process.exit();
}
// --- キー設定（小さい数字で練習用） ---
const e = 3;     // 公開鍵
const d = 7;     // 秘密鍵
const n = 33;    // n = p × q（公開）

// --- 数字を暗号化（ロック） ---
function encrypt(message) {
    return (message ** e) % n;
}

// --- 数字を復号化（ロック解除） ---
function decrypt(cipher) {
    return (cipher ** d) % n;
}

// --- 試してみよう！ ---
const original = 4;                    // 暗号化したい数字（例：4）
const encrypted = encrypt(original);   // ロックする
const decrypted = decrypt(encrypted);  // ロック解除する

console.log("元の数字：", original);
console.log("暗号化された数字：", encrypted);
console.log("元に戻した数字：", decrypted);

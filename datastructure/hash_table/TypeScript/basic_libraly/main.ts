import { HashTable } from "./dictionary.js";

/**
 * 要素の追加
 * @param {Map<string, number>} data 
 */
let test_add = (data: Map<string, number>) => {
    let tmp_data: HashTable = new HashTable(data);
    console.log(tmp_data.print_data());

    let key_data: string[] = ["key1", "key2", "key3"];
    let value_data: number[] = [100, 200, 300];
    if (key_data.length == value_data.length) {
        for (let count = 0; count < key_data.length; count++) {
            console.log(tmp_data.add(key_data[count], value_data[count]));
        }
    }
}

/**
 * keyに紐付いた要素を取り出す
 * @param {Map<string, number>} data 
 */
let test_get_data = (data: Map<string, number>) => {
    let tmp_data: HashTable = new HashTable(data);
    console.log(tmp_data.print_data());

    let key_data: string[] = ["key1", "key2", "key3"];
    let value_data: number[] = [100, 200, 300];
    if (key_data.length == value_data.length) {
        for (let count = 0; count < key_data.length; count++) {
            tmp_data.add(key_data[count], value_data[count]);
        }
    }
    console.log(tmp_data.get_data("key2"), tmp_data.get_data("key2") == undefined);
    console.log(tmp_data.get_data("key"), tmp_data.get_data("key") == undefined);
}

/**
 * キーの有無を確認
 * @param {Map<string, number>} data 
 */
let test_check_key = (data: Map<string, number>) => {
    let tmp_data: HashTable = new HashTable(data);
    let key_data: string[] = ["key1", "key2", "key3"];
    let value_data: number[] = [100, 200, 300];
    if (key_data.length == value_data.length) {
        for (let count = 0; count < key_data.length; count++) {
            tmp_data.add(key_data[count], value_data[count]);
        }
    }

    console.log(tmp_data.check_key("key3"), tmp_data.check_key("key3") == true);
    console.log(tmp_data.check_key("key4"), tmp_data.check_key("key4") == false);
}

/**
     * 要素の削除
 */
let test_delete = (data: Map<string, number>) => {
    let tmp_data: HashTable = new HashTable(data);
    let key_data: string[] = ["key1", "key2", "key3", "key_key"];
    let value_data: number[] = [100, 200, 300, 123987];
    if (key_data.length == value_data.length) {
        for (let count = 0; count < key_data.length; count++) {
            tmp_data.add(key_data[count], value_data[count]);
        }
    }

    console.log(tmp_data.print_data());
    console.log(tmp_data.del("key_key"));

}

let main = () => {
    const data: Map<string, number> = new Map();
    test_add(data);
    test_get_data(data);
    test_check_key(data);
    test_delete(data);
}

main();
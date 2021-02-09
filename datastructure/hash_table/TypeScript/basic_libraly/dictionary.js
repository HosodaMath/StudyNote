class HashTable {
    constructor(data) {
        this.data = new Map();
        /**
         * 要素を確認
         */
        this.print_data = () => {
            return this.data;
        };
        /**
         * keyに紐付いた要素を取り出す
         * @param {string} key
         */
        this.get_data = (key) => {
            return this.data.get(key);
        };
        /**
         * キーの有無を確認
         * Check if the key is present.
         * @param {string} key
         */
        this.check_key = (key) => {
            return this.data.has(key);
        };
        /**
         * 要素の追加
         * @param {string} key
         * @param {number} value
         */
        this.add = (key, value) => {
            this.data.set(key, value);
            return this.data;
        };
        /**
         * 要素の削除
         * @param {string} key
         */
        this.del = (key) => {
            this.data.delete(key);
            return this.data;
        };
        this.data = data;
    }
}
export { HashTable };

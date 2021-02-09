class HashTable {
    private data: Map<string, number> = new Map()
    constructor(data: Map<string, number>) {
        this.data = data;
    }

    /**
     * 要素を確認
     */
    public print_data = () => {
        return this.data;
    }

    /**
     * keyに紐付いた要素を取り出す
     * @param {string} key 
     */
    public get_data = (key: string) => {
        return this.data.get(key);
    }

    /**
     * キーの有無を確認
     * Check if the key is present.
     * @param {string} key 
     */
    public check_key = (key: string) => {
        return this.data.has(key);
    }

    /**
     * 要素の追加
     * @param {string} key 
     * @param {number} value 
     */
    public add = (key: string, value: number) => {
        this.data.set(key, value);

        return this.data;
    }

    /**
     * 要素の削除
     * @param {string} key 
     */
    public del = (key: string) => {
        this.data.delete(key);

        return this.data;
    }


}

export { HashTable };
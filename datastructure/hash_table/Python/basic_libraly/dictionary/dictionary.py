from typing import Dict, KeysView, ValuesView


class Dictionary:
    def __init__(self, data: Dict[str, int]) -> None:
        self.data = data

    def get_data(self) -> Dict[str, int]:
        tmp_data = self.data

        return tmp_data

    def get_keys(self) -> KeysView[str]:
        tmp_data = self.data
        key_data = tmp_data.keys()

        return key_data

    def get_values(self) -> ValuesView[int]:
        tmp_data = self.data
        value_data = tmp_data.values()
        
        return value_data

    def search_data(self, keyword: str) -> str:
        tmp_data = self.data
        answer = ""
        if tmp_data.get(keyword) != None:
            answer = "{0}の価格は{1}です。\n".format(keyword, tmp_data.get(keyword))
        else:
            answer = "確認できませんでした。" + "存在しない可能性があります。\n"

        return answer

    def copy(self) -> Dict[str, int]:

        return self.data

    def add(self, key: str, value: int) -> Dict[str, int]:

        print("キー{0}と値{1}を追加しました。".format(key, value))
        self.data[key] = value
        tmp_data = self.data

        return tmp_data

    def delete(self, key: str) ->  Dict[str, int]:
        value = self.data.get(key)
        del self.data[key]
        print("キー{0}と値{1}を削除しました。".format(key, value))
        tmp_data = self.data

        return tmp_data

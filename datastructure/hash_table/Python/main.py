from typing import Dict


def out_data(data: Dict[str, int]) -> None:
    tmp_data = data

    print(tmp_data)


def search_data(data: Dict[str, int], keyword: str) -> None:
    tmp_data = data

    if tmp_data.get(keyword) != None:
        print("{0}の価格は{1}です。".format(keyword, tmp_data.get(keyword)))
    else:
        print("確認できませんでした。存在しない可能性があります。")


if __name__ == "__main__":
    data: Dict[str, int] = {
        "value1": 100, "value2": 200,
        "value3": 300, "value4": 400,
        "value5": 500, "value6": 600
    }
    print(type(data))

    print("そのまま出力")
    out_data(data)

    print("検索出力 ->  true")
    search_data(data, "value1")

    print("検索出力 ->  false")
    search_data(data, "value")

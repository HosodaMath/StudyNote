from typing import Dict
from dictionary.dictionary import Dictionary


def test_print(data: Dict[str, int]) -> None:
    init_dict = Dictionary(data)
    print("そのまま出力")
    print(init_dict.get_data(), "\n")


def test_get_keys(data: Dict[str, int]) -> None:
    init_dict = Dictionary(data)
    print("すべてのキーを取得")
    print(init_dict.get_keys(), "\n")


def test_get_values(data: Dict[str, int]) -> None:
    init_dict = Dictionary(data)
    print("すべての値を取得")
    print(init_dict.get_values(), "\n")


def test_search(data: Dict[str, int]) -> None:
    init_dict = Dictionary(data)
    print("検索出力 ->  true")
    print(init_dict.search_data("value1"), "\n")

    print("検索出力 ->  false")
    print(init_dict.search_data("value"), "\n")


def test_add(data: Dict[str, int]):
    init_dict = Dictionary(data)
    print("値の追加")
    print(init_dict.add("value7", 700), "\n")


def test_delete(data: Dict[str, int]):
    init_dict = Dictionary(data)
    print("間違った値を追加してしまったので削除する", "\n")
    print(init_dict.add("value", 0), "\n")

    print(init_dict.delete("value"), "\n")


if __name__ == "__main__":
    data: Dict[str, int] = {
        "value1": 100, "value2": 200,
        "value3": 300, "value4": 400,
        "value5": 500, "value6": 600
    }

    test_print(data)

    test_get_keys(data)

    test_get_values(data)

    test_search(data)

    test_add(data)

    test_delete(data)

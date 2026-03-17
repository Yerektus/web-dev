def double_char(string):
    return "".join(char * 2 for char in string)


def count_hi(string):
    return sum(1 for index in range(len(string) - 1) if string[index : index + 2] == "hi")


def cat_dog(string):
    return string.count("cat") == string.count("dog")


def count_code(string):
    count = 0

    for index in range(len(string) - 3):
        if string[index : index + 2] == "co" and string[index + 3] == "e":
            count += 1

    return count


def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)


def xyz_there(string):
    for index in range(len(string) - 2):
        if string[index : index + 3] == "xyz" and (
            index == 0 or string[index - 1] != "."
        ):
            return True
    return False

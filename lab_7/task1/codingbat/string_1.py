def hello_name(name):
    return f"Hello {name}!"


def make_abba(a, b):
    return a + b + b + a


def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"


def make_out_word(out, word):
    return out[:2] + word + out[2:]


def extra_end(string):
    return string[-2:] * 3


def first_two(string):
    return string[:2]


def first_half(string):
    return string[: len(string) // 2]


def without_end(string):
    return string[1:-1]

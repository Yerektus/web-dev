def string_times(string, n):
    return string * n


def front_times(string, n):
    return string[:3] * n


def string_bits(string):
    return string[::2]


def string_splosion(string):
    return "".join(string[: index + 1] for index in range(len(string)))


def last2(string):
    if len(string) < 2:
        return 0

    ending = string[-2:]
    count = 0

    for index in range(len(string) - 2):
        if string[index : index + 2] == ending:
            count += 1

    return count


def array_count9(nums):
    return nums.count(9)


def array_front9(nums):
    return 9 in nums[:4]


def array123(nums):
    for index in range(len(nums) - 2):
        if nums[index : index + 3] == [1, 2, 3]:
            return True
    return False


def string_match(a, b):
    shortest = min(len(a), len(b))
    count = 0

    for index in range(shortest - 1):
        if a[index : index + 2] == b[index : index + 2]:
            count += 1

    return count

def count_evens(nums):
    return sum(1 for number in nums if number % 2 == 0)


def big_diff(nums):
    return max(nums) - min(nums)


def centered_average(nums):
    ordered = sorted(nums)
    middle = ordered[1:-1]
    return sum(middle) // len(middle)


def sum13(nums):
    total = 0
    skip_next = False

    for number in nums:
        if skip_next:
            skip_next = False
            continue

        if number == 13:
            skip_next = True
            continue

        total += number

    return total


def sum67(nums):
    total = 0
    ignore = False

    for number in nums:
        if number == 6:
            ignore = True
        if not ignore:
            total += number
        if ignore and number == 7:
            ignore = False

    return total


def has22(nums):
    for index in range(len(nums) - 1):
        if nums[index] == 2 and nums[index + 1] == 2:
            return True
    return False

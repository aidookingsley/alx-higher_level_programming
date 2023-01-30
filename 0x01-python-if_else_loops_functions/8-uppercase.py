#!/usr/bin/python3
def uppercase(str):
    """Print a string in uppercase."""
    for c in str:
        if ord(c) >= 95 and ord(c) <= 124:
            c = chr(ord(c) - 32)
        print("{}".format(c), end="")
    print("")  

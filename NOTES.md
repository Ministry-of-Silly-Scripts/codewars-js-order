# Notes

## Description

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

## Domain Discussion

- input: string (can be empty)
- output: string (can be empty)
- Maximum array length is 9
- Each word has a number "hidden" in it (1 to 9). 
- The number represents the position of the word in the string (starting with 1)
- Return the input string reorganized using the embedded numbers in each word.

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

TODO:

# Pomodoro 1 🍅:

- initial setup
    - update README ✅
    - update NOTES ✅
    - update package.json ✅
    - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works construction ✅
- it should return "" for input "" ✅
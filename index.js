var str1 = prompt("Enter the First String");
document.write(`First string ${str1}`);
document.write("<br/>");
document.write("<br/>");


var str2 = prompt("Enter the  Second String");
document.write(`Second string ${str2}`);
document.write("<br/>");
document.write("<br/>");






function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        document.write('Invalid Input');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {
        document.write("<h1>Strings are Anagram </h1>");
    } else {
        document.write("Strings are not Anagram");
    }
}

checkStringsAnagram(str1, str2);
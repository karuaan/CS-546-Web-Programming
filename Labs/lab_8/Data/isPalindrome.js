//***
// Karan Shah
// I pledge my Honor that I have abided by the Stevens Honors System.
// CS 546 WS
//***

function isPalidrome(str)
        {
            if (!str)
            {
                throw "please insert text";
            }
            else
            {
                var ogStr;
                str = str.replace(/[\W_]/g, '');
                ogStr = str.toLowerCase();

                var Str = ogStr.split('').reverse().join('');

                var reversedStr = Str;
                var Palindrome;

                console.log(reversedStr);
                console.log(ogStr);

                if(ogStr == reversedStr)
                {
                    return Palindrome = true;
                }
                
                else
                {
                    return Palindrome = false;
                }
            }
        }
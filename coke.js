import { input, print } from './bitcamp/lib.js';

let coin = Number(input("Please toss your coin here 👉  "));


let b;
let coin2; 
let coin3;


    if (coin == 5 || coin == 10 || coin == 25){
        if( coin < 50) {
          b = 50 - coin;
          print('Amount Duo:', b);
        }
      
          coin2 = Number(input('Please toss ypur coin here 👉  '));
          coin = coin + coin2;
          if( coin < 50) {
            b = 50 - coin;
            print('Amount Duo:', b);
          }
          coin3 = Number(input('Please toss ypur coin here 👉  '));
          coin = coin + coin3;
        
    } else {
        print ('Amount Duo: 50');
        // coin = Number(input("Please toss your coin here 👉 "));
    }

    if (coin == 50 || coin < 50) {
      print ('Change Owed: 0')
    } else if (coin > 50) {
      print ('Change Owed: ', coin - 50);
    }
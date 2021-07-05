//Is Div By Five
function is_div_by_5(number){
    let x = number%5;
    if (x===0){
        console.log(true);
    } else{
        console.log(false);
    }
}
is_div_by_5(20);

// Either Only
function either_only(number){

    let x = number%3;
    let y = number%5;

    if(x===0 && y===0){
        console.log(false);
    } else if(x===0 || y===0){
        console.log(true);
    } else{
        console.log(false);
    }
}
either_only(26);

// LARGER NUMBER 
function larger_number(num1,num2){
    if(num1>num2){
        console.log(num1);
    } else if(num1<num2){
        console.log(num2);
    } else{
        console.log("num1 is equal to num2");
    }
}
larger_number(20,30);

// WORD CHECK
function word_check(word){
    let word_length = word.length;

    if (word_length>6){
        console.log("long");
    } else if (word_length<6){
        console.log("short");
    } else{
        console.log("medium")
    }
}
word_check("chicken");

// COUNT E's
function count_e(word){

    let word_arr = word.split("");
    let i = 0;
    let counter = 0;
    while (i < word.length ){

        let index_val = word_arr[i];

        if (index_val === "e"){
            counter++;
            i++;
        } else{
           i++;
        }
    }

    console.log("The letter 'e' appears " + counter + " times" );
   
}
count_e("elevator");

// COUNT A
function count_a(word){
    let separate = word.split("");
    let counter_a = 0;
    let counter_A = 0;
    let i = 0;
    while (i < word.length){
        let position = separate[i];
        switch (position){
            case "A":
                counter_A++;
                i++;
            break;
            case "a":
                counter_a++;
                i++;
            break;
            default:
                i++;
        }
    }
    console.log("Lowercase 'a' appears " + counter_a + " times");
    console.log("Uppercase 'A' appears " + counter_A + " times");
    console.log("Total: " + (counter_a + counter_A) + " letter A's");
}
count_a("Apparent");

//COUNT VOWELS
function count_vowels(word){
    let separate = word.split("");
    let i = 0;
    let counter = 0;
    while (i < word.length){
        let position = separate[i];
        switch(position){
            case "A":
            case "a":
            case "E":
            case "e":
            case "I":
            case "i":
            case "O":
            case "o":
            case "U":
            case "u":
                counter++;
                i++;
                break;
            default:
                i++;
        } 
    }
    console.log("There are " + counter + " vowels in the word")
}
count_vowels("Amount");

// SUM NUMS
function sum_nums(max){
    myarr=[];
    let i=0;
    while (i <= max){
     myarr.push(i);
      i++;  
    }

    let x =0; 
    let sum = 0;
   
    while (x < myarr.length){
        let position  = myarr[x];
        sum += position;
        x++;  
   }
    console.log(sum);
}
sum_nums(6);

// FACTORIAL 
function factorial(num){
    let num_array=[];
    let i = 1;
    while (i <= num){
        num_array.push(i);
        i++;
    }
    
    let x = 0;
    let product= 1;
    while (x < num_array.length){
        let position = num_array[x];
        product *= position;
        x++; 
    }
    console.log(product);
}
factorial(5);


// REVERSE
function reverse(word){
    let separate_word = word.split("");
    let backwards = separate_word.reverse();
    let new_word = backwards.toString();
    reverse_order = new_word.replace(/,/g, "");
    // RegExp g modifier is used to find all matches rather than stopping after the first match
    console.log(reverse_order);
}
reverse("apple");


// GOODBYE
function goodbye(name){
    console.log("Goodbye " + name + "!");
}
goodbye("Stacey");
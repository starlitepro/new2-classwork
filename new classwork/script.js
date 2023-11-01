function greet() {
  console.log("welcome to js")
 }
 
 greet ()
 
 
 //exercise 1:
 function celsiusTofahreint(celsius) {
   fahreint =(celsius * 9/5) + 32;
   return fahreint;
 }
 
 function fahreintTocelsius(fahreint) {
   celsius = (fahreint - 32) * 5/9;
   return celsius;
 }
 
 console.log(celsiusTofahreint(40));
 console.log(fahreintTocelsius(104));
 
 //exrcise 2:
 function factorial(numar) {
     if (numar === 0 || numar === 1) {
         return 1;
     } else {
         return numar * factorial(numar - 1);
     }
     console.log("The factorial of 0 is: " + factorial(0));
     console.log("The factorial of 7 is: " + factorial(7));
     console.log("The factorial of 10 is: " + factorial(10));
 
 
     //exerise 3:
     function applyFunctionOnArray(array, functionCallback) {
      return array.map(callback function);
     }
         function double(number) {
         return number * 2;
      }
        let numbers = [1, 2, 3, 4, 5];
      let result = applyFunctionOnArray(numbers, double);
      console.log(result);
 
      //exercise 4:
      let Library = {
      books: [],
      addBook: function(title, author, read) {
          this.carti.push({ title, author, reading });
      },
      deleteBook: function(title) {
          this.books = this.books.filter(book => book.title !== title);
      },
      displayRead: function() {
          const booksRead = this.books.filter(book => book.read);
          if (booksRead.length === 0) {
              console.log("There are no read books in the library.");
          } else {
              console.log("Books read in library are:");
              booksRead.forEach(book => {
                  console.log(`Title: ${book.title}, Author: ${book.author}`);
              });
          }
      }
      };
      Library.addBook("Book 1", "Author 1", true);
      Library.addBook("Book 2", "Author 2", false);
      Library.addBook("Book 3", "Author 3", true);
 
      Library.displayRead();
 
      let bookUnread = Library.books.find(book => !book.read);
 
      console.log("Books left in library:");
      Library.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}`);
      });
 
       if (bookUnread) {
      console.log("Unread book in library:");
      console.log(`Title: ${Unread book.title}, Author: ${Unread book.author}`);
       }
   
    //exercise 5:
    let person = {
      name: "Ion Cercel",
      age: 22,
      occupation: "Programmer"
    };
    let { name, age } = person;
 
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
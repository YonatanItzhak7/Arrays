// var nameArray = ["yonatan","ilan","agam","liel"]
// console.log(nameArray);

// console.log(nameArray[2]);

// for(var i = 0; i < nameArray.length; i++){
//     console.log(nameArray[i])
// }

// var numberArray = [100, 200, 300, 400, 500, 600, 700]
// console.log(numberArray);

// console.log(numberArray[3]);

// for(var i = 0; i<numberArray.length; i++){
//     console.log(numberArray[i]);
// }

// var numArray = [1,4,6,7,15,23,30,41,44,50]
// console.log(numArray)

// for (var i =0; i< numArray.length;i++){

//     if(numArray[i]%2==0)
//     console.log(numArray[i])
// }

// var myArray=["hello",2,"word","jacob",6,7,"bye",98];

// for(var i=0; i<myArray.length; i++){

//     if(myArray[i]*1!= myArray[i]){

//     console.log(myArray[i]);

//     }
// }

// var someArray = []
// someArray.push(9);
// console.log(someArray);

// var emptyArray = [];
// for (var i = 0; i < 10; i++) {
//   emptyArray.push(i);
// }
// console.log(emptyArray);

// --------------------תרגלים----------------------//

// var numArray = [5,3,7,8,11]
// sum = 0;
// avg=0;
// for(var i=0;i<numArray.length; i++){
//     sum= sum +numArray[i]
// }
// console.log(sum);
// console.log(avg = sum/5);

// var nameArray = ["Eldad","Yonatan","Ilan","Agam","Liel"]
// for(var i =0; i<5;i++){
//     console.log(nameArray[i]);
// }

// function CheckNumberInArray(numb, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (numb == array[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// CheckNumberInArray(2,[8,6,2])

// function evenNumber(array){
//     var sum = 0
//     for(var i = 0; i<array.length;i++){
//         if(array[i]%2==0){
//             sum++;
//         }
//     }
//     return sum;
// }
// evenNumber([2,3,5,6])

// function CopySameLengthArray(array1,array2){
//     if(array1.length==array2.length){
//         return true;
//     }
//     return false;
// }
// CopySameLengthArray([3,6,5,4],[1,3,4,8])
// var array = [5,4,6,8,9,7]
// function MaxToMin(array){
//     for(var i=0; i<array.length; i++){
//         if(array[i]>array[i+1]){
//             array.unshift(array[i+1])
//         }

//     }
// }

// function getMax(array){
//     var max = array[0]
//     for(var i = 0; i<array.length; i++){
//         if(max<=array[i]){
//             max=array[i]
//         }
//     }
//     return max;
// }
// getMax([5,4,6,8,9,7])

// function minNumber(array){
//     var min = array[0]
//     for(var i=0;i<array.length;i++){
//         if(min>=array[i]){
//             min=array[i]
//         }
//     }
//     return array.indexOf(min);
// }
// minNumber([8,5,3,1,6,7])

// function SumMAx(array){
//     var sum = 0
//     for(var i=0; i<array.length;i++){
//         sum+=array[i]
//     }
//     return sum;
// }
// SumMAx([1,2,3,4])

// function MaxToMin(array){
//     var max = array[0]
//     for(var i=0; i<array.length;i++){
//         if(max<array[i]){
//             max=array[i]
//         }
//     }
//     var min = array[0]
//     for(var i=0; i<array.length;i++){
//         if(min>array[i]){
//             min=array[i]
//         }
//     }
//     return (max*min);
// }
// MaxToMin([1,2,3,4,5])

// function HighEvenNumber(array){
//     var max = array[0]
//     for(var i=0;i<array.length;i++){
//         if((max<array[i])&&(array[i]%2==0)){
//             max=array[i]
//             var ind = i
//         }
//     }
//     return (ind)
// }
// HighEvenNumber([1,2,3,4,5])

// function NotEvenNumb(array){
//     var sum = 0
//     for(var i=0;i<array.length;i++){
//         if(array[i]%2==1){
//             sum+=array[i]
//         }
//     }
//     return sum;
// }
// NotEvenNumb([3,2,5,4,1,3])

// function getNames(array,name){
//     array.push(name)
//     return array
// }
// console.log(getNames([2,3,4,6],"Yonatan"))


// function getEmail(array,email){
//     array.unshift(email)
//     return array
// }
// console.log(getEmail([3,4,5,6],"@"));

// function sumNumbers(array){
//     var sum = 0
//     for(var i=0; i<array.length;i++){
//         sum+=array[i]
//     }
//     return sum;
// }
// console.log(sumNumbers([2,3,4,5,6]));
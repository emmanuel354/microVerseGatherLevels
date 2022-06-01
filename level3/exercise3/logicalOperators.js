let myArray =[];
//filling in my array
for(let i=1;i<16; i++){
  myArray.push(i);
}
len=myArray.length;
for(let x=0; x<len; x++){
  if(myArray[x]>2 && myArray[x]<8){
    console.log(myArray[x]);
  }
}
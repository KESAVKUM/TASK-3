// JSON FOR LOOP

var arr=[{"name":"kesav","age":"20"},{"name":"hari","age":"23"}];
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i].name,arr[i].age);
}
// JSON FOR IN LOOP

var obj1={
    "name":"kesav",
    "age":"21",
    "batch":"B40 WD2",
    "gmail":"kesavkum**@gmail.com",
    "phone":"735850****",
}
for(var key in obj1){
console.log(key,obj1[key]);
}
// RESUME DATA IN JSON FORMAT

var resume={
    "name":"kesav kumar",
    "dept":"bsc.cs",
    "yop":"2022",
    "age":"21",
    "gender":"male",
    "college":"alpha arts college",
    "percentage":"76.2",
    "skills":"html,css,javasceipt",
    "gmail":"kesavkum**@gmail.com",
    "phone":"735850658",
    };
for(var key in resume){
console.log(key,resume[key]);
}



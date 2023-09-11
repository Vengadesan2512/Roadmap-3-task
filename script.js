console.log("working");

//-------------------------TASK  3 JASON---------------------------------//
let vgd = new XMLHttpRequest();
console.log(vgd);
vgd.open("get","https://restcountries.com/v3.1/all");
vgd.send();
vgd.onload=function(){
    const data = JSON.parse(vgd.response);
    console.log(data[0]);
    for(let i = 0; i<data.length; i++){
        console.log("name:",data[i].name.common);
        console.log("region:",data[i].region);
        console.log("subregion:",data[i].subregion);
        console.log("population:",data[i].population);
        
    };    
};
//------------------finally I have written flags name,name,region,subregion and population in the console box---------------------//

    

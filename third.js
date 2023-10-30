function checkForm(a){
var name = a.name.value
var pass = a.pass.value
var repass  = a.repass.value
var state = a.state.value

var fail = ''
if (name==''||pass==''||state==''){
    fail='full all labels'
}
else if (name.length<=1||name.lenght>50){
    fail = 'correct the name'
}
else if (pass!=repass){
    fail = 'passwords not similar'
}
else if (pass.split('&').lenght>1){
    fail = 'incorrect password'
}
if (fail !=''){
    document.getElementById('asd').innerHTML=fail;
}
else{
    
    document.getElementById('asd').innerHTML='congrats, all data is correct' 
    console.log(name,pass)
    
};


return false;

};
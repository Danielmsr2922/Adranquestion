var a = 10 + 3;
var b = KK + 3;
var KK = 2000;
var c = 10+ 2;
var daa = String(a);

document.getElementById("buttonlogin").addEventListener('click', loginuser)


function start(){
    yesbaby()
}
function yesbaby(){
    var oooooooooo = 1
    document.getElementById('senhafoda').addEventListener(ooo).innerHTML = oooooooooo;
}

function loginuser(){
    
    var bo = 12 + a
    var ob = bo - 12
    var oobb = ob + 77
    var aaaa = Math.sin(oobb * Math.PI / 180);
    var bwww = String(aaaa)

    //Campos de texto input
    let textuser = document.getElementById("txtuser") ; 
    let textpassword = document.getElementById("txtpassword") ;
    //comparando os valores
    var user = textuser.value;
    var password = textpassword.value;

    //Campos vazios

    if( user == '') {
        document.getElementById("withoutname").innerHTML = "Please complete User Name";
        return;
    }
    if( user == 'Adran') {
        document.getElementById("withoutname").innerHTML = "Acho que muitos se esquecem de meu nome";
        return;
    }

    if( password == '') {
        document.getElementById("withoutname").innerHTML = "";
        document.getElementById("withoutpassword").innerHTML = "Complete a senha, o que eu mais amo?";
        return;
    }
    if( password == 'Fogo') {
        document.getElementById("withoutname").innerHTML = "";
        document.getElementById("withoutpassword").innerHTML = "E Claro, as coisas nao seriam tao faceis, lembre-se cesar estava errado";
        return;
    }
    if( password == 'fogo') {
        document.getElementById("withoutname").innerHTML = "";
        document.getElementById("withoutpassword").innerHTML = "E Claro, as coisas nao seriam tao faceis, lembre-se cesar estava errado";
        return;
    }


    //Login e senha
    if( user == 'AdranDraxan'){
        
    }
    
    else{
        document.getElementById("withoutpassword").innerHTML = "";
        document.getElementById("withoutname").innerHTML = 'Veja bem' ;
        return;
    }
    
    if( password == 'LGPX'){
    }
    else{
        document.getElementById("withoutname").innerHTML = "";
        document.getElementById("withoutpassword").innerHTML = "Wrong Password";
        return;
    }





    document.getElementById("withoutpassword").innerHTML = "";

    //Redirecionando
    alert("Seja bem vindo");
    window.location.href = "anotherpage.html";
}





var a = 2, b = 1;
var result = --a - --b + ++b + b--;

//--a;  =  1
//--a - --b; =1-0=1
//--a - --b + ++b; =1+1=2
//--a - --b + ++b + b--; =2+1=3
// a--=1,b--=0 so a-- -b--=1, 
//b becomes  after increment++b=1 
//1+1=2
//  result= 3    a=1 b=0 
document.write("a is "+ a + "<br>");
document.write("b is "+ b + "<br>");
document.write("result is "+ result + "<br>");
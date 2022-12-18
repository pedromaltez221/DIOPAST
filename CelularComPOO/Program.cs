using DesafioPOO.Models;

Console.WriteLine("Nokia:");
Nokia nokia = new Nokia("(31988097344)","Xiaomi","123123123",16);

nokia.Ligar();
nokia.InstalarAplicativo("WPP");

Console.WriteLine("Apple");
Iphone apple = new Iphone("(31988097345)","Apple","123123125",16);
apple.Ligar();
apple.InstalarAplicativo("TL");
// TODO: Realizar os testes com as classes Nokia e Iphone
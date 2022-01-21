
   function myFunction() {
      let x1 = document.getElementById("q1");
      let x2 = document.getElementById("q2");
      let x3 = document.getElementById("q3");
      let x4 = document.getElementById("q4");
      let x5 = document.getElementById("q5");
      let x6 = document.getElementById("q6");
      let x7 = document.getElementById("q7");

      let i1 = x1.selectedIndex;
      let i2 = x2.selectedIndex;
      let i3 = x3.selectedIndex;
      let i4 = x4.selectedIndex;
      let i5 = x5.selectedIndex;
      let i6 = x6.selectedIndex;
      let i7 = x7.selectedIndex;

      
      let a1 = x1.options[i1].text;
      let a2 = x2.options[i2].text;
      let a3 = x3.options[i3].text;
      let a4 = x4.options[i4].text;
      let a5 = x5.options[i5].text;
      let a6 = x6.options[i6].text;
      let a7 = x7.options[i7].text;
      
      //Auswertung Frage 1 
    if(a1=="Kopf"||a1=="Arme"||a1=="Beine"){
   pic1();
   document.getElementById("Alexandersname").style = "display:none;";
   document.getElementById("Janinasname").style = "display:none;";
    } else if(a1=="Fuß"||a1=="Bauchregion"||a1=="Rücken"){
        document.getElementById("Janinasname").style = "display:none;";
        document.getElementById("Petrasname").style = "display:none;";
        pic2();
    } 
  

    //Auswertung Frage 2
    if(a2=="Adipositas"||a2=="Bluthochdruck"||a2=="Chronische Niereninsuffizienz"||a2=="Chronische Lungenerkrankung"){
        pic1();
        document.getElementById("Alexandersname").style = "display:none;";
        document.getElementById("Janinasname").style = "display:none;";
         } else if(a2=="Bösartige Tumorerkrankung"||a2=="Diabetes"||a2=="Sonstiges"){
             document.getElementById("Janinasname").style = "display:none;";
             document.getElementById("Petrasname").style = "display:none;";
             pic2();
         }
   

   //Auswertung Frage 3
   if(a3=="Nein"){
    pic1();
    document.getElementById("Alexandersname").style = "display:none;";
    document.getElementById("Janinasname").style = "display:none;";
     } 

    //Auswertung Frage 4
    if(a4=="Nein"){
        pic1();
        document.getElementById("Alexandersname").style = "display:none;";
        document.getElementById("Janinasname").style = "display:none;";
         } else if(a4=="Ja"){
             document.getElementById("Janinasname").style = "display:none;";
             document.getElementById("Petrasname").style = "display:none;";
             pic2();
         } 

    //Auswertung Frage 5
    if(a5=="Nein"){
        pic1();
        document.getElementById("Alexandersname").style = "display:none;";
        document.getElementById("Janinasname").style = "display:none;";
         } else if(a5=="Ja"){
             document.getElementById("Janinasname").style = "display:none;";
             document.getElementById("Petrasname").style = "display:none;";
             pic2();
         } 

    //Auswertung Frage 6
    if(a6=="Nein"){
        pic1();
        document.getElementById("Alexandersname").style = "display:none;";
        document.getElementById("Janinasname").style = "display:none;";
         } else if(a6=="Ja"){
             document.getElementById("Janinasname").style = "display:none;";
             document.getElementById("Petrasname").style = "display:none;";
             pic2();
         }

    //Auswertung Frage 7
    if(a7=="Nie"){
        pic1();
        document.getElementById("Alexandersname").style = "display:none;";
        document.getElementById("Janinasname").style = "display:none;";
         } else if(a7=="Einmal in zwei Monaten"||a7=="Einmal im Monat"||a7=="Einmal in der Woche||"||a7=="Mehrmals in der Woche"){
             document.getElementById("Janinasname").style = "display:none;";
             document.getElementById("Petrasname").style = "display:none;";
             pic2();
         } 

    // Prioritisierte Antwortmöglichkeiten

    if(a3=="Ja"){
        document.getElementById("Janinasname").style = "display:none;";
        document.getElementById("Petrasname").style = "display:none;";
        pic2();
    }

         if(a1=="keine, Will mich Impfen lassen"){
            document.getElementById("Petrasname").style = "display:none;";
            document.getElementById("Alexandersname").style = "display:none;";
            pic3();
        }

    }
   function pic1()
   {
       document.getElementById("img").src = "petraArzt.jpg"; 
       document.getElementById("Petrasname").style = "display:block;";
   }
   function pic2()
   {
       document.getElementById("img").src ="Arzt.jpg";
       document.getElementById("Alexandersname").style = "display:block;";
   }

   function pic3()
   {

    document.getElementById("img").src ="JaninaPraxishelfer.jpg";
    document.getElementById("Janinasname").style = "display:block;";

   }
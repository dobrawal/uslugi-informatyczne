function funkcja()
{
    var imie=document.getElementById('imie').value;
    var nazwisko=document.getElementById('nazwisko').value;
    var tekst=document.getElementById('tekst').value;
    var regulamin=document.getElementById('regulamin').checked;

    if(regulamin)
    {
        document.getElementById('wynik').innerHTML=imie.toUpperCase()+" "+nazwisko.toUpperCase()+"<br>Treść Twojej sprawy: "+tekst;
    }
    else
    {
        document.getElementById('wynik').innerHTML="Musisz zapoznać się z regulaminem";
        document.getElementById('wynik').style.color='red';
        
    }
}
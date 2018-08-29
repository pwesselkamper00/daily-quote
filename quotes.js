var xmlhttp, xmlDoc;
xmlhttp = new XMLHttpRequest();

function process()
{
var date = new Date();
var day = date.getDate();
var months = new Array()
    months[0] = "./DTA/january.xml";
    months[1] = "./DTA/february.xml";
    months[2] = "./DTA/march.xml";
    months[3] = "./DTA/april.xml";
    months[4] = "./DTA/may.xml";
    months[5] = "./DTA/june.xml";
    months[6] = "./DTA/july.xml";
    months[7] = "./DTA/august.xml";
    months[8] = "./DTA/september.xml";
    months[9] = "./DTA/october.xml";
    months[10] = "./DTA/november.xml";
    months[11] = "./DTA/december.xml";
var month = months[date.getMonth()];	


xmlhttp.open("GET", "august.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
var title = xmlhttp.responseXML;
var today = xmlhttp.responseXML;
var quote = xmlhttp.responseXML;
var source = xmlhttp.responseXML;
var text = xmlhttp.responseXML;


   /* pull and set variables for the current days reflection information from xml file */
    var xmlDoc = xml.responseXML;
    var title = title.getElementsByTagName('title')[day];
    var t = title.childNodes[0];
    var quote = quote.getElementsByTagName('quote')[day];
    var q = quote.childNodes[0]
    var source = source.getElementByTagName('source')[day];
    var s = source.childNodes[0];
    var text = text.getElementByTagName('text')[day];
    var x = text.childNodes[0];
    
    /* write the set days reflection variables to the document */

    document.getElementById("title").innerHTML =
    t.nodeValue; 
    document.getElementById("quote").innerHTML =
    q.nodeValue;
    document.getElementById("source").innerHTML =
    s.nodeValue;
    document.getElementById("text").innerHTML =
    x.nodeValue;


};
window.onload = process;
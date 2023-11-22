var badTimestampException = new Error("Failure to convert timestamp");
function formatNumber(n, siz) {
    n = n.toString();
    var s = "";
    for ( var i=0 ; n.length+i<siz ; i++ )
        s += "0";
    s += n;
    return s;
}
function convertStringTimestamp(s) {
    var t = s.match(/^(\d{4})\-(\d{2})\-(\d{2})T(\d{2})\:(\d{2})(?:\:(\d{2}))?(.*)Z$/);
    if ( ! t )
        throw badTimestampException;
    var haveSeconds = !!(t[6]);
    var seconds = 0;
    if ( haveSeconds )
        seconds = t[6].valueOf();
    var date = new Date(Date.UTC(t[1],t[2]-1,t[3],t[4],t[5],seconds,0));
    var year = formatNumber(date.getFullYear(),4);
    var month = formatNumber(date.getMonth()+1,2);
    var day = formatNumber(date.getDate(),2);
    var hours = formatNumber(date.getHours(),2);
    var minutes = formatNumber(date.getMinutes(),2);
    var seconds = formatNumber(date.getSeconds(),2);
    var utcOffset = -date.getTimezoneOffset();
    var utcHours = formatNumber(Math.floor(Math.abs(utcOffset)/60),2);
    var utcMinutes = formatNumber(Math.abs(utcOffset)-utcHours*60,2);
    var utcSign = "+";
    if ( utcOffset < 0 )
        utcSign = "-";
    return year+"-"+month+"-"+day+"T"+hours+":"+minutes+(haveSeconds?":"+seconds:"")+utcSign+utcHours+utcMinutes;
}
function setNumComments(entry, num, lastdate) {
    var elt = document.getElementById("d."+entry+".numcomments");
    var eltN = document.createElement("strong");
    elt.appendChild(document.createTextNode(" ("));
    eltN.appendChild(document.createTextNode(""+num));
    elt.appendChild(eltN);
    elt.appendChild(document.createTextNode(" @ "+convertStringTimestamp(lastdate)+")"));
}
function setNoComments(entry) {
    var elt = document.getElementById("d."+entry+".numcomments");
    elt.appendChild(document.createTextNode(" (0)"));
}
// The following is automatically generated...
setNumComments("2021-06-02.2686", 7, "2021-06-04T06:57:06Z");
// EOF

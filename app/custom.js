
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}


function isNumberKey(evt) {
    var charCode = (document.all) ? event.keyCode : evt.which;
    if ((charCode > 31
            && (charCode < 48 || charCode > 57)
            || charCode == 46)
            && charCode != 40 && charCode != 41 && charCode != 45 && charCode != 43 && charCode != 46)
        return false;
    return true;
}

function calculate(a, from2) {
    for ($kk in $curr) {
        if (from2 != $kk) {
            to2 = $curr[$kk];
            $n = Math.round(a / to2 * $curr[from2] * 10000) / 10000;
            document.getElementById("result_" + $kk).value = $n;
        }
    }
}



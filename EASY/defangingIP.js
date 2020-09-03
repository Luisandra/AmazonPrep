// Given a valid (IPv4) IP address, return a defanged version of that IP address.
//     A defanged IP address replaces every period "." with "[.]".
    /**
 * @param {string} address
 * @return {string}
 */

    const ip1 = "1.1.1.1", ip2="255.100.50.0"
var defangIPaddr = function(address) {
//must escape the . b/c it has the meaning of "an arbitrary character" in a regular expression.
    let defanged = address.replace(/\./g, "[.]")
    return defanged

};
    defangIPaddr(ip2)
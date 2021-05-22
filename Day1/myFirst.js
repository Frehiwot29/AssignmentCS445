let family = {
    fname: "adu",
    lname: "kasa",
    address: {
        zip: "Embamadre"
    }
};
let copyA = { ...family };
copyA.address = { ...copyA.address }
copyA.fname = "Adonay";
copyA.lname = "Kassa";
family = { ...copyA }
console.log(copyA)
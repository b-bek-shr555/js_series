//  Datatypes has Two Types : Primitive and Non-Primitive. //

// ************************** Primitive Datatypes *********************************** //
// String , Number , Boolean , Null , Undefined , Symbol  , BigInt.
// let sname = "John Doe";                   // string datatype
// let age = 25;                            // number datatype
// let isMarried = true;                    // boolean datatype
// let height = null;                       // null datatype
// let nothing = undefined;                // undefined datatype
// let symbolValue = Symbol("value");      // symbol datatype
// console.log(sname);
// console.log(age);
// console.log(isMarried);
// console.log(height);
// console.log(nothing);
// console.log(symbolValue);

// ************************** Non-primitive Datatypes / Reference ********************* //
// Object (Array, Function) .
// const hashiras = ["Gyomei", "Sanemi" , "Giyu" , "Obanai"]; // Array //
// console.log(hashiras[1]);

let breathing_style = {      // Object // 
    Gyomei:"stone Breathing",
    Sanemi:"Wind Breathing",
    Giyu:"Water Breathing",
    Obanai:"Serpent Breathing"
};
// console.log(breathing_style);

function BreathingStyle(){   //  Function //
    console.log(" Water Breathing Seventh Form: Drop Ripple Thrust ( 漆 しち ノ 型 かた 雫 しずく 波 は 紋 もん 突 づ き");
}

BreathingStyle();
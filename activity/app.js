// let x = 3,
//   y = -1,
//   z = 7;

// console.log(`Before permutation: x = ${x}, y = ${y}, z = ${z}`);

// let temp = x; 
// x = y;
// y = z;
// z = temp;

// console.log(`After permutation: x = ${x}, y = ${y}, z = ${z}`);
var r1 = 0.7, r2 = 0.4, r3 = 0.2; // Cost per km
var p_d = 100; // Cost per day
var ins = 0.3; // Insurance per day
var VAT = 0.18; // Value-added tax
var km=1500;
let days=5;

if (km <= 100){
    cost_km=km*r1;}
else if (101<=km>=1000){
    cost_km = (100 * r1) + ((km - 100) * r2);}
else{
    cost_km = (100 * r1) + ((km - 100) * r2)+((km-1000)*r3);}

    // Add insurance and VAT to kilometer-based cost
cost_km += (days * ins);
cost_km += cost_km * VAT;
// Calculate daily pricing
cost_day = (p_d * days) + (days * ins);
cost_day += cost_day * VAT;

// Determine the best option
let bestOption = cost_km < cost_day ? "Kilometer-based pricing is cheaper" : "Daily rate pricing is cheaper";

// Display results
console.log(`Kilometer-based cost: ${cost_km.toFixed(2)} Dinars`);
console.log(`Daily rate cost: ${cost_day.toFixed(2)} Dinars`);
console.log(`Best option: ${bestOption}`);
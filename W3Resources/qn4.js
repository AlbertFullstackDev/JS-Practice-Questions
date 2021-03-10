/*
Write a JavaScript program to find the area of a triangle where lengths 
of the three of its sides are 5, 6, 7.  

*/

//AREA = 0.25 

const areaTriangle = function(a,b,c){ 
     a = a * a;
     b = b * b;
     c = c * c ;
    return 0.25 * Math.sqrt( (4*a*b)- (((a+b)-c) *((a+b)-c)))
}

console.log(`Area of Triangle: ${areaTriangle(5,6,7)}`);
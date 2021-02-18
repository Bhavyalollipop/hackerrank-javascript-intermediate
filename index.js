var width = 4;
var height = 4;
var isVertical = [false,true];
var distance = [3,1];
const h1 = isVertical[0] ? width - distance[0] : height - distance[0];
const point = !isVertical[0] ? [[width,distance[0]],[width,h1]] : [[distance[0],height],[h1,height]]
const point1 = [];
var d = distance[1];
for(var i=0;i<point.length;i++) {
	if(isVertical[1]) {
    		if(point[i][0] < d){
            	d = Math.abs(point[i][0] - d)
                point1.push([point[i][0], point[i][1]])
            } else {
            	point1.push([d, point[i][1]])
                point1.push([point[i][0] - d, point[i][1]])
            }
    } else {
    	if(point[i][1] < d){
    		d = Math.abs(point[i][1] - d)
            point1.push([point[i][0],point[i][1]])
        } else { 
         	point1.push([point[i][0],d])
            point1.push([point[i][0],point[i][1] - d])
        }
    }
}
console.log(point)
console.log(point1)

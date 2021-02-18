
function maxfromchild(arr) {
	const data = arr.map(item => item[0] * item[1])
    return Math.max(...data)
}
function getMaxArea(w, h, isVertical, distance) {
    var parent = []
    var store = []
    for(var i =0; i < isVertical.length; i++ ) {
        var dist = distance[i];
        var splitV = isVertical[i] ? 0 : 1
        var child = parent.length === 0 ?  [ [w,h] ] :  parent
        child = JSON.parse(JSON.stringify(child))
        var newchild = []
        var d = dist;
        for(var j =0; j < child.length; j++) {
                var dis = child[j][splitV] - d
                if(child[j][splitV] < d) {
                    newchild.push(child[j])
                    d = Math.abs(dis)
                } else {
                	var red = splitV === 0 ? [d,child[j][1]] : [child[j][0],d]
                	newchild.push(red)
                    if(dis != 0) {
                    child[j][splitV] = dis
                    newchild.push(child[j])
                    }
                    d = 0
                }
              if(d === 0 ) {
                d = dist
              }
        }
        store.push(maxfromchild(newchild))
        parent = newchild
        
    }
    return store
}
console.log(getMaxArea(8, 6, [false,true,true],[3,1,6]))


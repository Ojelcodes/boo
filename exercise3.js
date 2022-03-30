
function fileName(a){
    let filenm = a;
    let extensionIndex;
    for (let index = a.length-1; index >= 0; index--) {
        const element = a[index];
        if(element !== '.')
        {
            continue;
        }
        extensionIndex=index;
        break;
    }
    console.log(a.slice(extensionIndex))
    console.log(extensionIndex)    
}
fileName("in.de.x.css")
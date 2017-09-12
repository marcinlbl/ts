function sortByName(a) {
    var b = a.slice(0);
    $(b).each(() => {
        
    });
    return b.sort((x, y) => {
        x.localCompare(y);
    });
}
var names = ['Jan', 'Adam', 'Marcin', 'Józef'];
sortByName(names);
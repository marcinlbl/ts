

function identity<T>(arg: T[]): T[] {
    arg.filter((x) => {
        return x !== null;
    });
    return arg;
}

let myIdentity = identity(['PZU']);
let a1 = 0, b2 = 1, nextTerm;
function fibonaki(n) {
    for (let i = 1; i <= n; i++) {
        console.log(a1);
        nextTerm = a1 + b2;
        a1 = b2;
        b2 = nextTerm;
    }
}
fibonaki(n = 6)
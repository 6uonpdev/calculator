var a=[0, 0], b=0, o='';
function reset() {
    a[0] = 0;
    a[1] = 0;
    b = 0;
    o = '';
}
function cal(u, v, w) {
    var c;
    switch (v) {
        case '+':
            c = Number.parseInt(u) + Number.parseInt(w);
            //alert("Tổng: " + c);
            break;
        case '-':
            c = Number.parseInt(u) - Number.parseInt(w);
            //alert("Hiệu: " + c);
            break;
        case 'x':
            c = Number.parseInt(u)*Number.parseInt(w);
            ///alert("Tích: " + c);
            break;
        case ':':
            c = Number.parseInt(u)/Number.parseInt(w);
            //alert("Thương: " + c);
            break;
    }
    return c;
}

function input(x) {
    console.log(x);
    a[b] = a[b]*10 + x;
}

function inputo(x) {
    console.log(x);
    o = x;
    b = 1;
 }

function output() {
    var kq = cal(a[0], o, a[1]);
    document.getElementById('ketqua').innerHTML = `Kết quả là: ${kq}`;
    a[0] = kq;
    a[1] = 0;
}

function outputab() {
    console.log(`${a[0]}, ${a[1]}`)
}


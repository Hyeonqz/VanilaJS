function maskify(cc) {
    let input = cc.length;

    if(input<=4) {
        return cc;
    }

    if(input>4) {
        let piece = cc.slice(input-4,input); //(6,10) =>  7,8,9,10 인덱스 숫자를 return
        let newSt= '';
        for (let i = 0; i <input-4 ; i++) {
            newSt += '#';
        }
        return newSt +=piece;
    }
}
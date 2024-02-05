//async / await 문법은 ES8부터 해당하는 문법으로서, Promise를 쉽게 사용할 수 있게 한다.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

/*async function process() {
    console.log("hi");
    await sleep(1000);//1sec 쉼
    console.log("hi2")
}
process();*/
//async를 function 앞에 붙이면 해당 결과 값을 Promise를 반환하게 된다.

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

/*async function process() {
    try {
        await makeError();
    } catch(e) {
        console.error(e);
    }
}
process();*/

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};
const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

async function process() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
/*    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);*/
    console.log(results);
}

process();
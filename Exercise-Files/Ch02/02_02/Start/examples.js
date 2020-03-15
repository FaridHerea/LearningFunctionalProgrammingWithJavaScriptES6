const sayHello = (name) => console.log('Hello' + name);

const sayHello2 = sayHello;
sayHello('Shaun');

const myFunction = true
    ? () => console.log('First option')
    : () => console.log('Second option');

const DEVELOPMENT = true;

const fetchDataReal = () => {
    // time-intensive operations here!
}

const fetchDataFake = () ({
    name: 'John Doe',
    age: 34,
});

const fetchData = DEVELOPMENT
    ? fetchDataFake
    : fetchDataReal;
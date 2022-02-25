let time = null;

const debounce = (fn, wait = 500, ...args) => {
    if (typeof fn !== "function") {
        throw new TypeError("Expected a function");
    }

    if (typeof wait !== "number") {
        throw new TypeError("Expected value 'wait' a number");
    }

    if (time) clearTimeout(time);

    time = setTimeout(() => {
        fn.apply(this, args);
    }, wait);
};

const debounceFirst = (f, ms) => {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };

}

export default debounce;

export {
    debounceFirst
};

export const eventFrame = () => {
    let ticking = false;

    return new Promise((resolve) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                console.log('eventFrame');
                resolve();

                ticking = false;
            });

            ticking = true;
        }
    });
};

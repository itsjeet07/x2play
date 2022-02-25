import { eventFrame } from './EventFrame';

export const handleScroll = (e) => {
    const element = e.currentTarget;
    return new Promise((resolve) => {
        eventFrame().then(() => {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                return;
            }

            if (element.scrollHeight - element.scrollTop <= element.clientHeight * 1.3) {
                resolve();
            }
        });
    });
};

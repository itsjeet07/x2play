import moment from 'moment';

export const formatDate = (date, format = 'L') => {
    return moment.utc(date).format(format);
};

export const formatDateToLocal = (date, format = 'MM.DD.YY') => {
    const stillUtc = moment.utc(date).toDate();
    return moment(stillUtc).local().format(format);
};

export const formatDateToEnd = (date) => {
    const now = new Date();
    return moment(date).diff(now, 'day');
};

export const formatTime = (time, format = 'LT') => {
    return moment(time).format(format);
};

export const diffBetweenDays = (prev, current) => {
    if (!prev || !current) return -10;
    const format = 'DD-MM-YYYY';
    const admission = moment(moment.utc(prev).format(format), format);
    const discharge = moment(moment.utc(current).format(format), format);
    return admission.diff(discharge, 'days');
};

export const diffBetween = (start, end, time) => {
    return moment(start).diff(end, time);
};

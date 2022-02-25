import { pathOr, clone } from 'ramda';
import debounce, { debounceFirst } from './debounce';
import { toCamelCase } from './Convert';
import { nanoid } from 'nanoid';
import { emitter } from './Emitter';
import { request } from './Request';
import Auth from './Auth';
import {
    formatDate,
    formatDateToLocal,
    formatDateToEnd,
    formatTime,
    diffBetweenDays,
    diffBetween,
} from './DateService';
import {
    montshList,
    requestStatus,
    validationStatus,
    roles,
    inviteType,
    recoveryStatus,
    userActivityStatus,
    profileStatus,
    keyStatus,
    validationType,
    fileEvents,
    shareLinkList,
} from './enum';
import { eventFrame, handleScroll } from './EventsService';
import LazyImport from './LazyImport';

const auth = new Auth();

const getStoreItem = (state, key, defaultValue = '') => {
    if (!Array.isArray(key)) {
        key = [key];
    }
    return clone(pathOr(defaultValue, ['pageState', ...key], state));
};

const encodeBase = (value) => btoa(encodeURIComponent(value));
const decodeBase = async (value) => decodeURIComponent(atob(await value.text()));

const setLocalStorage = (key, value) => localStorage.setItem(key, value);
const getLocalStorage = (key) => localStorage.getItem(key);

const encodeImageFileAsURL = (element, callback) => {
    const file = element;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const promise = new Promise((resolve) => {
        resolve((reader.onloadend = () => callback(reader.result)));
    });

    return promise;
};

const arrayRender = (items, key = 'id') =>
    items.map((item) => ({
        ...item,
        _id: nanoid(10),
    }));

const Convert = {
    toCamelCase,
};

const bytesToSize = (bytes) => {
    const units = ['', ' Kb', ' Mb', ' Gb', ' Tb', ' Pb', ' Eb', ' Zb', ' Yb'];

    if (!bytes) return '0';
    const exp = Math.floor(Math.log(bytes) / Math.log(1000));
    const size = bytes / 1000 ** exp;
    const short = Math.round(size, 2);
    const unit = units[exp];
    return short + unit;
};

const getShareLink = (href) => `${window.location.protocol}//${window.location.hostname}/shared-files/${href}`;

export {
    debounce,
    debounceFirst,
    getStoreItem,
    arrayRender,
    emitter,
    auth,
    formatDate,
    formatDateToLocal,
    formatDateToEnd,
    formatTime,
    diffBetweenDays,
    request,
    encodeBase,
    decodeBase,
    encodeImageFileAsURL,
    Convert,
    setLocalStorage,
    getLocalStorage,
    montshList,
    requestStatus,
    validationStatus,
    roles,
    inviteType,
    bytesToSize,
    recoveryStatus,
    userActivityStatus,
    profileStatus,
    keyStatus,
    eventFrame,
    handleScroll,
    validationType,
    fileEvents,
    getShareLink,
    diffBetween,
    shareLinkList,
    LazyImport,
};

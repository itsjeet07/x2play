import React from 'react';

export const montshList = [
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Feb' },
    { value: '3', label: 'Mar' },
    { value: '4', label: 'Apr' },
    { value: '5', label: 'May' },
    { value: '6', label: 'Jun' },
    { value: '7', label: 'Jul' },
    { value: '8', label: 'Aug' },
    { value: '9', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' },
];

export const requestStatus = [
    { value: 0, label: 'Not valid', color: 'warn' },
    { value: -10, label: 'Cancel', color: 'warn' },
    { value: 5, label: 'Pending', color: 'yellow' },
    { value: 7, label: 'Pending Firm Manager', color: 'yellow' },
    { value: 8, label: 'Pending Sanctuary Admin', color: 'yellow' },
    { value: 10, label: 'VALID', color: 'green' },
];

export const recoveryStatus = [
    { value: 0, label: 'Not recovered', color: 'warn' },
    { value: -10, label: 'Cancel', color: 'warn' },
    { value: 5, label: 'Pending', color: 'yellow' },
    { value: 10, label: 'Recovered', color: 'green' },
];

export const validationStatus = [
    { value: 0, label: 'Not validated', color: 'warn' },
    { value: -10, label: 'Cancel validation', color: 'warn' },
    { value: 5, label: 'Validation pending', color: 'yellow' },
    { value: 7, label: 'Validation Pending Firm Manager', color: 'yellow' },
    { value: 8, label: 'Validation Pending Sanctuary Admin', color: 'yellow' },
    { value: 10, label: 'Validated', color: 'green' },
];

export const keyStatus = [
    { value: 5, label: 'Inactive', color: 'yellow' },
    { value: 10, label: 'Active', color: 'green' },
];

export const roles = {
    sanctuary_admin: 'Sanctuary Admin',
    dia_admin: 'DAI Manager',
    dia_member: 'DAI Member',
    firm: 'Firm',
    firm_admin: 'Firm Manager',
    firm_member: 'Firm Member',
    firm_client: 'Firm Client',
};

export const inviteType = {
    ROOT: 'Sanctuary Admin',
    FIRM_DIA: 'DAI Manager',
    WORKER_DIA: 'DAI Member',
    FIRM: 'Firm Manager',
    WORKER: 'Firm Member',
    CLIENT: 'Firm Client',
};

export const documentType = {
    DIR_PROFILE: '-1000',
    DIR_FIRM: '-500',
    DIR_FIRM_VIRTUAL: '9999',
    DIR_FIDUCIARY: '1',
    DIR_FIDUCIARY_BY: '35',
    DIR_FIDUCIARY_WITH: '75',
    DIR_MEMBER: '100',
    DIR_SHARE: '1000',
    FILE_SHARE: '999',
    FILE_SHARE_LINK: '998',
    DIR: '4000',
    FILE: '5000',
    RUFADA: '7000',
    LEGAL_ESTATE: '9000',
    LEGAL_ESTATE_FOLDER: '9500',
    RUFADA_FOLDER: '8000',
    RUFADA_ACCOUNT: 'RUFADA_ACCOUNT',
    LEGAL_ESTATE_FILE: 'LEGAL_ESTATE_FILE',
    FILE_PROFILE: 'PROFILE',
    FILE_FIRM: 'FIRM',
};

export const userActivityStatus = () => ({
    DELETE: 0,
    CANCELED: -10,
    PENDING: 5,
    PENDING_FIRM_MANAGER: 7,
    PENDING_SANCTUARY_ADMIN: 8,
    ACTIVE: 10,
});

export const profileStatus = () => ({
    HISTORY: 0,
    PENDING: 50,
    REJECTED: 100,
    ACTUAL: 150,
});

export const validationType = () => ({
    CLIENT: 'VALIDATE_CLIENT',
    WORKER: 'VALIDATE_WORKER',
    FIRM_OWNER: 'VALIDATE_FIRM_OWNER',
    FIRM: 'VALIDATE_FIRM',
    WORKER_DIA: 'VALIDATE_WORKER_DIA',
    FIRM_DIA: 'VALIDATE_FIRM_DIA',
    ROOT: 'VALIDATE_ROOT',
    RECOVERY: 'VALIDATE_RECOVERY',
});

export const fileEvents = {
    create: 'uploaded the file',
    rename: 'renamed the file',
    share: 'shared the file',
    delete: 'deleted the file',
    replace: 'replaced the file',
    move: 'moved the file',
    shareLink: 'generated sharable link',
};

export const shareLinkList = [
    { value: '15_min', label: '15 min' },
    { value: '1_hour', label: '1 hour' },
    { value: '1_week', label: '1 week' },
    { value: '1_month', label: '1 month' },
    { value: '555_time', label: 'Not limited' },
    { value: '999_time', label: <span className="color_warn">Restricted</span> },
];

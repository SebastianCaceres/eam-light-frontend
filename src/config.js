const theme = {
    PROD: 'BLUE',
    TEST: 'GREEN',
    DEV: 'RED',
    DEFAULT: 'BLUE'
};

export const DEMO_PASSKEY = import.meta.env.VITE_DEMO_PASSKEY || "";

export default {
    theme,
    DEMO_PASSKEY
}
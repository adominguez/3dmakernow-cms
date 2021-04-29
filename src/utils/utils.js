export const actualUrlpath = () => {
    return window.location.pathname.replace(/\//g, '');
}
import { ShareBlock as Component } from "./share";

function shareClickHandler(event) {
    event.preventDefault();

    const { href } = event.target;

    if (!href) {
        return;
    }

    openWindow(href);
}

function openWindow(href, width = 500, height = 300) {
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    const openedWindow = window.open(
        href,
        "",
        `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=${width},height=${height},top=${top},left=${left}`
    );

    captureCloseWindow(openedWindow);
}

function captureCloseWindow(window) {
    const interval = setInterval(()=> {
        if (window.closed) {
            clearInterval(interval);
            console.log("closed");
        }
    }, 100);
}
export const ShareBlock = ({ ...props }) => {

    return Component({ ...props, onShareClick:  shareClickHandler });
}
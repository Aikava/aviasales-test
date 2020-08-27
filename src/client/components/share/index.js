import { ShareBlock as Component } from "./share";
import {pushUserData} from "../../applicationReducer";
import {connect} from "react-redux";

function shareClickHandler(dispatch, event) {
    event.preventDefault();

    const { href } = event.target;

    if (!href) {
        return;
    }

    openWindow(dispatch, href);
}

function openWindow(dispatch, href, width = 500, height = 300) {
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    const openedWindow = window.open(
        href,
        "",
        `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=${width},height=${height},top=${top},left=${left}`
    );

    captureCloseWindow(dispatch, openedWindow);
}

function captureCloseWindow(dispatch, window) {
    const interval = setInterval(()=> {
        if (window.closed) {
            clearInterval(interval);

            dispatch(pushUserData({ share: true }));
        }
    }, 100);
}


const mapDispatchToProps = dispatch => ({
    onShareClick: (event) => shareClickHandler(dispatch, event)
});
export const ShareBlock = connect(null, mapDispatchToProps)(Component);
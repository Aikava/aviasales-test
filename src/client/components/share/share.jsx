import React from "react";
import styles from  "./styles.css";

const hrefByType = {
    tw: "https://twitter.com/intent/tweet?url=https%3A%2F%2Faviasales.com%2F",
    vk: "https://vk.com/share.php?url=https%3A%2F%2Faviasales.com%2F",
    fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faviasales.com%2F",
    ok: "https://connect.ok.ru/offer?url=https%3A%2F%2Faviasales.com%2F&title=TITLE",
};

export const Share = ({ type, disabled }) => {
    if (disabled) {
        return <span className={`share-button share-${type}`}/>;
    }

    return <a
        className={`share-button share-${type}`}
        href={hrefByType[type]}
        target="_blank"
    />
};

export const ShareBlock = ({ onShareClick, share }) => {
    if (share) {
        onShareClick = () => {};
    }
    return <ul
        className={ styles.shareBlock }
        onClick={onShareClick}
    >
        { Object.keys(hrefByType).map(type => Share({ type, disabled: share })) }
    </ul>;
}
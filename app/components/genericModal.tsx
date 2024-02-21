"use client";
import "../globals.css";

export function showModal(title: string, content?: string, icon?: any) {
    const modal: any = document.querySelector(".generic-modal-container");
    if (!modal) return;
    const titleElem: any = document.querySelector("#generic-modal-title");
    const iconElem: any = document.querySelector("#generic-modal-icon");
    const contentElem: any = document.querySelector("#generic-modal-content");

    titleElem.innerText = title;
    contentElem.innerText = content ?? "";
    if (icon) {
        iconElem.className = `${icon} generic-modal-icon`
    } else {
        iconElem.style.display = "none";
    }
    modal.style.display = "flex"
}

export async function waitForModalClose(title: string, content?: string, icon?: any): Promise<void> {
    const modal: any = document.querySelector(".generic-modal-container");
    if (!modal) return;
    showModal(title, content, icon);
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (modal.style.display === "none") {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    })
}

export function GenericModal() {

    const closeModal = () => {
        const modal: any = document.querySelector(".generic-modal-container");
        if (!modal) return;
        modal.style.display = "none";
    }

    const handleBgClick = (e: any) => {
        // check if clicked on the background or the element
        if (e.target.className === "generic-modal-container") {
            closeModal();
        }
    }


    return (
        <div className="generic-modal-container" onClick={handleBgClick}>
            <div className="generic-modal">
                <i className="fas fa-times generic-modal-close" onClick={closeModal}/>
                <span className="generic-modal-head">
                    <i className="fas fa-exclamation-triangle generic-modal-icon" id="generic-modal-icon"/>
                    <h2 className="generic-modal-title" id="generic-modal-title">Title</h2>
                </span>
                <p className="generic-modal-content" id="generic-modal-content">Content</p>
            </div>
        </div>
    )
}
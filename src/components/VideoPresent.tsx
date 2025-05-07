import React from "react";

export default function VideoPresent(): React.ReactElement {
    return (
        <div className="presentation">
            <h3>Video de presentación</h3>
            <video className="video" src="./assets/daw-presentation.mp4" controls />
        </div>
    );
}

import React from "react";

export default function VideoPresent(): React.ReactElement {
    return (
        <div className="presentation">
            <h3>Video de presentación</h3>
                        
            <video controls>
                <source src="hhttps://github.com/maelgruand1/standdaw/blob/dev/public/assets/daw-presentation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

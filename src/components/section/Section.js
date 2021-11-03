import React from "react";

function Section ({sectionName, children}) {
    return (
        <section>
            {sectionName && <h2>{sectionName}</h2>}
            {children}
        </section>
    )
}

export default Section
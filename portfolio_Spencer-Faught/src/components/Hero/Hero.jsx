import React from "react";
import { getImageUrl } from "../../utils";

import (getImageUrl)

export default function Hero() {
    return (
        <section>
            <div>
                <h1>Hi, I'm Spencer</h1>
                <p>I'm a front-end developer with 2 years of experience with frontend languages, libraries, and frameworks. Reach out if you'd like to learn more!</p>
                <a href="mailto:sgfaught1@gmail.com">Contact Me</a>
                </div>
                <img src={getImageUrl} alt="" />
        </section>
    )
}
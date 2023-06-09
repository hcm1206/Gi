import React, { useState } from "react";
import styled from "styled-components";

import Calander from "./Calendar";

function CalendarPage() {
    return (
        <Wrapper>
            <Calander/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    margin: 0;
    padding: 0;
`

export default CalendarPage;
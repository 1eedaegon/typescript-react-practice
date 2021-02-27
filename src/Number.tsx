import React from "react"
import styled from "styled-components"

interface IProps {
    count: number
}

const Container = styled.span``;
const Number: React.FunctionComponent<IProps> = ({ count }) => <Container>{count}</Container>

export default Number
import * as React from 'react';
import styled from 'styled-components';

// Components.
import Header from '../Header';

// Styles.
import palette from '../../styles/palette';
import typography from '../../styles/typography';

interface Props {
    children: React.ReactNode;
}

const Wrapper = styled.div`
    background-color: ${palette.primary.white};
    display: flex;
    flex-direction: row;
    font-size: 100%;
    font-family: ${typography.primaryFontFamily};
    min-height: 100vh;
    width: 100%;
`;

const Shell: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        <Header />
        {props.children}
    </Wrapper>
);

export default Shell;
export {
    Shell,
    Props
};

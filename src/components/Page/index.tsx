import * as React from 'react';
import styled from 'styled-components';

// Styles.
import palette from '../../styles/palette';
import typography from '../../styles/typography';

interface Props {
    children: React.ReactNode;
}

const Main = styled.main`
    width: 100%;
`;
const Wrapper = styled.div`
    background-color: ${palette.primary.white};
    display: flex;
    flex-direction: row;
    font-size: 100%;
    font-family: ${typography.primaryFontFamily};
    min-height: 100vh;
    width: 100%;
`;

const Page: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        <Main>
            {props.children}
        </Main>
    </Wrapper>
);

export default Page;
export {
    Page,
    Props
};

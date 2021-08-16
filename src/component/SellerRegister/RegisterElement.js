import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#fff' : 'rgb(249,246,246)')};


    @media screen and (max-width: 768px){
        padding: 100px 0;
    }

`


export const Wrapper = styled.div`

    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const Row = styled.div`

    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` :`'col1 col1' 'col2 col2'` )}
    }
`

export const Column1 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`

export const Column2 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`

    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
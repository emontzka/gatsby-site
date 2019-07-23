import styled from 'styled-components'

export const ImageArea = styled.div`
    width: 100%;
    height: 210px;
    overflow: hidden;
    margin-bottom: 30px;
    background-image: url(${props => props.bkImage});
    background-size: cover;
    background-repeat: no-repeat;
    // border-bottom: 1px solid black;
`

export const InfoPanel = styled.div`
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    z-index: 5;
    transition: top 0.3s;
    padding: 50px 20px 20px;
    &.open {
        top: 0;
    }
`

export const Ellipsis = styled.div`
    padding: 10px;
    position: absolute;
    right: 20px;
    bottom: 60px;
    cursor: pointer;
`

export const CloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export const IconContainer = styled.div`
    position: absolute;
    // background: pink;
    height: 40px;
    width: 100%;
    bottom: 20px;
    left: 20px;
`
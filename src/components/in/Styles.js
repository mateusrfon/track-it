import styled from 'styled-components';

const InBody = styled.div`
    height: 100vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 68px 36px;
`;

const TrackIt = styled.img`
    width: 180px;
    height: 178px;
    margin-bottom: 32.5px;
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 25px;
    ::placeholder {
        color: #D5D5D5;
        opacity: 1;
    }
`; 

const Btn = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    font-size: 21px;
    line-height: 26px;
    color: #FFF;
    background-color: #52B6FF;
`;

const Question = styled.p`
    font-size: 14px;
    line-height: 17px;
    color: #52B6FF;
    text-decoration: underline;
    margin-top: 25px;
`;

export { InBody, TrackIt, Input, Btn, Question };
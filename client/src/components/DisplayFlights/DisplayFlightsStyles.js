import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const MainPageContainer = styled.header`
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #C9D6FF, #E2E2E2);
    font-family: 'Source Sans Pro', sans-serif;
    margin:0;
    padding:0;
    overflow: hidden;

`;

export const SectionContainer = styled.section`
    margin: 50px;  
`;

export const H2Title = styled.h2`
    font-size: 30px;
    color: rgba(30,27,27,0.8);
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
`;

export const TableDiv = styled.div`
    background-color: rgba(255,255,255,0.3);
    margin-top: 50px;
`;

export const TableContainer = styled.table`
    width:100%;
    table-layout: fixed;
`;

export const TableHead = styled.thead`
    
`;

export const TableHeadTitle = styled.th`
    padding: 15px 10px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: rgba(30,27,27,0.8);
    text-transform: uppercase;
`;

export const TableContentDiv = styled.div`
    height:auto;
    overflow-x:auto;
    margin-top: 0px;
    border: 1px solid rgba(255,255,255,0.3);

    ::-webkit-scrollbar {
        width: 6px;
    } 
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    } 
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
`;

export const TableBody = styled.tbody`
    
`;

export const Td = styled.td`
    padding: 15px;
    text-align: center;
    vertical-align:middle;
    font-weight: 300;
    font-size: 18px;
    color: rgba(30,27,27,0.8);
    border-bottom: solid 1px rgba(255,255,255,0.1);
`;

export const SelectLink = styled(Link)`
    text-decoration: none;
    color: rgba(30,27,27,0.8);
    &:hover {
        color: #3bbf63;
        -webkit-transition: all .1s ease;
        transition: all .1s ease;
    }
`;
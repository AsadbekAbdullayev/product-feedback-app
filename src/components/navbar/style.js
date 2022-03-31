import styled from "styled-components"
import { Button } from "antd";
import { ReactComponent as lamp } from '../../assets/icons/lamp.svg';

import { Select } from 'antd';

const { Option } = Select;
export const Selected = styled(Select)`

`
export const OptionAnt = styled(Option)`
`

export const Container = styled.div`
width: 825px;
height: 72px;
background: #373F68;
border-radius: 10px;
display: flex;
justify-content:space-between;
align-items:center;
padding: 0 16px;

`

export const Logo = styled(lamp)`
width: 30px;
height: 30px;
`

export const Title = styled.div`
font-style: normal;
font-weight: ${({weight})=>weight ? weight : 700};
font-size:${({size})=>size ? size : '24px'};
line-height:${({height})=>height ? height :'35px'};
color:${({color})=>color ? color :'#3A4374'};
margin:${({margin})=>margin ? margin :''};
text-decoration-line:${({underline})=>underline && 'underline'};
.link{
    :hover{
        text-decoration:underline;
    }
}
`

Container.Input = styled.input`
width:${({width})=>width ? width :'456px'};
height:${({height})=>height ? height :'48px'};
background: inherit;
border: none;
border-radius: 5px;
outline:none;
padding: 15px 20px;
display:flex;
justify-content:flex-start;
`

Container.inputCon = styled.div`
display: flex;
width:${({width})=>width ? width :'456px'};
height:${({height})=>height ? height :'48px'};
margin:${({margin})=>margin ? margin :''};
background: inherit;
border-radius: 5px;
padding: 0 !important;
:focus{
border:none !important;
outline:none !important;

    }
.ant-select-selector {
    padding: 0 !important;
    border:none !important;
    width:100%!important;
    height:100% !important;
    background: inherit !important;
    border-radius: 5px !important;
    display: flex !important;
    align-items:center !important;
    border:none !important;
    outline:none !important;
    
    font-style: normal!important;
    font-weight: 700!important;
    font-size: 18px!important;
    line-height: 26px!important;
    color:  #F2F4FE!important;
    
    :focus{
    border: 1px solid red !important;
}
    .ant-select-arrow{
    font-size:12px;
    font-weight:900;
    color:#fff;
}

`

export const AntButton = styled(Button)`
height:44px !important;
background:${({color})=>color ? color :'#AD1FEA'}!important;
margin:${({margin})=>margin ? margin :'#AD1FEA'}!important;
:hover{
background:${({hcolor})=>hcolor ? hcolor :''}!important;

}
border-radius: 10px !important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
outline:none !important;
border:none!important;
`

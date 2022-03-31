import styled from "styled-components"
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { ReactComponent as YourSvg } from '../../assets/icons/empty.svg'


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 24px 0 0 0;
width: 825px;
height: 600px;
border-radius: 15px;
background: var(--bgColor);
padding: 110px 190px;

.ant-empty{
    .ant-empty-image{
        height: 200px;
        svg{
            width: 200px;
            height: 200px;
        }
    }
    
}

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


export const NoDataImg = styled(YourSvg)`

`


export const AddButton = styled(Button)`
color: white;
width: 220px;
height: 60px;
background-color: var(--btnBgColor);
border-radius: 10px;
font-weight: 700;
font-size: 18px;
margin-top: 50px;

`

export const Add = styled(PlusOutlined)`
width: 120x;
height: 12px;

`

import { useEffect, useState } from "react"
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/ko';


const  Timer=({Dday})=>{
        let test = moment(Dday,'YYYY-MM-DD HH:mm:ss')
        let [time, setTime] = useState(moment()); 
        useEffect(() => {
                let timer = setInterval(() => { //timer 라는 변수에 인터벌 종료를 위해 저장  
                  setTime(moment());            // 현재 시간 세팅 
                }, 500);                       //1000ms = 1s 간 반복 
                return () => {
                  clearInterval(timer);         // 함수 언마운트시 clearInterval 
                };
              }, time);
        return(
                <BarArea>
                        <Block>
                                <div>{test.diff(moment(),'days')}</div>
                                
                                <Text>DAYS</Text>
                        </Block>
                        <Block>
                                <div>{test.diff(moment(),'hours')-test.diff(moment(),'days')*24}</div>
                                <Text>HOURS</Text>
                        </Block>
                        <Block>
                                <div>{test.diff(moment(),'minutes')-test.diff(moment(),'hours')*60}</div>
                                <Text>MINUTES</Text>
                        </Block>
                        <Block>
                                <div>{test.diff(moment(),'seconds')-test.diff(moment(),"minutes")*60}</div>
                                <Text>SECONDS</Text>
                        </Block>
                </BarArea>
        ) 
}

export default Timer;

//타이머바 =============================
const BarArea = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 2vh;
        font-family: 'Roboto-Black';
        font-size: 5.5vh;
        color : #dbdbdb
`

const Block = styled.div`
        display: flex;
        margin: 0 12px 0 12px;
        flex-direction: column;
        /* background-color: yellow; */
        justify-content: center;
        align-items: center;
        /* color : black; */
        width: 3.5vw;
`
const Text = styled.text`
        font-family: sans-serif;
        font-size: 1.5vh;
        /* background-color: white; */
`
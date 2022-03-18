import React from 'react';
import Heading from '../../components/Heading/Heading';
import { DaysList, DaysLi, Task, TaskDate, TaskLine, TopLine, 
Divider,
Cards,
Progress,
ShowWeek} from './TaskStyles';
import Card from '../../components/Card/Card';
import { CardOne, CardThree, CardTwo } from '../../components/Card/CardData';
import Select from '../Select/Select';

const TaskPage = () => {
    const d = new Date();

    let months= ["January","February","March","April","May","June","July",
                 "August","September","October","November","December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateBuilder = (d) => {


        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        // let year = d.getFullYear();

        return ` ${date} ${month}, ${day}`
    }
    
    // const dateBuilderTwo = (d) => {

    //     let nextdays = "";
    //     for (let i = d.getDay(); i < d.getDay()+7; i++) {
    //       nextdays += days[i].slice(0, 3) + " "
    //     }
    //     return ` ${nextdays} `
    // }
//     const WeekDates = (d) => {

//         let date =d.getDate();
//         let nextdate = ""
//         for (let i = date; i < date+7; i++) {
//           nextdate += [i]
//         }
//         return ` ${nextdate} `
// }
    return (
            <Task>
                <TopLine>
                    <Heading level={4}>8 task completed out of 10</Heading>
                    <ShowWeek>
                       <Heading level={5}>Show:</Heading>
                        <Select />
                    </ShowWeek>
                </TopLine>
                <TaskLine><Progress></Progress></TaskLine>
                <TaskDate>
                    <Heading level={2}>{dateBuilder(new Date())}</Heading>
                    <DaysList>
                    {days.map((item, index) => {
                      return(
                          <DaysLi key={index}>
                                  <Heading level={4} opacity >
                                   {item.slice(0, 3)}
                                  </Heading>
                                  <Heading level={4}>
                                  {index+d.getDate()}
                                  </Heading>
                          </DaysLi>
                      );
                  }) }
                    </DaysList>
                </TaskDate>
                <Divider></Divider>
                <Cards>
                    <Card {...CardOne} />
                    <Card {...CardTwo} />
                    <Card {...CardThree} />
                </Cards>
            </Task>
    )
}

export default TaskPage;

import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// import jira from '../CustomJoshComponents/jira';

// import ScriptTag from 'react-script-tag/lib/ScriptTag';

// const clickHandler = () => {
//     const script = document.createElement("script");
//     script.src = "https://sharphealthcare.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/1jmxwi/b/8/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=2dd71ebc";
//     script.async = true;
//     document.body.appendChild(script);

// }

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluted by React');

    const clickHandler = () => {

        setTitle('Updated');
        console.log(title);

    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description" >
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        );
}

export default ExpenseItem;

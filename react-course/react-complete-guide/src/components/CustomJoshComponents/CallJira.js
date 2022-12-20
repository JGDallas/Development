import JIRAIssueCollector from './jira';
import Card from '../UI/Card';
import './ExpenseDetails.css';

const JiraIssueConnect = (props) =>
 {

     return(
    <Card className="expenses">
      <JIRAIssueCollector 
        title={props.JIRAIssueCollector[0]}
        amount={props.items[0].amount} 
        date={props.items[0].date}>
      </JIRAIssueCollector>
    </Card>
    );
}

export default JiraIssueConnect;
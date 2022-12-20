// import jQuery from 'jquery';
// import {Row, Col, Button} from 'reactstrap'

// const ELEMENT_ID = 'jira-feedback-button';
//const WINDOW_VAR_NAME = 'jiraIssueCollector';
//window['ATL_JQ_PAGE_PROPS'] = {
//  "triggerFunction": function(showCollectorDialog) {
//    jQuery(`#${ELEMENT_ID}`).click(function(e) {
//      console.log('triggerFunction')
//      e.preventDefault();
//      showCollectorDialog();
//    });
//  }};

//const JIRAIssueCollector = () => {
//  const setCollector = () => {
//    const appElement = document.querySelector('body');
//    if (appElement) {
//      console.log('loading issue collector');
//      const snippet = document.createElement('script');
//      snippet.type = 'text/javascript';
//      snippet.src = "https://sharphealthcare.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/1jmxwi/b/8/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=2dd71ebc";
//      appElement.appendChild(snippet);
//    }
//  };

//  if (!window[WINDOW_VAR_NAME]) {
//    setCollector();
//    window[WINDOW_VAR_NAME] = this;
//  }

//  return (
//    <Row>
//      <Col>
//        <Button href="#" color="primary" id={ELEMENT_ID}>
//          Provide Feedback
//        </Button>
//      </Col>
//    </Row>
//  );
//   return (
//        <button href="#" color="primary" id={ELEMENT_ID}>
//          Provide Feedback
//        </button>
//  );

// };

// export default JIRAIssueCollector;
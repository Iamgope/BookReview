import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles(()=>({
    Card:{
        maxWidth:'90%',
        margin:'auto',



    }
}))
const AnalysisPage=(props)=>{
const PostQuestionData=props.PostQuestionData;
console.log(PostQuestionData)
const QuestionList=PostQuestionData.map((question)=><h2 style={{}}>{question.question}</h2>)
const Classes=useStyles();
    return <div className={Classes.Card}>
  {QuestionList}
    </div>
}
export default AnalysisPage;
import { FunctionComponent, useState } from "react";
import Lesson from "./Lesson";

interface LessonListProps {
    
}
 
const LessonList: FunctionComponent<LessonListProps> = () => {
    const [lessonList, setLessonList] = useState(["필라테스", "요가"]);
    return ( <section className="mt-10">
    {lessonList.map((el, i) => (
        <Lesson key={i} name={el} />
    ))}
     </section> );
}
 
export default LessonList;
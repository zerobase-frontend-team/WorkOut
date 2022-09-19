import { FunctionComponent } from "react";

interface LessonProps {
    name:string;
}
 
const Lesson: FunctionComponent<LessonProps> = ({name}) => {
    return ( <section className="m-auto mb-4 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>description</p>
            <div className="card-actions justify-end"></div>
        </div>        
    </section> );
}
 
export default Lesson;
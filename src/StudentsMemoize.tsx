import memoize from "memoize-one";
import React from "react";

interface IStudent {
  id: string;
  note: number;
}

interface IProps {
  students: IStudent[];
}

const studentsAverage = memoize(
  (students: IStudent[]) =>
    students.reduce((avg, student) => avg + student.note, 0) / students.length
);

class StudentsMemoize extends React.PureComponent<IProps> {
  public render() {
    const average = studentsAverage(this.props.students);
    return <p>Moyenne des élèves : {average}</p>;
  }
}

export default StudentsMemoize;

import React from "react";
import { injectTranslate } from "./i18n";

interface IStudent {
  id: string;
  note: number;
}

interface IProps {
  students: IStudent[];
  translate: (id: string) => string;
}

interface IState {
  average: number;
}

const studentsAverage = (students: IStudent[]) =>
  students.reduce((avg, student) => avg + student.note, 0) / students.length;

class Students extends React.PureComponent<IProps, IState> {
  public state: IState = {
    average: 0
  };

  /*
  public componentDidMount() {
    this.setState({ average: studentsAverage(this.props.students) });
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.students !== this.props.students) {
      this.setState({ average: studentsAverage(nextProps.students) });
    }
  }
  */

  public static getDerivedStateFromProps(props: IProps, state: IState) {
    return { average: studentsAverage(props.students) };
  }

  public render() {
    const { average } = this.state;
    const { translate } = this.props;
    return (
      <p>
        {translate("students.average")} {average}
      </p>
    );
  }
}

export default injectTranslate(Students);

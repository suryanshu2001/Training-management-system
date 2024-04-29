export interface user {
  email: string;
  userName: string;
  password: string;
}

export interface Course {
  BatchName: string;
  programs: Program[];
}

export interface Program {
  [programName: string]: string[];
}

export interface exams {
  examId: string;
  examDate: string;
  examName: string;
  examTime: string;
  examTotalMarks: number;
  examUploadFiles: string[];
  courseName: string;
}
export interface Assignment {
  assignmentId: string;
  assignmentName: string;
  assignmentTotalMarks: number;
  assignmentDate: string;
  assignmentTime: string;
  assignmentUploadFiles: string[];
  courseName: string;
}

export interface Students {
  studentId: string;
  studentName: string;
  courses: string[];
  marks: {
    Examinations: { examId: string; examMarks: number }[];

    Assignments: {
      assignmentId: string;
      AssignmentMarks: number;
    }[];
  };
}

interface CourseDetails {
  code: string;
  courseName: string;
  topicsCompleted: string[];
  topicsInProgress: string[];
  courseCompletion: string;
}

export interface BatchesandPrograms {
  BatchName: string;
  programs: Program[];
}

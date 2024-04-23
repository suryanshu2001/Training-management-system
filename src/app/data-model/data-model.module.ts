
export interface user{
  email: string,
  userName: string,
  password: string
}

export interface Course {
  BatchName: string;
  programs: Program[];
}

export interface Program {
  [programName: string]: string[];
}

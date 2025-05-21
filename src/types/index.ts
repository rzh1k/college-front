
export interface Staff {
  id: number;
  name: string;
  title: string;
  email: string;
}

export interface Module {
  id: number;
  code: string;
  title: string;
  description: string;
  contents: string[];
  staffMembers: Staff[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  modules: Module[];
}

export interface UserRegistration {
  userId: string;
  courseId: number;
  registrationDate: string;
}

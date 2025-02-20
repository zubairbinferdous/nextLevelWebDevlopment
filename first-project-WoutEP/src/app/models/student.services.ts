import { Student } from "./student/student.interface";
import studentData from "./studentModels";

const createStudentIntoDB = async (student: Student) => {
  const result = await studentData.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};

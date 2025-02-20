import { Schema, model } from "mongoose";
import { Guardian, Student, userName } from "./student/student.interface";

const studentNameSchema = new Schema<userName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: studentNameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: Number, required: true },
  emergencyContact: { type: Number, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  profilePic: { type: String, required: true },
  isActive: ["deActive", "active"],
});

const studentData = model<Student>("student", studentSchema);

export default studentData;

export type Guardian = {
  fatherName: string; // string
  fatherOccupation: string; // string
  motherName: string; // string
  motherOccupation: string; // string
};

export type userName = {
  firstName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: userName;
  gender: string;
  dateOfBirth?: string;
  email: string;
  contactNo: number;
  emergencyContact: number;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress?: string;
  guardian: Guardian;
  profilePic: string;
  isActive: "deActive" | "active";
};

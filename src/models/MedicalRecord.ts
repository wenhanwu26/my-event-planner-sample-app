import Senior from "@/models/Senior";

export default class MedicalRecord {
  id: string;
  seniorId: string;
  senior?: Senior;  // Optional, to handle the belongsTo relationship if needed
  recordDetails: string;

  constructor(id: string, seniorId: string, recordDetails: string) {
    this.id = id;
    this.seniorId = seniorId;
    this.recordDetails = recordDetails;
  }
}

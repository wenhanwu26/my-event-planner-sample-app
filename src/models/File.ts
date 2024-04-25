import Senior from "@/models/Senior";

export default class File {
  id: string;
  fileName: string;
  filePath: string;
  description?: string;
  tags?: string[];

  constructor(id: string, fileName: string, filePath: string, description:string, tags: string[]) {
    this.id = id;
    this.fileName = fileName;
    this.filePath = filePath;
    this.description = description;
    this.tags = tags;
  }
}

/* sophisticated_code.js */

// This code demonstrates a sophisticated implementation of a file management system
// It includes functionalities for creating, deleting and searching for files and folders

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.files = [];
    this.subfolders = [];
  }

  addFile(file) {
    this.files.push(file);
  }

  deleteFile(file) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }

  addSubfolder(subfolder) {
    this.subfolders.push(subfolder);
  }

  deleteSubfolder(subfolder) {
    const index = this.subfolders.indexOf(subfolder);
    if (index > -1) {
      this.subfolders.splice(index, 1);
    }
  }

  searchFile(fileName) {
    let foundFile = null;

    for (const file of this.files) {
      if (file.name === fileName) {
        foundFile = file;
        break;
      }
    }

    if (!foundFile) {
      for (const subfolder of this.subfolders) {
        foundFile = subfolder.searchFile(fileName);
        if (foundFile) break;
      }
    }

    return foundFile;
  }
}

const rootFolder = new Folder("Root");

const folder1 = new Folder("Folder1");
const folder2 = new Folder("Folder2");
const folder3 = new Folder("Folder3");

const file1 = new File("File1.txt", 1024);
const file2 = new File("File2.txt", 2048);
const file3 = new File("File3.txt", 3072);
const file4 = new File("File4.txt", 4096);

rootFolder.addSubfolder(folder1);
rootFolder.addSubfolder(folder2);
rootFolder.addSubfolder(folder3);

folder1.addFile(file1);
folder1.addFile(file2);
folder2.addFile(file3);
folder3.addFile(file4);

console.log(rootFolder.searchFile("File3.txt")); // Output: File { name: 'File3.txt', size: 3072 }

folder2.deleteFile(file3);
console.log(rootFolder.searchFile("File3.txt")); // Output: null

console.log(rootFolder); // Full folder structure
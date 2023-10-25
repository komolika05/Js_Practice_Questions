//create a program using classes and objects to manage student data with subjects and marks using Stack

class Student {
    constructor(name){
        this.name = name
        this.subjects = []
    }

    addSubject(Subject, Marks){
        this.subjects.push({Subject,Marks})
    }

    calculateTotal(){
        let totalMarks = 0
        for (const subject of this.subjects){
            totalMarks += subject.Marks
        }
        const average = totalMarks/this.subjects.length
        let grade = ''

        if (average >= 90 ){
            grade = 'A+'
        } else if (average >= 80){
            grade = 'A'
        } else if (average >= 70){
            grade = 'B'
        } else if (average >= 60){
            grade = 'C'
        } else if (average >= 50){
            grade = 'D'
        } else{
            grade = 'F'
        }

        return {totalMarks, grade}
    }

    calculateSubjectGrade(){
        const subjectGrades = {}

        for (const subject of this.subjects){
            let grade = ''

            if(subject.Marks >= 90){
                grade = 'A+'
            } else if (subject.Marks >= 80){
                grade = 'A'
            } else if (subject.Marks >= 70){
                grade = 'B'
            } else if (subject.Marks >= 60){
                grade = 'C'
            }else if (subject.Marks >= 50) {
                grade = 'D'
            } else {
                grade = 'F'
            }

            subjectGrades[subject.subject] = grade
        }

        return subjectGrades
    }

    hasPassed(){
        for (const subject of this.subjects){
            if (subject.Marks < 50){
                return false
            }
        }
        return true
    }
}

const student = new Student('John Doe');

student.addSubject('Math', 85);
student.addSubject('English', 92);
student.addSubject('Hindi', 78);
student.addSubject('Science', 65);

const totalGrade = student.calculateTotal();
console.log(`Total Marks: ${totalGrade.totalMarks}`);
console.log(`Grade: ${totalGrade.grade}`);

const subjectGrades = student.calculateSubjectGrade();
console.log('Subject Grades:');
for (const subject in subjectGrades) {
  console.log(`${subject}: ${subjectGrades[subject]}`);
}

if (student.hasPassed()) {
  console.log(`${student.name} has passed.`);
} else {
  console.log(`${student.name} has failed.`);
}
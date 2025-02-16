const grades = Array(12).fill().map(() => Math.floor(Math.random() * 100) + 1);
document.getElementById("grades").textContent = "Оценки студентов: "+grades.join(", ");

const sum = grades.reduce((total, score)=>total+score,0);
const average = sum/grades.length;
document.getElementById("average").textContent = "Средний балл студентов: "+average.toFixed();

const maxScore = Math.max(...grades);
document.getElementById("maxScore").textContent = "Максимальный балл: "+maxScore;

const minScore = Math.min(...grades);
document.getElementById("minScore").textContent = "Минимальный балл: "+minScore;

const highScores = grades.filter(score=>score>=60);
document.getElementById("highScores").textContent = "Количество студентов с положительной оценкой: "+highScores.length;

const lessScores = grades.filter(score=>score<60);
document.getElementById("lessScores").textContent = "Количество студентов с отрицательной оценкой: "+lessScores.length;

const wordGrades = grades.map(score=>{
    if (score >= 80) return "A";
    if (score >= 60) return "B";
    if (score >= 40) return "C";
    if (score >= 20) return "D";
    return "E";
}); 
document.getElementById("wordGrades").textContent = "Буквенные оценки студентов: "+wordGrades.join(", ");



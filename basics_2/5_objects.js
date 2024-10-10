const course = {
    courseName : "js in Hindi",
    price : "00999",
    courseInstructor : "Hitesh"
}
const {courseInstructor} = course //Object destructuring
console.log(courseInstructor);
const {courseInstructor:ins} = course //Object destructuring
console.log(ins);
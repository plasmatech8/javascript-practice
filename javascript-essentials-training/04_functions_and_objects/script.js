
// Immediately invoked function
var a = 1;
var b = 2;
var value = (function(a,b){
    return a + b;
})(a, b)
console.log(value)


// Objects
var course = {
    title: "JavaScript",
    level: 1,
    views: 0,
    updateViews: function(){
        return ++course.views;
    }
};
course.updateViews()
console.log(course.views)

// Constructor functions (class definitions are better)
function Course(title, level, views){
    this.title = title;
    this.level = level;
    this.views = views;
    this.updateViews = function(){
        return ++course.views;
    };
}
var course = new Course("js", 1, 0)
console.log(course)
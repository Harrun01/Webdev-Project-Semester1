(() => {
    console.info("ready");
    const coursesTable = document.getElementById("coursesTable")
    fetch("course-list.json")
    .then(response => response.json())
    .then(data => {
    
        console.dir(data)
        data.forEach(item => {
        const row = document.createElement("tr");
        const CourseTitle =document.createElement("td");
        const CourseType = document.createElement("td");
        const CourseSummary = document.createElement("td");
        const CourseAwardName =document.createElement("td");
    
        CourseTitle.textContent = item.CourseTitle;
        CourseType.textContent = item.CourseType;
        CourseSummary.textContent = item.CourseSummary;
        CourseAwardName.textContent = item.CourseAwardName;
    
        row.appendChild(CourseTitle);
        row.appendChild(CourseType);
        row.appendChild(CourseSummary);
        row.appendChild(CourseAwardName);
        coursesTable.appendChild(row);
        });
    })
    .catch(error => {
    });
    })();
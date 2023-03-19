let pageNo = 1;

let issueList = document.getElementById("list");
let pageTitle = document.getElementById("pageTitle")

// let edge = 0
// let prev = 0
function getIssues(page) {
    let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`
    fetch(url).then(data => data.json()).then(res => {
        // console.log(res.length)
        issueList.innerHTML = "";

        res.forEach(issues=>{
            // console.log(issues.title)
            let listItem = document.createElement('li');
            listItem.textContent = issues.title;
            issueList.appendChild(listItem)
            pageTitle.innerHTML = `Page number ${page}`
            // edge++
            
        })
        console.log(edge)

        

    })
    .catch(err=>console.log(err))
}
getIssues(pageNo)
function incrementPageNo() {

    pageNo++
    getIssues(pageNo)
    
    
    
}
function decrementPageNo() {
    if(pageNo>1){
        pageNo--
        document.getElementById("myBtn").disabled = true;
        getIssues(pageNo)
    }
}

// console.log(pageNo)
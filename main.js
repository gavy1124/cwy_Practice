// 값을 입력한다.
// + 버튼을 누르면 , 할일추가

// 삭제버튼 누르면 , 할일 삭제
// 체크버튼 누르면 , 밑줄긋기

//진행중탭 > 진행중만
// 끝남 > 끝난것만


// 진행중 탭을 누르면 언더바이동




let taskInput = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = []


addBtn.addEventListener("click", addTask)
taskInput.addEventListener("focus", function () { taskInput.value = '' })


// + 버튼
function addTask() {
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList)
    render()
}

function render() {
    let resultHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>확인</button>
            <button>삭제</button>
        </div> 

    </div>`
    }
    document.getElementById("taskBoard").innerHTML = resultHTML;
    
}



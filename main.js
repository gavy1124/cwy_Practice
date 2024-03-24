// 값을 입력한다.
// + 버튼을 누르면 , 할일추가

// 삭제버튼 누르면 , 할일 삭제
// 체크버튼 누르면 , 밑줄긋기

//진행중탭 > 진행중만
// 끝남 > 끝난것만


// 진행중 탭을 누르면 언더바이동



let userInput = document.getElementById("userInput")
let addBtn = document.getElementById("addBtn")
let taskList = []

addBtn.addEventListener("click", addTask)
userInput.addEventListener("focus", function () { userInput.value = '' })


function addTask() {
    let result = userInput.value
    taskList.push(result)

    let resultHtml = ''

    for (let i = 0; i < taskList.length; i++) {
        resultHtml += `<div class="tasks">
        <div>${taskList[i]}</div>
        <div>
            <button>확인</button>
            <button>삭제</button>
        </div>
    </div>`;
    }
    document.getElementById("tasks").innerHTML = resultHtml




}

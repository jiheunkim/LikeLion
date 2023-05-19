const input = document.querySelector(".app-insert input"); //입력
const toDos = document.querySelector(".app-list"); //만들어지는 박스

input.addEventListener(
    "keyup",
    function (event) {
        if (event.keyCode === 13) {
            //엔터키
            if (input.value !== "") {
                // 빈칸이 아닌 경우
                addTask(input.value);
                input.value = "";
            }
        }
    },
    false
);

toDos.addEventListener(  // toDos 요소에 이벤트 리스너 추가
  "click",  // 마우스 클릭
  function (event) {
    if (event.target.classList.contains("remove-task")) {  // remove-task 클래스를 가지고 있을 때
      removeTask(event.target.parentNode);  // 부모 노드 삭제

      // Complete Task
    } else if (event.target.classList.contains("task")) {  // task 클래스를 가지고 있을 때
      completeTask(event.target);  // task 클래스 토글
    }
  },
  false  // 이벤트 버블링 방지
);

function addTask(task) {
    var newTask = document.createElement("li");
    newTask.setAttribute("class", "task");
    newTask.innerHTML = task + '<a href="javascript:;" class="remove-task">remove</a>';

    var list = document.querySelector(".app-list ul");
    list.appendChild(newTask);
}

function removeTask(task) {  // task 삭제
    task.style.opacity = 0;  // 투명도 0으로 설정
    setTimeout(function () {  // 0.4초 후에
      task.remove();  // task 삭제
    }, 400);
  }
  
  function completeTask(task) {  // task 완료
    task.classList.toggle("task-complete");  // task-complete 클래스 토글
  }

//https://www.daleseo.com/js-window-fetch/
/*
fetch(url, options)
.then((response) => console.log("response:", response))
.catch((error) => console.log("error:", error));
*/

//GET 호출, 원격 api의 데이터 가져오는 http 통신
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) =>console.log(response)
);

/*
json() 메서드
이 메서드를 호출하면, 응답(response) 객체로 부터 JSON 포멧의 
응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있습니다.
결론: 응답을 JS 객체 형태로 보여줌 */
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) =>response.json())
.then((data) =>console.log(data)
);

//==============================================================
//post 호출
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({   //여기 적힌 JS 객체를 JSON 문자열로 바꿔줌
        title: "Test",
        body: "시험중!",
        userId:1,
    }),
}).then((response) => console.log(response));

//메서드 포함
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({   //여기 적힌 JS 객체를 JSON 문자열로 바꿔줌
        title: "Test",
        body: "시험중!",
        userId:1,
    }),
}).then((response) => response.json())
.then((data) => console.log(data));

//==============================================================
//PUT 호출
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Test",
        body: "시험중!",
        userId:1,
    }),
}).then((response) => response.json())
.then((data) => console.log(data));

//==============================================================
//DELETE 호출
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "DELETE",
}).then((response) => response.json())
.then((data) => console.log(data));

//==============================================================
//편의성 개선(리팩토링)
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({   //여기 적힌 JS 객체를 JSON 문자열로 바꿔줌
        title: "Test",
        body: "시험중!",
        userId:1,
    }),
}).then((response) => response.json())
.then((data) => console.log(data));

//위를 바꿔보자
/*
async function post(host, path, body, headers={}){
    const url = 'https://${host}/${path}';
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
    };
    const res = await fetch(url, options);
    const data =await res.json();
    if(res.ok){
        return data;
    } else{
        throw Error(data);
    }
}

post("jsonplaceholder.typicode.com", "posts",{
    title:"Test",
    body:"테스트중!",
    userId: 1,
}).then((data) => console.log(data))
.catch((error => console.log(error)));
*/
async function post(host, path, body, headers = {}) {
    const url = `https://${host}/${path}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw Error(data);
    }
  }
  
  post("jsonplaceholder.typicode.com", "posts", {
    title: "Test",
    body: "I am testing!",
    userId: 1,
  })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

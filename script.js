// 변수
var i, j;
var arrayOfStars = ["a", "b", "c", "d", "e", "f", "g", "*"];

// 랜덤 함수
function random(a)
{
    return a[Math.floor(Math.random()*a.length)];
};

// 별찍기 함수
function star(n)
{

    for(i = 0; i < n; i++)
    {
        for (j = 0; j <= i; j++)
        {
            document.write(random(arrayOfStars));
        }
        document.write("<br>");
    };

};

//결과
var inputNum = parseInt(prompt("양의 정수를 입력하세요!"));
star(inputNum);
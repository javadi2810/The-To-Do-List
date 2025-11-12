
// گرفتن عناصری که نیازشان داریم
var input = document.querySelector("input")
var ul = document.querySelector("ul");
var li = document.querySelectorAll(".li");


// فعال کردن دکمه برای اضافه کردن لیست
document.querySelector(".btnaddtoList").addEventListener("click", function () {
    if (input.value.trim() == "") {
        alert("برای اضافه کردن به لیست حتما باید جیزی در کادر قرار دهید")
        return
    }

    ul.innerHTML += `
             <li class="li" onclick="eventLi(event)">
                <div>
                     <span class="iconNone">✔</span>
                    <span class="valueItem">${input.value}</span>    
                </div>
                <span class="removeList">x</span>
            </li>
                `

    input.value = ""
})


// ایجاد فانکشن برای وقتی که روی هر لیست مان کلیک انجام شد
function eventLi(e) {
    const List = e.currentTarget;

    
    // حذف کردن  لیست
    if (e.target.classList.contains("removeList")) {
        List.remove()
    }

    List.classList.toggle("checked")


    // خط زدن روی متن
    if (List.classList.contains("checked")) {
        List.querySelector(".valueItem").style = `text-decoration:line-through;`
    } else {
        List.querySelector(".valueItem").style = `text-decoration:none;`
    }

    // نمایش تیک 
    List.querySelector(".iconNone").classList.toggle("iconNoInlin")

}




//    /////////////////////////////////////////////////////////////////// نکات  آموزش جدید که در این تمرین یاد گرفتم

/*
1: اگر توسط جاوا اسکریپت با استفاده از اینر اچ تی ام  ال یک فایل اچ تی ام ال  اضافه کنیم نمیتوانیم روری کد های ایجاد شده از ایونت لیستنر استفاده کنیم
 
2: trim() این متد باعث میشه فاصله های قبل و بعد یک استرینگ رو حذف کنه


3/1: e.currentTarget اگر روی عنصری از ان کلیک استفاده کردیم اینطوری میتونیم خود همون عنصر رو بگیریم
3/2: e.target.classList با این میتونیم روی هر کدوم که کلیک شد رو بگیریم


4: contains("هرچیزی") این متد برای کلاس لیست ها هست که میره میبینه اون کلاس وجود داره یانه  

5: remove() هر عنصری که خواستیم حذف کنیم رو هم با این متد حذف می کنیم

*/
export default function form() {
    var formHTML = `
    <div class="container">
        <h2>Information</h2>
        <form id="demo-form" name="demo-form" action="/data" method="post">
            <div class="row">
                <div class="six columns">
                    <label for="autism">Do you have a child w/ autism spectrum disorder?</label>
                    <select name="autism" id="autism">
                        <option value="noans">no answer</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div class="six columns">
                    <label for="famaba">Is anyone in your family receiving applied behavior analysis (ABA) services??</label>
                    <select name="famaba" id="famaba">
                        <option value="noans">no answer</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>                    
                    </select
                </div>  
            </div>
            <div class="row">
                <div class="six columns">
                    <label for="age">Age (in years) of individual receiving ABA services</label>
                    <input type="number" class="u-full-width" name="age" id="age" min="-1" max="99" value="-1">
                </div>
                <div class="six columns">
                    <label for="income">What is your household income?</label>
                    <input type="number" class="u-full-width" name="income" id="income" min="-1" value="-1">
                </div>
            </div>
            <div class="row">
                <div class="u-full-width">
                    <label for="education">Highest level of education obtained in your household.</label>
                    <select class="u-full-width" name="education" id="education">
                        <option value="noans">no answer</option>
                        <option value="somehs">some high school</option>
                        <option value="gradhs">high school graduate</option>
                        <option value="some2yr">some 2-year college (AA/AS)/technical program</option>
                        <option value="grad2yr">2-year college (AA/AS)/technical program graduate</option>
                        <option value="some4yr">some 4-year college/university</option>
                        <option value="grad4yr">4-year college/university graduate</option>
                        <option value="somegrad">some graduate school</option>
                        <option value="gradgrad">graduate school graduate</option>
                    </select>
                </div>
                <input class="button-primary" type="submit" value="Submit" id="submit-btn">
            </div>

        </form>
    </div>`;
  var appcontainer = document.getElementById("app");
  appcontainer.innerHTML = formHTML;

  var demoForm = document.getElementById("demo-form");
  demoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    postData();
  });

}

function postData() {
    data.autism = document.getElementById("autism").value;
    data.famaba = document.getElementById("famaba").value;
    data.age = document.getElementById("age").value;
    data.income = document.getElementById("income").value;
    data.education = document.getElementById("education").value;
    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/data");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));

    thanks();
}

function thanks() {
    var thanksHTML = `
    <h1 style="">Thanks for your participation!</h1>
    `;
    var appcontainer = document.getElementById("app");
    appcontainer.innerHTML = thanksHTML;
}

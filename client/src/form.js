export default function form() {
    var formHTML = `
    <div class="container">
        <h2>Information</h2>
        <form id="demo-form" name="demo-form">
            <div class="row">
                <div class="six columns">
                    <label for="autism">Do you have a child w/ autism spectrum disorder?</label>
                    <input type="checkbox" name="autism" id="autism">
                </div>
                <div class="six columns">
                    <label for="famaba">Is anyone in your family receiving applied behavior analysis (ABA) services??</label>
                    <input type="checkbox" name="famaba" id="famaba">
                </div>  
            </div>
            <div class="row">
                <div class="six columns">
                    <label for="age">Age of individual receiving ABA services</label>
                    <select class="u-full-width" name="age" id="age">
                        <option value="0">N/A</option>
                    </select>
                </div>
                <div class="six columns">
                    <label for="income">What is your household income?</label>
                    <select class="u-full-width" name="inome" id="income">
                        <option value="0">$0</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="u-full-width">
                    <label for="education">Highest level of education obtained in your household.</label>
                    <select class="u-full-width" name="education" id="education"></select>
                </div>
                <input class="button-primary" type="submit" value="Submit">
            </div>

        </form>
    </div>`;
  var appcontainer = document.getElementById("app");
  appcontainer.innerHTML = formHTML;

}

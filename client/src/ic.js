import start from './start';

export default function ic() {
  var icHTML = `
  <div class="task-container">
    <div class="u-full-width">
      <img src="/uflogo.png" width="500">
    </div>
    <form>
      <p>Check the checkbox below to indicate that you agree with the informed consent below.</p>
      <input type="checkbox" id="ic-check"></input>
      <label for="ic-check">I Agree</label>
    </form>
    <h3>INTRODUCTION</h3>
    <p>My name is David J. Cox (david.j.cox@ufl.edu). I am a graduate researcher at the University of Florida. You are invited to participate in our study! Please take whatever time you need to review this page about the study. The decision to join, or not to join, is up to you.</p>
    <p>In this research study, we are evaluating how people make choices while viewing a service provider’s online information. Deciding which service provider to select for you and your family is an important and complex process that we are interested in studying. The things we learn from conducting this study can help service providers, researchers, and the community at large make better information about services for consumers.</p>

    <h3>WHAT IS INVOLVED IN THE STUDY?</h3>
    <p>If you decide to participate you will be asked to view and explore the content of hypothetical service provider websites. The service provider websites you will see in this study are hypothetical and do not represent any actual service providers. After viewing the hypothetical service provider websites, we will ask you to make some choices between different options. We think this will take you X minutes.</p>
    <p>While you are participating in our study, we will be collecting data on some aspects of your behavior as a consumer accessing information online. This can include mouse clicks, how long you look at a certain page, choices you make, and responses to any questions we present to you. Your participation in our study is anonymous – we do not collect any identifying information from you except for the IP you accessed the study on and basic demographics you voluntarily provide to us. This information is stored in a secured data server accessible only to the researchers of this study (contact information below).</p>
    <p>You can stop participating in our study at any time by closing your web browser. Stopping early will not cause you to lose any benefits; however, we may exclude incomplete data from our final analysis.</p>

    <h3>RISKS</h3>
    <p>Participating in this study involves the risk of loss of confidentiality. Any time research is conducted over the web, there is a small chance that information might be accessed by a third party. These risks, however, are considered minimal as we are not collecting any identifying information and any data we track is stored directly on our secure server.</p>

    <h3>BENEFITS OF TAKING PART IN THE STUDY?</h3>
    <p>We do not expect you to benefit personally from participating in this study. However, your responses can help us and other researchers benefit consumers of clinical services in the future.</p>

    <h3>CONFIDENTIALITY</h3>
    <p>We will take steps to protect any information we collect from you. These steps include encrypted data transfers, secured data servers maintained in our offices, and omission of any identifying information. Any information we present to other researchers will have any potentially identifying information removed (e.g., IP addresses, individual demographics). In some cases we may present direct quotes from you as illustrative data, but we will remove any potentially identifying information before doing so. We will also be aggregating much of the data we collect from you, making it difficult or impossible to detect your participation amongst that of the other participants.</p>

    <h3>CONTACTS FOR QUESTIONS OR PROBLEMS</h3>
    <p>Please contact us if you have questions about the study or if you encounter any problems, unexpected physical or psychological discomforts, any injuries, or think that something unusual or unexpected is happening.</p>

    <p>Primary Investigator: David Cox (david.j.cox@ufl.edu) Co-Investigators: Travis Jones (tjones0@ufl.edu) and Triton Ong (ong2@ufl.edu) Research Supervisor: Jesse Dallery (dallery@ufl.edu)</p>

    <h3>YOUR RIGHTS AS A RESEARCH PARTICIPANT</h3>
    <p>The University of Florida IRB Office is located at the following address: Box 112250, University of Florida, Gainesville, FL 32611-2250.</p>
  </div>
  `

  var appcontainer = document.getElementById("app");
  appcontainer.innerHTML = icHTML;
  var icCheck = document.getElementById("ic-check");
  icCheck.addEventListener('change', () => {start();});

  icCheck.onchange


}
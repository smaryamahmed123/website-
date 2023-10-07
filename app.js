  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
   import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
    from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
   import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCYl8vL3RCVDcJSf37E98xdKuqMYR-0A9Q",
  authDomain: "hijama-19546.firebaseapp.com",
  projectId: "hijama-19546",
  storageBucket: "hijama-19546.appspot.com",
  messagingSenderId: "338168295413",
  appId: "1:338168295413:web:b3882404c45310d74cbabc",
  measurementId: "G-NP3NCPB1KP"
};

  // Initialize Firebase


var app = initializeApp(firebaseConfig);
 var auth = getAuth(app);
var DATABASE = getDatabase(app);


  
var firstName = document.getElementById('inputFirstName4');
var lastName = document.getElementById('inputLastName4');
var email = document.getElementById('inputEmail4');
var tel = document.getElementById('inputtel4');
var address = document.getElementById('inputAddress');
var address2 = document.getElementById('inputAddress2');
var city = document.getElementById('inputCity');
var state = document.getElementById('inputState');
var textarea = document.getElementById('textarea');

window.creatingEmail = function(){
  var data = {
    firstName : firstName.value,
    uLastName : lastName.value,
    uEmail : email.value,
    tel : tel.value,
    uAddress : address.value,
    uAddress2 : address2.value,
    uCity : city.value,
    uState : state.value,
    textarea:textarea
  };
  if(data === ''){
    data.focus('please Enter this feild')
  }
  var referkey = ref(DATABASE);
  var rendomId = push(referkey).key;
  data.id = rendomId;
  var reference = ref(DATABASE,`user data/${data.id}`)
  set(reference,data)
}

window.render = function(){
  var nav = document.getElementById('nav');
  var con1 = document.getElementById('con-1');
  var con2 = document.getElementById('con-2');
  var con3 = document.getElementById('con-3');
  var con4 = document.getElementById('con-4');
  var con5 = document.getElementById('con-5');
  var con6 = document.getElementById('con-6');


  // if (signinlogin) {
    // Hide the "Sign-in" and "Login" container

  nav.innerHTML = `
  <nav  class="navbar navbar-expand-md navbar-dark  bg-dark mb-5">
  <div class="container-fluid">
    <a class="navbar-brand fs-1 fw-bold" href="#"> SK HIJAMA CENTER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active d-flex align-items-center" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="https://hijama-19546.web.app    ">Link</a>
        </li>
       
            <li class="nav-item dropdown">
              <a href="#" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Wet Cupping</a></li>
                <li><a class="dropdown-item" href="#">Dry Cupping</a></li>
                <li><a class="dropdown-item" href="#">Moving Cupping</a></li>
              </ul>
            </li>
   
            <li class="nav-item dropdown">
              <a href="#" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Contect No.
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">0333 2298285</a></li>
                <li><a class="dropdown-item" href="#"></a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a href="#" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Open
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Mon      Open</a></li>
                <li><a class="dropdown-item" href="#">Tue      Open</a></li>
                <li><a class="dropdown-item" href="#">Wed      Open</a></li>
                <li><a class="dropdown-item" href="#">Thus      Open</a></li>
                <li><a class="dropdown-item" href="#">Fri      Open</a></li>
                <li><a class="dropdown-item" href="#">Sat      Open</a></li>
                <li><a class="dropdown-item" href="#">Sun      Closed</a></li>
              </ul>
            </li>
      </ul>
    </div>
  </div>
  </nav>`

con1.innerHTML = `
<div class="row">
  <div class="col-md-6">
    <img src="img/img1.webp" class=" rounded-end-circle" style="width: 400px;
     height: 400px; border-radius: 0 200px 200px 0;" alt="">
  </div>
  <div class="col-md-6">
      <div class="col-md-6">
        <label for="inputFirstName4" class="form-label">First Name</label>
        <input type="text" class="form-control" id="inputFirstName4">
      </div>
      <div class="col-md-6">
        <label for="inputLastName4" class="form-label">Last Name</label>
        <input type="text" class="form-control d-flex" id="inputLastName4">
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="col-md-6">
        <label for="inputtel4" class="form-label">WhatsApp No.</label>
        <input type="tel" class="form-control" id="inputtel4" placeholder="+92-XXX-XXXXXXX">
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      <div class="col-md-4 mb-3">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          
            <option value="china">China</option>
            <option value="india">India</option>
            <option value="japan">Japan</option>
            <option value="southkorea">South Korea</option>
            <option value="thailand">Thailand</option>
            <option value="vietnam">Vietnam</option>
            <option value="malaysia">Malaysia</option>
            <option value="singapore">Singapore</option>
            <option value="indonesia">Indonesia</option>
            <option value="philippines">Philippines</option>
            <option value="saudiarabia">Saudi Arabia</option>
            <option value="uae">United Arab Emirates (UAE)</option>
            <option selected value="pakistan">Pakistan</option>
            <option value="alabama">Alabama</option>
            <option value="alaska">Alaska</option>
              <option value="arizona">Arizona</option>
              <option value="california">California</option>
              <option value="colorado">Colorado</option>
              <option value="florida">Florida</option>
              <option value="hawaii">Hawaii</option>
              <option value="illinois">Illinois</option>
              <option value="louisiana">Louisiana</option>
              <option value="newyork">New York</option>
              <option value="texas">Texas</option>
              <option value="washington">Washington</option>
        
        </select>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <textarea name="" id="textarea" cols="50" rows="5" aria-disabled="false"
             placeholder="Write comments" class="align-self-center"></textarea>
          </div>
        </div>
      </div>
      <div class="col-12 d-inline">
        <button type="submit" onclick="creatingEmail(); validatePhoneNumber()" class="btn btn-primary d-inline px-5">submit</button>
      </div>
  </div>
</div>`

con2.innerHTML = `

<div class="row">
    <div class="col-md-4">
      <h1></h1>
        <h2>Benifit 1</h2>
        <img src="img/3-glass-cups-2.jpg" style="width: 200px; height: 200px;" alt="pic">
    </div>
    <div class="col-md-4">
        <h2>Benifit 2</h2>
        <img src="img/2019-03-04.jpg" style="width: 200px; height: 200px;" alt="pic">
    </div>
    <div class="col-md-4">
        <h2>Benifit 3</h2>
        <img src="img/healing-hijama-cupping-therapy-centre-jogeshwari-west-mumbai-cupping-therapy-centres-qzckkqqdcp-250.webp"
        style="width: 200px; height: 200px;" alt="pic">
    </div>
</div>
<hr class="featurette-divider">`


con5.innerHTML = `
<div class="row overflow-x-hidden mb-5">
  <div class="col-md-6 ps-5 overflow-x-hidden align-self-center">
    <h1>What is Hijama</h1>
    <p>Hijama, also known as "cupping therapy," is a traditional medicinal practice that has been used
       in various cultures for centuries, including in Islamic medicine. It involves creating a vacuum
       on the skin's surface by placing cups, typically made of glass or plastic, on specific areas of
      the body. The vacuum can be created by heating the cups or using a suction device. Once the cups
     are placed and the vacuum is created, they are left in position for a short period, usually a few minutes.</p>
  </div>
  <div class="col-md-5 ps-5 overflow-x-hidden">
    <img src="img/download.jpeg"  style="height: 400px; width: 400px; border-radius: 30px;" alt="hijama pic">
  </div>
</div>
<hr class="featurette-divider">`


con3.innerHTML = `
<div class="col-md-6  overflow-x-hidden">
  <h2 class="featurette-heading display-2 fw-bold ms-5">THE CUPPING THERAPY <h3 class="text-muted ps-5">Re-Awaken Your Natural Healing</h3></h2>
  <p class="lead ms-5">Our aim is to help you achieve homeostatic balance in your health so that you do not have
     an excess of one thing or a lack of another. The Cupping Therapy will work to help you remove bad physical
      elements from your body and encourage you to replace it with something better so that you can enjoy the 
      benefits of a healthier body and lifestyle.</p>
</div>
<div class="col-md-5 mx-3">
 <img src="img/HIJAMA BENIFITS.jpg" style="height: 400px; width: 400px; border-radius: 30px;" alt="">
</div>

`

con4.innerHTML = `
<div class="col-md-6 order-md-2  overflow-x-hidden">
  <h2 class="featurette-heading  display-1 fw-bold ms-5">Indications <h3 class="text-muted ps-5">See for yourself.</h3></h2>
  <p class="lead ms-5">
    Cupping therapy is indicated for both healthy patients (anti ageing treatment, rejuvenation purpose) and those 
    suffering from ailments. Localized ailments that benefit from cupping therapy include a headache, lower back pain,
    neck pain, and knee pain. Systemic illnesses that have seen benefits with cupping therapy include hypertension,
    rheumatoid arthritis, diabetes mellitus, mental disorders, heart disease, hypertension, infections.[20][21]
    It can be used to treat skin diseases, respiratory, musculoskeletal, digestive, reproductive, and allergic
    conditions,</p>
</div>
<div class="col-md-5 order-md-1 mx-3">
 <img src="img/TGC11533.webp" style="height: 400px; width: 400px; border-radius: 30px;" alt="">
</div>
</div>

<hr class="featurette-divider">

<div id="con-5" class="row featurette">
<div class="col-md-6  overflow-x-hidden">
  <h2 class="featurette-heading display-1 fw-bold ms-5">Effects <h3 class="text-muted ps-5">For your self.</h3></h2>
  <p class="lead ms-5">
    <ul>
      <li>
        Skin: Improved metabolism in skin tissue, better functioning of sebaceous and sweat glands, improved healing
       and improved skin resistance.
      </li>
      <li>
        Muscles: Stimulates blood flow and lymphatic drainage.
      </li>
      <li>
        Joints: Increased blood flow and secretion of synovial fluid.
      </li>
      <li>
        Digestive system: Increased peristalsis and secretion of digestive fluids, better digestion and excretion.
      </li>
      <li>
        Blood: Improved blood circulation, improved functioning of RBC and WBC.
      </li>
      <li>
        Nervous System: Stimulates sensory nerves of skin, Improves ANS.
      </li>
    </ul>
  </p>
</div>
<div class="col-md-5">
  <img src="img/cupping-therapy-750-350 (1).jpg" class="d-flex align-items-center ms-4" style="height: 400px; width: 400px; border-radius: 30px;" alt="">

</div>`

con6.innerHTML = `  <hr class="featurette-divider">


  <div class="row  bg-dark">
    <div class="col-md-4 text-muted ps-5 pb-5">
      <h3 class="pt-5">SK HIJAMA CENTER</h3>
      <p>
        At The CuppingTherapy, we enjoy discussing the benefits aplenty of this type of therapy.</p>
     <p> We understand that removing all toxins from our life is very close to impossible, so although
       our bodies are continually removing them from our system, sometimes we would need a little boost
        if our exposure to toxins exceeds the rate of toxin removal from our bodies.</p>

     <p> So what better way is there to remove toxins directly from our body other than via The Cupping Therapy?</p>
      </p>
    </div>
    <div class="col-md-4  ps-5 text-center ">
      <h3 class="text-muted pt-5">Services</h3>
      <a class="d-block text-decoration-none text-success" href="#">Wet Cupping</a>
      <a class="d-block text-decoration-none text-success" href="#">Dry Cupping</a>
      <a class="d-block text-decoration-none text-success" href="#">Moving Cupping</a>
    </div>
    <div class="col-md-4 text-center">
      <h3 class=" text-muted py-5 ps-4 text-center">Get in Touch</h3>
      <div class="d-flex ">
        <i class="fa-solid fa-phone text-muted   pb-3 pe-5"></i>
        <a class=" text-decoration-none text-success ps-5" href="tel:+ 333 2298285">03332298285</a>
      </div>
      <div class="d-flex ">
        <i class="fa-solid fa-envelope text-muted  pb-3 pe-5"></i>
        <a class=" text-decoration-none text-success ps-5" href="mailto:kamalsahmed@gmail.com">kamalsahmed@gmail.com</a>
      </div>
      <div class="d-flex ">
        <i class="fa fa-globe text-muted  pb-3 pe-5" aria-hidden="true"></i>
        <a class=" text-decoration-none text-success ps-5" href="http://">link</a>
      </div>
      <div class="d-flex ">
        <i class="fa-solid fa-location-dot text-muted  pb-3 pe-5"></i>
        <a class=" text-decoration-none text-success ps-5" href="https://maps.app.goo.gl/7F4wQFZU5vucw3My5"
         target="_blank" id="link" rel="noopener noreferrer" onclick="address()">Adress</a>
      </div>
      <div class="d-flex ">
        <i class="fa-regular fa-clock text-muted  pb-3 pe-5"></i>
        <a class=" text-decoration-none text-success ps-5" href="">10:00 am-10:00 pm</a>
      </div>
    </div>
  </div>`
// }

}

window.button = function(){
  render()
}

window.validatePhoneNumber= function() {
  // Get the phone number input field
  var tel = document.getElementById('inputtel4').value;
  
  // Define a regular expression for a common phone number format (e.g., +1-555-555-5555)
  var phoneRegex = /^\+92-\d{3}-\d{7}$/;
  
  // Remove spaces and hyphens to make the validation more flexible
  // var cleanedPhoneNumber = tel.replace(/\s+/g, '').replace(/-/g, '');
  
  // Check if the phone number matches the regex
  if (phoneRegex.test(tel)) {
      // alert("Valid phone number");
  } else {
      alert("Invalid phone number");
  }
}
var signinlogin =document.getElementById('sign-in-login');


window.signin = function(){

  var user ={
     email : document.getElementById('floatingInput').value,
     password : document.getElementById('floatingPassword').value
  }

  createUserWithEmailAndPassword(auth,user.email,user.password)
  .then(function(success){
    user.id =success.user.uid;
    var refe = ref(DATABASE,`user/${success.user.uid}`)
    set(refe,user)
    if(signinlogin){
      signinlogin.className = "d-none"
      render();
    }

  }).catch(function(error){
    console.log( error.code , "ERROR");
    if(error.code === "auth/invalid-email"){
      alert('please sign in or login')
    }
    else if(error.code === 'auth/missing-password'){
      alert('please enter your password')
    }
    else if(error.code === 'auth/invalid-email'){
      alert('please enter a valid email adress')
    }
    else if(error.code === 'auth/weak-password'){
      alert('Password should be at least 6 characters')
    }
  })
} 

window.login = function () {
  var email = document.getElementById('floatingInput').value;
  var password = document.getElementById('floatingPassword').value

  signInWithEmailAndPassword(auth, email, password) // Provide the email as the second argument
    .then(function (success) {
      console.log(success);
      if(signinlogin){
        signinlogin.className = "d-none"
        render();
      }
    })
    .catch(function (error) {
      alert(error + " ERROR");
      if(error.code === "auth/user-not-found"){
        alert('please sign')
      }
      else if(error.code === "auth/invalid-email"){
        alert('please sign in or login')
      }
      else if(error.code === 'auth/missing-password'){
        alert('please enter your password')
      }
      else if(error.code === 'auth/invalid-email'){
        alert('please enter a valid email adress')
      }
      else if(error.code === 'auth/weak-password'){
        alert('Password should be at least 6 characters')
      }else if(error.code === 'auth/invalid-login-credentials'){
        alert('invalid password')
      }
    });
}

window.out = function(){
  signOut(auth).then((successful) => {
    // Sign-out successful.
    console.log(successful ,'successful')
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
}
// 
// 
var link = document.getElementById("link")
window.address = function(){
  window.open("https://maps.app.goo.gl/7F4wQFZU5vucw3My5", '_blank')
}
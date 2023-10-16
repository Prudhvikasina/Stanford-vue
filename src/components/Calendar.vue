<style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: translate 0.5s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    /** opacity: 0; **/
    translate: 0px 100%;
  }

  .Satnford-text {
    color: white;
    background-color: #006B81;
    width: 100%;
    padding: 5px;
    /* margin-top: -48px; */
    font-size: 20px;
  }

  .Stanford-redtext {
    color: #8C1515;
    font-size: 45px;
    font-weight: 600;
    margin-top: 20px;
  }

  .class-enroll-text {
    font-size: 40px;
    font-weight: 400;
  }

  .class-enroll-card {
    height: 200px;
    margin-top: -16px;
  }

  .input-field {
    width: 15%;
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;
    float: right;
    margin-top: -140px;
    margin-right: 133px;
    font-size: 14px;
    font-weight: 600;
  }

  .home-text {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }

  .my-course-text {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }

  .class-search-text {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }

  .my-info-text {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }

  .dropdown-icon {
    margin-top: -6px
  }

  .home-text2 {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    color: #006B81;
  }

  .my-course2 {
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    color: #620059;
  }

  .stanford-class-text {
    font-size: 64px;
    font-weight: 700;
    color: #FFFFFF;

  }

  .my-course-btn {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
    padding: 5px 16px 10px 16px;
    border-radius: 5px;
    background-color: #006B81;
    text-decoration: none;
  }

  .my-course-btn:hover {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
    padding: 5px 16px 10px 16px;
    border-radius: 5px;
    background-color: #620069;
    text-decoration: none;
  }

  .Search-Classes-btn {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
    padding: 5px 16px 10px 16px;
    border-radius: 5px;
    background-color: #006B81;
    text-decoration: none;
  }

  .Search-Classes-btn:hover {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
    padding: 5px 16px 10px 16px;
    border-radius: 5px;
    background-color: #620069;
    text-decoration: none;
  }

  /* .stanford-bg{
  background-image: url(../assets/stanford-bgimage.png);
   padding: 50px;
} */
  .stanford-bg {
    background-image: url(../assets/stanford-bgimage.png);
    background-size: cover;
    padding: 40px;
  }

  .my-calendar-text1 {
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    text-align: left;
    color: #272E5C;
  }

  .my-calendar-down {
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    color: #272E5C;
  }

  .total-class2 {
    font-size: 23px;
    font-weight: 700;
    line-height: 27px;
    /* text-align: center; */
    color: #353B66;
  }

  .downtext-total {
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    /* text-align: center; */
  }

  .contactwrap {
    width: 2000px;
    margin: 0px auto;
  }

  @media screen and (max-width:2000px) {
    .contactwrap {
      width: 84%;
    }
  }

  @media screen and (max-width:992px) {
    .contactwrap {
      width: 88%;
    }
  }

  .search-icon {
    width: 3%;
    float: right;
    margin-right: 142px;
    margin-top: -148px;
  }

  .user-icon {
    width: 44px;
    float: right;
    margin-right: 53px;
    margin-top: -160px;
  }

  .dropdown-toggle {
    border: 1px solid black;
    border-radius: 5px;
  }

  .my-courses-text2 {
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
  }

  .undergraduate-text {
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

  }

  /* .accordion-stanford{
  width: 75%;
} */
  .graduate-program-text {
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

  }

  .GSB-text {
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  .my-planner-text {
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
  }

  .class-status-text {
    font-size: 23px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    margin-left: 28px;
    margin-top: 40%;
  }

  .stanford-list {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
  }

  .ellipse-icons {
    width: 20px;
  }

  .enrolling-text {
    text-align: center;
  }

  .enrolled-cal-text {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
  }

  .student-textf {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }

  .footer-details {
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

  }

  .campus-text {
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #006B81;
  }

  .footer-explore-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #006B81;
  }

  .Down-ft-Stanford-text {
    font-size: 40px;
    color: white;
    font-weight: 600;
  }

  .down-footer-bg {
    background-color: #006B81;
  }

  .Down-ft-Stanford-text-1 {
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }

  .footer-downtext {
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: white;

  }

  .footer-downtext-copy {
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: white;
    margin-left: 275px;
    margin-top: -8px;
  }

  .accordion {
    background-color: #F4F4F4;
    color: #444;
    cursor: pointer;
    padding-left: 2%;
    padding-right: 2%;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 5px;
    border-left: 7px solid #A6B168;
  }

  .active,
  .accordion:hover {
    background-color: #F4F4F4;
    box-shadow: 5px 5px 5px darkgray;

  }

  .panel {
    padding: 0 18px;
    display: none;
    background-color: #F4F4F4;
    overflow: hidden;
    border-radius: 5px;
  }

  .accordion1 {
    background-color: #F4F4F4;
    color: #444;
    cursor: pointer;
    padding-left: 2%;
    padding-right: 2%;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 5px;
    border-left: 7px solid #A6B168;
  }

  .active,
  .accordion1:hover {
    background-color: #F4F4F4;
    box-shadow: 5px 5px 5px darkgray;
  }

  .panel1 {
    padding: 0 18px;
    display: none;
    background-color: #F4F4F4;
    overflow: hidden;
    border-radius: 5px;
  }

  .accordion2 {
    background-color: #F4F4F4;
    color: #444;
    cursor: pointer;
    padding-left: 2%;
    padding-right: 2%;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 5px;
    border-left: 7px solid #A6B168;
  }

  .active,
  .accordion2:hover {
    background-color: #F4F4F4;
    box-shadow: 5px 5px 5px darkgray;
  }

  .panel2 {
    padding: 0 18px;
    display: none;
    background-color: #F4F4F4;
    overflow: hidden;
    border-radius: 5px;
  }

  .accordion3 {
    background-color: #F4F4F4;
    color: #444;
    cursor: pointer;
    padding-left: 2%;
    padding-right: 2%;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 5px;
    border-left: 7px solid #A6B168;
  }

  .active,
  .accordion3:hover {
    background-color: #F4F4F4;
    box-shadow: 5px 5px 5px darkgray;
  }

  .panel3 {
    padding: 0 18px;
    display: none;
    background-color: #F4F4F4;
    overflow: hidden;
    border-radius: 5px;
  }

  .CEE-text1 {
    font-size: 20px;
    font-weight: 700;
    color: black;
  }

  .CEE-lec {
    font-size: 15px;
    font-weight: 400;
  }

  .vl-1 {
    border-left: 2px solid black;
    height: 63px;
    margin-bottom: -22px;
    margin-top: -22px;
    opacity: 0.6;
  }

  .number-units-text {
    color: #007C92;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }

  .opened-accordion {
    float: right;
    margin-top: -36px;
  }

  .withdraw-btn {
    background-color: #007C92;
    color: white;
  }

  .show-text-btn {
    border: 1px solid #006B81;
    border-radius: 5px;
    color: #006B81;
    padding: 7px;

  }

  .accordion:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    font-size: 35px;
    margin-top: -120px;
    color: #006B81;
  }

  .active:after {
    content: "\2212";
  }

  .accordion1:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    font-size: 35px;
    margin-top: -120px;
    color: #006B81;
  }

  .active:after {
    content: "\2212";
  }

  .accordion2:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    font-size: 35px;
    margin-top: -120px;
    color: #006B81;
  }

  .active:after {
    content: "\2212";
  }

  .accordion3:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    font-size: 35px;
    margin-top: -120px;
    color: #006B81;
  }

  .active:after {
    content: "\2212";
  }

  .Accordion-downtext {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
  }

  .Adjust-related-text {
    font-size: 16px;
    font-weight: 600;
  }

  .footer-section {
    background-color: white;
    padding: 10px;
  }

  .University-textF {
    font-size: 25px;
    font-weight: 600;
    color: white;
  }

  .login-user {
    margin-right: 59px;
    margin-top: -117px;
    font-size: 16px;
    font-weight: 600;
    color: #006B81;
  }

  /* .panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
} */
</style>





<template>
  <div class="Satnford-text">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <p class="">Stanford University</p>
      </div>
    </div>
  </div>

  <div class="card box shadow class-enroll-card ">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="stanford-main d-flex">
          <span class="Stanford-redtext">Stanford</span>
          <p class="class-enroll-text p-4">| Class Enroll</p>
        </div>
        <div class="d-flex ">
          <p class="home-text">Home</p>
          <p class="my-course-text mx-3">My Courses </p><img class="dropdown-icon " src="../assets/Icon.svg">
          <p class="class-search-text mx-3">Class Search </p> <img class="dropdown-icon " src="../assets/Icon.svg">
          <p class="my-info-text mx-3">My Information </p><img class="dropdown-icon " src="../assets/Icon.svg">
        </div>
        <div class="text-end">
          <div class="search-container">
            <form action="/action_page.php">
              <input class="input-field" type="text" placeholder="Search Axess Self Service" name="search">
              <button type="submit" class="input-group-addon">
                <!-- You can use an inline SVG or an icon font like Font Awesome -->
                <img class="search-icon" src="../assets/search.png">
                <img class="user-icon" src="../assets/user-icon.svg">
              </button>
            </form>
          </div>
          <p class="login-user">User</p>
        </div>
      </div>
    </div>


  </div>

  <div class="p-3 contactwrap ">
    <p class="home-text2 mt-4 ">Home / <span class="my-course2">My Courses</span></p>
  </div>

  <div class="stanford-bg ">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-5 text-center">
        <p class="stanford-class-text">Stanford Class <br> Enroll</p>
        <a class="my-course-btn" href="/">My courses</a>
        <router-link to="/Classenroll" class="Search-Classes-btn mx-5">Search Classes</router-link>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-4">
        <div class="alert" style="background:#F4F4F4" role="alert">
          <h3 class="alert-heading">Announcements</h3>
          <p class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8C1515"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img"
              aria-label="Warning:">
              <path
                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            On the evening of September 1, the enrollment systems expenenced challenges during the first hour of the
            day, we apologize for for the inconvenience and frustration. This issue has been resolved and you can
            continue with your usual navigation as before.
            We invite you to share your experiences using the system, our survey can be found on this University IT
            webpage
          </p>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>


  <div class="card box shadow mt-5 p-5 contactwrap">
    <p class="my-calendar-text1">My Calendar</p>
    <p class="my-calendar-down">Please Select the Term that you’ll be enrolling courses.</p>

    <div class="row">
      <div class="col-md-9">

        <div class="EventCalendar">
          <EventCalendar></EventCalendar>
        </div>






        <!-- use the modal component -->
        <!-- <transition name="modal">
        <Modal
          v-if="modalShow"
          @close-modal="closeModal"
          @toggle-popover="togglePopover"
          :day="modalDay"
          :month="calendarStore.getMonth"
          :year="calendarStore.getYear"
          :events="modalEvents"
        />
      </transition>
       -->

        <!-- popover component  -->
        <!-- <div
        ref="popoverRef"
        :class="{ hidden: !popoverShow, block: popoverShow }"
        class="bg-gray-100 mb-3 block z-50 max-w-xs rounded-lg shadow-md"
      >
        <slot
          name="eventDialog"
          :eventDialogData="todaysEvent"
          :closeEventDialog="togglePopover"
        />
      </div> -->
      </div>

      <div class="col-md-3">
        <div class="text-center">
          <div class="dropdown">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown">
              Autumn 2021-22
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Link 1</a></li>
              <li><a class="dropdown-item" href="#">Link 2</a></li>
              <li><a class="dropdown-item" href="#">Link 3</a></li>
            </ul>
          </div>
          <p class="total-class2 mt-4">Total Classes</p>
          <p class="downtext-total">4 classes</p>
          <p class="total-class2">Total Units</p>
          <p class="downtext-total">13 units</p>
        </div>
      </div>
    </div>



    <!-- <ul class=" list-items-cal d-flex mt-4" style="margin: auto 400px;">
      <li class="nav-item">
        <p class="enrolled-cal-text d-flex">Enrolled <img class="ellipse-icons mx-2" src="../assets/Ellipse-1.svg"></p>
      </li>
      <li class="nav-item">
        <p class="enrolled-cal-text d-flex mx-5">Waitlisted <img class="ellipse-icons mx-2"
            src="../assets/Ellipse-2.svg"></p>
      </li>
      <li class="nav-item">
        <p class="enrolled-cal-text d-flex mx-4">Planned <img class="ellipse-icons mx-2" src="../assets/Ellipse-3.svg">
        </p>
      </li>
    </ul> -->


    <div class="row">
      <div class="col-md-9">
        <p class="my-courses-text2 mt-5">My Courses</p>
        <p class="undergraduate-text">Undergraduate program courses</p>
        <div v-for="item in jsonData.items" :key="item.id" class="mt-3">
          <button class="accordion CEE-text1" >
            <div class="row">
              <div class="col-sm-3">
                {{item.Codenumber}}<br>
                <span class="CEE-lec">{{item.Lecsection}}<br>
                  {{item.ClassNum}}</span>
              </div>
              <div class="col-sm-4">
                <p>{{item.Venturetext}}</p>
                <p class="CEE-lec d-flex"> {{item.Mondate}}</p>
                <p class="CEE-lec d-flex"> {{item.Time}}</p>
                <p class="CEE-lec d-flex"> {{item.Location}}</p>
              </div>
              <div class="col-sm-4 mt-5">
                <p class="CEE-lec"><span class="number-units-text">{{item.NumUnits}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Instructor}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Grading}}</span> </p>
              </div>
            </div>
          </button>
          <div class="panel mt-2 p-4">
            <div class="row">
              <div class="col-sm-9">
                <p class="CEE-text1">{{item.Winter}} </p>
                <p><span class="number-units-text">{{item.ClassNum1}}</span> </p>
                <p><span class="number-units-text">{{item.Mode}}</span></p>
                <p class="CEE-text1">{{item.CourseDescription}}</p>
                <p class="Accordion-downtext">{{item.TotalDesc}}</p>
                <p class="Accordion-downtext"><span class="CEE-text1">{{item.Classnotes}}</span> </p>
                <p class="Accordion-downtext"><span class="CEE-text1">{{item.Consent}}</span> </p>
                <p class="Accordion-downtext"><span class="CEE-text1">{{item.Repeatability}}</span> </p>
                <button class="show-text-btn mt-5">Show Textbooks</button>
              </div>
              <div class="col-md-3">
                <p class="CEE-text1">{{item.Grading2}}</p>
                <p class="Accordion-downtext">{{item.Letter}}</p>
                <p class="CEE-text1">{{item.AcademicCareer}}</p>
                <p class="Accordion-downtext">{{item.Graduate}}</p>
                <p class="CEE-text1">{{item.ClassAttributes}}</p>
                <p class="Accordion-downtext">{{item.WAYS}}</p>
                <p class="Accordion-downtext">{{item.WAYS1}}</p>
                <p class="CEE-text1">{{item.Requisites}}</p>
                <p class="Accordion-downtext">{{item.Naan}}</p>
              </div>
            </div>
            <div class="opened-accordion d-flex">
              <a class="Adjust-related-text mx-2">Adjust Related Course</a>
              <a class="Adjust-related-text mx-2">Adjust Variable Options</a>
              <button class="withdraw-btn btn">Withdraw</button>
            </div>
          </div>
        </div>



        <p class="graduate-program-text mt-5">Graduate program courses</p>

        <div v-for="item in jsonData.items1" :key="item.id" class="mt-3">
          <button class="accordion CEE-text1">
            <div class="row">
              <div class="col-sm-3">
                {{item.Codenumber}}<br>
                <span class="CEE-lec">{{item.Lecsection}}<br>
                  {{item.ClassNum}}</span>
              </div>
              <div class="col-sm-4">
                <p>{{item.Venturetext}}</p>
                <p class="CEE-lec d-flex"> {{item.Mondate}}</p>
                <p class="CEE-lec d-flex"> {{item.Time}}</p>
                <p class="CEE-lec d-flex"> {{item.Location}}</p>
              </div>
              <div class="col-sm-4 mt-5">
                <p class="CEE-lec"><span class="number-units-text">{{item.NumUnits}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Instructor}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Grading}}</span> </p>
              </div>
            </div>
          </button>
        <div class="panel mt-2 p-4">
          <div class="row">
            <div class="col-sm-9">
              <p class="CEE-text1">{{item.Winter}} </p>
              <p><span class="number-units-text">{{item.ClassNum1}}</span> </p>
              <p><span class="number-units-text">{{item.Mode}}</span></p>
              <p class="CEE-text1">{{item.CourseDescription}}</p>
              <p class="Accordion-downtext">{{item.TotalDesc}}</p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Classnotes}}</span> </p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Consent}}</span> </p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Repeatability}}</span> </p>
              <button class="show-text-btn mt-5">Show Textbooks</button>
            </div>
            <div class="col-md-3">
              <p class="CEE-text1">{{item.Grading2}}</p>
              <p class="Accordion-downtext">{{item.Letter}}</p>
              <p class="CEE-text1">{{item.AcademicCareer}}</p>
              <p class="Accordion-downtext">{{item.Graduate}}</p>
              <p class="CEE-text1">{{item.ClassAttributes}}</p>
              <p class="Accordion-downtext">{{item.WAYS}}</p>
              <p class="Accordion-downtext">{{item.WAYS1}}</p>
              <p class="CEE-text1">{{item.Requisites}}</p>
              <p class="Accordion-downtext">{{item.Naan}}</p>
            </div>
          </div>
          <div class="opened-accordion d-flex">
            <a class="Adjust-related-text mx-2">Adjust Related Course</a>
            <a class="Adjust-related-text mx-2">Adjust Variable Options</a>
            <button class="withdraw-btn btn">Withdraw</button>
          </div>
        </div>          
        </div>





        <p class="GSB-text mt-5">GSB program courses</p>

        <div v-for="item in jsonData.items2" :key="item.id" class="mt-3">
          <button class="accordion CEE-text1">
            <div class="row">
              <div class="col-sm-3">
                {{item.Codenumber}}<br>
                <span class="CEE-lec">{{item.Lecsection}}<br>
                  {{item.ClassNum}}</span>
              </div>
              <div class="col-sm-4">
                <p>{{item.Venturetext}}</p>
                <p class="CEE-lec d-flex"> {{item.Mondate}}</p>
                <p class="CEE-lec d-flex"> {{item.Time}}</p>
                <p class="CEE-lec d-flex"> {{item.Location}}</p>
              </div>
              <div class="col-sm-4 mt-5">
                <p class="CEE-lec"><span class="number-units-text">{{item.NumUnits}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Instructor}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Grading}}</span> </p>
              </div>
            </div>
          </button>
        <div class="panel mt-2 p-4">
          <div class="row">
            <div class="col-sm-9">
              <p class="CEE-text1">{{item.Winter}} </p>
              <p><span class="number-units-text">{{item.ClassNum1}}</span> </p>
              <p><span class="number-units-text">{{item.Mode}}</span></p>
              <p class="CEE-text1">{{item.CourseDescription}}</p>
              <p class="Accordion-downtext">{{item.TotalDesc}}</p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Classnotes}}</span> </p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Consent}}</span> </p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Repeatability}}</span> </p>
              <button class="show-text-btn mt-5">Show Textbooks</button>
            </div>
            <div class="col-md-3">
              <p class="CEE-text1">{{item.Grading2}}</p>
              <p class="Accordion-downtext">{{item.Letter}}</p>
              <p class="CEE-text1">{{item.AcademicCareer}}</p>
              <p class="Accordion-downtext">{{item.Graduate}}</p>
              <p class="CEE-text1">{{item.ClassAttributes}}</p>
              <p class="Accordion-downtext">{{item.WAYS}}</p>
              <p class="Accordion-downtext">{{item.WAYS1}}</p>
              <p class="CEE-text1">{{item.Requisites}}</p>
              <p class="Accordion-downtext">{{item.Naan}}</p>
            </div>
          </div>
          <div class="opened-accordion d-flex">
            <a class="Adjust-related-text mx-2">Adjust Related Course</a>
            <a class="Adjust-related-text mx-2">Adjust Variable Options</a>
            <button class="withdraw-btn btn">Withdraw</button>
          </div>
        </div>
        </div>




        <p class="my-planner-text mt-5"> My Planner</p>

        <div v-for="item in jsonData.items3" :key="item.id" class="mt-3">
          <button class="accordion CEE-text1">
            <div class="row">
              <div class="col-sm-3">
                {{item.Codenumber}}<br>
                <span class="CEE-lec">{{item.Lecsection}}<br>
                  {{item.ClassNum}}</span>
              </div>
              <div class="col-sm-4">
                <p>{{item.Venturetext}}</p>
                <p class="CEE-lec d-flex"> {{item.Mondate}}</p>
                <p class="CEE-lec d-flex"> {{item.Time}}</p>
                <p class="CEE-lec d-flex"> {{item.Location}}</p>
              </div>
              <div class="col-sm-4 mt-5">
                <p class="CEE-lec"><span class="number-units-text">{{item.NumUnits}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Instructor}}</span> </p>
                <p class="CEE-lec"><span class="number-units-text">{{item.Grading}}</span> </p>
              </div>
            </div>
          </button>
        <div class="panel mt-2 p-4">
          <div class="row">
            <div class="col-sm-9">
              <p class="CEE-text1">{{item.Winter}} </p>
              <p><span class="number-units-text">{{item.ClassNum1}}</span> </p>
              <p><span class="number-units-text">{{item.Mode}}</span></p>
              <p class="CEE-text1">{{item.CourseDescription}}</p>
              <p class="Accordion-downtext">{{item.TotalDesc}}</p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Classnotes}}</span> </p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Consent}}</span> </p>
              <p class="Accordion-downtext"><span class="CEE-text1">{{item.Repeatability}}</span> </p>
              <button class="show-text-btn mt-5">Show Textbooks</button>
            </div>
            <div class="col-md-3">
              <p class="CEE-text1">{{item.Grading2}}</p>
              <p class="Accordion-downtext">{{item.Letter}}</p>
              <p class="CEE-text1">{{item.AcademicCareer}}</p>
              <p class="Accordion-downtext">{{item.Graduate}}</p>
              <p class="CEE-text1">{{item.ClassAttributes}}</p>
              <p class="Accordion-downtext">{{item.WAYS}}</p>
              <p class="Accordion-downtext">{{item.WAYS1}}</p>
              <p class="CEE-text1">{{item.Requisites}}</p>
              <p class="Accordion-downtext">{{item.Naan}}</p>
            </div>
          </div>
          <div class="opened-accordion d-flex">
            <a class="Adjust-related-text mx-2">Adjust Related Course</a>
            <a class="Adjust-related-text mx-2">Adjust Variable Options</a>
            <button class="withdraw-btn btn">Withdraw</button>
          </div>
        </div>
        </div>



      </div>
      <div class="col-md-1"></div>
      <div class="col-md-2">
        <p class="class-status-text ">Class Status</p>
        <ul class="flex-column stanford-list mt-5">
          <li>
            <p class="stanford-list d-flex"><img class="ellipse-icons" src="../assets/Ellipse-1.svg"><span
                class="mx-5">Enrolled</span> </p>
          </li>
          <li>
            <p class="stanford-list d-flex"><img class="ellipse-icons" src="../assets/Ellipse-2.svg"><span
                class="mx-5">Waitlisted</span> </p>
          </li>
          <li>
            <p class="stanford-list d-flex"><img class="ellipse-icons" src="../assets/Ellipse-3.svg"><span
                class="mx-5">Planned</span> </p>
          </li>

        </ul>

      </div>
    </div>
  </div>

  <!-- <ul>
    <li v-for="item in jsonData.items" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p>{{item.projectname}}</p>
    </li>
  </ul> -->


  <div class="footer-section contactwrap mt-4">
    <div class="stanford-main d-flex">
      <span class="Stanford-redtext ">Stanford</span>
      <p class="class-enroll-text p-4">| Class Enroll</p>
    </div>

    <div class="row">
      <div class="col-sm">
        <p class="student-textf">Student Services Center</p>
        <p class="footer-details">459 Lagunita Drive,<br>
          (Tresider Memorial Union)<br>
          Stanford, CA 94305<br>
          Phone: 650-555-5555</p>
        <p class="campus-text d-flex">Campus Map <img class="mx-2" src="../assets/Arrow-icon.svg"></p>
        <p class="campus-text d-flex">Contact Us <img class="mx-2" src="../assets/Arrow-icon.svg"></p>
      </div>
      <div class="col-sm">
        <p class="student-textf">ACADEMIC EXTERNAL LINKS</p>
        <a class="footer-explore-text">Explore Courses</a><br>
        <a class="footer-explore-text">Order IT</a><br>
        <a class="footer-explore-text">Financial Aid Office</a><br>
        <a class="footer-explore-text">Student Services Center</a><br>
        <a class="footer-explore-text">University Bulletin</a><br>
        <a class="footer-explore-text">Registrar’s Office</a><br>
        <a class="footer-explore-text">Housing and Dining</a><br>
        <a class="footer-explore-text">Varden Health Center</a><br>
      </div>
      <div class="col-sm">
        <p class="student-textf">HELP</p>
        <a class="footer-explore-text">Help Ticket</a><br>
        <a class="footer-explore-text">Tips for Using Class Enroll</a><br>
        <a class="footer-explore-text">Report Accesibility Issues</a><br>
      </div>
      <div class="col-sm">
        <p class="student-textf">LEGAL</p>
        <a class="footer-explore-text">Compliance Helpline</a><br>
        <a class="footer-explore-text">Patent Agreement SU-18</a><br>
      </div>
    </div>

  </div>
  <div class="down-footer-bg p-3  mt-2">
    <div class="contactwrap ">
      <div class="row">
        <div class="col-sm-2 text-center">
          <p class="University-textF"><span class="Down-ft-Stanford-text">Stanford </span><br>University</p>
        </div>
        <div class="col-sm-2">
          <p class="Down-ft-Stanford-text-1 mt-3">Stanford Home</p>
          <p class="footer-downtext">Terms of Use</p>
        </div>
        <div class="col-sm-2">
          <p class="Down-ft-Stanford-text-1 mt-3">Stanford Home</p>
          <p class="footer-downtext">Privacy</p>
        </div>
        <div class="col-sm-6">
          <p class="Down-ft-Stanford-text-1 mt-3">Stanford Home</p>
          <div class="d-flex">
            <p class="footer-downtext">Copyright</p>
            <p class="footer-downtext mx-3">Trademarks</p>
            <p class="footer-downtext mx-3">Non-Discrimination</p>
            <p class="footer-downtext mx-3">Accessibility</p>
          </div>

        </div>
        <!-- <ul class="d-flex">
          <li>Terms of Use</li>
          <li class="mx-3">Privacy</li>
          <li>Copyright</li>
          <li>Trademarks</li>
          <li>Non-Discrimination</li>
          <li>Accessibility</li>
        </ul> -->
      </div>
      <p class="footer-downtext-copy">©Copyright Stanford University. Stanford, California 94305.</p>
    </div>

  </div>
  <component :is="currentView" />
<!-- <div class="container mx-auto" id="app">
  <h2 class="my-3">Single Active Item</h2>
  <accordion :content="data1"></accordion>
  </div> -->
  <!-- <Accordion></Accordion> -->
</template>

<script setup>
  import { ref, onMounted, onUpdated, computed } from "vue";
  import Top from "@/components/Top.vue";
  import Modal from "@/components/EventsModal.vue";
  import { useCalendarStore } from "../stores/calendar";
  import { usePopover } from "../composables/popover";
  // import jsonData from './data.json';
  import jsonData from '../data.json';
  import EventCalendar from './EventCalendar.vue'
  import { useRouter } from "vue-router";
  import Classenroll from "./Classenroll.vue";
  import Accordion from './Accordion.vue';
  // import Maincalendar from "./Maincalendar.vue"
  // import {classenroll} from '../classenroll.vue';
  // import jsonData from './data.json';
  /**************************************
   * PROPS
   * ************************************
   */

   const activeAccordion = ref(null);

const toggleAccordion = (id) => {
  if (activeAccordion.value === id) {
    activeAccordion.value = null;
  } else {
    activeAccordion.value = id;
  }
};


  const router = useRouter();

  // function goToAnotherComponent() {
  //   // Use router.push to navigate to another component
  //   router.push("../classenroll.vue"); // Replace with the actual route path
  // }

  const props = defineProps({
    events: {
      type: Object,
      required: true,
    },
  });


  // Store initialization and subscription
  const calendarStore = useCalendarStore();
  calendarStore.$subscribe((mutation, state) => {
    getDaysInMonth();
    getFirstDayOfMonth();
  });

  // component variables
  const daysOfTheWeek = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  const daysInCurrentMonth = ref(0);
  const firstDayOfCurrentMonth = ref(0);
  const lastEmptyCells = ref(0);
  const modalShow = ref(false);
  const modalDay = ref(0);
  const popoverRef = ref(null);
  const modalEvents = ref([]);

  // popover composable
  const { popoverShow, todaysEvent, togglePopover } = usePopover(popoverRef);

  /**
   * Gets the number of days present in a month
   * The month is gotten from the calendar store
   */
  const getDaysInMonth = () => {
    daysInCurrentMonth.value = new Date(
      calendarStore.getYear,
      calendarStore.getMonth + 1, // 👈️ months are 0-based
      0
    ).getDate();
  };

  /**
   * Gets in number, the first day of a month
   * The month is gottenn from the calendar store
   */
  const getFirstDayOfMonth = () => {
    firstDayOfCurrentMonth.value = new Date(
      calendarStore.getYear,
      calendarStore.getMonth,
      1
    ).getDay();
  };

  /**
   * Gets the last empty cells (if any) on the calendar grid
   */
  const lastCalendarCells = () => {
    let totalGrid = firstDayOfCurrentMonth.value <= 5 ? 35 : 42;

    lastEmptyCells.value =
      totalGrid - daysInCurrentMonth.value - firstDayOfCurrentMonth.value;
  };

  /**
   * Validates a day to check if it's today or not
   *
   * @param {number} day The day to validate
   * @return boolean True or false if it's today or not
   */
  const isToday = (day) => {
    let today = new Date();
    if (
      calendarStore.getYear == today.getFullYear() &&
      calendarStore.getMonth == today.getMonth() &&
      day == today.getDate()
    )
      return true;

    return false;
  };

  /**
   * Validates a day to check if event start date is current calendar date or not
   *
   * @param {number} day The calendar month date to check against
   * @param {string} startdate The event start date
   * @return boolean True or false if event is today or not
   */
  const isEventToday = (day, startdate) => {
    if (
      calendarStore.getYear == startdate.substring(0, 4) &&
      calendarStore.getMonth + 1 == startdate.substring(5, 7) &&
      day == startdate.substring(8, 10)
    )
      return true;

    return false;
  };

  /**
   * Gets at most, 3 calendar events on a given day
   * This events are displayed on the calendar grid (>= Large screens)
   *
   * @param {number} day calendar month day whose event(s) we're getting
   * @param {array} events Array of events objects to filter through
   *
   * @return array Array of the filtered day's event(s)
   */
  const maxThreeTodaysEvent = (day, events) => {
    if (!events.length) return [];

    let threeTodaysEventArr = [];

    events.forEach((event) => {
      if (threeTodaysEventArr.length == 3) return threeTodaysEventArr;

      if (isEventToday(day, event.time.start)) {
        threeTodaysEventArr.push(event);
      }
    });

    return threeTodaysEventArr;
  };

  /**
   * Gets all the calendar events on a given day
   *
   * @param {number} day calendar month day whose event(s) we're getting
   * @param {array} events Array of events objects to filter through
   *
   * @return array Array of the filtered day's event(s)
   */
  const allTodaysEvent = (day, events) => {
    if (!events.length) return [];

    let todaysEvent = [];
    events.forEach((event) => {
      if (isEventToday(day, event.time.start)) {
        todaysEvent.push(event);
      }
    });

    return todaysEvent;
  };

  /**
   * Open the event details modal
   *
   * @param {number} day current calendar month day
   * @param {array} events Array of events objects to show on the modal
   *
   * @return null
   */
  const openModal = (day, events) => {
    popoverShow.value = false; // close any open popover before opening modal
    modalEvents.value = events;
    modalDay.value = day;
    modalShow.value = true;
  };

  /**
   * Close the event details modal
   */
  const closeModal = () => {
    modalEvents.value = [];
    modalShow.value = false;
    modalDay.value = 0;
  };

  /************************************************************************
   *  LIFECYCLE HOOKS
   * **********************************************************************
   */
  onMounted(() => {
    getDaysInMonth();
    getFirstDayOfMonth();
    lastCalendarCells();
  });

  onUpdated(() => {
    getFirstDayOfMonth();
    lastCalendarCells();
  });

</script>


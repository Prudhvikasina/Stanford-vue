<template>
    <div class="Satnford-text ">
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
                    <p class="class-search-text mx-3">Class Search </p> <img class="dropdown-icon "
                        src="../assets/Icon.svg">
                    <p class="my-info-text mx-3">My Information </p><img class="dropdown-icon "
                        src="../assets/Icon.svg">
                </div>
                <div class="text-end">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input class="input-field" type="text" placeholder="Search Axess Self Service"
                                name="search">
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
        <p class="home-text2 mt-4 ">Home / <span>My Courses /</span> <span class="my-course2">Class Search</span></p>
    </div>


    <div class="contactwrap">
        <div class="row">
            <div class="col-md-3">
                <div class="card box shadow p-4">
                    <p class="fliter-text">Filter by</p>
                    <p class="claer-fliters-text">Clear all filters</p>
                    <div v-for="(value, key) in jsonData.Items[0]" :key="key">
                        <p class="side-nav-maintext">{{ key }}</p>
                        <div v-if="key === 'Instructor' || key === 'Academic Departments'">
                            <input type="text" class="form-control mb-2" v-model="searchQuery" placeholder="Search" />

                        </div>

                        <div class="form-check" v-for="item in value">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1"
                                value="something" />
                            <label class="form-check-label">{{ item }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-5">
                        <div class="search-container ">
                            <form action="/action_page.php">
                                <input class="input-field-3" type="text" placeholder="Enter keywords" name="search">
                                <button type="submit" class="input-group-addon">
                                    <!-- You can use an inline SVG or an icon font like Font Awesome -->
                                    <img class="search-icon-3" src="../assets/search.png">
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <p class="reset-text">Reset <img class="mx-2 reset-icon" src="../assets/reset-icon.svg"></p>
                    </div>
                </div>

                <p>Search results: 673 classes</p>

                <div class="row">
                    <div class="col-md-10">
                        <button class="winters-btn d-flex">Winter 2024 <img class="mx-1 cross-icon mt-1"
                                src="../assets/icons-1.svg"></button>
                    </div>
                    <div class="col-md-2">
                        <button><img src="../assets/Icon-2.svg"> <img src="../assets/view-list.svg"></button>
                    </div>
                </div>


                <div class="mt-3" v-for="item in jsonDatas.Classenroll" :key="item.id">
                    <button class="accordion mt-2 CEE-text1 box shadow">
                        <div class="row">
                            <div class="col-sm-3">
                                {{item.Codenumber}}<br>
                                <span class="CEE-lec">{{item.Lecsection}}<br>
                                    {{item.ClassNum}}</span>
                            </div>
                            <div class="col-sm-3">
                                <p>{{item.Venturetext}}</p>
                                <p class="CEE-lec d-flex"><img class="p-1" src="../assets/calendar.svg">{{item.Mondate}}
                                </p>
                                <p class="CEE-lec d-flex"><img class="p-1" src="../assets/clock.svg"> {{item.Time}}</p>
                                <p class="CEE-lec d-flex"> <img class="p-1"
                                        src="../assets/location.svg">{{item.Location}}</p>
                            </div>
                            <div class="col-sm-4 mt-5">
                                <!-- <p class="CEE-lec"><span class="number-units-text">{{item.NumUnits}} </span> </p> -->
                                <p class="CEE-lec">
                                    <span class="number-units-text">
                                        {{item.NumUnits}} <span class="units-value">{{ item.NumUnits.split(' ')[3] }}</span>
                                    </span>
                                  </p>
                                <p class="CEE-lec"><span class="number-units-text">{{item.Instructor}}</span> </p>
                            </div>
                            <div class="col-sm-2 text-end">
                                <p class="winter-text-1" style="color:#50557B">Winter 2024</p>
                                <p class="open-text" style="color:#A4AC62">Open</p>
                                <p class="view-details-btn text-center d-flex">View details <img class="mx-1"
                                        src="../assets/Icon (stroke).svg"></p>
                            </div>
                        </div>
                    </button>
                </div>
                <div class="panel mt-2 p-4 box shadow">
                    <div class="row">
                     <div class="col-sm-9">
                       <p class="CEE-text1">2022-23 Winter </p>
                       <p><span class="number-units-text">Class #:</span> 18656</p>
                       <p><span class="number-units-text">Mode:</span> In Person</p>
                       <p class="CEE-text1">Course Description</p>
                       <p class="Accordion-downtext">This team, project-based class teaches students how to exploit emerging materials science,
                          engineering and IT technologies to radically apply innovation to the real economy e.g., 
                          new products and services that produce real economic value for society as well as for the entrepreneurs.
                          With one-on-one support from seasoned industry mentors and influential guest speakers, the course guides students through the three key elements of new venture creation: identifying opportunities,
                          developing business plans, and determining funding sources.</p>
                         <p class="Accordion-downtext"><span class="CEE-text1">Class Notes:</span> Formal Reasoning (FR). Applied Quantitative Reasoning (AQR) </p>
                         <p class="Accordion-downtext"><span class="CEE-text1">Consent:</span> No special consent required</p>
                         <p class="Accordion-downtext"><span class="CEE-text1">Repeatability:</span> N/A</p>
                         <button class="show-text-btn mt-5">Show Textbooks</button>
                     </div>
                     <div class="col-md-3">
                       <p class="CEE-text1">Grading</p>
                       <p class="Accordion-downtext">Letter (ABCD/NP)</p>
                       <p class="CEE-text1">Academic Career</p>
                       <p class="Accordion-downtext">Graduate</p>
                       <p class="CEE-text1">Class Attributes</p>
                       <p class="Accordion-downtext">WAYS - AQR</p>
                       <p class="Accordion-downtext">WAY - SMA</p>
                       <p class="CEE-text1">Requisites</p>
                       <p class="Accordion-downtext">N/A</p>
                     </div>
                    </div>
                    <div class="opened-accordion d-flex">
                     <a class="Adjust-related-text mx-2">Adjust Related Course</a>
                     <a class="Adjust-related-text mx-2">Adjust Variable Options</a>
                     <button class="withdraw-btn btn">Withdraw</button>
                    </div>
                   </div>
                <div class="text-center">
                    <div class="col-md-5">
                        <div class="pagination mt-4">
                            <a href="#">1</a>
                            <a class="active" href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">next</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

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

    <!-- <div>
        <h1>{{ jsonData.title }}</h1>
        <p>{{ jsonData.description }}</p>
      </div> -->
</template>
<script>
    // import jsonData from '../demo.json';
    import { ref, onMounted, onUpdated, computed } from "vue";
    import Top from "@/components/Top.vue";
    import Modal from "@/components/EventsModal.vue";
    import { useCalendarStore } from "../stores/calendar";
    import { usePopover } from "../composables/popover";
    import jsonDatas from '../data.json';
    import jsonData from '../class.json';

    import { useRouter } from "vue-router";
    // import Classenroll from "./Classenroll.vue";
    // import Maincalendar from "./Maincalendar.vue"
    // import {classenroll} from '../classenroll.vue';
    // import jsonData from './data.json';
    /**************************************
    * PROPS
    * ************************************
    */

    //  import jsonData from '../class.json';

    const router = useRouter();

    // function goToAnotherComponent() {
    //   // Use router.push to navigate to another component
    //   router.push("../classenroll.vue"); // Replace with the actual route path
    // }
    export default {
        data() {
            return {
                jsonData: jsonData,
                jsonDatas: jsonDatas,
            };
        },
    };


    // Store initialization and subscription
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

<style scoped>
    .modal-enter-active,
    .modal-leave-active {
        transition: translate 0.5s ease;
    }
.units-value{
    color: black;
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
    }

    .Stanford-redtext {
        color: brown;
        font-size: 45px;
        font-weight: 600;
        margin-top: 20px;
    }

    .class-enroll-text {
        font-size: 40px;
        font-weight: 600;
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
    }

    .input-field-1 {

        padding: 8px;
        border: 1px solid black;
        border-radius: 5px;
        /* margin-top: -140px;
        margin-right: 133px; */
        width: 100%;
    }

    .input-field-3 {
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
        width: 102%;
        border-radius: 24px;
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

    .search-icon-2 {
        width: 5%;
        /* float: right; */
        margin-left: 298px;
        margin-top: -46px;
    }

    .search-icon-3 {
        width: 4%;
        /* float: right; */
        margin-left: 462px;
        margin-top: -46px;
    }

    .user-icon {
        width: 44px;
        float: right;
        margin-right: 53px;
        margin-top: -160px;
    }

    .login-user {
        margin-right: 59px;
        margin-top: -117px;
        font-size: 16px;
        font-weight: 600;
        color: #006B81;
    }

    .claer-fliters-text {
        font-size: 14px;
        font-weight: 700;
        text-align: right;
        color: #006B81;
        margin-top: -41px;
    }

    .fliter-text {
        font-size: 19px;
        font-weight: 600;
        text-align: left;
    }

    .accordion {
        background-color: #ffffff;
        color: #444;
        cursor: pointer;
        padding: 20px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
        border-radius: 10px;
        /* border-left: 7px solid #A6B168; */
    }

    .active,
    .accordion:hover {
        background-color: #ffffff;
    }

    .panel {
        padding: 0 18px;
        display: none;
        background-color: #ffffff;
        overflow: hidden;
        border-radius: 10px;
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

    .form-check-label {
        font-size: 17px;
        font-weight: 400;
    }

    .form-check {
        padding-bottom: 1.5rem;
    }

    .side-nav-maintext {
        font-size: 23px;
        font-weight: 700;
    }

    .form-check-input[type="checkbox"]:checked {
        background-color: #272E5C;
        border: 2px solid #272E5C;
    }

    .winters-btn {
        background-color: #006B81;
        color: white;
        padding: 8px;
        border-radius: 20px;
    }

    .show-more-text {
        font-size: 16px;
        font-weight: 600;
        color: #007C92;
    }

    .cross-icon {
        font-size: 20px;
    }

    .reset-icon {
        float: center;
    }

    .number-units-text {
        color: #007C92;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
    }

    .winter-text-1 {
        font-size: 18px;
        font-weight: 700;
    }

    .open-text {
        font-size: 18px;
        font-weight: 700;
        color: #007C92;
    }

    .view-details-btn {
        background-color: white;
        color: #007C92;
        border: 1px solid #007C92;
        border-radius: 5px;
        padding: 8px;
        margin-top: 61px;
        width: 92%;
    }

    .pagination a {
        color: black;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;

    }

    .pagination a.active {
        color: #620069;
        border-bottom: 3px solid #620069;
    }

    .pagination {
        margin-left: 30rem;
    }

    .pagination a:hover:not(.active) {
        color: #620069
    }

    .pagination a:hover:not(.active) {
        background-color: #ddd;
    }

    .footer-section {
        background-color: white;
        padding: 10px;
    }

    .Stanford-redtext {
        color: brown;
        font-size: 45px;
        font-weight: 600;
        margin-top: 20px;
    }

    .class-enroll-text {
        font-size: 40px;
        font-weight: 600;
    }

    .class-enroll-card {
        height: 200px;
        margin-top: -16px;
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

    .University-textF {
        font-size: 25px;
        font-weight: 600;
        color: white;
    }

    /* .accordion:after {
    content: '\143B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
  font-size: 20px;
  margin-top: -120px;
  color: #006B81;
}

.active:after {
  content: "\39B";
} */
</style>
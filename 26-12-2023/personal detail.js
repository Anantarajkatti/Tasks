//create your own personal details in jason FormData

let Json= {
    "personalDetails": {
      "lastName": "A L",
      "middleName": "-",
      "firstName": "Alagammai",
      "maidenName": "NA",
      "dob": "1995-10-11",
      "placeOfBirth": "MADURAI",
      "stateOfBirth": "Tamil Nadu-Madurai",
      "countryOfBirth": "MADURAI",
      "sex": "Female",
      "nationality": "Indian",
      "fathersName": "ALAGAPPAN AL",
      "hasPassport": "No",
      "passportNo": "Not Applicable",
      "hasPan": "Yes",
      "panNo": "BXUPA3801M",
      "homePhone": "9500798988",
      "mobile": "9500798988",
      "maritalStatus": "Single",
      "marraigeDate": "-",
      "caste": "GENERAL",
      "exServiceman": "No",
      "differentlyAbled": "No",
      "differentlyAbledReason": "Not ApplicableReligionHinduDetails, if",
      "religion": "Hindu",
      "detailsIfReligionIsOthers": "Not Applicable",
      "email": null,
      "alias": null,
      "voterId": null,
      "drivingLicenseNo": null
    },
    "residentialAddresses": {
      "permanentAddress": {
        "address": "5/454 KUMARAN STREET; SADHASIVAM NAGAR; MADURAI; MADURAI; Tamil Nadu-Madurai; India; 625020; 9500798988",
        "pincode": "625020",
        "durationOfStay": "From Aug,2010 To Till Date",
        "natureOfLocation": "Rented Own Other(Specify)-OwnCurrent"
      },
      "currentAddress": {
        "address": "5/454 KUMARAN STREET; SADHASIVAM NAGAR; MADURAI; MADURAI; Tamil Nadu-Madurai; India; 625020; 9500798988",
        "pincode": "625020",
        "durationOfStay": "From Aug,2010 To Till Date",
        "natureOfLocation": "Rented Own Other(Specify)-OwnPassport"
      },
      "passportAddress": {
        "address": "Not Applicable",
        "pincode": null,
        "durationOfStay": null,
        "natureOfLocation": null
      }
    },
    "addresses": [],
    "passportDetails": {
      "placeOfIssue": "Not Applicable",
      "dateOfIssue": "",
      "dateOfExpiry": null,
      "visibleDistinguishingMark": "Not Applicable"
    },
    "referenceDetails": [
      {
        "name": "M.NATARAJAN",
        "positionHeld": "CHARTERED ACCOUNTANT",
        "address": "NO.6 WEST PONAGARAM MDU 625 016",
        "contactDetails": "9597944252",
        "howDoYouKnowThisPerson": "FRIEND"
      },
      {
        "name": "AWANISH KUMAR VERNA",
        "positionHeld": "CHARTERED ACCOUNTANT",
        "address": "QTR NO 47, INCOME TAX STAFF QUARTERS MDU 625 002",
        "contactDetails": "9711197352",
        "howDoYouKnowThisPerson": "FRIEND"
      },
      {
        "name": "VISALAKSHI KALAIRAJ",
        "positionHeld": "CHARTERED ACCOUNTANT",
        "address": "NO.37 HIKKIM AJMAL KHAN STREET, CHINNA CHOKIKULAM",
        "contactDetails": "9994728855",
        "howDoYouKnowThisPerson": "FRIEND"
      }
    ],
    "certificationDetails": [
      {
        "certificateName": "-",
        "certificateExamNo": "-",
        "dateOfCertification": "-",
        "certificateBody": "-",
        "validUpto": "-",
        "score": "-"
      }
    ],
    "educationDetails": [
      {
        "qualification": "Graduation",
        "nameAddressOfSchoolCollegeInstitute": "LADY DOAK COLLEGE - MADURAI",
        "nameAndAddressOfBoardUniversityToWhichTheSchoolCollegeInstituteIsAffiliatedTo": "KAMARAJ UNIVERSITY - MADURAI",
        "courseAttended": "BCom",
        "marksCgpaAndClass": "76",
        "yearOfEnrolment": "Jun,2013",
        "yearPassed": "Mar,2016",
        "rollNumberRegistrationNumberExamSeatNumber": "13COAE003"
      },
      {
        "qualification": "Professional Cert.",
        "nameAddressOfSchoolCollegeInstitute": "ICAI - MADURAI",
        "nameAndAddressOfBoardUniversityToWhichTheSchoolCollegeInstituteIsAffiliatedTo": "ICAI - MADURAI",
        "courseAttended": "CA",
        "marksCgpaAndClass": "57",
        "yearOfEnrolment": "Apr,2013",
        "yearPassed": "Jan,2020",
        "rollNumberRegistrationNumberExamSeatNumber": "SRO0435188"
      },
      {
        "qualification": "Senior Secondary",
        "nameAddressOfSchoolCollegeInstitute": "VMJ SCHOOL - MADURAI",
        "nameAndAddressOfBoardUniversityToWhichTheSchoolCollegeInstituteIsAffiliatedTo": "SBSE - MADURAI",
        "courseAttended": "Others",
        "marksCgpaAndClass": "94",
        "yearOfEnrolment": "Jun,2012",
        "yearPassed": "Mar,2013",
        "rollNumberRegistrationNumberExamSeatNumber": "177236"
      },
      {
        "qualification": "Secondary",
        "nameAddressOfSchoolCollegeInstitute": "LAKSHMI SCHOOL - MADURAI",
        "nameAndAddressOfBoardUniversityToWhichTheSchoolCollegeInstituteIsAffiliatedTo": "ICSE - MADURAI",
        "courseAttended": "Others",
        "marksCgpaAndClass": "77",
        "yearOfEnrolment": "Jun,2010",
        "yearPassed": "Mar,2011",
        "rollNumberRegistrationNumberExamSeatNumber": "T1894034"
      }
    ],
    "employerDetails": [],
    "employmentGap": 
      {
        "dateFrom": "12/5/2020",
        "dateTo": "12/5/2023",
        "activity": "learnt Fullstack web development"
      }
    
  }

  //console.log(JSON.stringify(Json))


  // use of FOR loop on JSON ---- here i is the index
//console.log(Json.educationDetails[1])
//   for(var i=0;i<Json.educationDetails.length;i++)
//   {
//        // console.log(i)
//     console.log(Json.educationDetails[i].qualification)
//   }

  // use of FOR IN -- this is same as for () loop j is key in object[j] gives value of key
//   let text=""
//   for(let  j in Json.employmentGap)
//   {
//     text+=Json.employmentGap[j] +" "
//     console.log(j)
    
//   } 
//   console.log("yeargap details are"+text)


// use of FOR OF--  here k represents index 

// for(var k of Json.educationDetails)
// {
//     console.log(k.qualification)
// }

// use of for each

Json.educationDetails.forEach(myFunction(index))

function myFunction( index){
     console.log(Json.educationDetails[index].qualification)
}


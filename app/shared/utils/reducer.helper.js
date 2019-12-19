import {
  verifyStudentStatus,
  verifyInstructorTimeTable,
} from 'shared/utils/data-table-helper'
// generic func
export const updateList = (list, newItem) => {
  const a = list.map(item => {
    if (newItem.id === item.id) {
      return newItem
    }
    return item
  })
  return a
}

// vouchers reducer func
export const updateVoucherList = (list, voucher) =>
  list.map(item => {
    if (voucher.id === item.id) {
      return voucher
    }
    return item
  })

// instructor reducer func
export const updateInstructorOrTutorDetails = (list, instructorDetails) =>
  list.map(item => {
    if (instructorDetails.id === item.instructorOrTutorDetailsId) {
      return {
        ...item,
        timeTable: instructorDetails.timeTable,
        skills: instructorDetails.skills,
        timeTableKey: verifyInstructorTimeTable(instructorDetails.timeTable),
        actionMenuItem: false,
      }
    }
    return item
  })
//  student reducer func
export const updateStudentDetails = (list, studentDetails) =>
  list.map(item => {
    if (
      studentDetails.target === item.target &&
      studentDetails.source === item.source
    ) {
      return {
        ...item,
        status: verifyStudentStatus(studentDetails.status),
        actionMenuItem: false,
      }
    }
    return item
  })

export const updateTrackSubscriptionDate = (list, newItem) =>
  list.map(item => {
    if (item.subscriptionId === newItem.source + newItem.target) {
      return {
        ...item,
        expirationDate: newItem.expirationDate,
        status: verifyStudentStatus(newItem.status),
      }
    }
    return item
  })
export const updateAssignedTrack = (list, deletedItem) =>
  list.filter(item => item.id !== deletedItem.target)

export const filteringListAfterDeleting = (list, id) =>
  list.filter(item => id !== item.id)

export const filteredInstructorProfile = (profilesList, instructorsList) =>
  profilesList.filter(
    profile => !instructorsList.map(item => item.id).includes(profile.id),
  )

export const transformOneToOneData = data => ({
  student: data.student,
  trackName: data.track.name,
  oneToOneAssignment: {
    ...data.oneToOneAssignment,
    questions: JSON.parse(data.oneToOneAssignment.questions),
    answers: JSON.parse(data.oneToOneAssignment.answers),
  },
  oneToOneName: data.oneToOneMeeting.name,
})

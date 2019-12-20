// import { isEmpty } from 'lodash'
// import { SUBSCRIPTION_STATUS, TIME_TABLE_SELECT } from 'shared/constants'

// export const transformDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({ ...item, actionMenuItem: false }))
//   }
//   return []
// }
// export const transformOmInstructorOneToOneMeetingDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       id: item.meeting.id,
//       // id: item.oneToOneAssignment.id,
//       meetingId: item.meeting.id,
//       interviewName: item.oneToOneMeeting.name,
//       track: item.track.name,
//       trackId: item.track.id,
//       date: item.meeting.startDate,
//       status: item.oneToOneAssignment.status,
//       actionMenuItem: false,
//     }))
//   }
//   return []
// }

// export const transformOmInstructorWorkshopDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       id: item.meeting.id,
//       meetingId: item.meeting.id,
//       workshop: item.workshop.name,
//       track: item.track.name,
//       trackId: item.track.id,
//       scheduleDate: item.meeting.startDate,
//       status: item.workshopStatus,
//       link: item.workshop.link,
//       actionMenuItem: false,
//     }))
//   }
//   return []
// }

// export const transformInstructorDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       instructor: `${item.profile.lastName} ${item.profile.firstName}`,
//       id: item.profile.id,
//       subscriptionDate: item.instructorDetails.createdAt,
//       timeTableKey: verifyInstructorTimeTable(item.instructorDetails.timeTable),
//       timeTable: item.instructorDetails.timeTable,
//       numberOfTrack: item.countTrack,
//       skills: item.instructorDetails.skills,
//       actionMenuItem: false,
//       instructorOrTutorDetailsId: item.instructorDetails.id,
//     }))
//   }
//   return []
// }

// export const transformTutorDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       tutor: `${item.profile.lastName} ${item.profile.firstName}`,
//       id: item.profile.id,
//       subscriptionDate: item.tutorDetails.createdAt,
//       timeTableKey: verifyInstructorTimeTable(item.tutorDetails.timeTable),
//       timeTable: item.tutorDetails.timeTable,
//       numberOfTrack: item.countTrack,
//       skills: item.tutorDetails.skills,
//       actionMenuItem: false,
//       instructorOrTutorDetailsId: item.tutorDetails.id,
//     }))
//   }
//   return []
// }

// export const transformVouchersDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       track: item.track.name,
//       capacity: item.voucher.capacity,
//       duration: item.voucher.duration,
//       checkpointQuota: item.voucher.checkpointQuota,
//       oneToOneQuota: item.voucher.oneToOneQuota,
//       id: item.voucher.id,
//       actionMenuItem: false,
//     }))
//   }
//   return []
// }

// export const transformStudentDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       student: `${item.student.lastName} ${item.student.firstName}`,
//       id: item.student.id,
//       subscriptionDate: item.subscription.dateEffective,
//       track: item.track.name,
//       trackId: item.track.id,
//       status: verifyStudentStatus(item.subscription.status),
//       expirationDate: item.subscription.expirationDate,
//       target: item.subscription.target,
//       source: item.subscription.source,
//       actionMenuItem: false,
//     }))
//   }
//   return []
// }

// export const transformInstructorStudentsDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       student: `${item.student.lastName} ${item.student.firstName}`,
//       id: item.student.id,
//       trackName: item.defaultTrack.name,
//       progress: 'progress e N/A',
//       globalPerformance: 'globalPerformance N/A',
//       actionMenuItem: false,
//     }))
//   }
//   return []
// }

// export const transformStudentSubscriptionsDataTable = data => {
//   if (!isEmpty(data)) {
//     return data.map(item => ({
//       trackName: item.track.name,
//       id: item.track.id,
//       expirationDate: item.subscription.expirationDate,
//       subscriptionDate: item.subscription.dateEffective,
//       subscriptionId: item.subscription.source + item.subscription.target,
//       status: verifyStudentStatus(item.subscription.status),
//       actionMenuItem: false,
//     }))
//   }
//   return []
// }

// export const verifyActionMenuItem = (item, id) => {
//   if (item.id === id) {
//     return true
//   }
//   return false
// }
// export const closeAllActionMenuItem = list =>
//   list.map(item => ({
//     ...item,
//     actionMenuItem: false,
//   }))

// export const sortFunction = (a, b) => {
//   if (a.value > b.value) {
//     return 1
//   }
//   if (a.value < b.value) {
//     return -1
//   }
//   return 0
// }

// export const verifyStudentStatus = status => {
//   if (status === SUBSCRIPTION_STATUS.archived.value) {
//     return SUBSCRIPTION_STATUS.archived.labelMessage
//   }
//   return SUBSCRIPTION_STATUS.active.labelMessage
// }

// export const verifyInstructorTimeTable = timeTable => {
//   if (timeTable === TIME_TABLE_SELECT.fullTime.value) {
//     return TIME_TABLE_SELECT.fullTime.labelMessage
//   }
//   return TIME_TABLE_SELECT.partTime.labelMessage
// }

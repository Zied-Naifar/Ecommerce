import moment from 'moment'
import {
  MEETING_TYPES,
  TOOLTIP_STRUCTURE,
  TIME_SHEET,
  ABSENCE_TYPE,
} from 'shared/constants'
import { Views } from 'react-big-calendar'
export const renderPerMonthSlot = (date, absencesList, workTimeList) => {
  const eightHours = 28800000
  for (let index = 0; index < absencesList.length; index += 1) {
    const interval =
      new Date(absencesList[index].dueDate) -
      new Date(absencesList[index].startDate)
    const start = moment(absencesList[index].startDate).format('MM DD')
    const end = moment(absencesList[index].dueDate).format('MM DD')
    const currentDate = moment(date).format('MM DD')

    if (currentDate <= end && currentDate >= start) {
      if (interval < eightHours) {
        return {
          className: 'x-calendar-partial',
        }
      }
      return {
        className: 'x-calendar-absence',
      }
    }
  }

  for (let index = 0; index < workTimeList.length; index += 1) {
    const start = moment(workTimeList[index].startDate).format('MM DD')
    const end = moment(workTimeList[index].dueDate).format('MM DD')
    const currentDate = moment(date).format('MM DD')

    if (currentDate <= end && currentDate >= start) {
      return {
        className: 'x-calendar-availability',
      }
    }
  }

  return {}
}

export const renderPerDaySlot = (date, absencesList, availabilityList) => {
  const currentDate = new Date(date)
  for (let index = 0; index < absencesList.length; index += 1) {
    const start = new Date(absencesList[index].startDate)
    const end = new Date(absencesList[index].dueDate)

    if (currentDate >= start && currentDate < end) {
      return {
        className: 'x-calendar-absence',
      }
    }
  }

  for (let index = 0; index < availabilityList.length; index += 1) {
    const start = new Date(availabilityList[index].startDate)
    const end = new Date(availabilityList[index].dueDate)

    if (currentDate >= start && currentDate < end) {
      return {
        className: 'x-calendar-availability',
      }
    }
  }

  return {}
}

export const renderEvent = event => {
  if (event.joinWorkshop) {
    return { className: 'x-calendar-join-workshop' }
  }
  if (event.type === MEETING_TYPES.workshop.index) {
    return { className: 'x-calendar-workshop' }
  }
  if (event.type === MEETING_TYPES.oneToOne.index) {
    return { className: 'x-calendar-one-to-one' }
  }
  if (event.type === MEETING_TYPES.checkpoint.index) {
    return { className: 'x-calendar-checkpoint' }
  }
  if (event.type === TIME_SHEET.absences.index) {
    return { className: 'x-calendar-absence' }
  }
  if (event.type === TIME_SHEET.workTime.index) {
    return { className: 'x-calendar-availability' }
  }
  return { className: '' }
}

export const transformMeetingList = list => {
  const currentDate = new Date()
  let status = 'no'
  return list.map(item => {
    const start = new Date(item.meeting.startDate)
    const end = new Date(item.meeting.dueDate)

    if (currentDate <= end && currentDate >= start) {
      status = 'onGoing'
    }
    if (currentDate > end) {
      status = 'passed'
    }
    return {
      date: item.meeting,
      start,
      end,
      status,
      type: item.meeting.type,
      title: item.meeting.subject,
      id: item.meeting.id,
      track: item.track && item.track.name,
      trackId: item.track && item.track.id,
      instructorOrTutor:
        item.track &&
        `${item.instructorOrTutor.firstName} ${
          item.instructorOrTutor.lastName
        }`,
      instructorOrTutorId: item.track && item.instructorOrTutor.id,
    }
  })
}

export const fetchCalendarDateByRangeAndView = (
  range,
  view,
  fetchAction,
  id,
) => {
  if (view === Views.MONTH || view === Views.AGENDA) {
    const start = range.start.getTime()
    const end = range.end.getTime()
    fetchAction({
      id,
      startDate: start,
      dueDate: end,
    })
    return
  }
  if (view === Views.WEEK) {
    const start = range[0].getTime()
    const end = range[6].getTime()
    fetchAction({
      id,
      startDate: start,
      dueDate: end,
    })
    return
  }
  if (view === Views.DAY) {
    const start = range[0].getTime()
    const endDay = new Date(range[0])
    endDay.setHours(23, 59, 59)
    const end = endDay.getTime()
    fetchAction({
      id,
      startDate: start,
      dueDate: end,
    })
  }
}

export const fetchCalendarDataByMonth = (fetchAction, id) => {
  const date = new Date()
  const y = date.getFullYear()
  const m = date.getMonth()
  const firstDay = new Date(y, m, 1)
  const lastDay = new Date(y, m + 1, 0)
  fetchAction({
    id,
    startDate: firstDay.getTime(),
    dueDate: lastDay.getTime(),
  })
}
export const formatDateTime = (date, time) => `${date}T${time}`
export const formatDateToYMD = date =>
  moment(moment(date).format()).format('YYYY-MM-DD')
export const formatDateToLTS = date =>
  moment(moment(date).format()).format('LT')
export const formatDateToDDDD = date =>
  moment(moment(date).format()).format('dddd, hh a')
export const fetchCalendarDataByRange = (range, fetchAction, id) => {
  const start = range.start.getTime()
  const end = range.end.getTime()
  fetchAction({
    id,
    startDate: start,
    dueDate: end,
  })
}
export const formatDate = (date, time) => `${date}T${time}`

export const transformTimeSheetList = (workTimeList, absenceList) => {
  const workTimes = workTimeList.map(item => {
    if (
      !item.parent &&
      item.timeslot.recurrence &&
      item.timeslot.recurrence !== 'null'
    ) {
      return {
        ...item.timeslot,
        start: new Date(item.timeslot.startDate),
        end: new Date(item.timeslot.dueDate),
        title: 'workTime',
        type: 4,
        id: item.timeslot.id,
        isParent: true,
      }
    }
    return {
      ...item.timeslot,
      start: new Date(item.timeslot.startDate),
      end: new Date(item.timeslot.dueDate),
      title: 'workTime',
      type: 4,
      id: item.timeslot.id,
      isParent: false,
    }
  })

  const absences = absenceList.map(item => ({
    ...item,
    start: new Date(item.startDate),
    end: new Date(item.dueDate),
    title: 'absence',
    absencesType: item.type,
    type: 3,
    id: item.id,
  }))
  return [...workTimes, ...absences]
}

export const createCalendarTooltipContent = meeting => {
  const tooltipContent = [
    { label: TOOLTIP_STRUCTURE.status, content: meeting.status },
    { label: TOOLTIP_STRUCTURE.date, content: formatDateToYMD(meeting.start) },
    {
      label: TOOLTIP_STRUCTURE.startTime,
      content: formatDateToLTS(meeting.start),
    },
    { label: TOOLTIP_STRUCTURE.endTime, content: formatDateToLTS(meeting.end) },
    { label: TOOLTIP_STRUCTURE.track, content: meeting.track },
    {
      label: TOOLTIP_STRUCTURE.instructorOrTutor,
      content: meeting.instructorOrTutor,
    },
  ]
  if (meeting.joinWorkshop) {
    return tooltipContent.concat({
      label: TOOLTIP_STRUCTURE.joinToWorkshop,
      content: meeting.joinWorkshop,
    })
  }
  return tooltipContent
}

export const createGlobalCalendarTooltipContent = meeting => {
  const tooltipContent = [
    { label: TOOLTIP_STRUCTURE.student, content: meeting.student },
    { label: TOOLTIP_STRUCTURE.date, content: formatDateToYMD(meeting.start) },
    { label: TOOLTIP_STRUCTURE.track, content: meeting.track },
    { label: TOOLTIP_STRUCTURE.linkDetail, content: meeting.linkDetail },
    {
      label: TOOLTIP_STRUCTURE.instructorOrTutor,
      content: meeting.instructorOrTutor,
    },
  ]
  return tooltipContent
}

export const createCalendarTooltipContentForAvailability = meeting => {
  const tooltipContent = [
    {
      label: TOOLTIP_STRUCTURE.startDate,
      content: moment(meeting.start).format('YYYY/MM/DD HH:mm'),
    },
    {
      label: TOOLTIP_STRUCTURE.endDate,
      content: moment(meeting.end).format('YYYY/MM/DD HH:mm'),
    },
  ]
  return tooltipContent
}

export const createCalendarTooltipContentForAbsence = meeting => {
  const tooltipContent = [
    {
      label: TOOLTIP_STRUCTURE.status,
      content: ABSENCE_TYPE[meeting.absencesType],
    },
    {
      label: TOOLTIP_STRUCTURE.startDate,
      content: moment(meeting.start).format('YYYY/MM/DD HH:mm'),
    },
    {
      label: TOOLTIP_STRUCTURE.endDate,
      content: moment(meeting.end).format('YYYY/MM/DD HH:mm'),
    },
  ]
  return tooltipContent
}

export const updateFilteredMenu = (filteredMenu, key) =>
  filteredMenu.map(el => {
    if (el.key === key) {
      if (el.status) {
        return {
          ...el,
          status: false,
        }
      }
      return {
        ...el,
        status: true,
      }
    }
    return el
  })

export const filterEvents = (meetingsList, filteredMenu) =>
  meetingsList.filter(el =>
    filteredMenu.find(item => el.type === item.type && item.status),
  )

export const isPassedDate = date => {
  const localDate = moment().format('YYYY-MM-DD')
  const testedDate = moment(date).format('YYYY-MM-DD')
  return moment(testedDate).isBefore(localDate)
}

export const blockEditInPassedDate = (event, readOnly) => {
  if (!readOnly) {
    return isPassedDate(event.start)
  }
  return true
}

export const isAvailable = (slot, start, end) => {
  if (
    !slot.startTime &&
    moment(slot.date).format('YYYY-MM-DD') ===
      moment(start).format('YYYY-MM-DD')
  ) {
    return true
  }
  return (
    slot.startTime >= moment(start).format('HH:mm') &&
    slot.endTime <= moment(end).format('HH:mm')
  )
}

export const getSlotInfo = (event, viewName, actionType) => {
  const { start, end, action } = event
  const localDate = moment().format('YYYY-MM-DD')
  const startDate = moment(start).format('YYYY-MM-DD')
  if (
    viewName === 'month' &&
    action === 'click' &&
    !moment(startDate).isBefore(localDate)
  ) {
    return {
      mode: actionType.FROM_MONTH_VIEW,
      date: start,
    }
  }
  if (
    viewName === 'week' ||
    (viewName === 'day' && !moment(startDate).isBefore(localDate))
  ) {
    return {
      mode: actionType.FROM_DAY_OR_WEEK_VIEW,
      date: moment(start).format('YYYY/MM/DD'),
      startTime: moment(start).format('HH:mm'),
      endTime: moment(end).format('HH:mm'),
    }
  }
  return {
    mode: false,
  }
}

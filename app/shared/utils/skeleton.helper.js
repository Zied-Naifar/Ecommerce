export const labelSkeleton = (loading, active = true) => ({
  active,
  title: false,
  paragraph: { rows: 1 },
  className: 'global-label-skeleton',
  loading,
})

export const customizedSkeleton = (loading, props) => ({ ...props, loading })

export const avatarWithTitleSkeleton = (
  loading,
  active = true,
  width = '100%',
) => ({
  active,
  avatar: { shape: 'circle' },
  title: { rows: 1, width },
  paragraph: false,
  loading,
})

export const avatarSkeleton = (loading, type, active = true) => ({
  className: `x-${type}-avatar`,
  active,
  avatar: { shape: 'circle' },
  title: false,
  paragraph: false,
  loading,
})
export const rectangleAvatarSkeleton = (loading, active = true) => ({
  className: 'rectangle-avatar',
  active,
  avatar: { shape: 'square' },
  title: false,
  paragraph: false,
  loading,
})

export const titleSkeleton = (
  loading,
  active = true,
  rows = 1,
  width = '30%',
) => ({
  active,
  title: { rows, width },
  paragraph: false,
  loading,
})

export const oneRowItemSkeleton = (loading, active = true) => ({
  active,
  title: { rows: 1, width: '80%' },
  paragraph: false,
  loading,
})
export const skeletonItemSkeleton = (loading, active = true) => ({
  active,
  title: { rows: 1, width: '60%' },
  paragraph: false,
  loading,
})

export const titleAndParagraphSkeleton = (
  loading,
  rows,
  width = [],
  active = true,
) => ({
  active,
  paragraph: { rows, width },
  loading,
  title: true,
})
export const paragraphSkeleton = (
  loading,
  rows,
  width = [],
  active = true,
) => ({
  active,
  paragraph: { rows, width },
  loading,
  title: false,
})

export const statusCircleSkeleton = (loading, active = true) => ({
  active,
  avatar: { shape: 'circle', size: 15 },
  paragraph: false,
  title: false,
  loading,
})
export const trackCardSkeleton = (loading, active = true) => ({
  loading,
  avatar: { shape: 'square' },
  active,
  paragraph: { rows: 3 },
})

export const aquariumCardSkeleton = (loading, active = true) => ({
  active,
  avatar: { shape: 'square' },
  paragraph: { row: 0, width: '50%' },
  loading,
})

export const TrackAssignmentCardSkeleton = (loading, active = true) => ({
  active,
  avatar: { shape: 'circle' },
  title: false,
  paragraph: { width: '50%' },
  loading,
})

export const holidayCardSkeleton = (loading, active = true) => ({
  active,
  paragraph: { row: 0, width: '50%' },
  title: false,
  loading,
})
export const dailyCardSkeleton = (loading, active = true) => ({
  active,
  paragraph: { row: 3, width: '50%' },
  title: false,
  loading,
})

export const notificationPerPeriodSkeleton = (loading, active = true) => ({
  active,
  avatar: { shape: 'circle' },
  paragraph: { row: 0, width: '80%' },
  title: false,
  loading,
})
export const oneToOneQuestionSkeleton = (loading, active = true) => ({
  active,
  paragraph: { row: 2, width: '100%' },
  title: false,
  loading,
})

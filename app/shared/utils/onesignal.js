/* eslint-disable func-names */
import { getUserId } from './access-token'

export const register = () => {
  const OneSignal = window.OneSignal || []
  OneSignal.push(function() {
    OneSignal.on('subscriptionChange', function(isSubscribed) {
      if (isSubscribed) {
        // The user is subscribed
        //   Either the user subscribed for the first time
        //   Or the user was subscribed -> unsubscribed -> subscribed
        OneSignal.getUserId(function(userId) {
          // Make a POST call to your server with the user ID
          OneSignal.sendTags({
            userId: getUserId(),
          })
        })
      }
    })
    OneSignal.init({
      appId: window.ONESIGNAL_ID,
      notifyButton: {
        enable: true,
        autoResubscribe: true,
        autoRegister: true,
        displayPredicate() {
          return OneSignal.isPushNotificationsEnabled().then(function(
            isPushEnabled,
          ) {
            if (isPushEnabled) {
              OneSignal.sendTags({
                userId: getUserId(),
              })
            }
            return !isPushEnabled
          })
        },
      },
    })
  })
}
export const registerPushNotification = () => {
  register()
}

import BackIcon from '../assets/images/back';
import NotificationIcon from '../assets/images/notification';
import MoreIcon from '../assets/images/more';
import NoNotificationIcon from '../assets/images/noNotification';

type tplotOptions = {
  [key: string]: SVGElement;
};
export const icons: tplotOptions = {
  Back: BackIcon,
  Notification: NotificationIcon,
  More: MoreIcon,
  NoNotification: NoNotificationIcon,
};

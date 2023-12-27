import BackIcon from '../assets/images/back';
import NotificationIcon from '../assets/images/notification';
import MoreIcon from '../assets/images/more';
import NoNotificationIcon from '../assets/images/noNotification';
import Telegram from '../assets/icons/Telegram';
import Google from '../assets/icons/Google';
import Facebook from '../assets/icons/Facebook';
import Line from '../assets/icons/Line';
import Twitter from '../assets/icons/Twitter';
import Whatsapp from '../assets/icons/Whatsapp';
import Add from '../assets/icons/Plus';
import Minus from '../assets/icons/Minus';

type tplotOptions = {
  [key: string]: SVGElement;
};
export const icons: tplotOptions = {
  Back: BackIcon,
  Notification: NotificationIcon,
  More: MoreIcon,
  NoNotification: NoNotificationIcon,
  Facebook: Facebook,
  Google: Google,
  Telegram: Telegram,
  Line: Line,
  Twitter: Twitter,
  Whatsapp: Whatsapp,
  Add: Add,
  Minus: Minus,
};

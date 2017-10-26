import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import Meeting from './MeetingScreen';
import Mypage from './MypageScreen';
import QuestionLog from './QuestionLogScreen';
import Calling from './CallingScreen';
import QuestionSubmission from './QuestionSubmissionScreen';
import QuestionRoom from './QuestionRoomScreen';

export function registerScreens() {
  Navigation.registerComponent('studyquestion.Meeting', () => Meeting);
  Navigation.registerComponent('studyquestion.Mypage', () => Mypage);
  Navigation.registerComponent('studyquestion.QuestionLog', () => QuestionLog);

  Navigation.registerComponent('studyquestion.Submission', () => QuestionSubmission);
  Navigation.registerComponent('studyquestion.Room', () => QuestionRoom);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}